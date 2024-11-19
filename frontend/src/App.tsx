import "./App.css";
import Auth from "./Pages/Auth/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Pages/Main_Page/main";
import Dashboard from "./components/Dashboard/Dashboard";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import Timeline from "./Pages/TimelinePage/Timeline";
import Search from "./Pages/Search/Search";
import Settings from "./Pages/Settings/Settings";
import Users from "./Pages/Users/Users";
import Teams from "./Pages/Teams/Teams";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard>
                <div />
              </Dashboard>
            }
          />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
