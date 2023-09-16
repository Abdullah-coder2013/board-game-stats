import { auth } from "../firebase";

const EntryModal = (props) => {
    const saveDetails = () => {
        let address = auth.currentUser['email'].split("@")[0];
        address = address.replace(".", "-");
        console.log(address);
        fetch(`https://board-game-518ed-default-rtdb.europe-west1.firebasedatabase.app/${address}.json`,{
            method: 'POST',
            body: JSON.stringify({
                boardGame: document.getElementById("board-game").value,
                players: document.getElementById("player-count").value,
                points: document.getElementById("points").value,
                date: document.getElementById("date").value,
                result: document.getElementById("result").value
            })
        })
        window.location.reload();
    }
    
        
    return (
        <div className="flex justify-center bg-slate-400/20 m-28 rounded-xl">
            <div className="p-10">
                <h1 className="m-auto text-4xl font-bold">New Entry</h1>
                <div>
                    <label>Board Game: </label>
                    <select id="board-game">
                        <option value="minecraft-builders-biomes" key="1">Minecraft Builders and Biomes</option>
                        <option value="chess" key="2">Chess</option>
                        <option value="monopoly" key="3">Monopoly</option>
                    </select>
                    <br/>
                    <label>Players: </label>
                    <select id="player-count">
                        <option value="2" key="2">2</option>
                        <option value="3" key="3">3</option>
                        <option value="4" key="4">4</option>
                    </select>
                    <br/>
                    <label>Points: </label>
                    <input type="number" id="points"/>
                    <br/>
                    <label>Date: </label>
                    <input type="date" id="date"/>
                    <br/>
                    <select id="result">
                        <option value="won" key="Won">Won</option>
                        <option value="notfirst" key="notFirst">Wasn't the first</option>
                        <option value="lost" key="lost">Lost</option>
                    </select>
                    <button className="transition ease-in-out p-1 rounded-xl text-white active:bg-blue-700  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" onClick={() => saveDetails()}>Submit</button>

                </div>
            </div>
        </div>
    )
}

export default EntryModal;