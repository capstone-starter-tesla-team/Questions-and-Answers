import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '', 
            toggle: false,
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
          if ((txtValue.toUpperCase()||txtValue.toLowerCase()).indexOf(filter) > -1) {
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
            <div>
                <h2>Questions & Answers</h2>

<input type="text" id="questions" value={this.state.value} onChange={this.handleInputChange} placeholder="HAVE A QUESTION?SEARCH FOR ANSWERS.." title="search" />
<button type="submit"><i className="fa fa-search"></i></button>

            </div>
        )
    }
}

export default SearchBar
