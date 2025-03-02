import { useState,useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from "axios"
import Markdown from "react-markdown"
import './App.css'

function App() {
  const [code,setCode]=useState(`function sum(){
              return 1+1}`)

  const [review,setReview]=useState("")
  useEffect(()=>{
    prism.highlightAll()
  },[])

const reviewCode=async()=>{
  const response= await axios.post("http://localhost:3000/ai/getAI",{code})
  console.log(response.data)
  setReview(response.data)

}
  return (
    <>
      <main>
        <div className='left'>
          <div className='code'>
            <Editor
            value={code}
            onValueChange={code=>setCode(code)}
            highlight={code=>prism.highlight(code,prism.languages.javascript,"javascript")}
            padding={10}
            style={{
              fontFamily:'"Fira code","Fira Mono",monospace',
              fontSize:16,
              border:"5px solid #ddd",
              borderRadius:"1rem",
              height:"100%",
              width:"100%",
            }}
            />
          </div>
          <div className='review'onClick={reviewCode}>Review</div>
        </div>
        <div className='right'><Markdown>{review}</Markdown></div>
      </main>
    </>
  )
}

export default App
