import  InputField  from './InputField'
import ToDoList from './todo/ToDoList';
export default function Content({toDoItems}){

  return (
    <div className="flex flex-col justify-start items-center gap-2.5">
      <ToDoList toDoItems={toDoItems}/>
      <InputField /> 
    </div>
  );
}
