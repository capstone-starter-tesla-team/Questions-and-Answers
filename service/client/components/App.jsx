import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'
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
        "Authorization": `92f5bc49faf83e05e9f4b1b90815c5d7cc5c0fd3`
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
        
      </div>
    </div>
  );
  
}
}

export default App