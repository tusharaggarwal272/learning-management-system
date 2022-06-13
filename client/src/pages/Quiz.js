import React from 'react'
import { useHistory, NavLink } from 'react-router-dom';
import './Quiz.css';
function Quiz() {

    const history = useHistory();
    //console.log("history" , history);

    const handleGoToFinalquiz = () => {
        history.push("/finalquiz");
    }

    return (
        <>
            <div className='content'>
                <div className='navbar'>
                    <div className='nav'>
                        <div>
                            <NavLink to="/quiz" style={{ alignItems: 'center', display: 'flex' }}>
                                <button type="button" className='link'>Final quiz</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="quiz-page">
                        <div className="final-quiz">
                            <div className='quizz'>
                                <div className="quiz-section">
                                    <div className="quiz-heading">
                                        <div className="inner-heading">
                                            <h3 className='h3'>
                                                Final quiz
                                            </h3>
                                            <p className='p'>
                                                It will be shown at the end of the course. Once activated
                                                the user will need to complete it to mark the course as
                                                completed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="second-container">
                                        <div className="inner-div">
                                            <div className="inner-div-2">
                                                <div className="question-div">
                                                    <label className="question" style={{ display: 'flex' }}>Questions</label>
                                                    <div className="question-inner-div">
                                                        <div className="text-base">
                                                            <div className="question-length">
                                                                <p className="text-muted">No questions added. {/**count of question */}</p>
                                                            </div>
                                                        </div>
                                                        <div className="edit-question">
                                                            <button type="button" className="btn" onClick={handleGoToFinalquiz}>Edit question</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ marginTop: "1.5rem" }}>
                                                    <label className="active">Active?</label>
                                                    <div className="quiz-active">
                                                        <div className="text-section">
                                                            <span className="no">
                                                                No, the final quiz is not active
                                                            </span>
                                                            {/* <span className="yes-no">
                              Yes!, the final quiz is active
  </span> */}
                                                        </div>
                                                        <div className="activate-button">
                                                            <button className="btn">
                                                                <span className="updating-status">
                                                                    Activate Final quiz
                                                                </span>
                                                                {/* <span style={{ display: "none !important" }}>
                                Activating....
</span> */}
                                                            </button>
                                                            {/* <button
                              className="btn"
                              style={{ display: "none !important" }}
                            >
                              <span className="updating-status">
                                Deactivate Final quiz
                              </span>{" "}
                              <span style={{ display: "none !important" }}>
                                Deactivating....
                              </span>
</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
