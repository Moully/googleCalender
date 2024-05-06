"use client"
import React from "react";
import { Day } from "./Day";

export function CalendarWeek(props) {
  const { propsWeekCalendar } = props;
  if (!propsWeekCalendar) return null;
  return (
    <div>
      {propsWeekCalendar.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7">
          {week.map((dayData, dayIndex) => (
            <div
              key={dayIndex}
              className="relative w-100 h-[120px] border-[1px] border-[#A9A9A9] overflow-scroll"
            >
              <p className="text-[#717171] absolute bottom-[5px] left-[5px]">
                {dayData.day.format("DD")}
              </p>
              <Day propsDay={dayData.leaveRequestOfDay} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
