import React, { ChangeEvent, useEffect, useState } from 'react';

import { Slider } from '../Slider/Slider';
import { FoodList } from '../FoodList/FoodList';
import { FoodConfirmedList } from '../FoodConfirmedList/FoodConfirmedList';
import { Chart } from '../Chart/Chart';
import { FoodCalories } from '../FoodCalories/FoodCalories';

import style from './Calculator.module.css';
import SearchIcon from '@mui/icons-material/Search';

import coverBtnUp from '../../assets/btnCoverUp.png';
import coverBtnDarkUp from '../../assets/btnCoverDarkUp.png';
import coverBtnDown from '../../assets/btnCoverDown.png';
import coverBtnDarkDown from '../../assets/btnCoverDarkDown.png';
import howToUseCover from '../../assets/howUseCover.png';
import howToUseCoverDark from '../../assets/howUseCoverDark.png';
import foodCover from '../../assets/foodCover.png';
import foodCoverDark from '../../assets/foodCoverDark.png';
import { useDispatch, useSelector } from "react-redux";
import { getUsers, UsersType } from "../../redux/reducers";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { AppRootStateType } from "../../redux/store";

type themeCalculatorType = {
  theme: boolean
};

export function Calculator(props: themeCalculatorType) {

  const dispatch = useDispatch();
  // @ts-ignore
  const food = useSelector<AppRootStateType, UsersType[]>(state => state.foods.outputFoodList);

  const [foods, setFoods] = useState<UsersType[]>(food);

  useEffect(()=>{
    setFoods(food)
  },[food]);

  useEffect(()=>{
    dispatch(getUsers(1,10))
  },[]);

  const [profileId, setProfileId] = useState<number>(5);

  const purposeContent = [
    'Снизить вес',
    'Поддержать форму'
  ];

  const typeOfFoot = [
    'Кето',
    'Сбалансированный'
  ];

  const activeLevel = [
    'Лёгкая',
    'Средняя',
    'Тяжёлая',
  ];

  // const [foods, setFoods] = useState([
  //   {id: 1, name: "Молоко"},
  //   {id: 2, name: "Огурец"},
  //   {id: 3, name: "Банан"},
  //   {id: 4, name: "Хлеб"},
  //   {id: 5, name: "Сыр"},
  //   {id: 6, name: "Печенье"},
  //   {id: 7, name: "Киви"},
  //   {id: 8, name: "Спаржа"},
  // ]);

  const [growth, setGrowth] = useState<string>('176');
  const [errorGrowth, setErrorGrowth] = useState<string>('');
  const [weight, setWeight] = useState<string>('73');
  const [errorWeight, setErrorWeight] = useState<string>('');
  const [age, setAge] = useState<string>('26');
  const [errorAge, setErrorAge] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [errorSearch, setErrorSearch] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [active, setActive] = useState<string>('');
  const [topFoodList, setTopFoodList] = useState<string[]>(['']);
  const [dragMode, setDragMode] = useState<boolean>(false);

  const lightTheme = props.theme;

  const onChangeGrowthHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorGrowth('')
    setGrowth(e.currentTarget.value)
  };

  const onBlurGrowth = () => {
    if (growth === '') {
      setErrorGrowth('Укажите рост')
    }
  };

  const onChangeWeightHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorWeight('')
    setWeight(e.currentTarget.value)
  };

  const onBlurWeight = () => {
    if (weight === '') {
      setErrorWeight('Укажите вес')
    }
  };

  const onChangeAgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorAge('')
    setAge(e.currentTarget.value)
  };

  const onBlurAge = () => {
    if (age === '') {
      setErrorAge('Укажите возраст')
    }
  };

  const onChangeSexHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSex(e.currentTarget.value)
  };

  useEffect(() => {
    setSex('men')
  }, []);

  const onBlurSearch = () => {
    if (errorSearch === '') {
      setErrorSearch('Не найдено')
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('growth:' + growth, 'weight:' + weight, 'age:' + age, 'sex:' + sex, 'purpose:' + purpose, 'type:' + type, 'active:' + active);
  }

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragItem = foods[dragIndex]
    if (dragItem) {
      setFoods((prevState => {
        const coppiedStateArray = [...prevState]
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem)
        coppiedStateArray.splice(dragIndex, 1, prevItem[0])
        return coppiedStateArray
      }))
    }
  }

  return (
    <div className={style.calculatorBlock}>
      <DndProvider backend={HTML5Backend}>
        <>
          <form onSubmit={handleSubmit}>
            <div className={style.calculator}>
              <div className={style.leftBlock}>
                <div className={lightTheme ? style.mainTitle : style.mainTitleDark}>
                  <h1 className={style.title}>Расчет рациона питания</h1>
                </div>
                <div className={lightTheme ? style.howToUse : style.howToUseDark}>
                  <img src={lightTheme ? howToUseCover : howToUseCoverDark} className={style.howToUseCover}/>
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
                <div className={lightTheme ? style.topFood : style.topFoodDark}>
                  <hr className={lightTheme ? style.topFoodHr : style.topFoodHrDark}/>
                  <div className={style.howToUseBlock}>
                    <h1>Топ продуктов</h1>
                    <div className={style.howToUseText}>
                      <p>Выберите ваши любимые продукты и распределите их от 1 до 10</p>
                    </div>
                    <input value={profileId} onChange={(e) => setProfileId(e.currentTarget.valueAsNumber)}
                           onBlur={onBlurSearch} placeholder={'Поиск'}
                           className={lightTheme ? style.searchInput : style.searchInputDark}/>
                    <SearchIcon  className={style.searchIcon}/>
                    {errorSearch ? <div className={style.errorSearch}>{errorSearch}</div> : null}
                  </div>
                </div>
                <div className={lightTheme ? style.selectFood : style.selectFoodDark}>
                  <div className={style.howToUseBlock}>
                    <div className={style.scrollBlock}>
                      <FoodList theme={lightTheme}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.rightBlock}>
                <div className={lightTheme ? style.mainCalcBlock : style.mainCalcBlockDark}>
                  <div className={style.calcBlock}>
                    <div className={style.growthAndWeight}>
                      <div className={style.growth}>
                        <span>Рост</span>
                        <label htmlFor={'growth'}/>
                        <input id={'growth'} className={lightTheme ? style.growthInput : style.growthInputDark}
                               value={growth}
                               onChange={onChangeGrowthHandler} onBlur={onBlurGrowth}/>
                        {errorGrowth ? <div className={style.errorMessage}>{errorGrowth}</div> : null}
                      </div>
                      <div className={style.weight}>
                        <span>Вес</span>
                        <label htmlFor={'weight'}/>
                        <input id={'weight'} className={lightTheme ? style.weightInput : style.weightInputDark}
                               value={weight}
                               onChange={onChangeWeightHandler} onBlur={onBlurWeight}/>
                        {errorWeight ? <div className={style.errorMessage}>{errorWeight}</div> : null}
                      </div>
                    </div>
                    <div className={style.ageAndSex}>
                      <div className={style.age}>
                        <span>Возраст</span>
                        <label htmlFor={'age'}/>
                        <input id={'age'} className={lightTheme ? style.ageInput : style.ageInputDark} value={age}
                               onChange={onChangeAgeHandler} onBlur={onBlurAge}/>
                        {errorAge ? <div className={style.errorMessage}>{errorAge}</div> : null}
                      </div>
                      <div className={style.weight}>
                        <span>Пол</span>
                        <label htmlFor={'sex'}/>
                        <select className={lightTheme ? style.selectSex : style.selectSexDark}
                                onChange={onChangeSexHandler}>
                          <option id={'men'} value={'men'}>Мужской</option>
                          <option id={'women'} value={'women'}>Женский</option>
                        </select>
                      </div>
                    </div>
                    <div className={style.yourPurpose}>
                      <span>Ваша цель</span>
                      <Slider content={purposeContent} setValue={setPurpose} theme={lightTheme}/>
                    </div>
                    <div className={style.yourPurpose}>
                      <span>Тип питания</span>
                      <Slider content={typeOfFoot} setValue={setType} theme={lightTheme}/>
                    </div>
                    <div className={style.yourPurpose}>
                      <span>Уровень активности</span>
                      <Slider content={activeLevel} setValue={setActive} theme={lightTheme}/>
                    </div>
                    <hr className={lightTheme ? style.hrRight : style.hrRightDark}/>
                  </div>
                </div>
                <div className={lightTheme ? style.foodConfirmed : style.foodConfirmedDark}>
                  <img src={lightTheme ? foodCover : foodCoverDark} className={style.foodConfirmedCover}/>
                  <div className={style.foodConfirmedBlock}>
                    {foods.map((f, i) => {
                      return (
                        <FoodConfirmedList
                          item={f.name}
                          index={i}
                          id={f.id}
                          theme={lightTheme}
                          dragMode={dragMode}
                          setDragMode={setDragMode}
                          moveCard={moveCard}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <img src={lightTheme ? coverBtnUp : coverBtnDarkUp} className={style.imgBtnRight}/>
            <img src={lightTheme ? coverBtnDown : coverBtnDarkDown} className={style.imgBtnLeft}/>
            <button type={'submit'} className={lightTheme ? style.btnComplete : style.btnCompleteDark}>РАССЧИТАТЬ
            </button>
            <div className={style.finalBlock}>
              <div className={style.leftBlock}>
                <div className={lightTheme ? style.dietFinal : style.dietFinalDark}>
                  <img src={lightTheme ? howToUseCover : howToUseCoverDark} className={style.dietFinalCover}/>
                  <hr className={lightTheme ? style.dietFinalHr : style.dietFinalHrDark}/>
                  <div className={style.dietFinalDataBlock}>
                    <h1>Ваш рацион</h1>
                    <div className={style.dietResult}>
                      <div className={style.caloriesCompositions}>
                        <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                          <h1>Калории</h1>
                          <p>1852</p>
                        </div>
                        <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                          <h1>Белки</h1>
                          <p>131.3</p>
                        </div>
                      </div>
                      <div className={style.caloriesCompositions}>
                        <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                          <h1>Жиры</h1>
                          <p>65.1</p>
                        </div>
                        <div className={lightTheme ? style.caloriesFinal : style.caloriesFinalDark}>
                          <h1>Углеводы</h1>
                          <p>179.8</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={lightTheme ? style.finalChart : style.finalChartDark}>
                  <div className={style.chartBlock}>
                    <Chart/>
                    <span className={style.protein}>Белки</span>
                    <span className={style.fat}>Жиры</span>
                    <span className={style.carbonates}>Углеводы</span>
                  </div>
                </div>
              </div>
              <div className={style.rightBlock}>
                <div className={lightTheme ? style.dietFinalData : style.dietFinalDataDark}>
                  <hr className={lightTheme ? style.dietFinalHr : style.dietFinalHrDark}/>
                  <div className={style.dietFinalDataBlock}>
                    <h1>Калорийность</h1>
                    <div className={style.dietResult}>
                      <FoodCalories theme={lightTheme}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      </DndProvider>
    </div>
  )
}
