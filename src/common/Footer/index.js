import React from "react";
import "./index.css";

function Contact() {
  return (
    <section className="py-2 exp-color" id="#Contact">
      <h2 className="has-text-centered has-text-black title is-3">
        Contact
      </h2>
      <div className="experience has-text-white">
        <div className="container">
          <div className="columns mt-4">
            <div className="column is-4 has-text-centered">
              <span className="icon">
              <i className="fa-regular fa-envelope fa-4x" />
              </span>
              <p className="subtitle is-5 pt-2 has-text-black">arun@gmail.com</p>
            </div>

            <div className="column is-4 has-text-centered">
              <span className="icon">
              <i className="fa-solid fa-phone fa-3x" />
              </span>
              <p className="subtitle is-5 pt-2 has-text-black">+94773432453</p>
            </div>


            <div className="column is-4 has-text-centered">
              <span className="icon">
              <i className="fa-sharp fa-solid fa-location-dot fa-3x" />
              </span>
              <p className="subtitle is-5 pt-2 has-text-black">Kandy,Srilanka</p>
            </div>
                
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;