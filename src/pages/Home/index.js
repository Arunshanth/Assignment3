import React from "react";
import ProfileImage from "../../images/1.jpeg";
import "./index.css";



function Home() {
  return (

    <section className="hero-color">
        <div className="hero-body columns">
        <div className="columns pb-6">
          <div className="column mt-6  is-8 has-text-left is-align-self-center">
            <h1 className="title  is-2 has-text-black is-spaced">
              Hello, I’m <br/> Arunshanth
            </h1>
            <div class="h_line1"></div><br/>
            <h2 className="title is-4 has-text-black is-spaced ">
             I'm a Freelance UI/UX Designer and Developer.
            </h2>
            <p className="subtitle is-5 has-text-black has-text-left"> 
            I strives to build immersive and beautiful web applications through 
            carefully crafted code and user-centric design.I’m specializing in building designing exceptional digital
            experiences. Currently, I’m focused on building accessible ,responsive websites and creating web applications. </p>
            
            
            <div className="buttons">
                    <a className="button is-danger" href="file:///Users/arunshanth/Desktop/Assignment3/6.pdf" target="_blank">
                     Download CV
                     </a>
                </div>
          </div>
          <div className="column is-4 is-align-self-center">
          
            <img className="hero-image" src={ProfileImage}></img>
          
          </div>
        </div>
      </div>
    </section>
    
    
  );
}

export default Home;