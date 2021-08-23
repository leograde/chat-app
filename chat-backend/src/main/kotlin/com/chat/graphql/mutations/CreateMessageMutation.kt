package com.chat.graphql.mutations

import com.chat.infrastructure.MessageRepository
import com.chat.graphql.models.Message
import com.chat.publishers.MessagePublisher
import com.expediagroup.graphql.generator.scalars.ID
import com.expediagroup.graphql.server.operations.Mutation
import org.springframework.stereotype.Component
import com.chat.infrastructure.Message as InfrastructureMessage

@Component
class CreateMessageMutation(private val messageRepository: MessageRepository, private val messagePublisher: MessagePublisher) : Mutation {
    fun createMessage(content: String, username: String): Message {
        val createdMessage = messageRepository.save(InfrastructureMessage(username = username, content = content))

        val message = Message(ID(createdMessage.id.toString()), createdMessage.createdAt.toString(), createdMessage.content, createdMessage.username);

        messagePublisher.publish(message);

        return message;
    }
}
