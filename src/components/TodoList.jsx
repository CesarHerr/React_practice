import TodoItem from "@/components/TodoItem";

const TodosList = ({ todosProps, handleChange, delTodo }) => {
  return (
    <ul>
      {todosProps.map((todo) => (
          <TodoItem 
          key={todo.id} 
          itemProp={todo}           
          delTodo={delTodo}
          handleChange={handleChange}
          />
      ))}
    </ul>
  );
};
export default TodosList;
