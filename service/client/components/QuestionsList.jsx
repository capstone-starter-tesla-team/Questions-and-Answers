import React from 'react';
import axios from 'axios';

class QuestionsList extends React.Component {
  constructor() {
    super();

    this.state = {

     
      
     
    }
    
    
  }

  

  



  render() {
    const { toggle } = this.state


    return (
      <div>
       
        {!toggle && (<ul id="question">

          {this.props.data.map((e, i) => {
            return (<li key={i}><a href="#"> {e.question_body}</a></li>)
          })}


        </ul>)}



        <button>MORE ANSWERED QUESTIONS </button>
        <button>ADD A QUESTION +</button>


      </div>
    );
  }
}

export default QuestionsList;

