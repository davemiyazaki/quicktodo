import DeleteButton from "./DeleteButton"
interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default ListItem({id, title, completed}: ListItemInterface){
  return(
          <li key={id}>
          <span>{title}--{completed ? "Checked" : "Unchecked"}</span>
          <DeleteButton id={id} title="Delete" />
          </li>
  ) 
}
