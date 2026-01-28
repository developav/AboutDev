import "./SkillsPage.scss"
export default function SkillsPage() {
    return (
        <section className="tech">
			<div className="container">
				<h2 className="tech__heading">Технологии и навыки</h2>
				<div className="tech__group">
					<div className="tech__group-daily">
						<p className="tech__group-daily-text">Технологии, которые я использую</p>
						<ul className="tech__group-daily-list">
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#HTML5"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#css3"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#Javascript"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#sass"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#gulp"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#Githubb"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#Nodejs"></use></svg>
							</li>
							<li className="tech__group-daily-item">
								<svg className="tech__group-daily-svg"><use xlink:href="#Vue"></use></svg>
							</li>
						</ul>
					</div>
				</div>
				
			</div>
		</section>
    )
}