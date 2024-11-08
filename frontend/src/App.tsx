import "./App.css";
import Auth from "./Pages/Auth/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main_Page/main";
import Board from "./Pages/Board/board";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/main" element={<Main />} />
          <Route path="/board" element={<Board />} />
          <Route path="/dashboard" element={<Dashboard><div /></Dashboard>} />
          <Route path='/projects/:id' element={<ProjectPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
