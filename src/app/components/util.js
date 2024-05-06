import dayjs from "dayjs";

export function getMonth(month = dayjs().month(), data) {

    if(!data) return

    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1));
    const weekDayOfFirstDay = firstDayOfTheMonth.day();
    let currentDayOfMonth = 1 - weekDayOfFirstDay;
    const rows = [];
  
    for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < 7; j++) {
            const day = firstDayOfTheMonth.add(currentDayOfMonth, "day");
            const leaveRequestOfDay = data.filter(item => dayjs(item.date).isSame(day, "day"));
            currentDayOfMonth++;
            row.push({day,leaveRequestOfDay});
        }
        rows.push(row);
    }
    return rows;
}
