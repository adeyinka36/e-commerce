import React from 'react';

const Questions =(props)=>{



    return(
       
       <div >
         <button onClick={props.toggleAns}>{props.sign}</button>  <p className="ques">{props.ques}</p>
           <p className="faq_ans">{props.ans}</p>
        </div>
    
    )
}



export default Questions