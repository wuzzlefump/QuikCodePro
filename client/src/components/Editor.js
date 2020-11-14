import React, { useState } from "react";
import ReactAce from 'react-ace';
// import {split as SplitEditor} from 'react-ace';
import brace from 'brace';
// import "./modal.css";
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/monokai';
import $ from "jquery";


export default function Editor() {


    const [Language, setLanguage] = useState("html");

    function languageSelect() {
        setLanguage($("#languageSelect").val());
      }

    return (
        <div className="d-flex">
            <div className="editor">
                <ReactAce mode={Language} theme="monokai" setReadOnly={false}/>
                <label for="formGroupExampleSearch">Language</label>
                <select class="form-control" id="languageSelect" onChange={languageSelect}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="handlebars">Handlebars</option>
                <option value="javascript">JavaScript</option>
                <option value="markdown">Markdown</option>
                <option value="sql">SQL</option>
                </select>
            </div>
        </div>
    )
}