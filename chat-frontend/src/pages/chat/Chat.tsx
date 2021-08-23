import {
  ChatWrapper,
  MessagesSection,
  SubmitMessageSection,
} from "./Chat.style";
import { GraphQLMessage } from "./Chat.graphql";
import { Message, SubmitMessage } from "./components";

interface ChatProps {
  username: string;
  messages: GraphQLMessage[];
  onSubmitMessage: ({
    username,
    content,
  }: {
    username: string;
    content: string;
  }) => void;
}

export function Chat({ username, messages, onSubmitMessage }: ChatProps) {
  return (
    <ChatWrapper>
      <MessagesSection>
        {messages.map((message) => (
          <Message
            key={message.id}
            username={message.username}
            createdAt={message.createdAt}
            content={message.content}
            isSender={message.username === username}
          />
        ))}
      </MessagesSection>

      <SubmitMessageSection>
        <SubmitMessage
          onSubmitMessageContent={(messageContent) =>
            onSubmitMessage({ username, content: messageContent })
          }
        />
      </SubmitMessageSection>
    </ChatWrapper>
  );
}
