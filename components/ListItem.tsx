'use client'
import DeleteButton from "./DeleteButton"
import { useState } from "react"
interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default function ListItem({id, title, completed}: ListItemInterface){
  const [spanClicked, setSpanClicked] = useState(false)
  function handleItemListClick(){
    console.log("item was clicked") 
  }
  return(
    <div className="__toDoItem">
      <input onClick={handleItemListClick} type="text" id={id} value={title} readOnly/>
      <span>{completed ? "Checked" : "Unchecked"}</span>
      <DeleteButton id={id}/>
    </div>
  ) 
}
