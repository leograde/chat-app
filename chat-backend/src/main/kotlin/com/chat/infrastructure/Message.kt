package com.chat.infrastructure

import java.time.LocalDateTime
import javax.persistence.*

@Entity
data class Message(
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    val id: Long? = null,
    @Column(name = "created_at", nullable = false, updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val username: String,
    val content: String
)
