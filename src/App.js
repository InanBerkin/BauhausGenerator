import "./styles.css";
import BauhausFrame from "./BauhausFrame";
import { useState } from "react";
export default function App() {
  const [key, setKey] = useState(0);
  console.log(key);
  return (
    <div className="App">
      <BauhausFrame key={key} />
      <button onClick={() => setKey((key) => (key + 1) % 10)}>Reset</button>
    </div>
  );
}
