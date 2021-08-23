import {
  MessageRow,
  MessageWrapper,
  MessageSender,
  MessageContent,
  MessageDate,
} from "./Message.style";

interface MessageProps {
  username: string;
  createdAt: string;
  content: string;
  isSender: boolean;
}

export function Message({
  username,
  createdAt,
  content,
  isSender,
}: MessageProps) {
  return (
    <MessageRow isSender={isSender}>
      <MessageWrapper isSender={isSender}>
        <MessageSender>{username}</MessageSender>
        <MessageContent>{content}</MessageContent>
        <MessageDate>{new Date(createdAt).toLocaleTimeString()}</MessageDate>
      </MessageWrapper>
    </MessageRow>
  );
}
