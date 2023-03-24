import React from "react";
import Card from "./Card";

function List(users){ 
    return (
        <div className="List">
            {users.map((users, index) => (<Card key={index} user={users}/>))}
        </div>
    )
}

export default List;