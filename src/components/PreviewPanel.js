import React from 'react'

function PreviewPanel(props) {
  return (
    <div data-testid="border" style={{ fontSize: "48px", margin: "8px", ...props.moreStyle }}>
      <div data-testid="aligner" style={{ display: "flex", justifyContent: "space-between" }}>
        <div data-testid="leftPanel" style={{ marginRight: "36px", width: "100%" }}>
          {props.leftPanel}
        </div>
        {props.rightPanel}
      </div>
      <hr />
    </div>
  )
}

export default PreviewPanel
