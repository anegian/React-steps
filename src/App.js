import { useState } from "react";

const messages = [
  "Click next to see the steps",
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // React Hooks start with use --> useState, useReducer, useEffect etc
  // A React hook is only allowed at the top of a function
  // Also cannot be used in an if statement
  const [step, setStep] = useState(0);

  function handlePrevious() {
    // update state with setState() function, not manually!!
    if (step > 0) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        {step === 0 ? messages[0] : `Step ${step}: ${messages[step]}`}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
