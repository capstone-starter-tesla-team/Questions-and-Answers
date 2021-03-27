import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'
import QuestionsAnswers from './QuestionsAnswers.jsx'
import Buttons from './Buttons.jsx'

import axios from "axios"
class App extends React.Component {



render() {


  return (
    <div className="app-container">
     
      <div>
        <SearchBar />
        <QuestionsList />
        <QuestionsAnswers />
       
        <Buttons />
        
        
      </div>
    </div>
  );
  
}
}

export default App