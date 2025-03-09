import { useState, useMemo } from "react";
function ExpensiveComponent( data : any ) {
  console.log("ExpensiveComponent rendered");
  return <p>Data: {data.value}</p>;
}

export default function Memoization() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello, World!");

  // Memoize the data object to prevent unnecessary re-renders
  const memoizedData = useMemo(() => ({ value }), [value]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <button onClick={() => setValue(value + "!")}>Change Value</button>
      <ExpensiveComponent data={memoizedData} />
    </div>
  );
}
