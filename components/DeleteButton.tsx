import { deleteToDo } from "@/app/actions"
export default function DeleteButton ({id=0, title="Button"}){
  return(
    <button onClick={deleteToDo}key={id} type="button" className="hover:text-red-400 border-solid border-black border-2 p-0.5 ml-0.5 active:text-blue-300">{title}</button>
  )
}  
