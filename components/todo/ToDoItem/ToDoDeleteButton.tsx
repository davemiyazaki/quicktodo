'use client'
import { deleteToDo } from "@/app/actions"
export default function ToDoDeleteButton ({id=0, title="Delete"}){

  async function handleClick ():Promise<void>{
   try{
     await deleteToDo(id);
   }catch(error){
    console.log("Failed to delete item ---", error);
   }
  }

  return(
    <button onClick={handleClick} key={id} type="button" className="hover:text-red-400 border-solid border-black border-2 p-0.5 ml-0.5 active:text-blue-300">{title}</button>
  )
}  
