import React, { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

export default function CalendarComponent() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = Array(firstDay).fill(null);
  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="px-2 py-1 bg-gray-200 rounded">&lt;</button>
        <span className="font-bold text-lg">
          {today.toLocaleString("default", { month: "long" })} {currentYear}
        </span>
        <button onClick={nextMonth} className="px-2 py-1 bg-gray-200 rounded">&gt;</button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day} className="py-2 text-xs text-gray-500">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j} className="border px-2 py-2 text-center h-12">
                  {day && (
                    <button className="w-8 h-8 rounded-full hover:bg-primary-blue hover:text-white transition">
                      {day}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center text-sm text-gray-500">
        * Haz clic en un día para ver los eventos (demo)
      </div>
    </div>
  );
}