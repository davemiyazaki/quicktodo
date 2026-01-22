'use client'
import { deleteToDo } from "@/app/actions"
export default function ToDoDeleteButton ({id=0}){

  async function handleClick ():Promise<void>{
   try{
     await deleteToDo(id);
   }catch(error){
    console.log("Failed to delete item ---", error);
   }
  }

  return(
    <img key={id} onClick={handleClick} src='/deleteButton.svg' className="w-8 h-8"/>
  )
}  
