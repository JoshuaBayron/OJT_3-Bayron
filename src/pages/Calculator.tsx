import { useState, useMemo, useEffect } from "react";
import { Button } from "react-bootstrap";
import Input from "../components/Input";
import Buttons from "../components/Buttons";
import { Operators } from "../types/operations";
import BackButton from "../components/btp";

export default function Calculator() {
  const [input, setInput] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);
  const [oldInput, setOldInput] = useState<string | null>(null);
  const [showOldInput, setShowOldInput] = useState<boolean>(false);
  const [prevSymbol, setPrevSymbol] = useState<string | null>(null);
  const [equalSignPressed, setEqualSignPressed] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<
    { expression: string; result: number }[]
  >([]);

  const currentInput: string | null = useMemo<string | null>(
    () => (showOldInput ? oldInput : input),
    [input, oldInput, showOldInput]
  );

  const operations: Operators = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "✕": (n1, n2) => n1 * n2,
    "÷": (n1, n2) => n1 / n2,
    "%": (_n1, n2) => n2 / 100,
    "+/-": (_n1, n2) => n2 * -1,
  };

  function clear() {
    setInput(null);
    setOldInput(null);
    setShowOldInput(false);
    setTotal(0);
    setPrevSymbol(null);
    setHasError(false);
  }

  function calculate(
    buffer: number,
    currentTotal: number,
    symbol: string
  ): number {
    const operation = operations[symbol as keyof Operators];
    if (operation) {
      return operation(currentTotal, buffer);
    } else {
      throw new Error(`Unsupported operation: ${symbol}`);
    }
  }

  function handleSymbol(symbol: string) {
    switch (symbol) {
      case "C":
        clear();
        break;
      case ".":
        if (!input?.includes(".")) {
          storeNumToScreen(symbol);
        }
        break;
      case "%":
      case "+/-":
        if (input === null) {
          return;
        }
        const changedValue: number = calculate(
          parseFloat(input),
          total,
          symbol
        );
        setInput(changedValue.toString());
        break;
      case "=":
        setEqualSignPressed(true);
        if (input === null || prevSymbol === null) return;
        const finalTotal: number = calculate(
          parseFloat(input),
          total,
          prevSymbol
        );
        if (input === "0" && prevSymbol === "÷") {
          setHasError(true);
          return;
        }
        setInput(finalTotal.toString());
        setPrevSymbol(null);
        if (showOldInput) setShowOldInput(false);
        // Save calculation history
        setHistory([
          ...history,
          { expression: `${total} ${prevSymbol} ${input}`, result: finalTotal },
        ]);
        break;
      case "+":
      case "-":
      case "✕":
      case "÷":
        if (input === null || prevSymbol === null) {
          if (prevSymbol === null) {
            if (input !== null) setTotal(parseFloat(input));
            prepareNextOperation(symbol);
          }
          return;
        }
        const newTotal: number = calculate(
          parseFloat(input),
          total,
          prevSymbol
        );
        setTotal(newTotal);
        prepareNextOperation(symbol);
        break;
      default:
        break;
    }
  }

  function prepareNextOperation(symbol: string) {
    setPrevSymbol(symbol);
    setShowOldInput(true);
    setOldInput(input);
    setInput(null);
  }

  function storeNumToScreen(num: string) {
    setInput((prev) =>
      prev === "0" ||
      prev === null ||
      (equalSignPressed && input?.charAt(0) !== ".")
        ? num
        : prev + num
    );
  }

  function handleButtonPress(value: string): void {
    if (showOldInput) {
      setShowOldInput(false);
    }
    const numValue: number = parseInt(value);
    if (Number.isNaN(numValue)) {
      handleSymbol(value);
    } else {
      storeNumToScreen(value);
      if (equalSignPressed) {
        setTotal(0);
      }
    }
    if (value !== "=") {
      setEqualSignPressed(
        (value === "+/-" && equalSignPressed) ||
          value === "%" ||
          (value === "." && equalSignPressed)
      );
    }
  }

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function toggleHistory() {
    setShowHistory(!showHistory);
  }

  return (
    <div className="Home">
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="calculator-center-container">
          <div className="calculator-container">
            <Input error={hasError} input={currentInput ?? "0"} />
            <Buttons handleOnPress={handleButtonPress} />
          </div>
          <div className="home-button">
            <Button
              onClick={toggleHistory}
              variant="warning"
              className="button white burlywood-background br-burlywood antiquewhite-background btp"
            >
              {showHistory ? "Hide History" : "Show History"}
            </Button>

            <div style={{ display: showHistory ? "block" : "none" }}>
              <p style={{fontSize:"16px"}}>Calculation History:</p>
              <ul>
                {history.map((item, index) => (
                  <li key={index}>
                    <strong>{item.expression}</strong> = {item.result}
                  </li>
                ))}
              </ul>
            </div>
            <BackButton />
          </div>
        </div>
      )}
    </div>
  );
}
