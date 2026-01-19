export default function ToDoCheck(checkStatus:boolean){

  return(<span>{checkStatus ? "Checked" : "Unchecked"}</span>)
}
