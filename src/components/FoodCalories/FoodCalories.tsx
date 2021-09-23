import style from './FoodCalories.module.css';

const foodConfirmedList = [
  {food: "Молоко", calories: "22"},
  {food: "Огурец", calories: "22"},
  {food: "Банан", calories: "88"},
  {food: "Хлеб", calories: "22"},
  {food: "Сыр", calories: "222"},
  {food: "Печенье", calories: "212"},
  {food: "Киви", calories: "22"},
  {food: "Свёкла", calories: "22"},
  {food: "Творог", calories: "22"},
  {food: "Говядина", calories: "132"},
  {food: "Свинина", calories: "167"}
]

export function FoodCalories() {
  return (
    <div className={style.scrollBlock}>
      {foodConfirmedList.map((f) => {
        return (
          <div className={style.title}>
            <div className={style.spanBlock}>
              <span>{f.food}</span><span>{f.calories}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}