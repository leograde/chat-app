import { gql } from "@apollo/client";

const GET_ALL_MESSAGES_QUERY = gql`
  query GetAllMessagesQuery {
    messages {
      content
      username
      createdAt
    }
  }
`;

const NEW_MESSAGE_SUBSCRIPTION = gql`
  subscription OnNewMessageSubscription {
    onNewMessage {
      content
      username
      createdAt
    }
  }
`;

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessage($content: String!, $username: String!) {
    createMessage(content: $content, username: $username) {
      content
      username
    }
  }
`;

export interface GraphQLMessage {
  id: string;
  content: string;
  username: string;
  createdAt: string;
}

export {
  GET_ALL_MESSAGES_QUERY,
  NEW_MESSAGE_SUBSCRIPTION,
  CREATE_MESSAGE_MUTATION,
};
