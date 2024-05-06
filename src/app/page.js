"use client";

import { useState } from "react";
import { getMonth } from "./components/util";
import { CalendarWeek } from "./components/CalendarWeek";
import dayjs from "dayjs";

const data = [
  { leaveRequest: "shit happened", name:"worker1", date: "2024-05-27" },
  { leaveRequest: "shit happened2", name:"worker2", date: "2024-05-27" },
  { leaveRequest: "shit happened2", name:"worker2", date: "2024-05-27" },
  { leaveRequest: "shit happened2", name:"worker2", date: "2024-05-27" },
  { leaveRequest: "shit happened", name:"worker13", date: "2024-05-28" },
];

export default function Home() {
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const calendarDataMatrix = getMonth(currentMonth, data);
  return (
    <div>
      <div className="flex w-[100%] justify-between">
        <h2 className="text-[18px] text-bold text-center">Чөлөөтэй ажилчид</h2>
        <div className="flex py-[8px] px-[12px] border-[1px] border-[#ECEDF0] rounded-md">
          <button onClick={()=>{setCurrentMonth(currentMonth -1)}}>&larr;</button>
          <p className="text-[#3F4145]">{currentMonth}</p>
          <button onClick={()=>{setCurrentMonth(currentMonth +1)}}>&rarr;</button>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="grid grid-cols-7">
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Даваа</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Мягмар</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Лхагва</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Пүрэв</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Баасан</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Бямба</p>
            <p className="text-[#717171] text-center text-[12px] font-semi-bold bottom-[5px] border-[1px] border-[#A9A9A9] left-[5px]">Ням</p>
        </div>
        <CalendarWeek propsWeekCalendar={calendarDataMatrix}/>
      </div>
    </div>
  );
}
