import { useEffect, useState } from "react"
import './Form.css'

function Form(props) {
    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [experience, setExperience] = useState("");
    const [lvl, setLvl] = useState("");

    useEffect(() => {
        if (props.form) {
            setId(props.form.id);
            setUsername(props.form.username);
            setEmail(props.form.email);
            setPassword(props.form.password);
            setExperience(props.form.experience);
            setLvl(props.form.lvl);
        }
    }, [props.form]);

    const usernameHandle = (event) => setUsername(event.target.value);
    const emailHandle = (event) => setEmail(event.target.value);
    const passwordHandle = (event) => setPassword(event.target.value);
    const experienceHandle = (event) => setExperience(event.target.value);
    const lvlHandle = (event) => setLvl(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        if (props.formPlayer) {
            const data = {
                id: props.formPlayer.id,
                username: username,
                email: email,
                password: password,
                experience: experience,
                lvl: lvl,
            };
            props.onUpdatePlayer(data);
        } else {
            const data = {
                username: username,
                email: email,
                password: password,
                experience: experience,
                lvl: lvl,
            }
            props.onAddPlayer(data);
        }

        setUsername("");
        setEmail("");
        setPassword("");
        setExperience("");
        setLvl("");
    };

    const title = props.formPlayer
    ? "EDIT PLAYER"
    : "ADD PLAYER"

    return (
        <form className="form_controls" onSubmit={onSubmit}>
            <h2>{title}</h2>
            <div className="form_control">
                <label>Username</label>
                <input type="text" value={username} onChange={usernameHandle}></input>
            </div>
            <div className="form_control">
                <label>Email</label>
                <input type="text" value={email} onChange={emailHandle}></input>
            </div>
            <div className="form_control">
                <label>Password</label>
                <input type="text" value={password} onChange={passwordHandle}></input>
            </div>
            <div className="form_control">
                <label>Experience</label>
                <input type="text" value={experience} onChange={experienceHandle}></input>
            </div>
            <div className="form_control">
                <label>Lvl</label>
                <input type="text" value={lvl} onChange={lvlHandle}></input>
            </div>

            <button type="submit" className="form_actions">Submit</button>
        </form>
    )
};

export default Form;