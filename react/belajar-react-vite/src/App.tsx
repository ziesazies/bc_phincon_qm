import Button from "./components/button";
import "./App.css";

function App() {
  const names = ["Alief", "Bob", "Charlie", "Diana"];
  return (
    <div className="min-h-screen bg-blue-100 flex-col items-center justify-centeritems-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-blue-600">List of Names</h1>
      <ul className="list-disc">
        {names.map((name, index) => (
          <li key={index} className="text-lg text-blue-700">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
