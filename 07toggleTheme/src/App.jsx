import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Button />
      <Card />
    </div>
  );
}

export default App;
