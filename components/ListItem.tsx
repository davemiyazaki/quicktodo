'use client'
import { updateToDo } from "@/app/actions"
import DeleteButton from "./DeleteButton"
import { useState } from "react"
interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default function ListItem({id, title, completed}: ListItemInterface){
  const [toDoActive, setToDoActive] = useState(false)
  const [toDoTitle, setToDoTitle] = useState(title)
  function handleItemListClick(){
    setToDoActive(true)
  }
  function handleItemListChange(e){
    setToDoTitle(e.target.value)
    console.log(toDoTitle)
  }
  function handleOnBlur(){
    console.log(toDoTitle)
    updateToDo(id, toDoTitle);
  }
  return(
    <div className="inline-flex justify-start items-start gap-6">
      <input 
        onClick={handleItemListClick} 
        onChange={handleItemListChange}
        onBlur={handleOnBlur}
        type="text" 
        value={toDoTitle} 
        readOnly={!toDoActive}/>
      <span>{completed ? "Checked" : "Unchecked"}</span>
      <DeleteButton id={id}/>
    </div>
  ) 
}
