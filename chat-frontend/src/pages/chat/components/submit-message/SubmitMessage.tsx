import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Button, Form, Input } from "./SubmitMessage.style";

interface SubmitMessageProps {
  onSubmitMessageContent: (message: string) => void;
}

export function SubmitMessage({ onSubmitMessageContent }: SubmitMessageProps) {
  const [messageContent, setMessageContent] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitMessageContent(messageContent);
    setMessageContent("");
    inputRef.current?.focus();
  };

  return (
    <Form onSubmit={handleFormSubmitted}>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Type a message"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
      />

      <Button disabled={!messageContent.length} type="submit">
        <FiSend />
      </Button>
    </Form>
  );
}
