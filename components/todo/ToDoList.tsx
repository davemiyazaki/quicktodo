import ToDoItem from "./ToDoItem/ToDoItem"
export default function ToDoList({toDoItems}){
  return(
    <div className="flex flex-col justify-start items-start gap-2">
        {toDoItems?.map((todo) => (
          <ToDoListItem 
            key={todo.id}
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed}/>
        ))}
    </div>
  );
}
