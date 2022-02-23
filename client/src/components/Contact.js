import React from "react";
import Footer from "../screens/Footer";

const Contact = () => {
  return (
    <div className="arrier-plan">
      <div className="Liste">
        <div className="info">
          <h2 style={{ marginTop: "13px" }}>Store Information</h2>
          <div>
            <ion-icon name="location"></ion-icon>
            <p>Demo-store United States</p>
          </div>
          <br></br>
          <hr />
          <div>
            <ion-icon name="call"></ion-icon>
            <p>Call us:</p>
          </div>
          <p>+216 21874033</p>
          <br></br>
          <hr />
          <div>
            <ion-icon name="mail"></ion-icon>
            <p>Email us:</p>
          </div>
          <p>admin@gmail.com</p>
          <br />
        </div>
        <div className="contact">
          <h2>Contact Us</h2>

          <div>
            <label>Email adresse</label>
            <input type="text" placeholder="your@email.com" />
          </div>
          <div>
            <label>Telephone</label>
            <input type="text" placeholder="Telephone number" />
          </div>
          <div>
            <label>Message</label>
            <textarea type="text" placeholder="How can will help?" />
          </div>
          <div class="boxx-3" style={{ marginBottom: "20px" }}>
            <div class="btn btn-three">
              <span style={{ marginLeft: "50px", marginTop: "5px" }}>SEND</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
