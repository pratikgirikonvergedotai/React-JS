import React from "react";
import "../App.css"

import full_data from "../data"
import Content from "./Content";


export default function Travel(){
    const travel = full_data.map(data => <Content key={data.id} {...data} />)

    return (
        <div>
            {travel}
        </div>
    )
}