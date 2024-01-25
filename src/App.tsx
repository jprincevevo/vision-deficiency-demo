import "./App.css";
import ButtonExample from "./components/button-example";

function App() {
  return (
    <div className="app mx-12 my-8 container mx-auto">
      <ButtonExample />
      <div className="status-example">
        <h2 className="font-bold mb-2">Status</h2>
        <h3 className="font-bold mb-2">Not so good (no text)</h3>
        <div className="status status-success">
          <div
            className="rounded-full mb-2"
            style={{
              backgroundColor: "lime",
              width: 24,
              height: 24,
              border: "2px solid #090",
            }}
          ></div>
          <div
            className="rounded-full mb-2"
            style={{
              backgroundColor: "tomato",
              width: 24,
              height: 24,
              border: "2px solid #900",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
