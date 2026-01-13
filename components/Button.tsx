export default function Button ({id=0, title="Button", action=function(){}}){
  return(
    <button onClick={action} key={id} type="button" className="hover:text-red-400 border-solid border-black border-2 p-0.5 ml-0.5 active:text-blue-300">{title}</button>
  )
}  
