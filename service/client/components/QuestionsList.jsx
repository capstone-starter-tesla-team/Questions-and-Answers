import React from 'react';
import axios from 'axios';

class QuestionsList extends React.Component {
  constructor() {
    super();

    this.state = {
      toggle: false,
    }
  }

 
    
  render() {
    const { toggle } = this.state


    return (
      <div>
        {/* {!toggle && (<ul id="question">

          {this.props.data.map((e, i) => {
            return (<li key={i}><a href="#"> {e.question_body}</a></li>)
          })}
        </ul>)} */}

      </div>
    );
  }
}

export default QuestionsList;

