import { useState } from "react";
import style from "./Slider.module.css";

type SliderContentType = {
  content: string[]
}

export function Slider(props: SliderContentType) {
  const [current, setCurrent] = useState(0);
  const length = props.content.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.content) || props.content.length <= 0) {
    return null;
  }

  return (
    <div>
      {props.content.map((slide, index) => {
        return (
          <div
            key={index}
          >
            {index === current && (
              <input disabled={true} className={style.input} value={slide}/>
            )}
          </div>

        );
      })}
      <label onClick={prevSlide} className={style.labelNext}/>
      <label onClick={nextSlide} className={style.labelPrev}/>
    </div>
  );
}