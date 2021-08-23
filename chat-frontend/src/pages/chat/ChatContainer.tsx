import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Chat } from "./Chat";
import {
  GraphQLMessage,
  GET_ALL_MESSAGES_QUERY,
  CREATE_MESSAGE_MUTATION,
  NEW_MESSAGE_SUBSCRIPTION,
} from "./Chat.graphql";

interface ChatContainerProps {
  username: string;
}

export function ChatContainer({ username }: ChatContainerProps) {
  const { data: getAllMessagesQueryData, subscribeToMore } = useQuery<{
    messages: GraphQLMessage[];
  }>(GET_ALL_MESSAGES_QUERY);

  const [createMessageMutation] = useMutation<
    {
      createMessage: GraphQLMessage;
    },
    { username: string; content: string }
  >(CREATE_MESSAGE_MUTATION);

  const handleMessageSubmission = ({
    username,
    content,
  }: {
    username: string;
    content: string;
  }) => {
    createMessageMutation({
      variables: { username, content },
    });
  };

  const messages = getAllMessagesQueryData?.messages || [];

  useEffect(() => {
    const unsubscribe = subscribeToMore<{ onNewMessage?: GraphQLMessage }>({
      document: NEW_MESSAGE_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        const newMessage = subscriptionData.data.onNewMessage;
        if (!newMessage) return prev;

        return {
          messages: [...(prev.messages ? prev.messages : []), newMessage],
        };
      },
    });
    return () => unsubscribe();
  }, [subscribeToMore]);

  return (
    <Chat
      username={username}
      messages={messages}
      onSubmitMessage={handleMessageSubmission}
    />
  );
}
