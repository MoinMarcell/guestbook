package com.github.moinmarcell.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document
public record GuestbookEntry(
        @Id
        String id,
        String title,
        String content,
        Instant dateTime,
        String author
) {
}
