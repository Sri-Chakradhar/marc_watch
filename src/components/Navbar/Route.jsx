import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";


const Route = (props) => {
    const userrout = useRouter();

    return(
        <div className="p-6 transform hover:scale-110 duration-300 text-center text-2xl">
            <Link href={props.href} className="cursor-pointer hover:text-slate-700">{props.name}</Link>
        </div>
    )
}

export default Route