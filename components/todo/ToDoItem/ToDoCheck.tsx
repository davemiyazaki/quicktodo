export default function ToDoCheck({checkStatus, ...props}:{checkStatus:boolean}){

  return(
    <img 
      {...props}
      src={checkStatus ? "/checkStatus/checked.svg":"checkStatus/unchecked.svg"}
      className="shrink-0 w-6 h-6" 
    />
  )

}
