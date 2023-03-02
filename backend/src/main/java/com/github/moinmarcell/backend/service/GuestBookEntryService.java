package com.github.moinmarcell.backend.service;

import com.github.moinmarcell.backend.model.GuestbookEntry;
import com.github.moinmarcell.backend.repository.GuestbookEntryRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class GuestBookEntryService {

    private final GuestbookEntryRepository guestbookEntryRepository;
    private final IdService idService;

    public GuestBookEntryService(GuestbookEntryRepository guestbookEntryRepository, IdService idService) {
        this.guestbookEntryRepository = guestbookEntryRepository;
        this.idService = idService;
    }

    public List<GuestbookEntry> getAllGuestbookEntries() {
        return guestbookEntryRepository.findAll();
    }

    public GuestbookEntry addGuestbookEntry(GuestbookEntry guestbookEntryToAdd) {
        GuestbookEntry toAdd = new GuestbookEntry(
                idService.generateId(),
                guestbookEntryToAdd.title(),
                guestbookEntryToAdd.content(),
                Instant.now(),
                guestbookEntryToAdd.author()
        );
        guestbookEntryRepository.save(toAdd);
        return toAdd;
    }

    public GuestbookEntry updateGuestbookEntry(String id, GuestbookEntry guestbookEntryToUpdate) {
        GuestbookEntry toUpdate = new GuestbookEntry(
                id,
                guestbookEntryToUpdate.title(),
                guestbookEntryToUpdate.content(),
                guestbookEntryToUpdate.dateTime(),
                guestbookEntryToUpdate.author()
        );

        guestbookEntryRepository.save(toUpdate);
        return toUpdate;
    }

}
