import React, { Component } from 'react'
import axios from 'axios'
import { Image } from 'semantic-ui-react'
export class QA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            num: 2,
            answers: [],
            ansnum: 2
        }
        this.displayAnswers = this.displayAnswers.bind(this)
    }
    componentDidMount() {
        axios.get(
            "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11003",
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "Application/json",
                    "Authorization": ` ce245480674a8f5bee0533ee0c39f51dff8c30f8 `
                }
            }
        )
            .then((response) => {
                let answers = response.data.results.map(e => e.answers)
                var response = response.data.results;
                console.log(response)

                this.setState({
                    data: response,
                    answers
                })
            })







    }
    displayAnswers(object) {
        let values = Object.values(object);
        return values.map(e => <div>{e.body}</div>)

    }
    render() {

        const quest = this.state.data.filter((e, i) => i < this.state.num)
        const answr = this.state.answers.filter((e, i) => i < this.state.ansnum)

        console.log('anwsers', this.state.answers)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>  <div  className="Addanswer" >Helpful?<a href='#' className="Yes5"> Yes</a><p className='Count-Helpful'>(25)</p> <p className='asa'>|</p><a href='#' className="Report5">Add Answer</a></div></div>
              
                    <div className='col-4'>
                   
                        <h3>Q: </h3>
                        <div >
                            <h3>A:</h3>
                            <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                          chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>


                            <div className='col-8' className='one-Question-Helpful'>  by User1234,January 1,2019  <p className='asa'>|</p>  Helpful ?
                            
                              <div className='yesandreport'> <a className="col-4" href='#' className="Yes1">Yes</a><p className='Count-Helpful-Yes'>(2)</p> |<a href='#' className="Report2">Report</a></div>
                             </div>
                                    
                      
                           
                        </div>
                    </div>
                    <div className='col-4'>
                    <div className='col-md-4 offset-md-4'>  <div  className="Addanswer" >Helpful?<a href='#' className="Yes5"> Yes</a><p className='Count-Helpful'>(25)</p> <p className='asa'>|</p><a href='#' className="Report5"> Add Answer</a></div></div>
                        <h3>Q: </h3>
                      
                        <div >
                            <h3>A:</h3>
                            <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                          chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                        </div>
                    </div>
                    
                    <div className='col-8' className='one-Question-Helpful'>  by User1234,January 1,2019  <p className='asa'>|</p>  Helpful ?
                            
                            <div className='yesandreport'> <a className="col-4" href='#' className="Yes1">Yes</a><p className='Count-Helpful-Yes'>(0)</p> |<a href='#' className="Report2">    Report</a></div>
                           </div>
                       
                    
                        <p className="youcan">Yes, as you can see in these photos.</p>
                    <div className='myphoto'>                                          
                            <div className='col-4'>
                                <Image className="im2" src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                            </div>
                            <div className='col-4'>
                                <Image className="im3" src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                            </div>
                            <div className='col-4'>
                                <Image className="im4"src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                            </div>
                        </div>
                        <div className='col-8' className='one-Question-Helpful'>  by User1234,January 1,2019 <p className='asa'>|</p>   Helpful ?
                            
                              <div className='yesandreport'> <a className="col-4" href='#' className="Yes1">Yes</a><p className='Count-Helpful-Yes'>(9)</p> |<a href='#' className="Report2">    Report</a></div>
                             </div>
                        <h5 style={{ marginTop: "25px" }}>LOAD MORE ANSWERS</h5>
                        <div className="col-8">
                            <button type="submit" className="mybuttn1"  onClick={() => this.setState({ num: this.state.num + 2 })}>MORE ANSWERED QUESTIONS</button>
                                <button type="submit" className="mybuttn2" onClick={this.addQuest} >
                                    ADD A QUESTION
                              <i id="adding" className="plus icon"></i>
                                </button></div>
                        </div>
                        </div>

        )
    }
}




export default QA