import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import Navbar from "./Navbar";
import Modal from "./Modal";
import ControlledForm from "./Form";

const TodoApp = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <Header />
      <TodosLogic />
      <ControlledForm />
    </>
  );
};
export default TodoApp;
