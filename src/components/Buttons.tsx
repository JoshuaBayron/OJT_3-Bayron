import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

interface IProps {
  handleOnPress: (value: string) => void;
}

export default function Buttons({ handleOnPress }: IProps) {
  function onPress(event: React.MouseEvent<HTMLButtonElement>) {
    const value: string = (event.target as HTMLButtonElement).innerText;
    handleOnPress(value);
  }

  return (
    <Container className="buttons-container">
      {[
        ['C', '+/-', '%', '÷'],
        ['7', '8', '9', '✕'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
      ].map((row, rowIndex) => (
        <Row key={rowIndex} className="g-1">
          {row.map((label, colIndex) => (
            <Col key={colIndex} className={label === '0' ? 'col-6' : 'col-3'}>
              <Button
                variant={label === 'C' ? 'danger' : label === '=' ? 'primary' : 'secondary'}
                className={`w-100 ${label === '0' ? 'zero-btn' : ''}`}
                onClick={onPress}
              >
                {label}
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
