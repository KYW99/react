import { Route, Link, Routes } from "react-router-dom";
import Greeting from "./Greeting";
import Welcome from "./Welcome";
import Hello from "./Hello";

const Main = () => {
  return (
    <div className="Main">
      <h4>리액트 라운터 기본</h4>

      <p>
        <Link to="/hello">Hello</Link> &nbsp;
        <Link to="/welcome">Welcome</Link> &nbsp;
        <Link to="/greeting">Greeting</Link> &nbsp;
      </p>

      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
};

export default Main;
