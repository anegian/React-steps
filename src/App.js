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
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // update state with setState() function, not manually!!
    // if (step > 0) setStep(step - 1);
    // Below we update the state based on the current value of the state
    if (step > 0) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
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
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
