import CodeSnippet from "../ui/CodeSnippet";
import "../../styles/components/case-study.css";

const sections = [
  {
    label: "The Idea",
    heading: "What if organization happened automatically?",
    copy: "Task apps ask you to choose lists, set priorities, and pick categories. Momentum removes those decisions entirely. Tasks sort themselves into Today, Upcoming, and Completed based on their due dates. The interface doesn't wait for you to tell it what matters, it already knows. This isn't about adding features. It's about removing friction. Every task you add is immediately placed where it belongs, leaving you free to focus on doing the work instead of wasting your time organizing it.",
    snippet: null,
  },
  {
    label: "The Design",
    heading: "Clarity through restraint, not decoration",
    copy: "Momentum's interface relies on spacing, hierarchy, and motion rather than visual noise. Completed tasks fade to 60% opacity with a strikethrough. New tasks slide in with a staggered entrance animation. Action buttons stay hidden until hover, keeping the interface clean when you're just scanning your list. The progress bar fills as you complete tasks, providing immediate feedback without demanding attention. Every interaction is designed to feel lightweight from adding a task, marking it complete, to reordering through drag-and-drop. The design reinforces a single idea: keep moving forward.",
    snippet: {
      filename: "components.css",
      language: "css",
      code: `.task-card {
  background: var(--color-surface);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
  padding: var(--card-padding);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  filter: brightness(1.05);
}

.task-card.completed {
  opacity: 0.6;
  text-decoration: line-through;
}

.task-complete-btn,
.task-delete-btn {
  opacity: 0;
  transition: all var(--transition-fast);
}

.task-card:hover .task-complete-btn,
.task-card:hover .task-delete-btn {
  opacity: 1;
}`,
    },
  },
  {
    label: "The Build",
    heading: "State synchronization is the hard part",
    copy: "Momentum runs entirely client-side with vanilla JavaScript and localStorage. The task array is the single source of truth - every interaction updates this array, saves it to localStorage, and triggers a full re-render. This approach keeps the UI synchronized with stored data at all times. The categorization logic checks each task's due date and routes it to the correct section. Tasks without dates default to Today. Drag-and-drop reordering maps visual position back into the task array, preserving user-defined order across sessions. The staggered entrance animation applies a 40ms delay per card, creating a cascading effect without blocking the render. Date normalization strips time values to prevent timezone edge cases from breaking the Today filter.",
    snippet: {
      filename: "tasks.js",
      language: "javascript",
      code: `function renderTasks() {
  const todayList = document.getElementById("task-list");
  const upcomingList = document.getElementById("upcoming-task-list");
  const completedSection = document.getElementById("completed-task-list");

  todayList.innerHTML = "";
  upcomingList.innerHTML = "";
  if (completedSection) completedSection.innerHTML = "";

  tasks.forEach((task) => {
    const card = createTaskCard(task);

    if (task.completed) {
      if (completedSection) completedSection.appendChild(card);
    } else if (isToday(task.dueDate)) {
      todayList.appendChild(card);
    } else if (isUpcoming(task.dueDate)) {
      upcomingList.appendChild(card);
    } else {
      todayList.appendChild(card);
    }
  });

  setTimeout(() => {
    document.querySelectorAll(".task-card").forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(10px)";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translate(0)";
      }, index * 40);
    });
  }, 0);

  updateProgressBar();
  updateNavCounts();
}`,
    },
  },
];

function MomentumCaseStudy() {
  return (
    <div className='cs'>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`cs__section ${section.snippet ? "cs__section--split" : "cs__section--intro"}`}
        >
          <div className='cs__section-text'>
            <div className='cs__label'>
              <span className='cs__label-line'></span>
              <span className='cs__label-text'>{section.label}</span>
            </div>
            <h2 className='cs__heading'>{section.heading}</h2>
            <p className='cs__copy'>{section.copy}</p>
          </div>
          {section.snippet && (
            <div className='cs__section-code'>
              <CodeSnippet snippet={section.snippet} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MomentumCaseStudy;
