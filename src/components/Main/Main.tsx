import style from './Main.module.css';
import s from '../../style/Container.module.css';
import { Sidebar } from "../Sidebar/Sidebar";
import { Instruction } from "../Instruction/Instruction";
import { Calculator } from "../Calculator/Calculator";


export function Main() {

  return (
    <div className={`${style.main} ${s.container}`}>
      <Sidebar/>
      <Instruction/>
      <Calculator/>
    </div>
  )
}