function App() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Start header */}
      <header>
        <a href='#'>JW</a>
        <nav>
          <ul>
            <li>
              <a href='#'>Work</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* End header */}

      {/* Start Main */}
      <main>
        <h1>Welcome</h1>
      </main>
      {/* End Main */}
      <footer>
        <p>&copy; Jess Wilson {year}</p>
      </footer>
    </>
  );
}

export default App;
