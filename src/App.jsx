import MyTodo from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <nav className="p-5 flex items-center bg-red-500 text-white">
        <h1>Todo List ni jerwin</h1>
      </nav>
      <MyTodo/>
    </div>
  );
}

export default App;
