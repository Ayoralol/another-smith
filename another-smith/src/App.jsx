import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Projects from "./pages/Projects/Projects";
import Training from "./pages/Training/Training";
import About from "./pages/About/About";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Menu />
      <Landing />
      <Projects />
      <Training />
      <About />
    </>
  );
}

export default App;
