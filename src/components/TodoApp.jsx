import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import Navbar from "./Navbar";
import Modal from "./Modal";
import ControlledForm from "./Form";

const TodoApp = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default TodoApp;

