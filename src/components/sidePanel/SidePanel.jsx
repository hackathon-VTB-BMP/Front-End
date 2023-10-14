import style from "./sidePanel.module.css"
import {useState} from "react";

export const SidePanel = () => {

	const [activeButtonFormat, setActiveButtonFormat] = useState('Офисы');

	const handleClick = (buttonName) => {
		setActiveButtonFormat(buttonName);
	};

	return (
		<div className={style.bar}>
			<div className={style.location}>
				<img src="src/img/location.png" alt="location" width="24" height="24"/>
				<span>Санкт-Петербург, Лиговский пр.</span>
			</div>

			<div className={style.search__address}>
				<input type="text" placeholder="Город, метро, улица"/>
				<button>
					<img src="src/img/search.png" alt="search"/>
				</button>
			</div>

			<div className={style.filter}>
				<img src="src/img/filter.png" alt="filter" width="24" height="24"/>
				<h2>Фильтры</h2>
			</div>

			<div className={style.filter__btns}>
				<button
					className={activeButtonFormat === 'Офисы' ? style.active : ''}
					onClick={() => handleClick('Офисы')}
				>
					Офисы
				</button>
				<button
					className={activeButtonFormat === 'Банкоматы' ? style.active : ''}
					onClick={() => handleClick('Банкоматы')}
				>
					Банкоматы
				</button>
			</div>
			<div className={style.filter__inputs}>
				<div className={style.filter__inputs_scheckbox}>
					<input id="24hours" type="checkbox"/>
					<label htmlFor="24hours">24 часа</label>
				</div>
				<div>
					<input id="work" type="checkbox"/>
					<label htmlFor="work">Работает сейчас</label>
				</div>
			</div>

			<div className={style.filter__client}>
				<h2>Клиент</h2>
				<div className={style.filter__client_btns}>
					<button>Физическое лицо</button>
					<button>Private Banking</button>
					<button>Юридическое лицо</button>
					<button>Привилегия</button>
				</div>
			</div>

			<div className={style.filter__services}>
				<h2>Услуги</h2>
				<div className={style.search__services}>
					<input type="text" placeholder="Поиск по услугам"/>
					<img src="src/img/search.png" alt="search"/>
				</div>
				<button>Карты</button>
				<button>Кредиты</button>
				<button>Касса</button>
				<button>Вклады и счета</button>
				<button>Валюта</button>
				<button>Снятие наличных</button>
				<button>Ипотека</button>
				<span>Больше услуг</span>
			</div>

			<div className={style.filter__additionally}>
				<h2>Дополнительно</h2>
				<button>Пандус</button>
				<button>Детская зона</button>
				<button>Wi-Fi</button>
				<button>Парковка</button>
				<button>Можно с питомцами</button>
				<button>Оборудовано для слабовидящих</button>
				<button>Рядом с метро</button>
				<button>Низка нагрузка</button>
			</div>
		</div>
	);
}