import  Form  from '@/components/Form'
import ToDoList from './ToDoList';
export default function Content({toDoItems}){

  return (
    <div className=''>
      <Form />
      <ToDoList toDoItems={toDoItems}/>
    </div>
  );
}
