import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success");
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success");
  };
  const handleClearClick = () => {
    // console.log("clear was clicked" + text)
    let newText = "";
    setText(newText);
    setWordCount(0);
    setCharCount(0);
    props.showAlert("Field Cleared", "success");
  };
  const handleRemoveSpace = () => {
    // console.log("Remove space was clicked" + text)
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces removed!!", "success");
  };
  const handleCopy = () => {
    // console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    let newText = event.target.value;
    setWordCount(newText.split(/\s+/).filter(Boolean).length);
    setCharCount(newText.replace(/\s/g, "").length);
  };
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "#072038" : "white" }}
    >
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3 my-2">
        <textarea
          className="form-control"
          value={text}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#2f3549",
            color: props.mode === "light" ? "#072038" : "white",
          }}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button
        disabled={charCount === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        disabled={charCount === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        disabled={charCount === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleClearClick}
      >
        Clear the text
      </button>
      <button
        disabled={charCount === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleCopy}
      >
        Copy the text
      </button>
      <button
        disabled={charCount === 0}
        className="btn btn-primary mx-3 my-1"
        onClick={handleRemoveSpace}
      >
        Remove spaces in text
      </button>
      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {/* {text.split(" ").length} words and {text.length} characters */}
          {wordCount} words and {charCount} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes to read the whole text
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}
