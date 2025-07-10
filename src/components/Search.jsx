export default function Search({onSearchChange}){
    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text"  name="search"
             onChange={(e)=> onSearchChange(e.target.value)}
            />

        </div>
    )
}