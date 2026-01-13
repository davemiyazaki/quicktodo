import DeleteButton from "./DeleteButton"
interface ListItemInterface {
  id: number,
  title: string,
  completed: boolean,
}
export default function ListItem({id, title, completed}: ListItemInterface){
  return(
          <li>
          <span>{title}--{completed ? "Checked" : "Unchecked"}</span>
          <DeleteButton id={id} title="Delete" />
          </li>
  ) 
}
