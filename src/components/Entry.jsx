import React from "react";
import emojipedias from "../emojipedia"
import Term from "./Term";

function Entry() {
    return (
        <dl className="dic">
            {emojipedias.map(e => {
                return <Term key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning}></Term>
            })}
        </dl>
    );
}

export default Entry;