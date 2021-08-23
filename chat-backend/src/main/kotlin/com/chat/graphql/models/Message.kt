package com.chat.graphql.models

import com.expediagroup.graphql.generator.scalars.ID

data class Message(val id: ID, val createdAt: String, val content: String, val username: String)
