import {GuestbookEntry} from "./GuestbookEntry";
import EntryCard from "./EntryCard";
import AddEntry from "./AddEntry";
import {useNavigate} from "react-router-dom";

type EntryGalleryProps = {
    entries: GuestbookEntry[],
    token: string | null,
}

export default function EntryGallery(props: EntryGalleryProps) {

    const navigate = useNavigate();

    const entryCard = props.entries.map((entry) => {
        return (
            <EntryCard entry={entry} key={entry.id}/>
        );
    }).reverse();

    function handleRegisterClick() {
        navigate("/register");
    }

    function handleLoginClick() {
        navigate("/login");
    }

    return (
        <div>
            <button onClick={handleRegisterClick}>Register</button>
            <button onClick={handleLoginClick}>Login</button>
            <AddEntry token={props.token}/>
            {entryCard}
        </div>
    );
}
