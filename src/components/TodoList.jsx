import { useState } from "react";


export default function MyTodo () {

    // state handler
    const[Input, setInput] = useState("")
    const[Todos, setTodos] = useState([])
    const[Done, dontLIst] = useState([])
    const[date, SetDate] = useState([])



    // handle todo
    const getTodo = () => {
        if(Input.trim()) {
            setTodos((t) => [...t, Input])
            setInput("")
            SetDate((prevTime) => [...prevTime, new Date().toLocaleTimeString()])
        }
    }

    // handle delete
    const deleteTodo = (test) => {
        console.log(test)
        let newTOdo = Todos.filter((_, i) => i !== test)
        setTodos((t) => [...newTOdo])
    }

    // handle done task
    const doneTodo = (index) => {
        if (Done.includes(index)) {
            dontLIst((prev) => prev.filter((i) => i !== index));
        } else {
            dontLIst((prev) => [...prev, index]);
        }
    };

    return(
        <div className="p-5">
            <div className="flex items-center mb-2 justify-between border border-gray-400">
                <input type="text" 
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                className="p-4 border flex-1"/>  
                <button className="p-5 bg-green-500 text-white text-lg font-semibold border-none" onClick={() => getTodo()}>ADD ➕</button>
            </div>

            {Todos && (
                <ul>
                    {Todos.map((item, index) => (
                        <li key={index} className={Done.includes(index) ? 'p-4 flex justify-between mb-1 bg-green-500 text-white' : 'p-3 flex justify-between border border-gray-400 mb-1'}>

                            <span>
                                <p>{item} {Done.includes(index) ? '(Task Done ✅)' : ''}</p>
                                <p>{date[index]}</p>
                            </span>
                             
                            <span className="flex gap-2">
                                <button className={Done.includes(index) ? 'bg-blue-500 text-white p-2' : 'bg-green-500 text-white p-2'} onClick={() => doneTodo(index)}>
                                    {Done.includes(index) ? 'Undo ❌' : 'Done ✅'}
                                </button>
                                <button className="bg-red-500 text-white p-2" onClick={() => deleteTodo(index)}>Delete 🗑️</button>
                            </span>
                            
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}