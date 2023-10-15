import style from "./quiz.module.css"
export const Quiz = () => {

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
			<img src="src/img/close-quiz.png" alt="" className={style.close}/>
			<div className={style.wrapper}>
				<div id="screen1" className={style.content}>
					<h1>Найдём для вас подходящее отделение</h1>
					<span>Давайте уточним ваше местоположение</span>
					<div className={style.location}>
						<div className={style.location__left}>
							<img src="src/img/location.png" alt="location" width="24" height="24"/>
							<span>Санкт-Петербург, Лиговский пр.</span>
						</div>
						<img className={style.location__right} src="src/img/icon-location-quiz.svg" alt="icon location quiz"/>
					</div>
					<button onClick={()=>{showScreen(2, "next")}}>
						Далее
						<img src="src/img/arrow-right.png" alt="arrow right"/>
					</button>
				</div>

				<div id="screen2" className={style.content} style={{display: "none"}}>
					<h1>Найдём для вас подходящее отделение</h1>
					<span>Выберите нужные параметры</span>
					<div>
					</div>
					<button onClick={()=>{showScreen(3, "next")}}>Далее</button>
				</div>

				<div id="screen3" className={style.content} style={{display: "none"}}>
					<h1>Найдём для вас подходящее отделение</h1>
					<span>Выберите нужные параметры</span>
					<div className="quiz-options">
					</div>
					<button onClick={()=>{showScreen(4)}}>Next</button>
				</div>

				<div id="screen4" className={style.content} style={{display: "none"}}>
					<h1>Найдём для вас подходящее отделение</h1>
					<span>Выберите или найдите нужные услуги</span>
					<div className="quiz-options">
					</div>
					<button onClick={()=>{showScreen(5, "next")}}>Next</button>
				</div>

				<div id="screen5" className={style.content} style={{display: "none"}}>
					<h1>Найдём для вас подходящее отделение</h1>
					<span>Выберите нужные параметры</span>
					<div className="quiz-options">
					</div>
					<button onClick={()=>{showScreen(6, "next")}}>Next</button>
				</div>

				<div id="screen6" className={style.content} style={{display: "none"}}>
					<h1>Готово</h1>
					<div className="quiz-options">
					</div>
					<button>Done</button>
				</div>

			</div>
		</div>
	);
}