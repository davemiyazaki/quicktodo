import ListItem from "./ListItem"
export default function ToDoList({toDoItems}){
  return(
    <div>
        {toDoItems?.map((todo) => (
          <ListItem 
            key={todo.id}
            id={todo.id} 
            title={todo.title} 
            completed={todo.completed}/>
        ))}
    </div>
  );
}
