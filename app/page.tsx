import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import  Form  from '@/components/Form'

  export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="__main">
      <Form />
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}--{todo.completed ? "Checked" : "Unchecked"}</li>
        ))}
      </ul>
    </div>
  )
}

