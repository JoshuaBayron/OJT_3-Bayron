import { useState } from "react";
import { Collapse } from "react-bootstrap";
import Button from "react-bootstrap/Button";

interface Button {
  label: string;
}

const readMore: React.FC<Button> = ({ label }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        style={{
          width: "100%",
          marginBottom: "5px",
          marginLeft: "0",
          fontSize: "12px",
        }}
        variant="warning"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        {open ? "Read Less" : "Read More"}
      </Button>

      <Collapse in={open}>
        <div
          style={{
            fontFamily: "Barlow",
            marginTop: "15px",
            marginBottom: "10px",
            textAlign: "justify",
          }}
          id="example-collapse-text"
        >
          {label}
        </div>
      </Collapse>
    </>
  );
};
export default readMore;
