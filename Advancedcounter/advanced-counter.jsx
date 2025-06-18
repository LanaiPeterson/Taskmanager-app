import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('advanced-counter');
    return saved !== null ? JSON.parse(saved) : 0;
  });

  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(1);

  // Update history and localStorage whenever count changes
  useEffect(() => {
    setHistory(prev => [...prev, count]);

    const timeout = setTimeout(() => {
      localStorage.setItem('advanced-counter', JSON.stringify(count));
    }, 300); // Simulate delay or debounce

    return () => clearTimeout(timeout);
  }, [count]);

  // Keyboard listener for ArrowUp and ArrowDown
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') increment();
      if (e.key === 'ArrowDown') decrement();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  });

  const increment = () => setCount(prev => prev + Number(step));
  const decrement = () => setCount(prev => prev - Number(step));

  const reset = () => {
    setCount(0);
    setHistory([0]);
  };

  const handleStepChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) setStep(value);
  };

  return (
    <div className="p-8 max-w-md mx-auto text-center font-sans">
      <h1 className="text-2xl font-bold mb-4">Advanced Counter</h1>

      <div className="text-3xl mb-4">Count: {count}</div>

      <div className="flex justify-center gap-4 mb-4">
        <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          -
        </button>
        <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          +
        </button>
      </div>

      <div className="mb-4">
        <input
          type="number"
          value={step}
          onChange={handleStepChange}
          className="border px-2 py-1 rounded w-24"
        />
        <label className="ml-2 text-gray-700">Step Value</label>
      </div>

      <button onClick={reset} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-6">
        Reset
      </button>

      <div>
        <h2 className="font-semibold mb-2">Previous Counts:</h2>
        <p className="text-sm text-gray-600">
          {history.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default App;










