import { useState, useCallback } from "react";
import "../../styles/components/momentum-demo.css";

let uid = 0;
function nextId() {
  uid += 1;
  return uid;
}

function toDateKey(date) {
  return date.toISOString().slice(0, 10);
}

function addDaysKey(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return toDateKey(d);
}

function isToday(dueDate) {
  return dueDate === toDateKey(new Date());
}

function isUpcoming(dueDate) {
  return dueDate > toDateKey(new Date());
}

// Mirrors the real app's categorization: completed always wins, then
// today/upcoming by date, with anything undated or overdue defaulting
// back to Today.
function categorize(task) {
  if (task.completed) return "completed";
  if (!task.dueDate) return "today";
  if (isToday(task.dueDate)) return "today";
  if (isUpcoming(task.dueDate)) return "upcoming";
  return "today";
}

const INITIAL_TASKS = [
  {
    id: nextId(),
    text: "Review pull request",
    completed: true,
    dueDate: addDaysKey(0),
  },
  {
    id: nextId(),
    text: "Write project brief",
    completed: false,
    dueDate: addDaysKey(0),
  },
  {
    id: nextId(),
    text: "Reply to client email",
    completed: false,
    dueDate: addDaysKey(3),
  },
];

const DUE_OPTIONS = [
  { label: "Today", value: 0 },
  { label: "Tomorrow", value: 1 },
  { label: "Next week", value: 7 },
];

function MomentumDemo() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [draft, setDraft] = useState("");
  const [dueOffset, setDueOffset] = useState(0);
  const [enteringId, setEnteringId] = useState(null);

  const addTask = useCallback(() => {
    const text = draft.trim();
    if (!text) return;
    const id = nextId();
    setTasks((prev) => [
      ...prev,
      { id, text, completed: false, dueDate: addDaysKey(dueOffset) },
    ]);
    setDraft("");
    setEnteringId(id);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setEnteringId(null));
    });
  }, [draft, dueOffset]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  const groups = { today: [], upcoming: [], completed: [] };
  tasks.forEach((task) => groups[categorize(task)].push(task));

  const renderTask = (task) => (
    <li
      key={task.id}
      className={`momentum-demo__task${
        task.completed ? " momentum-demo__task--completed" : ""
      }${enteringId === task.id ? " momentum-demo__task--entering" : ""}`}
    >
      <button
        type='button'
        className='momentum-demo__checkbox'
        role='checkbox'
        aria-checked={task.completed}
        aria-label={
          task.completed
            ? `Mark "${task.text}" incomplete`
            : `Mark "${task.text}" complete`
        }
        onClick={() => toggleTask(task.id)}
      >
        {task.completed && <span className='momentum-demo__check' />}
      </button>
      <span className='momentum-demo__text'>{task.text}</span>
      <button
        type='button'
        className='momentum-demo__delete'
        aria-label={`Delete "${task.text}"`}
        onClick={() => deleteTask(task.id)}
      >
        ×
      </button>
    </li>
  );

  const renderSection = (key, label) =>
    groups[key].length > 0 && (
      <div className='momentum-demo__section' key={key}>
        <span className='momentum-demo__section-label'>
          {label} · {groups[key].length}
        </span>
        <ul className='momentum-demo__list'>{groups[key].map(renderTask)}</ul>
      </div>
    );

  return (
    <div className='momentum-demo'>
      <div className='momentum-demo__progress-track'>
        <div
          className='momentum-demo__progress-fill'
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className='momentum-demo__meta'>
        <span>Progress</span>
        <span>
          {completedCount} of {tasks.length} done
        </span>
      </div>

      {renderSection("today", "Today")}
      {renderSection("upcoming", "Upcoming")}
      {renderSection("completed", "Completed")}

      {tasks.length === 0 && (
        <p className='momentum-demo__empty'>Nothing left — add a task below</p>
      )}

      <div className='momentum-demo__add'>
        <input
          type='text'
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Add a task'
          className='momentum-demo__input'
          aria-label='New task'
        />
        <select
          className='momentum-demo__select'
          value={dueOffset}
          onChange={(e) => setDueOffset(Number(e.target.value))}
          aria-label='Due date'
        >
          {DUE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button
          type='button'
          className='momentum-demo__add-btn'
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default MomentumDemo;
