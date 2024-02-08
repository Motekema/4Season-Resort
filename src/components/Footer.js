import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h2>
                <span>4Seasons</span> Resort
              </h2>
              <p>
                4Seasons Resort is a luxurious and enchanting destination that
                redefines the experience of hospitality. Nestled in the heart of
                nature, the resort provides a serene and idyllic retreat for
                those seeking relaxation and indulgence. Our commitment is to
                offer a harmonious blend of comfort, natural beauty, and
                exceptional service, ensuring an unforgettable stay for every
                guest.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-tiktok"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact information</h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +27 78 154 0518
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> Innocent.4seasons@gmail.com
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> 528 Jakkalsfontein, 1020
                Bronkhorstspruit, South Africa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Design By LocalITservices.com </p>
        <h7>Copyright © 2024, All rights reserved.</h7>
      </div>
    </>
  );
};

export default Footer;
