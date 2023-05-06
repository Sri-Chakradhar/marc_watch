import React from "react";
import Route from "./Route";

const Routecontents = () => {
    return(
        <div>
            <div className="grid grid-flow-row grid-cols-3 items-center">
                <Route href="../../pages/Contact.jsx" name="Contact" />
                <Route href="../../pages/Deals.jsx" name="Deals" />
                <div className="p-3 pl-3">
                    <a href="../../pages/Login.jsx">
                        <button className="font-serif text-2xl text-center p-3 hover:border-gray-600 border-transparent border-2 hover:border-2 rounded-lg hover:bg-gradient-to-tr hover:from-slate-700 hover:from-10% hover:via-slate-400 hover:via-50% hover:to-white hover:text-slate-600">Login</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Routecontents