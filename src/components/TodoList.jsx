import { useState } from "react";


export default function MyTodo () {

    // state handler
    const[Input, setInput] = useState("")
    const[Todos, setTodos] = useState(["Make a Todo List", "Read a Book", "Learn some react states"])
    const[Done, dontLIst] = useState([])



    // handle todo
    const getTodo = () => {
        if(Input.trim()) {
            setTodos((t) => [...t, Input])
            setInput("")
        }
    }

    // handle delete
    const deleteTodo = (test) => {
        console.log(test)
        let newTOdo = Todos.filter((_, i) => i !== test)
        setTodos((t) => [...newTOdo])
    }

    // handle done task
    const doneTodo = (item) => {
        if(Done.includes(item)) {
            dontLIst((prev) =>  prev.filter((t) => t !== item))
        } else {
            dontLIst((prev) => [...prev, item])
        }
        
    }

    return(
        <div className="p-5">
            <div className="flex items-center mb-2 justify-between">
                <input type="text" 
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                className="p-4 border border-gray-400 flex-1"/>  
                <button className="p-5 bg-green-500 text-white text-xs font-semibold border-none" onClick={() => getTodo()}>ADD</button>
            </div>

            {Todos && (
                <ul>
                    {Todos.map((item, index) => (
                        <li key={index} className={Done.includes(item) ? 'p-3 flex justify-between items-center mb-1 bg-green-500 text-white' : 'p-3 flex justify-between border border-gray-400 items-center mb-1'}>
                            {item} 
                            <span className="flex gap-2">
                                <button className={Done.includes(item) ? 'bg-blue-500 text-white p-2' : 'bg-green-500 text-white p-2'} onClick={() => doneTodo(item)}>Done</button>
                                <button className="bg-red-500 text-white p-2" onClick={() => deleteTodo(index)}>Delete</button>
                            </span>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}