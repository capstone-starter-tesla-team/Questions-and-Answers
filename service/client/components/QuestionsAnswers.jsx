import React, { Component } from 'react'

export class QuestionsAnswers extends Component {
    render() {
        return (
        <div className='container'>
            <div className='row ansQ'>
                <div className='col-4'>
                        <h3>Q: Who what which when where why whether how?</h3>
                    <div >
                        <h3>A:</h3>
                        <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
                    chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                        <div className='col' className='one-Question-Helpful'>
                            by User1234,January 1,2019  |  Helpful ?<button type="button" className="btn btn-link Yes-button-one-Question">
                                        Yes<p className='Count-Helpful-Yes'>(2)</p>
                                    </button> |
                                    <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                        </div>
                    </div>
                </div>
                
                <div className='col-6'>
                    
                    <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>
                    
                
            </div>
            </div>
            <div className='row ansQ'>
            <div className='col-4'>
                <h3>Q: Who what which when where why whether how?</h3>
                <h3>A:</h3>
                <h6 className="answer">Icing macaroon bear claw jelly beans chocolate cake. Cokie oat cake
            chocolate halvah jelly cake cotton candy soufflé topping. Jujubes topping cake gummies lomon drops.</h6>
                <div className='col' className='one-Question-Helpful'>
                    by User1234,January 1,2019  |  Helpful ? <button type="button" className="btn btn-link Yes-button-one-Question">
                                Yes<p className='Count-Helpful-Yes'>(2)</p>
                            </button> |
                            <button type="button" className="btn btn-link report-button-one-Question">Report</button>
                </div>
            </div>
            <div className='col-6'>
                    
                    <p className='Count-Helpful-Yes'>Helpful?Yes (10) |Add Answer</p>
                    
                
            </div>
            </div>
        </div>    

        )
    }
}

export default QuestionsAnswers
