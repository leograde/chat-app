package com.chat.publishers

import com.chat.graphql.models.Message
import org.springframework.stereotype.Component
import reactor.core.publisher.Flux
import reactor.core.publisher.Sinks

@Component
class MessagePublisher(
    private val sink: Sinks.Many<Message> = Sinks.many().multicast().onBackpressureBuffer()
) {
    fun publish(message: Message) = sink.tryEmitNext(message)

    fun getNewMessagePublisher(): Flux<Message> = sink.asFlux()
}

