import { useParams } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import BoardView from "../../components/BoardView/Boardview";
import Listview from "../../components/ListView/Listview";
import Timeline from "../../components/Timeline/Timeline";
import Tableview from "../../components/TableView/Tableview";
import ModalNewTask from "../../components/ModalNewTask/ModalNewTask";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <Dashboard>
      <div>
        <ModalNewTask
          isOpen={isModalNewTaskOpen}
          onClose={() => setIsModalNewTaskOpen(false)}
        ></ModalNewTask>
        <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "List" && (
        <Listview id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}

      {activeTab === "Table" && (
        <Tableview id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </Dashboard>
  );
};

export default ProjectPage;
