import { useState } from 'react';
import './Table.css'

function Table (props) {
    const [search, setSearch] = useState("");
    const searchHandle = (event) => setSearch(event.target.value);
    return (
        <div>
            <form className="search" >
                <input
                type="search"
                id="search"
                name="search"
                placeholder="search"
                onChange={searchHandle}
                />
                <input type="submit" value="SEARCH" />
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>USERNAME</td>
                        <td>EMAIL</td>
                        <td>PASSWORD</td>
                        <td>EXPERIENCE</td>
                        <td>LVL</td>
                        <td>ACTION</td>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((item) => {
                        if (item.username === search || search === ""){
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.experience}</td>
                                <td>{item.lvl}</td>
                                <td>
                                    <button className='edit' onClick={() => props.onEditPlayer(item)}>Edit</button>
                                    <button className='delete' onClick={() => props.onDeletePlayer(item)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;