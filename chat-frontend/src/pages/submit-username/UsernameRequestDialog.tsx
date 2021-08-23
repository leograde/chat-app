import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 400px;
  min-height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const SubmitButton = styled.input`
  background-color: #000c41;
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border-width: 0;
  color: #f3f3f3;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  :disabled {
    background-color: #7a7a7a;
    cursor: not-allowed;
  }
  :active {
    background-color: #00177d;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 18px;
  background: #f0f0f0;
  border: none;
  border-radius: 3px;
  margin-bottom: 20px;
`;

interface UsernameRequestDialogProps {
  onUsernameSubmit: (email: string) => void;
}

export function UsernameRequestDialog({
  onUsernameSubmit,
}: UsernameRequestDialogProps) {
  const [username, setUsername] = useState<string>("");

  return (
    <Wrapper>
      <Title>Please enter your username to start chatting</Title>

      <form onSubmit={() => onUsernameSubmit(username)}>
        <Input
          placeholder="username"
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <SubmitButton
          disabled={username.length === 0}
          type="submit"
          value="SEND"
        />
      </form>
    </Wrapper>
  );
}
