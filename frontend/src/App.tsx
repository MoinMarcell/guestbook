import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import EntryGallery from "./EntryGallery";
import axios from "axios";
import {GuestbookEntry} from "./GuestbookEntry";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function App() {

    const [entries, setEntries] = useState<GuestbookEntry[]>([])
    const [token, setToken] = useState<string | null>("")

    console.log("token in app: " + token);

    useEffect(() => {
        axios.get("/api/guestbook-entries")
            .then((response) => {
                setEntries(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }
    }, []);

    function login(email: string, password: string) {
        axios.post("/api/auth/authenticate", {
            "email": email,
            "password": password
        })
            .then((res) => {
                console.log(res.data.jwtToken);
                window.localStorage.setItem('token', res.data.jwtToken);
                setToken(res.data.jwtToken);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<EntryGallery token={token} entries={entries}/>}/>
                <Route path={"/register"} element={<RegisterForm/>}/>
                <Route path={"/login"} element={<LoginForm login={login}/>}/>
            </Routes>
        </div>
    );
}

export default App;
