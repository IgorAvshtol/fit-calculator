import style from './FoodConfirmesList.module.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const foodConfirmedList = [
  "Молоко",
  "Огурец",
  "Банан",
  "Хлеб",
  "Сыр",
  "Печенье",
  "Киви",
  "Свёкла",
  "Творог",
  "Говядина",
  "Свинина"
]

export function FoodConfirmedList() {
  return (
    <div className={style.scrollBlock}>
      {foodConfirmedList.map((f) => {
        return (
          <div className={style.title}>
            {f}
            <DehazeIcon className={style.dehazeIcon}/>
            <RemoveCircleOutlineIcon className={style.removeIcon}/>
          </div>
        )
      })}
    </div>
  )
}