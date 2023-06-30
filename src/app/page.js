import TodoList from './TodoList'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl flex justify-center my-4 font-medium capitalize'>to-do list</h1>
      <TodoList/>
    </div>
  )
}
