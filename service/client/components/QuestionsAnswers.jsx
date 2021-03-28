//  import React, { Component } from 'react'
//  import axios from 'axios'
//  import { Image } from 'semantic-ui-react'

//  export class QuestionsAnswers extends Component {
//         constructor(props){
//         super(props)
//        this.state={
//            data:[],
//            num:2,
//             answers:[],
//           ansnum:2
//                  }
//         this.displayAnswers = this.displayAnswers.bind(this)
//    }
//     componentDidMount() {
//         axios.get(
//          "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11003",
//          {
//            headers: {                                                                                               "Access-Control-Allow-Origin": "*",
//               "Content-type": "Application/json",
//              "Authorization": ` ce245480674a8f5bee0533ee0c39f51dff8c30f8 `
//             }
//           }
//         )
//           .then((response) => {
//            let answers = response.data.results.map(e=> e.answers)
//              var response = response.data.results;
//            console.log (response)
            
//                     this.setState({ 
//                         data: response,
//                          answers
//                      })
//                 })
                   
                
                
           
            
       
      
//       }
//        displayAnswers(object) {
//            let values = Object.values(object);
//          return values.map(e=><div>{e.body}</div>)
   
//        }
//     render() {
        
//         const quest =this.state.data.filter((e,i) => i < this.state.num)
//        const answr =this.state.answers.filter((e,i) => i < this.state.ansnum)
        
// //         console.log('anwsers',this.state.answers)
//          return (
//          <div>
//               <div className='container'>
//             <div className='row ansQ'>
//                 <div className='col-4'>
//                         <h3>Q: Who what which when where why whether how?</h3>
//                     <div >
//                         <h3>A:</h3>
//                         <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
//                     chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
//                         <div className='col' className='one-Question-Helpful'>
//                             by User1234,January 1,2019  |  Helpful ?<button type="button" className="btn btn-link Yes-button-one-Question">
//                                         Yes<p className='Count-Helpful-Yes'>(2)</p>
//                                     </button> 
//                                     <button type="button" className="btn btn-link report-button-one-Question">Report</button>
//                         </div>
//                         </div>
//                         </div>
//                         <div className='col-6'>

// <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>


// </div>
// </div>
// <div className='row ansQ'>
// <div className='col-4'>
// <h3>Q: Who what which when where why whether how?</h3>
// <h3>A:</h3>
// <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
// chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
// <div className='col' className='one-Question-Helpful'>
// by User1234,January 1,2019  |  Helpful ? <button type="button" className="btn btn-link Yes-button-one-Question">
//             Yes<p className='Count-Helpful-Yes'>(2)</p>
//         </button> |
//         <button type="button" className="btn btn-link report-button-one-Question">Report</button>
// </div>

//          </div>
//     )
//     }
//     }
    
// //         //     <div>
// // //         //      {!toggle && (<ul id="question">
    
// // //         //       {anser.map((e, i) => { */}
// // //         //         return (<li key={i}><a href="#"> {e.question_body}</a></li>)
// // //         //       })}
// // //         //     </ul>)} 
    
// // //         //   </div>  
           
// // //         <div className='container'>
// // //             <h3>Question</h3>
// // //             {this.state.answers.map(e=> this.displayAnswers(e))}
           
                        
// // //                    {/* {anser.map((e)=>( <div  key={e.question_id}>
// // //                     <h3>Q: {e.question_body}</h3> */}


// // // {/* 
// // //                     A:{this.state.answers}
// // //                        <div>    */}
// // //                      {/* {this.state.answers.map(e=>{ 
// // //                      return <div>
// // //                      <div> A:  {e.body}</div> */}
                     
                     
                        
// // //                         <div className='col' className='one-Question-Helpful'>
// // //                             by   |  Helpful ?<button type="button" className="btn btn-link Yes-button-one-Question" >
// // //                                         Yes
// // //                                     </button>
// // //                                     {/* {e.question_helpfulness} | */}
// // //                                     <button type="button" className="btn btn-link report-button-one-Question">Report</button>
// // //                         </div>
// // //                         <div className='col-6'>
                    
// // //                     <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>
                    
                
// // //             </div> 
                 
// // //                     <div className='container'>
// // //                 <p>Yes, as you can see in these photos.</p>
// // //                  <div className='row'>
// // //                     <div className='col-2'>
// // //                         <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
// // //                     </div>
// // //                     <div className='col-2'>
// // //                         <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                       
// // //                     </div>
// // //                     <div className='col-2'>
// // //                         <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                      
// // //                     </div>
// // //                 </div>
// // //                  <div className='col' className='one-Question-Helpful'>
// // //                                 by User1337 -Seller, May 1,2019  <div className="Vertical-Line"></div>  Helpful?
// // //                                     <button type="button" className="btn btn-link Yes-button-one-Question">
// // //                                     Yes
// // //                                         <p className='Count-Helpful-Yes'>(9)</p>
// // //                                     </button>
// // //                                     <div className="Vertical-Line">
// // //                                     </div>
// // //                                     <button type="button" className="btn btn-link report-button-one-Question">Report</button>
// // //                         </div>
// // //             </div>
// // //                 <div>
// // //                 {/* <h5 style={{marginTop:"25px"}}>LOAD MORE ANSWERS</h5>
// // //                 <button type="button-add" className="MoreAnswerdQuestions" onClick={()=>this.setState({num:this.state.num +2})}>MORE ANSWERED QUESTIONS</button> */}
// // //                 {/* <div className="btn-add" onClick={this.addQuest}>
// // //                     <button className="AddQuestions">
// // //                         ADD A QUESTION
// // //                         <i id="adding" className="plus icon"></i>
// // //                     </button>
// // //                 </div> */}
            
