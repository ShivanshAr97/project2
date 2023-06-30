"use client"

import { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [counter, setCounter] = useState(0);
    const [searchText, setSearchText] = useState('');

    const handleTaskInput = (e) => {
        if (taskText !== '') {
            const newTask = {
                id: counter,
                text: taskText,
                completed: false,
            };

            setTasks([...tasks, newTask]);
            setTaskText('')
            setCounter(counter+1)
        }
    };

    const handleTaskInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleSearchInput = (e) => {
        setSearchText(e.target.value)
    };

    const handleTaskComplete = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        setTasks(updatedTasks);
    };


    const handleTaskDelete = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className='flex mx-auto flex-col'>
            <div>
                <input className='border-2 px-2 py-1 rounded-lg mx-4 w-[30rem] outline-none my-4'
                    type="text"
                    placeholder="Search tasks"
                    onChange={handleSearchInput}
                />

                <div className='mx-4 mb-8'>
                    <input className='border-2 px-2 py-1 rounded-lg w-[27rem] outline-none'
                        type="text"
                        placeholder="Enter a task"
                        value={taskText}
                        onChange={handleTaskInputChange}
                    />

                    <button onClick={handleTaskInput} className='mr-4 px-2 border-2 rounded-lg py-1'>Add</button>

                </div>
            </div>
            <ul className='m-4'>
                {filteredTasks.length === 0 ? (<li className='capitalize'>no tasks found!</li>) : (
                    filteredTasks.map((task) => (
                        <li className="flex justify-between align-middle my-2" key={task.id}>
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.text}
                            </span>
                            <div>
                                <button className='mx-2 border rounded-full px-4 py-1 bg-blue-700 text-white font-medium text-sm w-[6.5rem]' onClick={() => handleTaskComplete(task.id)}>
                                    {task.completed ? 'Completed' : 'Pending'}
                                </button>
                                <button className='mx-2 border rounded-full px-4 py-1 bg-red-500 text-white font-medium text-sm' onClick={() => handleTaskDelete(task.id)}> Delete </button>
                            </div>
                        </li>
                    ))
                )
                }
            </ul>
        </div>
    );
};

export default TodoList;
