import { useState } from "react";
import FilterForm from "./components/FilterForm";
import "./App.css";

const BACKEND_URL = "https://api-test-tjbf.onrender.com";

function App() {
  const [inputText, setInputText] = useState("");
  const [filters, setFilters] = useState([]);
  const [result, setResult] = useState(null);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async () => {
    let inputArray;
    try {
      inputArray = JSON.parse(inputText);
      if (!Array.isArray(inputArray)) throw new Error();
    } catch {
      alert("Please enter a valid JSON array");
      return;
    }

    const payload = { input: inputArray, filters };

    try {
      const res = await fetch(`${BACKEND_URL}/bfhl/process`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong with the API");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>BFHL</h1>
      <textarea
        rows="10"
        style={{ width: "100%" }}
        placeholder='Enter JSON array e.g. ["a", "1", "B"]'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>

      <FilterForm filters={filters} onChange={handleCheckboxChange} />

      {result && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: "20px", fontFamily: "monospace" }}>
          <h3>Output</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
