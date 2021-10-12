import { Dispatch } from "redux";
import { profileAPI } from "../api/api";

export type FoodType = {
  id: number,
  name: string
}

export type UsersType = {
  id: number,
  photos: {
    small: string,
    large: string
  },
  followed: boolean,
  name: string,
  status: string,
  location: LocationUsersType
}

export type LocationUsersType = {
  city: string,
  country: string
}

export type productType = {
  id: number;
  name: string;
}

export type stateType = {
  outputFoodList: UsersType[];
  inputFoodList: UsersType[]
}

const initialState = {
  outputFoodList: [],
  inputFoodList: []
}

export const foodsReducer = (state: stateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'GET_FOODS_LIST': {
      return {
        ...state,
        inputFoodList: action.foodList
      }
    }
    case 'REPLACE_FOOD': {
      return {
        ...state,
        outputFoodList: [...state.outputFoodList, {id: action.id, name: action.foodTitle}]
      }
    }
    case 'DELETE_FOOD': {
      return {
        ...state,
        outputFoodList: [...state.outputFoodList.filter(f => f.id !== action.foodId)]
      }
    }
    default:
      return state;
  }
}

type ActionsType = getFoodsListActionType | replaceFoodActionType | deleteFoodActionType;

export interface getFoodsListActionType {
  type: 'GET_FOODS_LIST',
  foodList: UsersType[]
}

export interface replaceFoodActionType {
  type: 'REPLACE_FOOD',
  foodTitle: string,
  id: number
}

export interface deleteFoodActionType {
  type: 'DELETE_FOOD',
  foodId: number
}

export const getFoodsList = (inputFoodList: UsersType[]): getFoodsListActionType => {
  return {type: 'GET_FOODS_LIST', foodList: inputFoodList}
};


export const replaceFood = (foodTitle: string, id: number): replaceFoodActionType => {
  return {
    type: 'REPLACE_FOOD',
    foodTitle,
    id
  } as const
};

export const deleteFood = (foodId: number): deleteFoodActionType => {
  return {
    type: 'DELETE_FOOD',
    foodId
  } as const
};

export const getUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: Dispatch) => {
    let data = await profileAPI.getUsers(currentPage, pageSize)
    dispatch(getFoodsList(data.items))
  }
}
