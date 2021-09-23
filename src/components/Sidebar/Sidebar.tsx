import style from "./Sidebar.module.css";
import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";

const label = {inputProps: {'aria-label': 'Switch demo'}};

export function Sidebar() {

  const locale = 'en';
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  const day = today.toLocaleDateString(locale, {weekday: 'long'});
  const time = today.toLocaleTimeString(locale, {hour: 'numeric', hour12: false, minute: 'numeric'});
  const date = `${day},  ${today.toLocaleDateString(locale, {month: 'long'})}\n\n ${today.getDate()}`;

  return (
    <div className={style.sidebar}>
      <Switch {...label} defaultChecked color={'default'}/>
      <div className={style.time}>
        <div className={style.clock}>{time}</div>
        <div className={style.date}>{date}</div>
      </div>
      <div className={style.navigation}>
        <div className={style.purpose}>
          <div className={style.purposeContent}>
            <div className={style.circle}></div>
            <div className={style.purposeText}>
              С чего начать
              <div>Цель</div>
            </div>
          </div>
        </div>
        <div className={style.calculation}>
          <div className={style.calculationContent}>
            <div className={style.circle}></div>
            <div className={style.calculationText}>
              Рацион питания
              <div>Расчёт</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}