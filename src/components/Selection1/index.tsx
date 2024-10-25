import { useContext } from "react";
import { ThemeContext } from "../../App.tsx";
import ButtonLght from "../Buttons/ButtonLight/button.tsx";
import style from "./style.module.css";
import "swiper/swiper-bundle.css"; // Импортируйте стили Swiper

// Import Swiper styles
import "swiper/css";

const SectionSelection = ({ onNext }: { onNext: () => void }) => {
  const { theme } = useContext(ThemeContext)!;
  const backgroundStyle =
    theme === "dark"
      ? { background: "none" }
      : { background: "rgba(255, 244, 238, 1)" };

  return (
    <section className={style.wrapper} id="selection">
      <div className={style.container} style={backgroundStyle}>
        <div className={style.info}>
          <h2 className={style.title}>Мы подберем идеальную пару для вас</h2>
          <p className={style.description}>
            Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для
            вас моделями
          </p>
        </div>
        <span className={style.span}>Какой тип кроссовок рассматриваете?</span>

        <div className={style.selection}>
          <div className={style.sneakers}>
            <img src="  src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="  src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>

          <div className={style.sneakers}>
            <img src="src/images/photo-sneaker.jpg" alt="Sneaker" />

            <div className={style.inputs}>
              <label>
                <input
                  className={style.check_input}
                  type="checkbox"
                  //    onChange={() => handleFilterChange()}
                />
                <span className={style.check_style}></span>
                кеды
              </label>
            </div>
          </div>
        </div>

        <div className={style.step}>
          <span className={style.counter}>1 из 3</span>
          <ButtonLght
            text="Следующий шаг"
            onClick={onNext} // Используем переданную функцию
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSelection;
