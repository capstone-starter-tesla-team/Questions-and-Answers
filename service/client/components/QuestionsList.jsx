import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
     
      value :'', 
      toggle : false
    }
   this.myFunction=this.myFunction.bind(this)
   this.handleInputChange=this.handleInputChange.bind(this)
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
  <li><a href="#">Why is this product cheaper here than other sites?</a></li>
  <li><a href="#">How long does it last?</a></li>

  <li><a href="#">What will match with my morphology ?</a></li>
  <li><a href="#">how much this product ?</a></li>

  <li><a href="#">Could anyone help me ?</a></li>
  <li><a href="#">What's the difference between those products ?</a></li>
  
</ul>)}

<button>MORE ANSWERED QUESTIONS </button>


      </div>
    );
  }
}

export default App;

