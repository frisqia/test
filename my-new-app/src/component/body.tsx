import React from "react";
import CUTI from "../asset/CUTI.jpg";
import prcs_imprvmnt_tols from "../asset/prcs_imprvmnt_tols.jpg"
import health from "../asset/health.jpg"
import activity from "../asset/activity.png"

function BodyComp(){

    return(
        <div>
            <div>
                <h3>where are you going?</h3>
                <img src={CUTI} alt="pasti" width={200} height={200} />
            </div>
            <div>
                <h3>Get Well Soon</h3>
                <img src={health} alt="health" width={200} height={200}/>
            </div>
            <div>
                <h3>Succsess with us</h3>
                <img src={prcs_imprvmnt_tols} alt="Improvement" width={200} height={200}/>
            </div>
            <div>
                <h3>All About Of Metiska</h3>
                <img src={activity} alt="activity" width={200} height={200} />
            </div>
           

        </div>
    )
}

export default BodyComp;