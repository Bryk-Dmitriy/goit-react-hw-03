export default function SearchBox({setFilter}) {
    return(
        <div>
        <p>Find contacts by name</p>
        <input type="text"
            style={{ width: '300px' }} 
            onChange={(event) => setFilter(event.target.value)}/>
        </div>
    )
};
