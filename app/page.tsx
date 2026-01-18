import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import  Form  from '@/components/Form'
import ListItem from '@/components/ListItem'
import Nav from '@/components/Nav'
export default async function Page() {
const cookieStore = await cookies()
const supabase = createClient(cookieStore)

const { data: todos } = await supabase.from('todos').select()

return (
  <div className="__main w-screen h-screen px-2 pt-42 pb-6 inline-flex flex-col justify-start-items-center gap-12 overflow-hidden">
    <Nav />
    <Form />
    <ul className="__toDoList">
      {todos?.map((todo) => (
        <ListItem 
          key={todo.id}
          id={todo.id} 
          title={todo.title} 
          completed={todo.completed}/>
      ))}
    </ul>
  </div>
)
}



