import React from 'react';
import eyelashes from '../image/wig1.jpg';
import wigs from '../image/wig2.jpg';

const About =()=>{
    return(
        <div className="about_container">
          <div className="about_top">
            <div className="about_text">
               <h1>WHO AM I?</h1>
               <p> Tigi is a  20 years old, who specializes in natural lace wigs and has mastered making wigs on the sewing machine. She is known for her flawless customizing of the lace hairline and her signature curls.</p>
               <p> Tigi is also has a passion for eyelashes .This led her  to become one of the most reliable and afoordable merhants of eyelashes in london</p>
            </div>
            <div className="about_img">
               <img src={wigs} alt="prtty girl"></img>
            </div>
          </div>
          <div className="about_middle">
            <div className="about_text">
               <h1>WHAT I DO</h1>
               <p> In a nutshell, if you need to buy quality eweaves, wigs or eyelashes, you have come to the perfect place. Here is a list of some of my services:</p>
               <h2>Wig Installation</h2>
               <h2>Eyelashes Installation</h2>
               <h2>Sale of Wigs and Eyelashes</h2>
               <h2>Custom made Wigs and Eyelashes</h2>
            </div>
            <div className="about_img">
               <img src={eyelashes} alt="prtty girl "></img>
            </div>
          </div>
          <div className="about_bottom"><h2>YOU ARE BEAUTIFUL</h2></div>

        </div>

    )
}

export default About