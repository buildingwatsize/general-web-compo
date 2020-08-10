import React, { useState, useRef, useEffect } from 'react'
import CodeSnippetView from 'components/CodeSnippetView'
import PreviewPanel from './PreviewPanel'

const FontBlock = ({ fontName = "" }) => {
  const [code, setCode] = useState("")
  const _isMounted = useRef(true)

  useEffect(() => {
    fetch(`/code/fonts/${fontName}.css`).then(r => r.text()).then(data => {
      if (_isMounted.current) {
        // console.log(data)
        setCode(data)
      }
    })
    return () => {
      _isMounted.current = false; // Fetch is cleaned up.
    };
  }, [fontName])

  return <PreviewPanel
    moreStyle={{ fontFamily: fontName }}
    leftPanel={
      <div>
        <u>{fontName}</u>
        <br /> Landing Page <b>Landing Page</b>
        <br /> ทดสอบหน้าแรก <b>ทดสอบหน้าแรก</b>
      </div>
    }
    rightPanel={<CodeSnippetView value={code} lang={"css"} />}
  />
}

function FontView() {
  return (
    <div>
      <FontBlock fontName="supermarket" />
      <FontBlock fontName="Anuphan" />
      <FontBlock fontName="IBMPlexSansThai" />
      <FontBlock fontName="baac" />
      <FontBlock fontName="prompt" />
    </div>
  )
}

export default FontView
