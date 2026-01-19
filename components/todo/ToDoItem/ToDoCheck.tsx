export default function ToDoCheck({checkStatus}:{checkStatus:boolean}){
  if(checkStatus){console.log(checkStatus)}else{console.log("Check is false")}
  return(<span>{checkStatus ? "Checked" : "Unchecked"}</span>)
}
