import { useState } from 'react';

import { Sidebar } from '../Sidebar/Sidebar';
import { Instruction } from '../Instruction/Instruction';
import { Calculator } from '../Calculator/Calculator';

import style from './Main.module.css';
import s from '../../style/Container.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from "react-dnd-html5-backend";


export function Main() {

  const [theme, setTheme] = useState(true);

  return (
    <div className={theme ? style.main : style.mainDark}>
      <div className={s.wrapper}>
        <div className={s.container}>
          <Sidebar theme={theme} setTheme={setTheme}/>
          <div>
            <DndProvider backend={HTML5Backend}>
              <Instruction theme={theme}/>
              <Calculator theme={theme}/>
            </DndProvider>
          </div>
        </div>
      </div>
    </div>
  )
}