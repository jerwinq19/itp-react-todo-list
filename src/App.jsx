import MyTodo from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <nav className="flex justify-between p-5 font-mono border border-gray-400">
        <h1 className="border border-gray-400">todo list ni jarwin</h1>

        <ul className="flex gap-3 border border-gray-400 items-center">
          <a href="">Github</a>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
        </ul>
      </nav>
      <MyTodo/>
    </div>
  );
}

export default App;
