import React from 'react'
import AceEditor from "react-ace"
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";

function CodeSnippetView({ value = "", lang = "javascript" }) {
  return (
    <>
      <AceEditor
        mode={lang}
        theme="monokai"
        readOnly={true}
        minLines={18}
        maxLines={18}
        value={value}
        style={{zIndex: -1}}
      />
    </>
  )
}

export default CodeSnippetView
