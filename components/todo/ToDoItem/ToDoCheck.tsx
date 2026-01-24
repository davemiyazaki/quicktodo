import { MouseEventHandler } from "react";

export default function ToDoCheck({checkStatus, onClick}:{checkStatus:boolean, onClick:MouseEventHandler}){

  return(
    <img 
      onClick={onClick} 
      src={checkStatus ? "/checkStatus/checked.svg":"checkStatus/unchecked.svg"}
      className="shrink-0 w-6 h-6" 
    />
  )

}
