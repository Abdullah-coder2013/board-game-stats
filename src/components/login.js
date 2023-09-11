import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
const Authentication = (props) => {

    const login = async () => {
        try {

            const user = await signInWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("password").value);

        }
        catch (e) {

            console.error(e);
        }
        console.log(auth.currentUser); // TODO: Shut of in Production
        window.location.reload();
    }
    const signup = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, document.getElementById("email").value, document.getElementById("password").value);
        }
        catch (e) {

            console.error(e);
        }
        console.log(auth.currentUser); // TODO: Shut of in Production
        window.location.reload();
    }
    return (
        <div>
            <input type="email" id="email"/>
            <br/>
            <input type="password" id="password"/>
            <br/>
            <button onClick={login}>Login</button><br/>

            <button onClick={signup}>Sign Up</button>
        </div>
    )

}

export default Authentication;
