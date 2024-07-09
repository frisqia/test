import React from "react";
import download from "../asset/download.png"

function HeaderComp(){

    return(
        <div>
            <div className="logo">
            <img src={download} alt="logo" ></img>
            <div>
                <h1>METISKA FARMA</h1>
                <p>PARMACEUTICAL INDUSTRY</p>
            </div>
        </div>
           <hr/>
        </div>
    )
}

export default HeaderComp;