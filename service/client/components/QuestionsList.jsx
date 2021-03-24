import React from 'react';
import axios from 'axios';

class QuestionsList extends React.Component {
  constructor() {
    super();

    this.state = {
     
      value :'', 
      toggle : false
    }
   this.myFunction=this.myFunction.bind(this)
   this.handleInputChange=this.handleInputChange.bind(this)
    }

    componentDidMount (){
      axios.get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11002",
        {headers: {
                "Access-Control-Allow-Origin" : "*",
                "Content-type": "Application/json",
                "Authorization": `92f5bc49faf83e05e9f4b1b90815c5d7cc5c0fd3`
                }   
            }
      )
      .then((response) => {
        console.log(response)
          var response = response.data;
        },
        (error) => {
          var status = error.response.status
        }
      );

    }
  
    myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("questions");
    filter = input.value.toUpperCase();
    ul = document.getElementById("question");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
  handleInputChange(e) {
    this.myFunction(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  
  render() {
   const {toggle}=this.state 
    return (
      <div>
        <h2>Questions & Answers</h2>

<input type="text" id="questions"  value = {this.state.value}   onChange ={this.handleInputChange} placeholder="HAVE A QUESTION?SEARCH FOR ANSWERS.." title="search"/>
<button type="submit"><i className="fa fa-search"></i></button>

{!toggle&&(<ul id="question">
  <li><a href="#">Q: Why is this product cheaper here than other sites?</a></li>
  <li><a href="#">Q: How long does it last?</a></li>

  <li><a href="#">Q: What will match with my morphology ?</a></li>
  <li><a href="#">Q: How much this product ?</a></li>

  <li><a href="#">Q: Could anyone help me ?</a></li>
  <li><a href="#">Q: What's the difference between those products ?</a></li>
  
</ul>)}
<p>LOAD MORE ANSWERS</p>

<button >MORE ANSWERED QUESTIONS </button>


      </div>
    );
  }
}

export default QuestionsList;

