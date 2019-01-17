import React from "react";
import Listformat from './listformat'

const List = ({listItems})=> {
    return (
    <div className="content-section list">
     { listItems && listItems.map(listItem => {
        return(
        <Listformat listItem={listItem} key={listItem.id}/>
        )
     })}
    </div>
    )
}

export default List;
