import QuestionsList from './QuestionsList.jsx'
import SearchBar from './SearchBar.jsx'
import QA from './QA.jsx'
import Buttons from './Buttons.jsx'

import axios from "axios"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

 
               
            
            
       
        
   
  
  

render() {


  return (
    <div className="app-container">
     
      <div>
        <SearchBar />
        <QuestionsList />
        <QA />
       
        <Buttons />
        
        
      </div>
    </div>
  );
  
}
}

export default App