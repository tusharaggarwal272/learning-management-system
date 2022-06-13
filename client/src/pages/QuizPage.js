import React, { useState, useEffect } from "react";
import "./Quizpage.css";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Editor } from "@tinymce/tinymce-react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { Input, Box } from "@mui/material";
import "./FinalQuiz";
import axios from "axios"

function Quizpage() {
    const [show, setShow] = useState(false);
    //   const [input, setInput] = useState([{ Questions: " ", Solutions: " " }]);
    const [quesInput, setQuesInput] = useState("");
    const [solInput, setSolInput] = useState("");
    //   const [body, setBody] = useState("");
    const [count, setCount] = useState(0);
    const [points, setPoints] = useState(0);
    const [optionList, setOptionList] = useState([])
    const [optionsQuantity, setOptionsQuantity] = useState(0)

    //   const handleaddClick = () => {
    //     input([...input, { Questions: "", Solutions: "" }]);
    //   };

    const incPoint = () => {
        setPoints(points + 1);
    };
    const decPoint = () => {
        setPoints(points - 1);
    };

    const handleDone = () => {
        const data = {
            questionName: quesInput,
            questionSol: solInput,
            options: optionList,
            points: points
        }

        axios.post("/api/courses/quiz/newquestion", data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

        console.log("Final data: ", data)
    };

    const optionTextValueUpdate = (event, index) => {
        var tempOptionList = [...optionList]
        tempOptionList[index].option_text = event.target.value
        setOptionList(tempOptionList)
    }

    const optionStatusValueUpdate = (event, index) => {
        var tempOptionList = [...optionList]
        tempOptionList[index].option_status = event.target.checked
        setOptionList(tempOptionList)
    }

    const addOptionBut = () => {
        console.log("addOptionBut func exec.")
        var tempOptionList = []
        console.log(optionList)
        for (var i = 0; i < optionsQuantity; i++) {
            tempOptionList.push({ option_text: "", option_status: false })
        }
        setOptionList(tempOptionList)
    }

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
    };

    const optionRow = (index) => {
        return (
            <tr style={{ width: "100%" }}>
                {/* <td className="side-icon">
            <button className="icon">
                <span
                style={{
                    fontWeight: "900",
                    display: "inline-block",
                    lineHeight: "0.5",
                }}
                >
                <UnfoldMoreIcon />
                </span>
            </button>
            </td> */}
                <td className="chkbox">
                    <input
                        onChange={(evt) => {
                            // (evt.target.value === 1) ? setOptionList[index].option_status(1) :  setOptionList[index].option_status(0)
                            optionStatusValueUpdate(evt, index)
                        }}
                        type="checkbox"
                        style={{
                            lineHeight: "inherit",
                            boxSizing: "border-box",
                            padding: "0",
                            fontSize: "100%",
                            cursor: "default",
                        }}
                    ></input>
                </td>
                <td style={{ width: "100%" }} className="text-area">
                    <textarea style={{ width: "100%" }} onChange={(evt) => {
                        optionTextValueUpdate(evt, index)
                    }} className="form-area"></textarea>
                </td>
                <td>
                    <div
                        style={{
                            justifyContent: "flex-end",
                            alignItems: "center",
                            display: "flex",
                            marginTop: "1rem",
                        }}
                    >
                        <a
                            href="#"
                            style={{
                                curosr: "pointer",
                                color: "rgba(210,214,220)",
                                fontWeight: "500",
                                lineHeight: "1.25rem",
                                fontSize: ".875rem",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <DeleteIcon />
                        </a>
                    </div>
                </td>
            </tr>
        )
    }


    const optionRowCont = optionList.map((opt, index) => {
        return (
            <tbody
                style={{
                    width: "100%"
                }}
            >

                {/* option row */}
                {optionRow(index)}
            </tbody>
        )
    })

    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* <div className="current-item-quiz">
            <div className="current-item">   
              <div className="modal-nav">
                <ArrowUpwardIcon
                  style={{ paddingTop: "5px", fontWeight: "800" }}
                />
                <span className="text">
                  Back to all questions in final quiz
                </span>
              </div>
            </div>
          </div> */}

                    {/* section - 1 */}
                    <div className="page">
                        {/* question nav */}
                        <div className="modal-header">
                            <div className="header">
                                <div>
                                    <span>
                                        <DoDisturbIcon className="cancel-icon" />
                                    </span>
                                </div>

                                <div className="middle-header">
                                    <button className="prev-next">
                                        <span>
                                            <ChevronLeftIcon />
                                        </span>
                                    </button>
                                    <h6 className="h6" getcount={count}>
                                        {" "}
                                        Question {count} of {count}{" "}
                                    </h6>
                                    <button className="prev-next">
                                        <span>
                                            <ChevronRightIcon />
                                        </span>
                                    </button>
                                </div>
                                <div>
                                    <span onClick={handleGoBack}>
                                        <CloseIcon className="cancel-icon" />
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* section - 2 */}
                        <div className="modal-body">
                            <div>
                                <div className="question-content">

                                    {/* questions section */}
                                    <div className="card">
                                        <div>
                                            <div className="quill-start">
                                                {/* question */}
                                                <label className="question-text">Question text</label>
                                                <div style={{ marginTop: "0.7rem" }}></div>
                                                <div
                                                    style={{
                                                        padding: "1rem 1.25rem",
                                                        backgroundColor: "rgba(249,250,251)",
                                                    }}
                                                >
                                                    {" "}
                                                    <div className="text-editor">
                                                        <Editor
                                                            textareaName="content"
                                                            name="Questions"
                                                            initialValue="Question will go here"
                                                            className="editor"
                                                            onEditorChange={(evt) => {
                                                                setQuesInput(evt)
                                                                console.log("quesInput ", quesInput)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-save-button">
                                            <div>
                                                <span className="save">
                                                    <span
                                                        style={{
                                                            display: "none ",
                                                            color: "rgba(159,166,178)",
                                                        }}
                                                    >
                                                        Saving..
                                                    </span>
                                                </span>
                                                <span className="save">
                                                    <span
                                                        style={{
                                                            display: "none",
                                                            color: "rgba(159,166,178)",
                                                        }}
                                                    >
                                                        Saved
                                                    </span>
                                                </span>
                                            </div>
                                            <span className="save-btn">
                                                <button
                                                    onClick={() => {
                                                        console.log(quesInput)
                                                    }}

                                                    className="btn"
                                                    style={{ backgroundColor: "blue" }}
                                                >
                                                    Save
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    {/* solutions section */}
                                    <div className="card" style={{ marginTop: "1.5rem" }}>
                                        <div>
                                            <div className="quill-start">
                                                <label className="question-text">Solution text</label>
                                                <div style={{ marginTop: "0.25rem" }}></div>
                                                <div
                                                    style={{
                                                        padding: "1rem 1.25rem",
                                                        backgroundColor: "rgba(249,250,251)",
                                                    }}
                                                >
                                                    <div className="text-editor">
                                                        <Editor
                                                            textareaName="content"
                                                            name="solutions"
                                                            initialValue="Solution will go here "
                                                            className="editor"
                                                            onEditorChange={(evt) => {
                                                                setSolInput(evt)
                                                                console.log("solInput ", solInput)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom-save-button">
                                            <div>
                                                <span className="save">
                                                    <span
                                                        style={{
                                                            display: "none ",
                                                            color: "rgba(159,166,178)",
                                                        }}
                                                    >
                                                        Saving..
                                                    </span>
                                                </span>
                                                <span className="save">
                                                    <span
                                                        style={{
                                                            display: "none",
                                                            color: "rgba(159,166,178)",
                                                        }}
                                                    >
                                                        Saved
                                                    </span>
                                                </span>
                                            </div>
                                            <span className="save-btn">
                                                <button
                                                    onClick={() => {
                                                        console.log(quesInput)
                                                    }}
                                                    className="btn"
                                                    style={{ backgroundColor: "blue" }}
                                                >
                                                    Save
                                                </button>
                                            </span>
                                        </div>
                                    </div>

                                    {/* options section */}
                                    <div className="card" style={{ marginTop: "1.5rem" }}>
                                        <div>
                                            <label className="options">Options</label>
                                            <div className="current-question">
                                                <div className="option-length">
                                                    {/*div className="middle-div">  */}
                                                    <table className="table">

                                                        {/* option lablings */}
                                                        <thead>
                                                            <tr
                                                                style={{
                                                                    display: "table-row",
                                                                    verticalAlign: "inherit",
                                                                }}
                                                            >
                                                                {/* <th className="blank"></th> */}
                                                                <th className="heading">Correct</th>{" "}
                                                                <th
                                                                    className="heading"
                                                                    style={{ fontSize: ".75rem", width: "50%" }}
                                                                >
                                                                    Option text
                                                                </th>
                                                                <th
                                                                    className="blank"
                                                                    style={{ width: "50%" }}
                                                                ></th>
                                                            </tr>
                                                        </thead>
                                                        {optionRowCont}
                                                    </table>
                                                    {/*</div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "1.5rem" }}>

                                            <div
                                                style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    paddingBottom: "20px"
                                                }}
                                            >
                                                <button style={{ marginLeft: "auto", marginRight: "auto", cursor: "pointer" }} onClick={() => {
                                                    console.log("optionList: ", optionList)
                                                }} className="bottom-save-button">
                                                    <span>Save</span>
                                                </button>
                                            </div>

                                            <div
                                                style={{
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    display: "flex",
                                                }}
                                            >
                                                <div style={{ marginRight: "0.5rem" }}>
                                                    <select onChange={(evt) => {
                                                        setOptionsQuantity(evt.target.value)
                                                        console.log(evt.target.value)
                                                    }} className="select">
                                                        <option value="0" label="0" selected="selected">
                                                            0
                                                        </option>
                                                        <option value="2" label="2">
                                                            2
                                                        </option>
                                                        <option value="3" label="3">
                                                            3
                                                        </option>
                                                        <option value="4" label="4">
                                                            4
                                                        </option>
                                                        <option
                                                            value="5"
                                                            label="5"
                                                        >
                                                            5
                                                        </option>
                                                    </select>
                                                </div>
                                                <button onClick={addOptionBut} className="btn">
                                                    <span>Add {optionsQuantity} options</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card" style={{ marginTop: "1.5rem" }}>
                                        <div>
                                            <div style={{ flexDirection: "column" }}>
                                                <label className="points">Points</label>
                                                <div className="point-div">

                                                    {/* points inc, dec buttons */}
                                                    <div style={{ marginTop: "1rem" }}>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                flexGrow: "1",
                                                                position: "relative",
                                                            }}
                                                        >
                                                            {/* dec button */}
                                                            <button className="inc-dec">
                                                                <RemoveIcon onClick={decPoint} />
                                                            </button>

                                                            {/* points display */}
                                                            <label className="count">{points}</label>

                                                            {/* inc button */}
                                                            <button className="inc-dec">
                                                                <AddIcon onClick={incPoint} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom-save-button">
                                                <div>
                                                    <span className="save">
                                                        <span
                                                            style={{
                                                                display: "none ",
                                                                color: "rgba(159,166,178)",
                                                            }}
                                                        >
                                                            Saving...
                                                        </span>
                                                    </span>
                                                    <span className="save">
                                                        <span
                                                            style={{
                                                                display: "none",
                                                                color: "rgba(159,166,178)",
                                                            }}
                                                        >
                                                            Saved
                                                        </span>
                                                    </span>
                                                </div>
                                                <span className="save-btn">
                                                    <button
                                                        onClick={() => {
                                                            console.log("points: ", points)
                                                        }}
                                                        className="btn"
                                                        style={{ backgroundColor: "blue" }}
                                                    >
                                                        Save
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="modal-footer">
                            <div className="footer">
                                <div>
                                    <button className="delete-button">
                                        <span
                                            style={{
                                                color: "red",
                                                fontWeight: "900",
                                                display: "inline-block",
                                                lineHeight: "1",
                                                textRendering: "auto",
                                            }}
                                            onClick={() => setShow(!show)}
                                        >
                                            {show === true ? "" : ""}
                                            {/*<DeleteIcon />*/}
                                        </span>
                                        {show && (
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontWeight: "900",
                                                    display: "inline-block",
                                                    lineHeight: "1",
                                                    textRendering: "auto",
                                                }}
                                            >
                                                {" "}
                                                Deleting...{" "}
                                            </span>
                                        )}
                                    </button>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <button className="done" type="submit" onClick={handleDone}>
                                        Done
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quizpage;
