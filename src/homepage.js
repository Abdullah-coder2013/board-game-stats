import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { auth } from "./firebase";
import Chart from "react-google-charts";
import EntryModal from "./components/entry";


const Homepage = () => {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [data, setdata] = useState();

    let email;

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
    }

    useEffect(() => {
        if (currentUser != null) {
            email = currentUser['email'].split("@")[0];
            email = email.replace(".", "-");
    
        fetch(`https://board-game-518ed-default-rtdb.europe-west1.firebasedatabase.app/${email}.json`)
            .then(response => response.json())
            .then(json => setdata(json));
        }
    }, [currentUser]);
    

    if (currentUser != null) {
        // getData();
    }
    console.log(data);
    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="p-10">
                {currentUser && <h1 className="m-auto text-4xl font-bold">{currentUser.email.match(".*?(?=@)")[0]}'s Statistics:</h1>}
                {currentUser == null && <h1 className="m-auto text-4xl font-bold">Please Login/Signup to view your statistics</h1>}
                <br/>
                <br/>
                {currentUser && <button className="transition ease-in-out p-1 rounded-xl text-white active:bg-blue-700  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={(e) => setOpen(true)}>New Entry</button>}
                {open && <EntryModal currentUser={currentUser} />}
            </div>
        </div>
    );
}

export default Homepage;