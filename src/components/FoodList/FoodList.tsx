import style from './FoodList.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { AppRootStateType } from "../../redux/store";
import { FoodType, getUsers, ProfileStateType, replaceFood, UsersType } from "../../redux/reducers";

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

