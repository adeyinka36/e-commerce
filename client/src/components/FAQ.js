import React,{Component} from 'react';
import Questions from './Questions'



class FAQ extends Component{
    constructor(props){
        super(props);
        this.state={
            delivery:false,
            customized:false,
            usa:false,
            contact:false,
            sign:"+",
            ques1:"How do i contact you?",
            ques2:"Do you operate in Asia?",
            ans1:"Our contact is available on the about page",
            ans2:"No we do not at this time"
        }
    }


toggleAns=(e)=>{
    console.log(e)
  if(e.target.innerText==="+"){
    //  change animation to slidebackin
    
    e.target.nextElementSibling.nextElementSibling.style.opacity=1
     
    e.target.innerText="-"
  }
  else{
    
    e.target.nextElementSibling.nextElementSibling.style.opacity=0
     
    e.target.innerText="+"
  }
}

    render(){
              


        return(
            <div className="faq_container">
                <h1>Below are some of our Commonly asked question</h1>
                <Questions
                toggleAns={this.toggleAns} sign={this.state.sign} 
                ques={this.state.ques1} ans={this.state.ans1}/>

                <Questions 
                toggleAns={this.toggleAns} sign={this.state.sign} 
                ques={this.state.ques2} ans={this.state.ans2}/>


            </div>



        )
    }
}
export default FAQ