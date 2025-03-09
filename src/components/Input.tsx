import '../styles/layout.css'
interface IProps {
  input: string;
  error: boolean;
}
export default function Input({ input, error }: IProps) {
  return (
    <div className="input-container mb-3">
      {error ? <h1 className="input-text error">{error}</h1> : <h1 className="input-text">{input || "0"}</h1>}
    </div>
  );
}
