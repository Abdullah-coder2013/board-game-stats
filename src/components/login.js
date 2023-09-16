import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
const Authentication = (props) => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const login = async () => {
        try {

            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

            if (user) {
                props.setIsLoggedIn(true);
            }


        }
        catch (e) {

            console.error(e);
        }
        console.log("from login")
        console.log(auth.currentUser); // TODO: Shut of in Production
        // window.location.reload();
    }
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("password").value);
        }
        catch (e) {

            console.error(e);
        }
        console.log("from registraiton")
        console.log(auth.currentUser); // TODO: Shut of in Production
        window.location.reload();
    }
    return (
        <div>
            <input type="email" id="email" onChange={e => setLoginEmail(e.target.value)} />
            <br />
            <input type="password" id="password" onChange={e => setLoginPassword(e.target.value)} />
            <br />
            <button onClick={e => login()}>Login</button><br />

            <button onClick={e => signup()}>Sign Up</button>
        </div>
    )

}

export default Authentication;
