import React from "react";
import "./index.css";
import EduImage1 from "../../images/3.png";
import EduImage2 from "../../images/4.png";

function Education (){
    return(
        <section className="hero-color" id="Education">
            <div className="Edu-hero pt-2 pb-6">
            <br/><h1 className="title is-2 has-text-centered has-text-black"><u>Education </u></h1>
                <div className="columns">
                    <div className="column is-6 has-text-centered">
                        <div className="Image1">
                        <img className="edu-img1" src={EduImage1}/>
                        </div>
                        <h1 className="title  is-5 has-text-black is-spaced">
                        <b>School Education</b><br /><br />St.Sylvester’s College (2007-2020)
                        </h1>
                        <p className="subtitle is-5 has-text-black">
                        Passed General Certificate of Education Exams - Ordinary Level <br />
                        Exam with 7 A and 2 B passes and Advanced Level with 2 A pass <br />
                        and 1 B passes.</p>
                        
                    </div>

                    <div className="column is-6 has-text-centered">
                        <div className="Image2">
                        <img className="edu-img1" src={EduImage2}/>
                        </div>
                        <h1 className="title  is-5 has-text-black is-spaced">
                        <b>Bachelors's Degree</b><br /><br />University of Colombo
                        </h1>
                        <p className="subtitle is-5 has-text-black">
                            Bsc. (Hons) in Information Systems <br />
                            Currently reading for my Bachelors' Degree in Information Systems <br />
                            at University of Colombo School of Computing (UCSC).</p>
                        
                    </div>
                </div>
                

            </div>
        </section>

    );
}

export default Education;