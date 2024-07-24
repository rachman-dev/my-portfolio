/** @format */

export default function HeroSection() {
	return (
		<section id="heroSection" className="hero--section">
			<div className="hero--section--content--box">
				<div className="hero--section--content">
					<p className="section--title">Hey, I'm Rachman</p>
					<h1 className="hero--section--title">
						<span className="hero--section-title--color">Full Stack</span>{" "}
						<br />
						Developer
					</h1>
					<p className="hero--section-description">
					I create seamless, user-friendly web applications using the MERN stack.
						<br /> Explore my projects and discover my passion for web development.
					</p>
				</div>
				<button className="btn btn-primary" onClick={() => window.open('https://drive.google.com/file/d/1mNE70E0wMO7j6ld2fhe0TygyBX8XEdbI/view?usp=sharing', '_blank', 'noopener,noreferrer')}>My Resume</button>
			</div>
			<div className="hero--section--img">
				<img src="./img/rachman.png" alt="Hero Section" />
			</div>
		</section>
	);
}
