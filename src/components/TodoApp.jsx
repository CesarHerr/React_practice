import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";
import Navbar from "./Navbar";

const TodoApp = () => {
  return (
    <>
    <Navbar />
      <Header />
      <TodosLogic />
    </>
  );
};
export default TodoApp;
