import React, { Component } from 'react'
import axios from 'axios'
import { Button, Form, TextArea } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react'
import moment from 'moment'
export class QA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
           
            num: 2,
            answers: [],
            ansnum: 2,
            
            body: '',
            name: "",
            name: '',
            answer: '',
            email: '',

        }
        this.displayAnswers = this.displayAnswers.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      
        this.filterQ = this.filterQ.bind(this);

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
    updateYes(id, e) {

        axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/' + id + '/helpful', {}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": ` ce245480674a8f5bee0533ee0c39f51dff8c30f8 `
            }
        })
        e.target.disabled = true;
    }

    updateRepportAnswers(id, e) {
        axios.put('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/' + id + '/report', {}, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": ` ce245480674a8f5bee0533ee0c39f51dff8c30f8 `
            }
        })
        e.target.disabled = true;
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit() {
        axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions', {
            body: this.state.body,
            name: this.state.name,
            email: this.state.email,
            product_id: 11503
        }, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "Application/json",
                "Authorization": ` ce245480674a8f5bee0533ee0c39f51dff8c30f8 `
            }
        })
            .then(() => {
                console.log("posted successfully");
            })
    }

    filterQ(word) {
        console.log(word)
        var newData = this.state.data
        var storage = {results:[]}
        if (word.length > 2) {
             for (var i = 0; i < newData.results.length; i++) {
                  if (newData.results[i].question_body.toLowerCase().includes(word.toLowerCase())) {
                       storage.results.push(newData.results[i])
                  }
             }
             this.setState({ data: storage })
        } else {
             this.setState({ data: this.state.data })
        }
        
   }


    displayAnswers(object) {
        let values = Object.values(object);
        return values.map(e => <div>{e.body}</div>)

    }

    render() {

        const quest = this.state.data.filter((e, i) => i < this.state.num)
        const answr = this.state.answers.filter((e, i) => i < this.state.ansnum)
        const yes = this.state.answers.helpfulness
        const yes1 = this.state.answers[Object.keys(this.state.answers)[0]]

        console.log('anwsers', this.state.answers)
        return (
            <div className='container'>
                <div className='row'>
                <div className="mainstyle">
          <h2>Questions & Answers</h2>
          
<div className="search-box">
<input className="search-input" type="search" id="questions"  onChange={this.filterQ} placeholder="HAVE A QUESTION?SEARCH FOR ANSWERS.."  />
<button className="search-btn"><i className="fas fa-search"></i></button>
</div>

      </div>

                    <div className='col-md-4 offset-md-4'>  <div className="Addanswer" >Helpful?<a href='#' className="Yes5" onClick={(e) => { this.updateYes(this.state.data.question_id, e), this.setState({ yes: this.state.yes + 1 }) }}> Yes</a><p className='Count-Helpful'>({this.state.data.question_helpfulness, this.state.yes})</p> <p className='asa'>|</p>

                        <div className="Vertical-Line">

                            <a href='#' className="Report5">Add Answer</a></div>
                        {/* <div className="modal fade" id="myModal" role="dialog">


                            <div className="myAnswers">
                                <Form >
                                    <label forhtml="Answer">Add Your Answer:</label>
                                    <br />
                                    <TextArea type="text" name="body" placeholder="Answers..." onChange={this.handleChange} />
                                    <br />
                                    <label forhtml="Answer">For privacy reasons, do not use your full name or email address:</label>
                                    <br />
                                    <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                                    <br />
                                    <label forhtml="Answer">For authentication reasons, you will not be emailed:</label>
                                    <br />
                                    <input type="email" name="email" onChange={this.handleChange}></input>
                                    <br />
                                    <label forhtml="Answer">You must enter the following:</label>
                                    <br />
                                    <Button onClick={() => { this.handleSubmit() }}>Submit Answer</Button>
                                </Form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div> */}
                    </div>
                    </div>






                    {quest.map((e, i) => <div className='col-4' key={i}>

                        <h3> Q : {e.question_body} </h3>

                         <div  >
                            <h3>A: {this.state.answers[Object.keys(this.state.answers)[0]].body} </h3>
                            <h6 className="answer">{this.state.answers[Object.keys(this.state.answers)[0]].body}</h6>


                            <div className='col-8' className='one-Question-Helpful'> {this.state.answers[Object.keys(this.state.answers)[0]].answerer_name} {moment(this.state.answers[Object.keys(this.state.answers)[0]].date).format('LL')} <p className='asa'>|</p>  Helpful ?

                              <div className='yesandreport'> <a className="col-4" href='#' className="Yes1" onClick={(e) => { this.updateYes(this.state.data.question_id, e), this.setState({ yesA: this.state.yesA + 1 }) }}>Yes</a><p className='Count-Helpful-Yes'>({this.state.answers[Object.keys(this.state.answers)[0]].helpfulness, this.state.yesA})</p> |<a href='#' className="Report2" onClick={(e) => this.updateRepportAnswers(this.state.answers[Object.keys(this.state.answers)[0]].id, e)}>Report</a></div>
                            </div>



                        </div>

                    </div>)}
                 


                    <p className="youcan">Yes, as you can see in these photos.</p>
                  
                       <div className='myphoto'>
                      <div className='col-4'>
                            <Image className="im2" src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                        </div>
                        <div className='col-4'>
                            <Image className="im3" src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                        </div>
                        <div className='col-4'>
                            <Image className="im4" src='https://react.semantic-ui.com/images/wireframe/image.png' size='small' />
                        </div>
                    </div>
                    <div className='col-8' className='one-Question-Helpful'>  by User1234,January 1,2019 <p className='asa'>|</p>   Helpful ?

                              <div className='yesandreport'> <a className="col-4" href='#' className="Yes1" onClick={() => {this.setState({yes1: this.state.yes1+1})}}>Yes</a><p className='Count-Helpful-Yes'>(2)</p> |<a href='#' className="Report2">    Report</a></div>
                    </div>
                    <h5 style={{ marginTop: "25px" }}>LOAD MORE ANSWERS</h5>
                    <div className="col-8">
                        <button type="submit" className="mybuttn1" onClick={() => this.setState({ num: this.state.num + 2 })}>MORE ANSWERED QUESTIONS</button>
                        <button className="mybuttn2" data-toggle="modal" data-target="#myModal">ADD A QUESTION<i id="adding" className="plus icon"></i></button>
                            {/* <div className="modal fade" id="myModalquestion" role="dialog">
                               
                                        <div className="Question">
                                            <Form>
                                                <label forhtml="Questio">Ask your question</label>
                                                <br />
                                                <TextArea type="text" name="body" rows={2} onChange={this.handleChange} />
                                                <br />
                                                <label forhtml="Questio">For privacy reasons, do not use your full name or email address:</label>
                                                <br />
                                                <input type="text" name="name" placeholder="Example: jackson11!" onChange={this.handleChange}></input>
                                                <br />
                                                <label forhtml="Questio">For authentication reasons, you will not be emailed:</label>
                                                <br />
                                                <input type="email" name="email" placeholder="Why did you like the product or not?" onChange={this.handleChange}></input>
                                                <br />
                                                <label forhtml="Questio">You must enter the following:</label>
                                                <br />
                                                <Button onClick={() => { this.handleSubmit() }}>Submit question</Button>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                  
                            </div> */}
                       </div>
                </div>
            </div>

        )
    }
}




export default QA

