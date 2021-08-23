# Chat Application

This repository contains a chat application that allows users to enter their username and start chatting with other users in the chat.

## Frontend

The chat frontend was written in [React](https://github.com/facebook/react) using [Apollo Client](https://github.com/apollographql/apollo-client) to fetch and manage remote data with `GraphQL`.The [styled-components](https://github.com/styled-components/styled-components) library was used to style the app.

## Backend

The backend was written in [Kotlin](https://github.com/JetBrains/kotlin) using [Spring Boot](https://github.com/spring-projects/spring-boot) and [graphql-kotlin](https://github.com/ExpediaGroup/graphql-kotlin).

The backend exposes:

```graphql
# Allows a user to create a message in the chat
type Mutation {
  createMessage(content: String!, username: String!): Message!
}

# Reads all messages in the chat in ASC order from the date they were created
type Query {
  messages: [Message!]!
}

# Every time there's a new message in the chat the subscription is triggered
type Subscription {
  onNewMessage: Message!
}
```

# Running the App

In order to run the application, run:

```bash
docker-compose up
```

This command will build the `chat-backend` and `chat-frontend` images and run their containers while also run a [postgres container](https://hub.docker.com/_/postgres).
