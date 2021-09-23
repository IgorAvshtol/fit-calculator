import style from './FoodList.module.css';

const foodList = [
  "Молоко",
  "Огурец",
  "Банан",
  "Хлеб",
  "Сыр",
  "Печенье",
  "Киви",
  "Спаржа"
]

export function FoodList() {
  return (
    <div className={style.scrollBlock}>
      {foodList.map((f) => {
        return (
          <div className={style.foodTitle}>{f}</div>
        )
      })}
    </div>
  )
}
