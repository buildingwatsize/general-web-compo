import React, { useState } from 'react'
import OverlayLoading from './OverlayLoading'
import PreviewPanel from './PreviewPanel'
import CodeSnippetView from './CodeSnippetView'
import InfiniteScroll from "react-infinite-scroll-component"

const loadingList = [
  "BabelLoading",
  "BlockLoading",
  "BlockReserveLoading",
  "BoxLoading",
  "CircleLoading",
  "CircleToBlockLoading",
  "CommonLoading",
  "DisappearedLoading",
  "LoopCircleLoading",
  "NineCellLoading",
  "TouchBallLoading",
  "TransverseLoading",
  "WaveLoading",
  "WaveTopBottomLoading",
  "WindMillLoading",
  "JumpCircleLoading",
  "MeteorRainLoading",
  "RotateCircleLoading",
  "StickyBallLoading",
  "SemipolarLoading",
  "SolarSystemLoading",
  "LadderLoading",
  "HeartBoomLoading",
  "RollBoxLoading",
  "RectGraduallyShowLoading",
  "PointSpreadLoading",
  "ThreeHorseLoading",
  "PassThrouthLoading",
  "CoffeeLoading",
  "BatteryLoading",
]
const allListLength = loadingList.length

const LoadingBlock = ({ loadingName = "", loadingNumber }) => {
  return <PreviewPanel
    leftPanel={<OverlayLoading active={true} loadingNumber={loadingNumber} moreStyles={{ position: "relative" }} loadingText={loadingName} />}
    rightPanel={<CodeSnippetView value={`import React from 'react'
import OverlayLoading from 'components/OverlayLoading'

export default function ${loadingName}() {
  return (
    <div>
      <OverlayLoading active={true}${loadingNumber >= 0 ? (" loadingNumber={" + loadingNumber + "}") : ""} />
    </div>
  )
}`} lang={"javascript"} />}
  />
}

const limitRenderNumber = 5
function LoadingView() {
  const [hasMore, setHasMore] = useState(true)
  const [listRender, setListRender] = useState([...loadingList.slice(0, limitRenderNumber)])

  const fetchMoreData = () => {
    // FAKE LOADING FOR SHOWCASE AN OVERLAY-LOADING
    setTimeout(() => {
      setListRender(oldList => {
        const oldListLength = oldList.length
        let nextListLength = oldListLength + limitRenderNumber
        if (nextListLength > allListLength) {
          nextListLength = allListLength - oldListLength
        }
        if (nextListLength === 0) {
          setHasMore(false)
        }
        return [...oldList, ...loadingList.slice(oldListLength, nextListLength)]
      })
    }, 700);
  }

  return (
    <div>
      <LoadingBlock />
      <InfiniteScroll
        dataLength={listRender.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<OverlayLoading active={true} />}
      >
        {listRender.map((name, number) => <LoadingBlock key={number} loadingName={name} loadingNumber={number} />)}
      </InfiniteScroll>
    </div>
  )
}

export default LoadingView
