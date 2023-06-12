import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase clicked')
        setText(text.toUpperCase())
        props.showalert('Converted To Uppercase','success')
    }

    const handleLowClick = () => {
        // console.log('Uppercase clicked')
        setText(text.toLowerCase())
        props.showalert('Converted To Lowercase','success')
    }

    const handleClearText = () => {
        // console.log('Uppercase clicked')
        setText("")
        props.showalert('Textbox Cleared','success')
    }
    const handleCopyText=()=>{
        const text=document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showalert('Copied To Clipboard','success')
    }

    const handleRemoveSpace = () => {
        // console.log('Uppercase clicked')
        setText(text.split(/[ ]+/).join(" "))
        props.showalert('Extra Spaces Removed','success')
    }
    const handleOnChange = (event) => {
        // console.log('On Change')
        setText(event.target.value)
    }
    
    const [text, setText] = useState('');
    // text='new Text' (Wrong method)
    // setText('new Text')
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?'#1346ee':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To Lowercase</button>
                <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>

                <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
                <button disabled={text.length==0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

            </div>
            <div className='container my-3'style={{color:props.mode==='dark'?'white':'#042743'}} >
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}
