import ToDoItem from "./ToDoItem/ToDoItem"
export default function ToDoList({toDoItems}){
  return(
    <div className="flex flex-col justify-center items-start gap-2 w-fit">
        {toDoItems?.map((todo) => (
          <ToDoItem 
            key={todo.id}
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed}/>
        ))}
    </div>
  );
}
