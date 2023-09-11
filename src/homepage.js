import { useState } from "react";
import Authentication from "./components/login";
import Navbar from "./components/navbar";


const Homepage = () => {
    const [open, setOpen] = useState(false);
    const [auths, setAuths] = useState(false);



    return (
        <div>
            <Navbar open={open} setOpen={setOpen} auths={auths} setAuths={setAuths}/>
            <div className="p-10">
                <h1 className="text-6xl font-bold">Homepage</h1>
                {/* <button onClick={() => {setAuths(true)}} className="transition ease-in-out p-1 rounded-xl text-white bg-blue-500 active:bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Login/Sign up</button> */}
                {/* {auths && <Authentication open={auths} setOpen={setAuths}/>} */}
                <br/>
                <br/>
                
            </div>
        </div>
    );
}

export default Homepage;