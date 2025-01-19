import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full mt-12 flex flex-col justify-center items-center">
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
