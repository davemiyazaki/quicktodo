import  Form  from '@/components/Form'
import ToDoList from './ToDoList';
export default function Content({toDoItems}){

  return (
    <div className="flex flex-col justify-start items-start gap-2.5">
      <ToDoList toDoItems={toDoItems}/>
      <Form />
    </div>
  );
}
