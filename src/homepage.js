import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { auth } from "./firebase";
import Chart from "react-google-charts";

const Homepage = () => {
    const [auths, setAuths] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [userData, setUserData] = useState();

    let address;

    auth.onAuthStateChanged(async user => {
        if (user) {
            setIsLoggedIn(true);
            setCurrentUser(user);
        }
        else {
            setIsLoggedIn(false);
            setCurrentUser();
        }
    })
    if (currentUser != null) {
        address = auth.currentUser['email'].split("@")[0];
        address = address.replace(".", "-");
    }

    useEffect(() => {
        if (currentUser != null) {
        fetch(`https://board-game-518ed-default-rtdb.europe-west1.firebasedatabase.app/${address}.json`)
            .then(response => response.json())
            .then(json => console.log(json))
        }
    }, [address, currentUser]);
    

    if (currentUser != null) {
        // getData();
    }
    console.log(userData);
    return (
        <div>
            <Navbar auths={auths} setAuths={setAuths} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="p-10">
                {currentUser && <h1 className="m-auto text-4xl font-bold">{currentUser.email.match(".*?(?=@)")[0]}'s Statistics:</h1>}
                {currentUser == null && <h1 className="m-auto text-4xl font-bold">Please Login/Signup to view your statistics</h1>}
                <br/>
                <br/>
                {/* {currentUser && getData()} */}
            </div>
        </div>
    );
}

export default Homepage;