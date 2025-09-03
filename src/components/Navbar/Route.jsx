"use client";

import Link from "next/link";
import React from "react";

const Route = ({ href, name, onClick, className = "" }) => {
  return (
    <div className="p-6 transform hover:scale-110 duration-300 text-center text-2xl">
      {onClick ? (
        <button
          onClick={onClick}
          className={`cursor-pointer hover:text-slate-700 ${className}`}
        >
          {name}
        </button>
      ) : (
        <Link
          href={href}
          className={`cursor-pointer hover:text-slate-700 ${className}`}
        >
          {name}
        </Link>
      )}
    </div>
  );
};

export default Route;
