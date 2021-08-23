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
  const createdAtString = new Date(createdAt).toLocaleTimeString();

  return (
    <MessageRow
      isSender={isSender}
      aria-label={`user ${username} sent message ${content} at ${createdAtString}`}
    >
      <MessageWrapper isSender={isSender}>
        <MessageSender>{username}</MessageSender>
        <MessageContent>{content}</MessageContent>
        <MessageDate>{createdAtString}</MessageDate>
      </MessageWrapper>
    </MessageRow>
  );
}
