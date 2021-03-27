import React, { Component } from 'react'
import QuestionsAnswers from './QuestionsAnswers.jsx'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        
        this.addQ = this.addQuest.bind(this);
    }
    addQuest() {
        
    }

    render() {
        const add =
            <div>
                <input type="text" name="body"></input>
                <input type="text" name="name"></input>
                <input type="text" name="email"></input>
                <input type="text" name="photos"></input>
                <button>Add </button>
            </div>
        return (
            <div>
                
            {/* //     <h5 style={{marginTop:"25px"}}>LOAD MORE ANSWERS</h5>
            //     <button type="button-add" className="MoreAnswerdQuestions" onClick={()=>this.setState({[this.props.num]:this.props.num +2})}>MORE ANSWERED QUESTIONS</button>
            //     <div className="btn-add" onClick={this.addQuest}>
            //         <button className="AddQuestions">
            //             ADD A QUESTION
            //             <i id="adding" className="plus icon"></i>
            //         </button>
            //     </div> */}
            </div>
        )
    }
}
export default Buttons;