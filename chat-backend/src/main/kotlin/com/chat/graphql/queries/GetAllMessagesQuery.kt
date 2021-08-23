package com.chat.graphql.queries

import com.chat.graphql.models.Message
import com.chat.infrastructure.MessageRepository
import com.expediagroup.graphql.generator.scalars.ID
import com.expediagroup.graphql.server.operations.Query
import org.springframework.stereotype.Component


@Component
class GetAllMessagesQuery(private val messageRepository: MessageRepository) : Query {
    fun messages(): List<Message> {
        val messages = messageRepository.findAllByOrderByCreatedAtAsc();
        return messages.map { Message(ID(it.id.toString()), it.createdAt.toString(), it.content, it.username) }
    }
}
