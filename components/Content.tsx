import  InputField  from './InputField'
import ToDoList from './todo/ToDoList';
export default function Content({toDoItems}){

  return (
    <div className="inline-flex flex-col justify-center items-start gap-2.5">
      <ToDoList toDoItems={toDoItems}/>
      <InputField />
    </div>
  );
}
