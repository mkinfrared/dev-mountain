import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="wrapper">
			<header>
				<div className="sub-wrapper">
					<div className="logo">
						<h2>Company <span>Name</span></h2>
					</div>
					<div className="nav">
						<ul>
							<li><a href="#">home</a></li>
							<li><a href="#">about</a></li>
							<li><a href="#">portfolio</a></li>
							<li><a href="#">services</a></li>
							<li><a href="#">pricing</a></li>
							<li><a href="#">contact</a></li>
						</ul>
					</div>
				</div>
			</header>
			<div className="banner">
				<div className="sub-wrapper">
					<h3>We are specialist in</h3>
					<h2>responsive deisigns, stationary and wordpress themes</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the
						industry's standard dummy text.
					</p>
					<a href="">Button name</a>
				</div>
			</div>
			<div className="services">
				<div className="sub-wrapper">
					<h2>Lorem Ipsum is simply dummy text of the printing</h2>
					<div className="container">
						<div className="sub-container">
							<div className="circle"><i className="fas fa-lock"></i></div>
							<h3>protect</h3>
							<p>100% of customer funds are stored offline in secure cold storage. We offer two­ factor
								authentication on all accounts, mobile alerts and delayed withdrawals, and spending and
								transfer
								limits.
							</p>
						</div>
						<div className="sub-container">
							<div className="circle"><i className="fas fa-bolt"></i></div>
							<h3>alert</h3>
							<p>100% of customer funds are stored offline in secure cold storage. We offer two­ factor
								authentication on all accounts, mobile alerts and delayed withdrawals, and spending and
								transfer
								limits.
							</p>
						</div>
						<div className="sub-container">
							<div className="circle"><i className="fas fa-mobile-alt"></i></div>
							<h3>detect</h3>
							<p>100% of customer funds are stored offline in secure cold storage. We offer two­ factor
								authentication on all accounts, mobile alerts and delayed withdrawals, and spending and
								transfer
								limits.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="middle">
				<div className="sub-wrapper">
					<div className="text-container">
						<h2>Lorem Ipsum is simply dummy text of the printing
							and typesetting industry. Lorem Ipsum has been....
						</h2>
						<h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
						<ul>
							<li><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem
								Ipsum
								has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the
								printing and
								typesetting industry.</a></li>
							<li><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem
								Ipsum
								has been the industry's standard dummy text.</a></li>
							<li><a href="#">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								Lorem
								Ipsum
								has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the
								printing and
								typesetting industry.</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="pricing">
				<div className="sub-wrapper">
					<h2>We have a very flexible offers for you to choose</h2>
					<div className="tag-container">
						<div className="tag aqua">
							<h3>Standard</h3>
							<div className="white">
								<h4>iconic graphics</h4>
								<p>10</p>
								<ul>
									<li>Unmetered Traffic</li>
									<li>Unlimited Domain</li>
									<li>Unlimited Databases</li>
									<li>Unlimited <span>e</span>-Mails</li>
								</ul>
								<a href="#">Enroll today</a>
							</div>
						</div>
						<div className="tag orange">
							<h3>Standard</h3>
							<div className="white">
								<h4>iconic graphics</h4>
								<p>25</p>
								<ul>
									<li>PHP, PERL, ASP, JSP</li>
									<li>SEMI DEDICATED</li>
									<li>Staging or Production</li>
									<li>Unlimited <span>e</span>-Mails</li>
								</ul>
								<a href="#">Enroll today</a>
							</div>
						</div>
						<div className="tag green">
							<h3>Standard</h3>
							<div className="white">
								<h4>iconic graphics</h4>
								<p>35</p>
								<ul>
									<li>Semi Dedicated</li>
									<li>1TB Storage</li>
									<li>Faster Site, Better SEO</li>
									<li>Unlimited <span>e</span>-Mails</li>
								</ul>
								<a href="#">Enroll today</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="testimonials">
				<div className="sub-wrapper">
					<h2><span className="orange-text">What </span>client says</h2>
					<div className="sub-test">
						<div className="review">
                            <div className="photo"><img src="img/1st-cust.png" alt=""></img></div>
							<div className="feed">
								<div className="feed-head">
									<p className="name">staciya trollie</p>
									<p className="position">customer</p>
								</div>
								<p className="feedback">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
									blanditiis
									dolorum enim esse facere ipsa nobis rerum ullam velit veritatis. Alias animi
									architecto
									dolores, dolorum expedita, fugit incidunt odio optio, quis quisquam sapiente sunt
									unde?
									Atque eos esse voluptate voluptates.
								</p>
							</div>
						</div>
						<div className="review">
                            <div className="photo"><img src="img/2nd-cust.png" alt=""></img></div>
							<div className="feed">
								<div className="feed-head">
									<p className="name">Lorem ipsum.</p>
									<p className="position">customer</p>
								</div>
								<p className="feedback">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Consequuntur
									inventore, non officia quia sed voluptate!
								</p>
							</div>
						</div>
						<div className="review">
                            <div className="photo"><img src="img/1st-cust.png" alt=""></img></div>
							<div className="feed">
								<div className="feed-head">
									<p className="name">staciya trollie</p>
									<p className="position">customer</p>
								</div>
								<p className="feedback">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Architecto cum
									cumque magnam nam odio odit officiis quis vel. Amet architecto asperiores
									consequuntur culpa
									debitis distinctio dolor doloremque esse incidunt pariatur, quibusdam reprehenderit
									similique veritatis, voluptates?
								</p>
							</div>
						</div>
						<div className="review">
                            <div className="photo"><img src="img/1st-cust.png" alt=""></img></div>
							<div className="feed">
								<div className="feed-head">
									<p className="name">staciya trollie</p>
									<p className="position">customer</p>
								</div>
								<p className="feedback">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
									blanditiis
									dolorum enim esse facere ipsa nobis rerum ullam velit veritatis. Alias animi
									architecto
									dolores, dolorum expedita, fugit incidunt odio optio, quis quisquam sapiente sunt
									unde?
									Atque eos esse voluptate voluptates.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contact">
				<div className="sub-wrapper">
					<div className="address">
						<p className="company-name">Iconic Graphics</p>
						<p>123 Main Street</p>
						<p>EastWest</p>
						<p>LHR 54500</p>
						<p className="phone">012.345.6789</p>
						<p className="mail">info@iconicgraphics.com</p>
						<div className="social-buttons">
							<a href="# "><i className="fab fa-facebook-f"></i></a>
							<a href="# "><i className="fab fa-twitter"></i></a>
							<a href="# "><i className="fab fa-linkedin-in"></i></a>
						</div>
					</div>
					<div className="map"></div>
				</div>
			</div>
			<footer>
				<p>Copyright © 2014 <span id="bold">Company Name</span>. All rights reserved.</p>
				<p>Designed by <span id="black">IconicGraphics.com</span></p>
			</footer>
		</div>
    );
  }
}

export default App;
