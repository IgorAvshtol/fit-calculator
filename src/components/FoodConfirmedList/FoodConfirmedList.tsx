import style from './FoodConfirmedList.module.css';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { deleteFood, FoodType } from "../../redux/reducers";
import { AppRootStateType } from "../../redux/store";
import { DropTargetMonitor, useDrag, useDrop, XYCoord } from "react-dnd";
import DehazeIcon from '@mui/icons-material/Dehaze';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Dispatch, SetStateAction, useRef } from "react";

const foodConfirmedList = [
  'Молоко',
  'Огурец',
  'Банан',
  'Хлеб',
  'Сыр',
  'Печенье',
  'Киви',
  'Свёкла',
  'Творог',
  'Говядина',
  'Свинина'
];

type themeFoodConfirmedListType = {
  theme: boolean,
  moveCard: (dragIndex: number, hoverIndex: number) => void
  item: string
  dragMode: boolean
  setDragMode: Dispatch<SetStateAction<boolean>>
  // playerType: string
  // onDropPlayer: (item: any)=>void
  index: number
  id: number
}

export interface CardProps {
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface DragItem {
  index: number
  id: string
  type: string
}

export function FoodConfirmedList({
                                    theme,
                                    moveCard,
                                    index,
                                    item,
                                    id,
                                    dragMode,
                                    setDragMode
                                  }: themeFoodConfirmedListType) {

  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null)
  const [{handlerId}, drop] = useDrop({
    accept: dragMode ? 'remove' : 'no draggable',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      // Determine mouse position
      const clientOffset = monitor.getClientOffset()

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  console.log(handlerId);

  const [, drag] = useDrag({
    type: 'remove',
    item: () => {
      return {id, index}
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  drag(drop(ref))
  return (
    // <div className={style.scrollBlock}>

    <div ref={ref} className={theme ? style.title : style.titleDark} data-handler-id={handlerId}>
      <DehazeIcon className={theme ? style.dehazeIcon : style.dehazeIconDark}
                  style={dragMode ? {opacity: 0.6} : {opacity: 0.2}}
                  onClick={() => setDragMode(!dragMode)}
      />
      {item}
      {dragMode
        ? <RemoveCircleOutlineIcon className={style.removeIcon}
                                   style={{opacity: 0.6}}
                                   onClick={() => dispatch(deleteFood(id))}/>
        : null
      }
    </div>)

  // </div>

}