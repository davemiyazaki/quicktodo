import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import  Form  from '@/components/Form'
import ListItem from '@/components/ListItem'
  export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="__main">
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



