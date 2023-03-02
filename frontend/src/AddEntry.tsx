import {ChangeEvent, FormEvent, useState} from "react";
import {GuestbookEntry} from "./GuestbookEntry";
import axios from "axios";

type AddEntryProps = {
    token: string | null,
}

export default function AddEntry(props: AddEntryProps) {

    console.log("token in add: " + props.token)

    const [entry, setEntry] = useState<GuestbookEntry>({
        title: "",
        content: "",
        author: "",
    });
    const [isUnauthorized, setIsUnauthorized] = useState<boolean>(false)

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const name = event.target.name
        setEntry({
            ...entry,
            [name]: event.target.value,
        });
        console.log(entry);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/guestbook-entries", entry, {
            headers: {
                "Authorization": "Bearer " + props.token
            }
        })
            .then(() => {
                console.log("Success!");
                setIsUnauthorized(false);
            })
            .catch((error) => {
                console.error(error.response.status);
                if (error.response.status === 401) {
                    setIsUnauthorized(true);
                }
            });
        setEntry({
            title: "",
            content: "",
            author: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={"title"} type={"text"} value={entry.title} placeholder={"Title"} onChange={handleChange}/>
            <input name={"content"} type={"text"} value={entry.content} placeholder={"Content"}
                   onChange={handleChange}/>
            <input name={"author"} type={"text"} value={entry.author} placeholder={"Author"} onChange={handleChange}/>
            <button>Add Entry</button>
            {
                isUnauthorized ? "Please login!" : ''
            }
        </form>
    );
}