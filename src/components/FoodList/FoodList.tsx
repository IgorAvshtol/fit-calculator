import style from './FoodList.module.css';
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { AppRootStateType } from "../../redux/store";
import { replaceFood, UsersType } from "../../redux/reducers";

const foodList = [
  'Молоко',
  'Огурец',
  'Банан',
  'Хлеб',
  'Сыр',
  'Печенье',
  'Киви',
  'Спаржа'
]

type foodListType = {
  id: number,
  name: string,
  column: string
}

type themeFoodListType = {
  theme: boolean

  // playerType: string
  // onDropPlayer: (item: any) => void
  // index: number
}

export function FoodList({theme}: themeFoodListType) {



  const dispatch = useDispatch();

  // @ts-ignore
  const foodList = useSelector<AppRootStateType, UsersType[]>(state => state.foods.inputFoodList);



  // const foods = useSelector<AppRootStateType, ProfileStateType>(state => state.foods);
  return (
    <div className={style.scrollBlock}>
      {foodList.map(f=>(
        <div key={f.id} onClick={() => dispatch(replaceFood(f.name, f.id))}
             className={theme ? style.foodTitle : style.foodTitleDark}>{f.name}</div>
      ))

      }
    </div>
  )
}

