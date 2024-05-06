"use client"
import React from "react";
export function Day({propsDay}){
    if(!propsDay) return null
    return (
        <div className="flex flex-col py-2 px-2 m-auto place-items-center">
            {propsDay.map((requests, requestsIndex)=>(
                <p key={requestsIndex} className={"text-[12px] my-1 rounded-md px-2 py-2 w-fit " + (requests.leaveRequest === "shit happened" ? "text-[#16A94A] bg-[#EAF6ED]": "text-[#1890FF] bg-[#E8F4FF]")}>{requests.name}</p>
            ))}
        </div>
    )
}