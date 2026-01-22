export default function ToDoCheck({checkStatus}:{checkStatus:boolean}){

  return(
    <img 
      src={checkStatus ? "/checkStatus/checked.svg":"checkStatus/unchecked.svg"}
      className="shrink-0 w-6 h-6" 
    />
  )

}
