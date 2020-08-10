import React from 'react'

function PreviewPanel(props) {
  return (
    <div style={{ fontSize: "48px", margin: "8px", ...props.moreStyle }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ marginRight: "36px", width: "100%" }}>
          {props.leftPanel}
        </div>
        {props.rightPanel}
      </div>
      <hr />
    </div>
  )
}

export default PreviewPanel
