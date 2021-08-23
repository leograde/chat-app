package com.chat.infrastructure

import org.springframework.data.repository.CrudRepository


interface MessageRepository : CrudRepository<Message, Long> {
    fun findAllByOrderByCreatedAtAsc(): Iterable<Message>
}
