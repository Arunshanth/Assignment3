import React from "react";
import "./index.css";
import AboutImage from "../../images/2.jpeg";

function Aboutme (){
    return(
        
        <section className="hero-color" id="AboutMe">
        
        <div className="about-hero pt-6 pb-6">
        <div className="columns">
          <div className="column is-4">
            
              <img className="about-img ml-6" src={AboutImage}/><br/>
    
          </div>
          <div className="column is-7">
            <h1 className="title is-2 t has-text-black has-text-right"><u>About Me </u></h1>
            <p className="subtitle is-5 has-text-black has-text-right mt-6">I've worked as a freelance front-end developer 
              for more than 3 years. I'm a San Francisco native. For incredible people all across the world, 
              I write and produce web components. I enjoy working with fresh faces. new encounters with new folks.</p>
            <table>
              <tbody><tr>
                  <td><b>Name</b>: Arunshanth</td>
                  <td><b>University</b>: University of Colombo</td>
                </tr>
                <tr>
                  <td><b>Birthday</b>: 11 <sup>th</sup> April 2001</td>
                  <td><b>Address</b>: Kandy,Srilanka</td>
                </tr>
                <tr>
                  <td><b>Age</b>: 21 years old</td>
                  <td><b>Email</b>: arun@gmail.com</td>
                </tr>
              </tbody></table>
          </div>           
        </div>
      </div>
    </section>


    );
}

export default Aboutme;



/*
<h1 className="title is-1 t has-text-centered has-text-black"><u>About Me </u></h1>
            <p className="subtitle is-5 has-text-centered st pt-2 has-text-black">I've worked as a freelance front-end developer 
              for more than 3 years. I'm a San Francisco native. For incredible people all across the world, 
              I write and produce web components. I enjoy working with fresh faces. new encounters with new folks.</p>
            <table>
              <tbody><tr>
                  <td><b>Name</b>: Arunshanth</td>
                  <td><b>University</b>: University of Colombo</td>
                </tr>
                <tr>
                  <td><b>Birthday</b>: 11 <sup>th</sup> April 2001</td>
                  <td><b>Address</b>: Kandy,Srilanka</td>
                </tr>
                <tr>
                  <td><b>Age</b>: 21 years old</td>
                  <td><b>Email</b>: arun@gmail.com</td>
                </tr>
              </tbody></table> */
         