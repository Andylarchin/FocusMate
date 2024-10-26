import "./App.css";
import Auth from "./components/Auth/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main_Page/main";
import Board from "./components/Board/board";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Auth} />
          <Route exact path="/main" Component={Main} />
          <Route exact path="/board" Component={Board} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