// // //                 </div>
                
// // //                  {/* <div className='col-6'>
                    
// // //                 <p className='Count-Helpful-Yes'><a href ="">Helpful?Yes (10) </a>|<a href ="">Add Answer </a></p>
                
// // //             </div>  */}
// // //             </div>
           
             

// // //         )
// // //     }
// // // }

// // // export default QuestionsAnswers



// // /// work 2 


// // // import React, { Component } from 'react'
// // // // import axios from 'axios'
// // // import { Image } from 'semantic-ui-react'

// // // export class QuestionsAnswers extends Component {
// // //     constructor(props){
// // //         super(props)
// // //         this.state={
// // //             quesions: []
// // //         }
// // //     }
    
// // //     filterQuestions(){
// // //           var question1 = this.props.data[0]
// // //           var question2 = this.props.data[1]
// //         //   the component is initialized before the props are read from the parent component so question1 will be undefined at that moment
// //         // if we trigger that event after a timeout then we will get the data from the props after it was passed to this component.
// //         //   setTimeout(() => console.log(question1.question_id), 100) 
// //         //   the solution is then to check if the property in the props object is not undefined 
// //         // to execute whatever operation we want according to that information. if(this.props.)
          
// //         //   console.log("questions set 2",question1.question_helpfulness,question2.question_helpfulness)
// //     //       this.props.data.map((question,index)=>{
// //     //         //   if (question.question_helpfulness>question1.question_helpfulness){
// //     //         //       if (question1.question_helpfulness>question2.question_helpfulness){
// //     //         //           question2 = question
// //     //         //         }
// //     //         //         else {
// //     //         //             question1 = question
// //     //         //       }
// //     //         //   }
// //     //         //     // this.setState({questions: })
// //     //         console.log(question1.id)
                
// //     //       })
// //     //   }
      
// //     // render() {
// //     //     // {console.log('data inside questio answer',this.props.data)}
// //     //     {this.filterQuestions()}
// //     //     return (
         
           
// //     //     <div className='container'>
// //     //         {this.props.data.map((answer,index)=>(
// //     //             <div>

// //     //         <h3>Question</h3>
// //     //         <h4>answers</h4>
// //     //         <div className='detailsAnswer'>
// //     //         <p>by user name answer + date</p>
// //     //         helpful?
// //     //         <a href="#">yes</a>
// //     //         <p>number of helps</p> 
// //     //          | 
// //     //             <a href="#">report</a>
// //     //         </div>
// //     //             </div>
// //     //         ))}
                        
// //     //                     <div className='col' className='one-Question-Helpful'>
// //     //                         by   |  Helpful ?<button type="button" className="btn btn-link Yes-button-one-Question" >
// //     //                                     Yes
// //     //                                 </button>

// //     //                                 <button type="button" className="btn btn-link report-button-one-Question">Report</button>
// //     //                     </div>
// //     //                     <div className='col-6'>
                    
// //     //                 <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>
                    
                
// //     //         </div> 
                 
// //     //                 <div className='container'>
// //     //             <p>Yes, as you can see in these photos.</p>
// //     //              <div className='row'>
// //     //                 <div className='col-2'>
// //     //                     <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
// //     //                 </div>
// //     //                 <div className='col-2'>
// //     //                     <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                       
// //     //                 </div>
// //     //                 <div className='col-2'>
// //     //                     <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />                      
// //     //                 </div>
// //     //             </div>
// //     //              <div className='col' className='one-Question-Helpful'>
// //     //                             by User1337 -Seller, May 1,2019  <div className="Vertical-Line"></div>  Helpful?
// //     //                                 <button type="button" className="btn btn-link Yes-button-one-Question">
// //     //                                 Yes
// //     //                                     <p className='Count-Helpful-Yes'>(9)</p>
// //     //                                 </button>
// //     //                                 <div className="Vertical-Line">
// //     //                                 </div>
// //     //                                 <button type="button" className="btn btn-link report-button-one-Question">Report</button>
// //     //                     </div>
// //     //         </div>
// //                 <div>
// //                 {/* <h5 style={{marginTop:"25px"}}>LOAD MORE ANSWERS</h5>
// //                 <button type="button-add" className="MoreAnswerdQuestions" onClick={()=>this.setState({num:this.state.num +2})}>MORE ANSWERED QUESTIONS</button> */}
// //                 {/* <div className="btn-add" onClick={this.addQuest}>
// //                     <button className="AddQuestions">
// //                         ADD A QUESTION
// //                         <i id="adding" className="plus icon"></i>
// //                     </button>
// //                 </div> */}
            
// //                 {/* </div>
                
// //                  {/* <div className='col-6'>
                    
// //                 <p className='Count-Helpful-Yes'><a href ="">Helpful?Yes (10) </a>|<a href ="">Add Answer </a></p>
                
// //             </div>  */}
// //             {/* </div>
           
             

        

//  export default QuestionsAnswers
