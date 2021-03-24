import QuestionsList from './QuestionsList.jsx'
import axios from "axios"
class App extends React.Component {
constructor() {
    super()
    this.state = {

    }
}

render() {
  return (
    <div className="app-container">
     
      <div>
        <QuestionsList/>
      </div>
    </div>
  );
  
}
}

export default App