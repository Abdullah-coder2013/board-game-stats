import { useState } from "react";
import EntryModal from "./components/entry";
import { db } from "./firebase"

const Homepage = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h1 className="text-6xl font-bold">Homepage</h1>
            <button onClick={() => {setOpen(true)}} className="transition ease-in-out p-1 rounded-xl text-white bg-blue-500 active:bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">New Entry</button>
            {open && <EntryModal open={open} setOpen={setOpen}/>}
        </div>
    );
}

export default Homepage;