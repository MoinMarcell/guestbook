package com.github.moinmarcell.backend.guestbook;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.LocalDateTime;

@Document(collection = "guestbook-entries")
public record GuestbookEntry(
        @MongoId
        String id,
        String author,
        String title,
        String content,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}
