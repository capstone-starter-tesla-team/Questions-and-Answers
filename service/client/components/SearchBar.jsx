import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
            
            
        
        }
        this.myFunction=this.myFunction.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
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
       
        return (
            <div className="mainstyle">
                <h2>Questions & Answers</h2>
<div className="search-box">
<input className="search-input" type="search" id="questions" value={this.state.value} onChange={this.handleInputChange} placeholder="HAVE A QUESTION?SEARCH FOR ANSWERS.."  />
<button className="search-btn"><i className="fas fa-search"></i></button>
</div>

            </div>
        )
    }
}

export default SearchBar
