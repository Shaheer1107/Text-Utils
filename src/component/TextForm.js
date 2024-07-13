import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleReverseClick = () => {
        let length = text.length;
        let arr = new Array(length);
        let c = 0;
        for (let i = length - 1; i >= 0; i--) {
            arr[c] = text[i];
            c++;
        }
        let reversedText = arr.join('');
        setText(reversedText);
        props.showAlert("Text Reversed", "success");
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const wordCount = () => {
        let trimmedText = text.trim();
        if (trimmedText === "") {
            return 0;
        }
        let wordsArray = trimmedText.split(/\s+/);
        return wordsArray.length;
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <div>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea
                            className={`form-control border-1 shadow-none border-secondary ${props.mode === 'light' ? 'text-light-mode' : 'text-dark-mode'}`}
                            value={text}
                            placeholder='Enter your text here'
                            onChange={handleOnChange}
                            id="box"
                            rows="8"
                        ></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleReverseClick}>Reverse Text</button>
                </div>
            </div>
            <div className="container my-4">
                <h1>Your Text Summary</h1>
                <p>{wordCount()} words and {text.length} characters</p>
                <p>Average Read time: {0.008 * text.split(" ").filter((a) => { return a.length !== 0 }).length} minutes</p>
                <h2>Preview your text here</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
