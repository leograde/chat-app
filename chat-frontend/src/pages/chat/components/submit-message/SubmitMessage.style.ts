import styled from "styled-components";

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  background: #424242;
  color: #f6f6f6;
  border: none;
  border-radius: 20px;
  margin-right: 10px;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4062bb;
  color: #f6f6f6;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  :disabled {
    background-color: #363636;
    cursor: not-allowed;
  }
  :active {
    background-color: #00177d;
  }
`;

export { Form, Input, Button };
