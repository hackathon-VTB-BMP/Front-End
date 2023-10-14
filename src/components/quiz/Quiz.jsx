import style from "./quiz.module.css"
export const Quiz = () => {

	function showScreen(screenNumber) {
		for (let i = 1; i <= 7; i++) {
			if (i === screenNumber) {
				document.querySelector("#screen" + i).style.display = "block";
			} else {
				document.querySelector("#screen" + i).style.display = "none";
			}
		}
	}

	return (
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
				<button onClick={()=>{showScreen(2)}}>
					Далее
					<img src="src/img/arrow-right.png" alt="arrow right"/>
				</button>
			</div>

			<div id="screen2" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<div className="quiz-options">
				</div>
				<button onClick={()=>{showScreen(3)}}>Next</button>
			</div>

			<div id="screen3" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<div className="quiz-options">
				</div>
				<button onClick={()=>{showScreen(4)}}>Next</button>
			</div>

			<div id="screen4" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<div className="quiz-options">
				</div>
				<button onClick={()=>{showScreen(5)}}>Next</button>
			</div>

			<div id="screen5" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<div className="quiz-options">
				</div>
				<button onClick={()=>{showScreen(6)}}>Next</button>
			</div>

			<div id="screen6" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<div className="quiz-options">
				</div>
				<button onClick={()=>{showScreen(7)}}>Done</button>
			</div>

			<div id="screen7" className={style.content} style={{display: "none"}}>
				<h1>Найдём для вас подходящее отделение</h1>
				<button onClick={()=>{showScreen(1)}}>Start again</button>
			</div>
		</div>
	);
}