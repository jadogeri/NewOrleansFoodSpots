import { useEffect, useState } from 'react';
import React from 'react';
import HeaderBottom from '../../layouts/HeaderBottom';
import $ from "jquery"
import { WOW } from "wowjs"
import Carousel from '../../components/Carousel';

const Home = () => {
	const [isSlider , setIsSlider] = useState(false)
	useEffect(() => {
		if(!isSlider){
			window.slider()
			setIsSlider(true)

		}
	
		window.scrollFunction()
		window.swipebox()


		$(document).ready(function($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
		});
  
		new WOW().init();
		var navoffeset=$(".header-bottom").offset().top;
		console.log("value of offset ==== ", navoffeset)
		$(window).scroll(function(){
		 var scrollpos=$(window).scrollTop(); 
		 if(scrollpos >=navoffeset){
		   $(".header-bottom").addClass("fixed");
		 }else{
		   $(".header-bottom").removeClass("fixed");
		 }
		});

	})

  return (
    <>
 {/* <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>
      <link href="assets/css/style.css" rel="stylesheet" type="text/css" media="all" />
      <link href="assets/css/style4.css" rel="stylesheet" type="text/css" media="all" />
      <link href="assets/css/animate.css" rel="stylesheet" type="text/css" media="all" />
      <link href="assets/css/swipebox.css" rel="stylesheet" type="text/css" media="all" />
 */}


<link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css" media="all"/>

	<div className="header-banner" id="head">
    {/* Carousel with images section */}
    <Carousel />

{/* <HeaderBottom /> */}

<HeaderBottom />

		<div className="content">
		<div className="service-section" id="service">
			<div className="container">
				<h2>RECEIVE GREAT FOOD AND HIGH QUALITY SERVICE</h2>
				<p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
				<a href="#" className="button1">learn more</a>
				</div>
			</div>
			<div className="video">
				<iframe src="https://player.vimeo.com/video/33132310" title='video' frameBorder={0}   allowFullScreen></iframe> 
					</div>
				<div className="about-section" id="about">
					<div className="container">
						<h3>about us </h3>
						 <div className="main wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
               	 <div className="view view-fourth ">
                    <img src="assets/images/p1.jpg" />
                    
                    
                    <div className="mask">
                        <h2>Break Fast</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <div className="view view-fourth view1">
                    <img src="assets/images/p2.jpg" />
                    <div className="mask">
                        <h2>Lunch</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <div className="view view-fourth">
                    <img src="assets/images/p3.jpg" />
                    <div className="mask">
                        <h2>Desserts</h2>
                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    </div>
                </div>
                <div className="clearfix"></div>
                </div>
					</div>
				</div>
				<div className="menu-section">
					<div className="container">
						<h3> featured menu</h3>
						<div className="menu-grids wow bounceIn animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
							<div className="col-md-3 menu-grid">
								<img src="assets/images/p4.jpg" className="img-responsive" alt="" />
								<div className="menu-info">
									<h4>$04.<sup>99</sup></h4>
									<h5>CUM SOCIIS NATOQUE .</h5>
									</div>
								</div>
								<div className="col-md-3 menu-grid ">
								<img src="assets/images/p5.jpg" className="img-responsive" alt="" />
								<div className="menu-info">
									<h4>$05.<sup>99</sup></h4>
									<h5>Lorem ipsum dolo .</h5>
									</div>
								</div>
								<div className="col-md-3 menu-grid menu1 ">
								<img src="assets/images/p6.jpg" className="img-responsive" alt="" />
								<div className="menu-info">
									<h4>$09.<sup>99</sup></h4>
									<h5>CUM SOCIIS NATOQUE .</h5>
									</div>
								</div>
								<div className="col-md-3 menu-grid menu1">
								<img src="assets/images/p7.jpg" className="img-responsive" alt="" />
								<div className="menu-info">
									<h4>$19.<sup>99</sup></h4>
									<h5>Lorem ipsum dolo .</h5>
									</div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
					<div className="events-section">
						<div className="container">
							<h3>our events</h3>
							<div className="event-grids  wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
								<div className="col-md-6 event-left">
									<div className="even-info">
									<div className="icon">
										<img src="assets/images/icon1.png" className="img-responsive" alt="" />
										</div>
										<div className="event-info">
											<h4>dolor sit amet conse cterut </h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla </p>
											</div>
											<div className="clearfix"> </div>
											</div>
									</div>
									<div className="col-md-6 event-right">
									<div className="even-info1">
									<div className="icon1">
										<img src="assets/images/icon2.png" className="img-responsive" alt="" />
										</div>
										<div className="event-info1">
											<h4>consectetur adipiscing elit </h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus, sem eget sagittis sagittis, nisl magna sodales eros, ut feugiat velit velit non turpis. Cras eu nibh dapibus justo fringilla </p>
											</div>
											<div className="clearfix"> </div>
											</div>
									</div>
									<div className="clearfix"></div>
							</div>
							<div className="butt">
							<a href="event.html" className="button2">veiw all events</a>
							</div>
						</div>
				</div>
				<div className="test-section" id="tests">
					<div className="container">
						<h3>TESTIMONIALS</h3>
						<div className="test-grids ">
							<div className="test-grid1 wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
							<div className="col-md-5 test-left test1">
								<img src="assets/images/p8.jpg" className="img-responsive" alt="" />
								<div className="textbox">
								<p>Aenean nonummyen</p>
								<h4>$ 09.<sup>95</sup></h4>
								</div>
								</div>
								<div className="col-md-7 test-right">
								<h4>"Suspendisse consequat purus</h4>
								<p>Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget elit semper pharetra sollicitudin id nibh. Praesent venenatis lectus ornare, porta risus quis, commodo nulla. Nunc adipiscing ipsum lacinia diam pulvinar aliquet. Mauris sit </p>
								</div>
								<div className="clearfix"> </div>
								</div>
								<div className="test-grid2 wow bounceInLeft animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
							   <div className="col-md-7 test-left01">
								<h4>"Cras elementum sed mi sit</h4>
								<p>Vestibulum et consequat justo. Maecenas ultrices malesuada leo porta venenatis. Sed sit amet diam facilisis, interdum tellus nec, dignissim massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse consequat purus est, nec venenatis est sagittis in. </p>
								</div>
							   <div className="col-md-5 test-right01 test1">
								<img src="assets/images/p9.jpg" className="img-responsive" alt="" />
								<div className="textbox textbox1">
								<p>Natoque penatibus</p>
								<h4>$ 19.<sup>95</sup></h4>
								</div>
								</div>
								<div className="clearfix"> </div>
								</div>
								<div className="test-grid3 wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
							<div className="col-md-5 test-left test1">
								<img src="assets/images/p10.jpg" className="img-responsive" alt="" />
								<div className="textbox">
								<p>Aenean nonummyen</p>
								<h4>$ 29.<sup>95</sup></h4>
								</div>
								</div>
								<div className="col-md-7 test-right">
								<h4>"Praesent venenatis lectus</h4>
								<p>Quisque varius, nibh ac feugiat interdum, libero massa laoreet tellus, nec congue lorem arcu a nunc. Praesent quis felis eget elit semper pharetra sollicitudin id nibh. Praesent venenatis lectus ornare, porta risus quis, commodo nulla. Nunc adipiscing ipsum lacinia diam pulvinar aliquet. Mauris sit </p>
								</div>
								<div className="clearfix"> </div>
								</div>
								<div className="clearfix"></div>
							</div>
						</div>
					</div>
				<div className="google" id="location">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d52300.033408044306!2d33.999559!3d34.987874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dfc513650b8f37%3A0x2497459334310f21!2sNapa+Plaza+Hotel!5e0!3m2!1sen!2sin!4v1428737227572"> </iframe>
					</div>
			<div className="contact-section">
				<div className="container">
					<h3>contact us</h3>
					<div className="contact-grids wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
			<div className="col-md-4 contactgrid">
				<input type="text" className="text" value=" name" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' name';}}}/>
				</div>
				<div className="col-md-4 contactgrid">
				<input type="text" className="text" value="email" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' email';}}}/>
				</div>
				<div className="col-md-4 contactgrid">
				<input type="text" className="text" value="phone" onFocus={(event)=>{ event.target.value = ''}} onBlur={(event)=>{if (event.target.value  == '') {event.target.value = ' phone';}}}/>
				</div>
				<div className="col-md-8 contactgrid1">
				{/* <textarea onFocus={(event)=>{if(event.target.value  == 'Your Message') {event.target.defaultValue = '';}}} onBlur={(event)=>{if (event.target.value  == '') {event.target.defaultValue = 'Your Message';}}} >Your Message</textarea> */}
				</div>
				<div className="col-md-4 contactgrid2">
				<input type="button" value="send message"/>
			   </div>
			   <div className="clearfix"></div>
				</div>
				</div>
				</div>
			</div>
			<div className="footer-section">
				<div className="container">
					<div className="footer-top wow bounceInRight animated" data-wow-delay="0.4s" style={{visibility: "visible", WebkitAnimationDelay: 0.4}}>
								<div className="social-icons">
										<a href="#"><i className="icon4"></i></a>
										<a href="#"><i className="icon5"></i></a>
										<a href="#"><i className="icon6"></i></a>
									</div>
								</div>
							<div className="footer-bottom">
						<p> Copyright &copy;2015  All rights  Reserved | Design by<a href="http://w3layouts.com" target="target_blank">W3Layouts</a></p>
						</div>

				<a className="scroll" href="#head" id="toTop" style={{display: "block"}}> <span id="toTopHover" style={{opacity: 1}}> </span></a>


					</div>
				</div>

      </div>
   </>
  );
}

export default Home;
