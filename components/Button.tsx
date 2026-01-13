export default function Button ({id=0, title="Button"}){
  return(
    <button key={id} type="button" className="">{title}</button>
  )
}  
