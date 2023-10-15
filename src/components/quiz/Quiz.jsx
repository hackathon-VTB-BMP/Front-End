import style from "./quiz.module.css";
import { MapPinned, MousePointer2 } from "lucide-react";

export const Quiz = ({ setQuizOpen }) => {
  function showScreen(screenNumber, direction) {
    let currentScreen = screenNumber;

    if (direction === "next") {
      currentScreen = (currentScreen % 6) + 1;
    } else if (direction === "previous") {
      currentScreen = currentScreen === 1 ? 6 : currentScreen - 1;
    }

    for (let i = 1; i <= 6; i++) {
      if (i === currentScreen) {
        document.querySelector("#screen" + i).style.display = "block";
      } else {
        document.querySelector("#screen" + i).style.display = "none";
      }
    }
  }

  return (
    <div className={style.overlay}>
      <div className={style.wrapper}>
        <div className={style.wrapper_rel}>
          <img
            src="src/img/close-quiz.png"
            alt=""
            onClick={() => setQuizOpen(false)}
            className={style.close}
          />
          <div className={style.content_wrapper}>
            <div id="screen1" className={style.content}>
              <h1>Найдём для вас подходящее отделение</h1>
              <span>Давайте уточним ваше местоположение</span>
              <div className={style.location}>
                <div className={style.location__left}>
                  <MapPinned size="16px" className={style.mapPin} />
                  <span>Санкт-Петербург, Лиговский пр.</span>
                </div>
                <div className={style.iconMouse}>
                  <MousePointer2 />
                </div>
              </div>
              <button
                className={style.button_arrow}
                onClick={() => {
                  showScreen(2, "next");
                }}
              >
                Далее
                <img src="src/img/arrow-right.png" alt="arrow right" />
              </button>
            </div>
          </div>

          <div
            id="screen2"
            className={style.content}
            style={{ display: "none" }}
          >
            <h1>Найдём для вас подходящее отделение</h1>
            <span>Выберите нужные параметры1</span>
            <div></div>
            <button
              onClick={() => {
                showScreen(3, "next");
              }}
            >
              Далее
            </button>
          </div>

          <div
            id="screen3"
            className={style.content}
            style={{ display: "none" }}
          >
            <h1>Найдём для вас подходящее отделение</h1>
            <span>Выберите нужные параметры</span>
            <div className={style.button_wrapper}>
              <button
                className={style.b}
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  border: "1px solid black",
                }}
              >
                Физическое лица
              </button>
              <button
                className={style.b}
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  border: "1px solid black",
                }}
              >
                Юридическое лица
              </button>
            </div>
            <button
              onClick={() => {
                showScreen(4);
              }}
            >
              Next
            </button>
          </div>

          <div
            id="screen4"
            className={style.content}
            style={{ display: "none" }}
          >
            <h1>Найдём для вас подходящее отделение</h1>
            <span>Выберите или найдите нужные услуги</span>
            <div className="quiz-options"></div>
            <button
              onClick={() => {
                showScreen(5, "next");
              }}
            >
              Next
            </button>
          </div>

          <div
            id="screen5"
            className={style.content}
            style={{ display: "none" }}
          >
            <h1>Найдём для вас подходящее отделение</h1>
            <span>Выберите нужные параметры</span>
            <div className="quiz-options"></div>
            <button
              onClick={() => {
                showScreen(6, "next");
              }}
            >
              Next
            </button>
          </div>

          <div
            id="screen6"
            className={style.content}
            style={{ display: "none" }}
          >
            <h1>Готово</h1>
            <div className="quiz-options"></div>
            <button>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
};
