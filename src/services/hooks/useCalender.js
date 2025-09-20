import { useEffect, useState } from "react"
import {toJalaali} from "jalaali-js"

export default function useCalender() {
    const daysOfWeek = ["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنجشنبه", "جمعه", "شنبه"]
    const [firstDate, setFirstDate] = useState({}); 
    
    useEffect(() => {
        const dateNow = new Date();
        const newDate = toJalaali(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
        setFirstDate({year: newDate.jy, month: newDate.jm, day: newDate.jd, weekDay: dateNow.getDay()});
        localStorage.setItem("firstDate", JSON.stringify({year: newDate.jy, month: newDate.jm + 1, day: newDate.jd, weekDay: daysOfWeek[dateNow.getDay()]}))
    }, [])
    const generateDate = () => {
        const dates = [{
            year: firstDate.year,
            month: firstDate.month + 1,
            day: firstDate.day, 
            weekDay: daysOfWeek[firstDate.weekDay]
        }];
        const kabiseh = [1, 5, 9, 13, 17, 22, 26, 30];
        let weekDayCounter = firstDate.weekDay;
        let yearCounter = firstDate.year;
        let monthCounter = firstDate.month + 1;
        let dayCounter = firstDate.day;
        
        for(let i = 1; i <= 3; i++) {
            weekDayCounter = (weekDayCounter + 1) > 6 ? 0: weekDayCounter + 1;
            
            if(monthCounter < 7) {
                if((dayCounter + 1) > 31) {
                    monthCounter += 1;
                    dayCounter = 1;
                    dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                } else {
                    dayCounter += 1;
                    dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                }
            } else {
                if(monthCounter == 12) {
                    if(kabiseh.includes(yearCounter / 33)) {
                        if((dayCounter + 1) > 30) {
                            yearCounter += 1;
                            monthCounter = 1;
                            dayCounter = 1;
                            dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                        } else {
                            dayCounter += 1;
                            dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                        }
                    } else {
                        if((dayCounter + 1) > 29) {
                            yearCounter += 1;
                            monthCounter = 1;
                            dayCounter = 1;
                            dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                        } else {
                            dayCounter += 1;
                            dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                        }
                    }
                } else {
                    if((dayCounter + 1) > 30) {
                        monthCounter += 1;
                        dayCounter = 1;
                        dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                    } else {
                        dates.push({year: yearCounter, month: monthCounter, day: dayCounter, weekDay: daysOfWeek[weekDayCounter]})
                    }
                }
            }
        }
        return dates;
    }
    
    
    const getDates = () => {
        return generateDate();
    }
    return {getDates}
}