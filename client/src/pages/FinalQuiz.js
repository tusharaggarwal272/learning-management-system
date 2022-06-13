import React, { useState } from "react";
import "./Finalquiz.css";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import HelpIcon from "@mui/icons-material/Help";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Input } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const axios = require("axios");

function Finalquiz(props) {
    const [importShow, setimportShow] = useState(false);
    const [bulkShow, setbulkShow] = useState(false);
    const [filedata, setFiledata] = useState("");

    const FileChange = (e) => {
        console.log(e.target.files);
        setFiledata(e.target.files[0]);
    };
    const handleClick = () => {
        const formData = new FormData();
        formData.append("file", filedata);
        const url = "http://localhost:8080/upload";

        fetch(url, {
            method: "post",
            body: formData,
        })
            .then((res) => {
                res.text();
            })
            .then((resBody) => {
                alert('File uploaded successfully')
                console.log(resBody);
            });
    };

    const history = useHistory();
    console.log("history", history);

    const handleGoToQuizpage = () => {
        history.push("/quizpage");
    };

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <div style={{ width: "100%" }}>
                            <small style={{ color: "#96969", fontSize: "85%" }}>
                                <span
                                    style={{
                                        fontWeight: "500",
                                        display: "inline-block",
                                        lineHeight: "1.5",
                                        color: " rgb(156, 155, 155)",
                                    }}
                                >
                                    FINAL QUIZ
                                </span>
                            </small>
                            <small
                                style={{
                                    marginTop: "1px",
                                    float: "right",
                                    fontSize: "80%",
                                    margin: "auto",
                                }}
                            >
                                <a
                                    href="#"
                                    style={{
                                        color: "inherit",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        fontWeight: "500",
                                        display: "inline-block",
                                        lineHeight: "1.5",
                                    }}
                                >
                                    <span>
                                        <HelpIcon style={{ height: "1em", width: "1em" }} /> Help
                                    </span>
                                </a>
                            </small>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div
                            className="row"
                            style={{ marginLeft: "0px", marginRight: "0px" }}
                        >
                            <div className="col-8">
                                <div className="active">
                                    <ul className="nav-tab">
                                        <li style={{ fontSize: "25px" }}>
                                            <a href="#" className="question">
                                                Questions
                                            </a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div style={{ display: "block" }}>
                                            <div
                                                className="editquiz"
                                                style={{ marginTop: "1rem", display: "block" }}
                                            >
                                                <div
                                                    style={{ display: "block" }}
                                                    onClick={handleGoToQuizpage}
                                                >
                                                    <ul className="nav-tab">
                                                        <li className="list">
                                                            <div
                                                                style={{
                                                                    color: "rgba(55,65,81)",
                                                                    fontSize: " 1rem",
                                                                    fontWeight: "500",
                                                                    alignItems: " baseline",
                                                                    display: " flex",
                                                                }}
                                                            >
                                                                <button
                                                                    className="btn"
                                                                    style={{
                                                                        backgroundColor: "rgba(244,245,247)",
                                                                    }}
                                                                >
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "900",
                                                                            lineHeight: "0.5",
                                                                        }}
                                                                    >
                                                                        <UnfoldMoreIcon
                                                                            style={{ color: "black" }}
                                                                        />
                                                                    </span>
                                                                </button>
                                                                <div
                                                                    style={{
                                                                        fontSize: ".875rem",
                                                                        color: "rgba(159,166,178)",
                                                                        margin: "auto",
                                                                        paddingLeft: "5px",
                                                                    }}
                                                                >
                                                                    Q1
                                                                </div>
                                                                {/*<div></div> */}
                                                            </div>
                                                            <div
                                                                style={{ display: "flex", cursor: "pointer" }}
                                                            >
                                                                <button
                                                                    className="btn"
                                                                    style={{ backgroundColor: "white" }}
                                                                >
                                                                    <DeleteIcon
                                                                        style={{ color: "rgba(213, 214, 216)" }}
                                                                    />
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="div">
                                                        <div
                                                            style={{
                                                                color: "rgba(107,114,128)",
                                                                textAlign: "right",
                                                                marginBottom: "0.75rem",
                                                                marginTop: "0.75rem",
                                                                fontSize: ".875rem",
                                                                display: "block",
                                                            }}
                                                        >
                                                            <label className="label">
                                                                {" "}
                                                                Total Points: {props.getcount}
                                                            </label>
                                                        </div>
                                                        <div
                                                            style={{ flexDirection: "row", display: "flex" }}
                                                        >
                                                            <button
                                                                type="submit"
                                                                className="add"
                                                                style={{ backgroundColor: "rgba(88,80,236)" }}
                                                                onClick={() => {
                                                                    handleGoToQuizpage();
                                                                }}
                                                            >
                                                                <span style={{ fontWeight: "900" }}>
                                                                    <AddCircleIcon
                                                                        style={{ height: "1em", width: "1em" }}
                                                                    />
                                                                </span>
                                                                <span>Add new question</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="para">
                                                    {" "}
                                                    You can also{" "}
                                                    <a
                                                        className="bulk"
                                                        onClick={() => setimportShow(!importShow)}
                                                    >
                                                        bulk import questions
                                                    </a>{" "}
                                                    or{" "}
                                                    <a
                                                        className="bulk"
                                                        onClick={() => setbulkShow(!bulkShow)}
                                                    >
                                                        bulk create questions
                                                    </a>
                                                    .
                                                </p>
                                                {importShow ? (
                                                    <div className="import-div">
                                                        <div className="import-div2">
                                                            <div className="upper-heading">
                                                                <h3 className="h3">
                                                                    Import questions
                                                                    <div className="cancel-div">
                                                                        <button
                                                                            style={{
                                                                                color: "rgba(159,166,178)",
                                                                                backgroundColor: "white",
                                                                            }}
                                                                        >
                                                                            {" "}
                                                                            <CloseIcon
                                                                                onClick={() =>
                                                                                    setimportShow(!importShow)
                                                                                }
                                                                                style={{ cursor: "pointer" }}
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                </h3>
                                                                <div
                                                                    style={{
                                                                        color: "rgba(107,114,128)",
                                                                        maxWidth: "36rem",
                                                                        marginTop: "0.5rem",
                                                                        fontSize: "0.875",
                                                                        display: "block",
                                                                    }}
                                                                >
                                                                    <p>
                                                                        You can also upload an excel file containing
                                                                        the quiz questions. Once you upload the
                                                                        file, the questions will be imported to this
                                                                        quiz.
                                                                    </p>
                                                                    <div style={{ marginTop: "1.5rem" }}>
                                                                        <dl className="import-section">
                                                                            <div className="col">
                                                                                <dt className="dt">
                                                                                    Template file (Empty)
                                                                                </dt>
                                                                                <dd className="dd">
                                                                                    <a href="https://pu.tmcdn.in/defaults/quizzes/TeachmoreImportQuestionsTemplate-v1.xls">
                                                                                        Download
                                                                                    </a>
                                                                                </dd>
                                                                            </div>
                                                                            <div className="col">
                                                                                <dt className="dt">
                                                                                    Sample file (with questions)
                                                                                </dt>
                                                                                <dd className="dd">
                                                                                    <a href="https://pu.tmcdn.in/defaults/quizzes/TeachmoreImportQuestionsSample-v1.xls">
                                                                                        Download
                                                                                    </a>
                                                                                </dd>
                                                                            </div>
                                                                        </dl>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    style={{
                                                                        opacity: ".5",
                                                                        marginBottom: "1.25rem",
                                                                        marginTop: "1rem",
                                                                        borderTopWidth: "1px",
                                                                        boxSizing: "content-box",
                                                                        display: "block",
                                                                    }}
                                                                ></hr>
                                                                <div
                                                                    style={{
                                                                        marginTop: "0.75rem",
                                                                        fontSize: "0.875rem",
                                                                        display: "block",
                                                                    }}
                                                                >
                                                                    {" "}
                                                                    <label
                                                                        className="add"
                                                                        style={{
                                                                            backgroundColor: "rgba(88,80,236)",
                                                                        }}
                                                                    >
                                                                        <Input
                                                                            type="file"
                                                                            //name="file"
                                                                            style={{ display: "none" }}
                                                                            onChange={FileChange}
                                                                        />{" "}
                                                                        upload excel
                                                                    </label>
                                                                    <button
                                                                        className="add"
                                                                        style={{
                                                                            backgroundColor: "rgba(88,80,236)",
                                                                            float: "right",
                                                                        }}
                                                                        onClick={handleClick}
                                                                    >
                                                                        submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null}
                                                {bulkShow ? (
                                                    <div className="import-div">
                                                        <div className="import-div2">
                                                            <div className="upper-heading">
                                                                <h3 className="h3">
                                                                    {" "}
                                                                    Bulk create questions
                                                                    <div className="cancel-div">
                                                                        <button
                                                                            style={{
                                                                                color: "rgba(159,166,178)",
                                                                                backgroundColor: "white",
                                                                            }}
                                                                        >
                                                                            {" "}
                                                                            <CloseIcon
                                                                                onClick={() => setbulkShow(!bulkShow)}
                                                                                style={{ cursor: "pointer" }}
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                </h3>
                                                                <div
                                                                    style={{
                                                                        color: "rgba(107,114,128)",
                                                                        maxWidth: "36rem",
                                                                        marginTop: "0.5rem",
                                                                        fontSize: "0.875",
                                                                        display: "block",
                                                                    }}
                                                                >
                                                                    <p>
                                                                        You can create multiple questions with a set
                                                                        number of options using a single click
                                                                        instead of creating each question
                                                                        individually.{" "}
                                                                    </p>
                                                                    <div className="grid-division">
                                                                        <div className="col-2">
                                                                            <label className="number">
                                                                                Number of questions
                                                                            </label>
                                                                            <div style={{ marginTop: "0.25rem" }}>
                                                                                <input
                                                                                    type="number"
                                                                                    min="1"
                                                                                    max="100"
                                                                                    name="questions-count"
                                                                                    className="input"
                                                                                ></input>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-2">
                                                                            <label className="number">
                                                                                Number of options questions
                                                                            </label>
                                                                            <div style={{ marginTop: "0.25rem" }}>
                                                                                <input
                                                                                    type="number"
                                                                                    min="1"
                                                                                    max="100"
                                                                                    name="questions-count"
                                                                                    className="input"
                                                                                ></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr
                                                                    style={{
                                                                        opacity: ".5",
                                                                        marginBottom: "1.25rem",
                                                                        marginTop: "1rem",
                                                                        borderTopWidth: "1px",
                                                                        boxSizing: "content-box",
                                                                        display: "block",
                                                                    }}
                                                                ></hr>
                                                                <div
                                                                    style={{
                                                                        marginTop: "0.75rem",
                                                                        fontSize: "0.875rem",
                                                                        display: "block",
                                                                    }}
                                                                >
                                                                    <button
                                                                        className="add"
                                                                        style={{
                                                                            backgroundColor: "rgba(88,80,236)",
                                                                        }}
                                                                    >
                                                                        <span>create questions</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <button
                            type="submit"
                            className="add"
                            style={{
                                backgroundColor: "rgba(88,80,236)",
                                padding: "0.375rem 0.625rem",
                            }}
                            onClick={handleGoBack}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Finalquiz;
