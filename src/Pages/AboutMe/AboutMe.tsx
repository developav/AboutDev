import { useState } from 'react';
import "./AboutMe.scss"
export default function AboutMe () {
    const [activeTab, setActiveTab] = useState(1);
    return  (
        <section className="about">
			<div className="container">
				<div className="about__block">
					<img className="about__block-image" src="images/pavlov1.jpg" alt=""/>
					<div className="about__descr">
						<p className="about__descr-text">🧐 About me</p>
						<h2 className="about__descr-head">Павлов Дмитрий Евгеньевич</h2>
						<p className="about__descr-text-forme">👋 Меня зовут Павлов Дмитрий. Приятно познакомится</p>
						<p className="about__descr-text-forme">👨‍💻 Более 3-х лет разрабатываю интерфейсы</p>
						<p className="about__descr-text-forme">🎓 Выпускник Тамбовского Государственного Технического Университета по специальности "Информационные системы и технологии"</p>
						<p className="about__descr-text-forme">💡 Интересует Front-end разработка на JS, Vue, React</p>
						<p className="about__descr-text-forme">🚀 Пытаюсь быть немного лучше, чем вчера.</p>
					</div>
				</div>
				<div className="about__project">
					<h2 className="about__project-heading">Работы и проекты</h2>
                    <div className="about__project-list">
                        <button className="about__project-button" onClick={() => setActiveTab(1)}>JavaScript</button>
                        <button className="about__project-button" onClick={() => setActiveTab(2)}>Vue</button>
                        <button className="about__project-button" onClick={() => setActiveTab(3)}>HTML</button>
                        <button className="about__project-button" onClick={() => setActiveTab(4)}>Коммерция</button>
                    </div>
				</div>
                {activeTab === 1 && (
                    <div className="about__project-tabs-container about__project-tabs-container-active">
                        <article className="about__project-card">
                            <h3 className="about__project-card-heading">Playing-pairs</h3>
                            <p className="about__project-card-text">Игра в пары, вводим количество карточек и находим одинаковые.</p>
                            <div className="about__project-card-group">
                                <span className="about__project-card-lang">HTML</span>
                                <span className="about__project-card-lang">JavaScript</span>
                            </div>
                            <a href="https://developav.github.io/playing-pairs/" className="about__project-card-links">
                                <img className="about__project-card-img" src="images/playpars.jpg" alt=""/>
                            </a>
                        </article>
                        <article className="about__project-card">
                            <h3 className="about__project-card-heading">Список студентов</h3>
                            <p className="about__project-card-text">Список студентов с добавлением в local storage. Фильтрация по году, ФИО, дате рождения, годам обучения. Живой поиск по году, ФИО, дате рождения, годамобучения</p>
                            <div className="about__project-card-group">
                                <span className="about__project-card-lang">HTML</span>
                                <span className="about__project-card-lang">JavaScript</span>
                            </div>
                            <a href="https://developav.github.io/studentList/" className="about__project-card-links">
                                <img className="about__project-card-img" src="images/stud.jpg" alt=""/>
                            </a>
                        </article>
                        <article className="about__project-card">
                            <h3 className="about__project-card-heading">To do list</h3>
                            <p className="about__project-card-text">To do list с хранением данных в local storage</p>
                            <div className="about__project-card-group">
                                <span className="about__project-card-lang">HTML</span>
                                <span className="about__project-card-lang">JavaScript</span>
                            </div>
                            <a href="https://developav.github.io/doList/index.html" className="about__project-card-links">
                                <img className="about__project-card-img" src="images/todo.jpg" alt=""/>
                            </a>
                        </article>
                        <article className="about__project-card">
                            <h3 className="about__project-card-heading">Clients app</h3>
                            <p className="about__project-card-text">Clients app список клиентов</p>
                            <div className="about__project-card-group">
                                <span className="about__project-card-lang">HTML</span>
                                <span className="about__project-card-lang">JavaScript</span>
                            </div>
                            <a href="#" className="about__project-card-links about__develop">
                                <img className="about__project-card-img " src="images/opps.jpg" alt=""/>
                                <div className="about__dev-opas">В разработке</div>
                            </a>
                        </article>
                    </div>
)}
                    {activeTab === 2 && (
                                    <div className="about__project-tabs-container">
                                        <article className="about__project-card">
                                            <h3 className="about__project-card-heading">Интернет-магазин</h3>
                                            <p className="about__project-card-text">Интернет-магазин на Vue JS. Получает информацию о товарах по API. Использует store и vue router. Собран с помощью Webpack</p>
                                            <div className="about__project-card-group">
                                                <span className="about__project-card-lang">Vue JS</span>
                                                <span className="about__project-card-lang">HTML</span>
                                            </div>
                                            <a href="https://developav.github.io/vue-shop/#/" className="about__project-card-links">
                                                <img className="about__project-card-img" src="images/vueshop.jpg" alt=""/>
                                            </a>
                                        </article>
                                    </div>
                    )}		
				 {activeTab === 3 && (
                <div className="about__project-tabs-container">
					<article className="about__project-card">
						<h3 className="about__project-card-heading">Landing</h3>
						<p className="about__project-card-text">Landing-page. Кастомный select</p>
						<div className="about__project-card-group">
							<span className="about__project-card-lang">HTML</span>
							<span className="about__project-card-lang">CSS</span>
						</div>
						<a href="https://developav.github.io/ccs/" className="about__project-card-links">
							<img className="about__project-card-img" src="" alt=""/>
						</a>
					</article>
					<article className="about__project-card">
						<h3 className="about__project-card-heading">Страница интернет магазина</h3>
						<p className="about__project-card-text">Страница интернет магазина</p>
						<div className="about__project-card-group">
							<span className="about__project-card-lang">HTML</span>
							<span className="about__project-card-lang">CSS</span>
						</div>
						<a href="https://developav.github.io/shop/" className="about__project-card-links">
							<img className="about__project-card-img" src="" alt=""/>
						</a>
					</article>
					<article className="about__project-card">
						<h3 className="about__project-card-heading">Лендинг продажи шлепок</h3>
						<p className="about__project-card-text">Лендинг продажи шлепок</p>
						<div className="about__project-card-group">
							<span className="about__project-card-lang">HTML</span>
							<span className="about__project-card-lang">CSS</span>
						</div>
						<a href="https://developav.github.io/test-task/" className="about__project-card-links">
							<img className="about__project-card-img" src="" alt=""/>
						</a>
					</article>
					<article className="about__project-card">
						<h3 className="about__project-card-heading">Страница карьера</h3>
						<p className="about__project-card-text">Страница карьера</p>
						<div className="about__project-card-group">
							<span className="about__project-card-lang">HTML</span>
							<span className="about__project-card-lang">SCSS</span>
						</div>
						<a href="https://developav.github.io/articul/" className="about__project-card-links">
							<img className="about__project-card-img" src="" alt=""/>
						</a>
					</article>
				</div>
                 )}
				 {activeTab === 4 && (
                <div className="about__project-tabs-container">
					<article className="about__project-card">
						<h3 className="about__project-card-heading">ProspectSchool</h3>
						<p className="about__project-card-text">Одностраничник языковой школы</p>
						<div className="about__project-card-group">
							<span className="about__project-card-lang">HTML</span>
							<span className="about__project-card-lang">CSS</span>
							<span className="about__project-card-lang">JS</span>
						</div>
						<a href="https://prospectschool.ru/" className="about__project-card-links">
							<img className="about__project-card-img" src="" alt=""/>
						</a>
					</article>
				</div>
                 )}
				
				<a href="https://github.com/developav" className="about__project-link-git">Посмотреть больше проектов</a>
			</div>
		</section>
    )
}