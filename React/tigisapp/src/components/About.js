import React from 'react';
import prettygirl from '../image/blackgirl.jpg';

const About =()=>{
    return(
        <div className="about_container">
            <div className="div1">
               <h1>Queen Essence</h1>
               <p> Daisha is only 23 years old, who specializes in natural lace wigs and has mastered making wigs on the sewing machine. She is known for her flawless customizing of the lace hairline and her signature curls.

Daisha is for sure the one to make any wig look super natural with just some of her TLC. Daisha is also a celebrity wig maker and has worked with a few women in that industry. A lot of people make wigs, but she make crowns.

</p>
            </div>
            <div className="div2">
               <img src={prettygirl} alt="prtty girl image"></img>
            </div>

        </div>

    )
}

export default About