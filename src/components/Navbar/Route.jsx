import React from "react";

const Route = (props) => {
    return(
        <div className="p-6 text-center text-2xl">
            <a className="hover:transform hover:scale-50 hover:text-slate-600" href={props.href}>{props.name}</a>
        </div>
    )
}

export default Route