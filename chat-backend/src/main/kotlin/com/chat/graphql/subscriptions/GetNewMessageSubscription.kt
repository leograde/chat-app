package com.chat.graphql.subscriptions

import com.chat.graphql.models.Message
import com.chat.publishers.MessagePublisher
import com.expediagroup.graphql.server.operations.Subscription
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux

@Component
class OnNewMessageSubscription(private val messagePublisher: MessagePublisher) : Subscription {
    fun onNewMessage(): Flux<Message> = messagePublisher.getNewMessagePublisher().log("Log");
}
