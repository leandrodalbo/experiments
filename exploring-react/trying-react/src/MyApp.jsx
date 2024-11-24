import MainSection from "./MainSection";

const MyApp = () => {
  return (
    <section>
      <header>
        <h1>APP HEADER</h1>
      </header>
      <nav>
        <a href="nav-item">navigations item</a>
      </nav>
      <main>
        <MainSection />
      </main>
      <footer>
        <small>&copy; 2024</small>
      </footer>
    </section>
  );
};

export default MyApp;
