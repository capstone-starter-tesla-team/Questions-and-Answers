import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'
import QuestionsAnswers from './QuestionsAnswers.jsx'
import Buttons from './Buttons.jsx'
import Photo from './Image.jsx'
import axios from "axios"
class App extends React.Component {
constructor() {
    super()
    this.state = {
      data: []
    }
}
componentDidMount() {
  axios.get(
    "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11002",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "Application/json",
        "Authorization": ` e4ab5cdebdf8a3f9422a79a37f8efff1e5ffd687 `
      }
    }
  )
    .then((response) => {
      console.log(response.data.results)

      var response = response.data.results;
      this.setState({ data: response })
    },

      (error) => {
        var status = error.response.status
      }
    );

}

render() {
 

  return (
    <div className="app-container">
     
      <div>
        <SearchBar data={this.state.data}/>
        <QuestionsList data={this.state.data}/>
        <QuestionsAnswers data={this.state.data}/>
        <Photo data={this.state.data}/>
        <Buttons data={this.state.data}/>
        
        
      </div>
    </div>
  );
  
}
}

export default App