import appStyles from "./App.module.scss";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import loadable from "react-loadable";

const LoadComponent = () => <h3>Loading wait....</h3>;

const Home = loadable({
  loader: () => import("./components/home/Home"),
  loading: LoadComponent,
});

const About = loadable({
  loader: () => import("./components/about/About"),
  loading: LoadComponent,
});
function App() {
  return (
    <div className={appStyles.app}>
      <div className={appStyles.banner}>
        <h1 className={appStyles.title}>Webpack Assignment</h1>
      </div>
      <div className={appStyles.menuArea}>
        <ul className={appStyles.linksContainer}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
