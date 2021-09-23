import style from './Calculator.module.css';
import { Slider } from "../Slider/Slider";
import SearchIcon from '@mui/icons-material/Search';
import { FoodList } from "../FoodList/FoodList";
import { FoodConfirmedList } from "../FoodConfirmedList/FoodConfirmedList";
import React, { ChangeEvent, useState } from "react";
import { Chart } from "../Chart/Chart";
import { FoodCalories } from "../FoodCalories/FoodCalories";

export function Calculator() {

  const purposeContent = [
    "Снизить вес",
    "Поддержать форму"
  ];

  const typeOfFoot = [
    "Кето",
    "Сбалансированный"
  ];

  const activeLevel = [
    "Лёгкая",
    "Средняя",
    "Тяжёлая",
  ];


  const [growth, setGrowth] = useState<string>("176");
  const [errorGrowth, setErrorGrowth] = useState<string>("");
  const [weight, setWeight] = useState<string>("73");
  const [errorWeight, setErrorWeight] = useState<string>("");
  const [age, setAge] = useState<string>("26");
  const [errorAge, setErrorAge] = useState<string>("");

  const onChangeGrowthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorGrowth("")
    setGrowth(e.currentTarget.value)
  };

  const onBlurGrowth = () => {
    if (growth === '') {
      setErrorGrowth('Укажите рост')
    }
  };

  const onChangeWeightHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorWeight("")
    setWeight(e.currentTarget.value)
  };

  const onBlurWeight = () => {
    if (weight === '') {
      setErrorWeight('Укажите вес')
    }
  };

  const onChangeAgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAge("")
    setAge(e.currentTarget.value)
  };

  const onBlurAge = () => {
    if (age === '') {
      setErrorAge('Укажите возраст')
    }
  };

  return (
    <div className={style.calculatorBlock}>
      <div className={style.calculator}>
        <div className={style.leftBlock}>
          <div className={style.mainTitle}>
            <h1 className={style.title}>Расчет рациона питания</h1>
          </div>
          <div className={style.howToUse}>
            <div className={style.howToUseBlock}>
              <h1>Как пользоваться</h1>
              <div className={style.howToUseText}>
                <p>Самостоятельное составление индивидуального плана питания.</p>
                Калькулятор позволит рассчитать и проанализировать ваш рацион питания.
                Как пользоваться калькулятором:
                <li>Заполните данные и себе.</li>
                <li>Составте топ ваших любимых продуктов.</li>
                <li>Получите расчет рациона питания.</li>
              </div>
            </div>
          </div>
          <div className={style.topFood}>
            <hr></hr>
            <div className={style.howToUseBlock}>
              <h1>Топ продуктов</h1>
              <div className={style.howToUseText}>
                <p>Выберите ваши любимые продукты и распределите их от 1 до 10</p>
              </div>
              <input placeholder={'Поиск'} className={style.searchInput}/>
              <SearchIcon className={style.searchIcon}/>
            </div>
          </div>
          <div className={style.selectFood}>
            <div className={style.howToUseBlock}>
              <FoodList/>
            </div>
          </div>




          <div className={style.dietFinal}>
            <hr></hr>
            <div className={style.dietDataBlock}>
              <h1>Ваш рацион</h1>
              <div className={style.dietResult}>
                <div className={style.caloriesCompositions}>
                  <div className={style.caloriesFinal}>
                    <h1>Калории</h1>
                    <p>1852</p>
                  </div>
                  <div className={style.caloriesFinal}>
                    <h1>Белки</h1>
                    <p>131.3</p>
                  </div>
                </div>
                <div className={style.caloriesCompositions}>
                  <div className={style.caloriesFinal}>
                    <h1>Жиры</h1>
                    <p>65.1</p>
                  </div>
                  <div className={style.caloriesFinal}>
                    <h1>Углеводы</h1>
                    <p>179.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.finalChart}>
            <div className={style.chartBlock}>
              <div className={style.chart}>
                <Chart/>
                <span className={style.protein}>Белки</span>
                <span className={style.fat}>Жиры</span>
                <span className={style.carbonates}>Углеводы</span>
              </div>
            </div>
          </div>
        </div>



        <div className={style.rightBlock}>
          <div className={style.mainCalcBlock}>
            <div className={style.calcBlock}>
              <div className={style.growthAndWeight}>
                <div className={style.growth}>
                  <span>Рост</span>
                  <input value={growth} onChange={onChangeGrowthHandler} onBlur={onBlurGrowth}/>
                  {errorGrowth ? <div className={style.errorMessage}>{errorGrowth}</div> : null}
                </div>
                <div className={style.weight}>
                  <span>Вес</span>
                  <input value={weight} onChange={onChangeWeightHandler} onBlur={onBlurWeight}/>
                  {errorWeight ? <div className={style.errorMessage}>{errorWeight}</div> : null}
                </div>
              </div>
              <div className={style.ageAndSex}>
                <div className={style.age}>
                  <span>Возраст</span>
                  <input value={age} onChange={onChangeAgeHandler} onBlur={onBlurAge}/>
                  {errorAge ? <div className={style.errorMessage}>{errorAge}</div> : null}
                </div>
                <div className={style.weight}>
                  <span>Пол</span>
                  <select className={style.selectSex}>
                    <option>Мужской</option>
                    <option>Женский</option>
                  </select>
                </div>
              </div>
              <div className={style.yourPurpose}>
                <span>Ваша цель</span>
                <Slider content={purposeContent}/>
              </div>
              <div className={style.yourPurpose}>
                <span>Тип питания</span>
                <Slider content={typeOfFoot}/>
              </div>
              <div className={style.yourPurpose}>
                <span>Уровень активности</span>
                <Slider content={activeLevel}/>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className={style.foodConfirmed}>
            <div className={style.calcBlock}>
              <FoodConfirmedList/>
            </div>
          </div>



          <div className={style.dietFinal}>
            <hr></hr>
            <div className={style.dietDataBlock}>
              <h1>Калорийность</h1>
              <div className={style.dietResult}>
                <FoodCalories/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={style.btnComplete}>РАССЧИТАТЬ</button>
      <div className={style.btnCover}></div>

    </div>
  )
}
