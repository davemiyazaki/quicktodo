import  InputField  from './InputField'
import ToDoList from './ToDoList';
export default function Content({toDoItems}){

  return (
    <div className="inline-flex flex-col justify-start items-start gap-2.5">
      <ToDoList toDoItems={toDoItems}/>
      <InputField />
    </div>
  );
}
