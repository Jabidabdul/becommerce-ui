import React from 'react'
import './Footer.css'

const Footer = () => {
    return (

            <footer class="footer-distributed" style={{position:'relative' , left:'0', bottom:'0'}}>
                <div class="footer-left">
                    <img src="img/logo.png" />
                    <h3>About<span>BeCommerce</span></h3>

                    <p class="footer-links">
                        <a href="#" style={{margin:'3px'}}>Home</a>
                        |
                        <a href="#" style={{margin:'3px'}}>Blog</a>
                        |
                        <a href="#" style={{margin:'3px'}}>About</a>
                        |
                        <a href="#" style={{margin:'3px'}}>Contact</a>
                    </p>
                    <p class="footer-company-name">© 2021 BeCommerce Pvt. Ltd.</p>
                </div>

			<div class="footer-center">
				<div>
					<i class="fa fa-map-marker"></i>
					  <p><span>309 - Rupa Solitaire,
						 Bldg. No. A - 1, Sector - 1</span>
						Mahape, Navi Mumbai - 400710</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91 22-27782183</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="http://gmail.com">support@becommerce.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
					We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
				<div class="footer-icons">
					<a href="#"><i class="fab fa-facebook"></i></a>
					<a href="#"><i class="fab fa-twitter"></i></a>
					<a href="#"><i class="fab fa-instagram"></i></a>
					<a href="#"><i class="fab fa-linkedin"></i></a>
					<a href="#"><i class="fab fa-youtube"></i></a>
				</div>
			</div>
		</footer>

    )
}

export default Footer
