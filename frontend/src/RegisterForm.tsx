import {ChangeEvent, FormEvent, useState} from "react";
import {User} from "./User";
import axios from "axios";

export default function RegisterForm() {

    const [success, setSuccess] = useState<boolean>(false);

    const [userToRegister, setUserToRegister] = useState<User>({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {
        const name: string = event.target.name;
        setUserToRegister({
            ...userToRegister,
            [name]: event.target.value,
        });
    }

    function handleSubmitRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("/api/auth/register", userToRegister)
            .then(() => {
                setSuccess(true);
                setUserToRegister({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: ""
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmitRegister}>
            <input placeholder={"Firstname"} value={userToRegister.firstname} name={"firstname"}
                   onChange={handleChangeForm}/>
            <input placeholder={"Lastname"} value={userToRegister.lastname} name={"lastname"}
                   onChange={handleChangeForm}/>
            <input placeholder={"Email"} type={"email"} value={userToRegister.email} name={"email"}
                   onChange={handleChangeForm}/>
            <input placeholder={"Password"} type={"password"} value={userToRegister.password} name={"password"}
                   onChange={handleChangeForm}/>
            <button type={"submit"}>Register NOW!</button>
            {success ? "Registered!" : ""}
        </form>
    );

}