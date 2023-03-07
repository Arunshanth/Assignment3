import React from "react";
import "./index.css";
import AwardsImg1 from "../../images/5.png"
import AwardsImg2 from "../../images/6.png"
import AwardsImg3 from "../../images/7.png"
import AwardsImg4 from "../../images/8.png"


function Awards (){
    return(
        <section className="hero-color" id="Awards">
            <div className="Awards-hero pt-2 pb-6">
            <br/><h1 className="title is-2 has-text-centered has-text-black"><u>Awards &amp; Certifications </u></h1><br/>
            <div className="columns">
                <div className="column is-3 has-text-centered">
                    <div className="Image1">
                        <img className="Img1" src={AwardsImg1}/>
                    </div>
                    <p className="subtitle is-3 has-text-weight-bold has-text-black">Aces Coders</p>
                    <p class="subtitle is-4 has-text-black">Top 30</p>
                </div>

                <div className="column is-3 has-text-centered">
                    <div className="Image2">
                        <img className="Img2" src={AwardsImg2}/>
                    </div>
                    <p className="subtitle is-3 has-text-weight-bold has-text-black">Revolux</p>
                    <p class="subtitle is-4 has-text-black">Top 20</p>
                </div>

                <div className="column is-3 has-text-centered">
                    <div className="Image3">
                        <img className="Img3" src={AwardsImg3}/>
                    </div>
                    <p className="subtitle is-3 has-text-weight-bold has-text-black">Codefest</p>
                    <p class="subtitle is-4 has-text-black">Top 10</p>
                </div>

                <div className="column is-3 has-text-centered">
                    <div className="Image4">
                        <img className="Img4" src={AwardsImg4}/>
                    </div>
                    <p className="subtitle is-3 has-text-weight-bold has-text-black">Designathon</p>
                    <p class="subtitle is-4 has-text-black">Runners Up</p>
                </div>
            </div>

            
            </div>

        </section>
    );
}

export default Awards;