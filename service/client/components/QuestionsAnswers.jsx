import React, { Component } from 'react'
import axios from 'axios'
import { Image } from 'semantic-ui-react'

export class QuestionsAnswers extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            num:2,
            answerss:[]
        }
    }
    componentDidMount() {
        axios.get(
          "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11003",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-type": "Application/json",
              "Authorization": ` 9ba2871630c8adada935323b5cbfc0a0b87c37cf `
            }
          }
        )
          .then((response) => {
            var response1 = response.data.results;
               
                      this.setState({ 
                        data: response1,
                  
                       
                    })
                   
                 
            
                   
                })
                   
                
                
           
            
       
      
      }
    render() {
        
        const anser =this.state.data.filter((e,i) => i< this.state.num)
        // this.state.data.map(e=>{
        //     console.log(e.answerss)
        //     var mya=Object.values(e.answers)
                
        //     mya.map(e=>{
               
        //        this.setState({ 
        //          answerss:e.id
                
        //      })
        //      console.log(mya,"gaston")
        //     })
          
        // })
    

       
        
        return (
            
           
        <div className='container'>
            <div className='row ansQ'>
                <div className='col-4'>
                        
                   {anser.map((e)=>( <div  key={e.question_id}>
                    <h3>Q: {e.question_body}</h3>
                 
                    A:
                        {/* <p>{answers[0].body}</p>
                        <p>{answers[1].body}</p> */}
                      
                       
                     
                       
                        <div className='col' className='one-Question-Helpful'>
                            by {e.date}  |  Helpful ?<button type="button" className="btn btn-link Yes-button-one-Question" >
                                        Yes
                                    </button>
                                    {e.question_helpfulness} |
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
                        <div className='col-6'>
                    
                    <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>
                    
                
            </div>
                    </div>
                    
                    ))}
                    <div className='container'>
                <p>Yes, as you can see in these photos.</p>
                 <div className='row'>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                    </div>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                       
                    </div>
                    <div className='col-2'>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                      
                    </div>
                </div>
                 <div className='col' className='one-Question-Helpful'>
                                by User1337 -Seller, May 1,2019  <div className="Vertical-Line"></div>  Helpful?
                                    <button type="button" className="btn btn-link Yes-button-one-Question">
                                    Yes
                                        <p className='Count-Helpful-Yes'>(9)</p>
                                    </button>
                                    <div className="Vertical-Line">
                                    </div>
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
            </div>
                
                <h5 style={{marginTop:"25px"}}>LOAD MORE ANSWERS</h5>
                <div className="mybuttn">
                <button type="button-add" className="MoreAnswerdQuestions" onClick={()=>this.setState({num:this.state.num +2})}>MORE ANSWERED QUESTIONS</button>
                <div className="btn-add" onClick={this.addQuest}>
                    <button className="AddQuestions">
                        ADD A QUESTION
                        <i id="adding" className="plus icon"></i>
                    </button></div>
                </div>
            
                </div>
                
                <div className='col-6'>
                    
                <p className='Count-Helpful-Yes'><a href ="">Helpful?Yes (10) </a>|<a href ="">Add Answer </a></p>
                
            </div> 
            </div>
          
         </div>    

        )
    }
}

export default QuestionsAnswers
