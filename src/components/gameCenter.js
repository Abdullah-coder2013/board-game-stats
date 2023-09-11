const Games = (props) => {
    return (
        <div className="flex justify-evenly">
            {/* <button onClick={() => {props.setOpen(true)}} className="transition ease-in-out p-1 rounded-xl text-white bg-blue-500 active:bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">New Entry</button> */}
            <br/>
            {/* {props.open && <EntryModal open={props.open} setOpen={props.setOpen}/>} */}
            <button className="flex mx-4 font-bold">Games</button>
            <button className="flex mx-4 font-bold">Statistics</button>
        </div>
    )
}
export default Games;