import {ChangeEvent, FormEvent, useState} from "react";

type LoginFormProps = {
    login(email: string, password: string): void,
}

export default function LoginForm(props: LoginFormProps) {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleSubmitLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.login(email, password);
    }

    return (
        <form onSubmit={handleSubmitLogin}>
            <input placeholder={"Email"} type={"email"} name={"email"} value={email} onChange={handleChangeEmail}/>
            <input placeholder={"Password"} type={"password"} name={"password"} value={password}
                   onChange={handleChangePassword}/>
            <button>Login NOW!</button>
        </form>
    );
}