import React, { Component } from 'react'
import {
  BabelLoading,
  BlockLoading,
  BlockReserveLoading,
  BoxLoading,
  CircleLoading,
  CircleToBlockLoading,
  CommonLoading,
  DisappearedLoading,
  LoopCircleLoading,
  NineCellLoading,
  TouchBallLoading,
  TransverseLoading,
  WaveLoading,
  WaveTopBottomLoading,
  WindMillLoading,
  JumpCircleLoading,
  MeteorRainLoading,
  RotateCircleLoading,
  StickyBallLoading,
  SemipolarLoading,
  SolarSystemLoading,
  LadderLoading,
  HeartBoomLoading,
  RollBoxLoading,
  RectGraduallyShowLoading,
  PointSpreadLoading,
  ThreeHorseLoading,
  PassThrouthLoading,
  CoffeeLoading,
  BatteryLoading,
} from 'react-loadingg'

const styles = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 9999
}

const textStyles = {
  position: "absolute",
  paddingTop: "128px",
  top: "50%",
  left: "50%",
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: "white",
  transform: "translate(-50%, -50%)"
}

const loadingProps = {
  size: "large",
  color: "#fff"
}

const randomIntFunc = (maxVal = 1) => {
  let buf = new Uint8Array(1)
  try {
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(buf)
    } else {
      window.msCrypto.getRandomValues(buf)
    }
  } catch (error) {
    // console.log(error)
  }
  return buf[0] % maxVal
}

class OverlayLoading extends Component {
  render() {
    const { active, moreStyles, moreTextStyles, loadingNumber, loadingText } = this.props
    const randNo = randomIntFunc(30) | 0;
    const listOfLoading = [
      <BabelLoading {...loadingProps} />,
      <BlockLoading {...loadingProps} />,
      <BlockReserveLoading {...loadingProps} />,
      <BoxLoading {...loadingProps} />,
      <CircleLoading {...loadingProps} />,
      <CircleToBlockLoading {...loadingProps} />,
      <CommonLoading {...loadingProps} />,
      <DisappearedLoading {...loadingProps} />,
      <LoopCircleLoading {...loadingProps} />,
      <NineCellLoading {...loadingProps} />,
      <TouchBallLoading {...loadingProps} />,
      <TransverseLoading {...loadingProps} />,
      <WaveLoading {...loadingProps} />,
      <WaveTopBottomLoading {...loadingProps} />,
      <WindMillLoading {...loadingProps} />,
      <JumpCircleLoading {...loadingProps} />,
      <MeteorRainLoading {...loadingProps} />,
      <RotateCircleLoading {...loadingProps} />,
      <StickyBallLoading {...loadingProps} />,
      <SemipolarLoading {...loadingProps} />,
      <SolarSystemLoading {...loadingProps} />,
      <LadderLoading {...loadingProps} />,
      <HeartBoomLoading {...loadingProps} />,
      <RollBoxLoading {...loadingProps} />,
      <RectGraduallyShowLoading {...loadingProps} />,
      <PointSpreadLoading {...loadingProps} />,
      <ThreeHorseLoading {...loadingProps} />,
      <PassThrouthLoading {...loadingProps} />,
      <CoffeeLoading {...loadingProps} />,
      <BatteryLoading {...loadingProps} />,
    ]
    return (
      <>
        {active ?
          <div data-testid="frame" style={{ ...styles, ...moreStyles }}>
            {listOfLoading[loadingNumber >= 0 ? loadingNumber : randNo]}
            <span data-testid="loadingFont" style={{ ...textStyles, ...moreTextStyles }}>{loadingText || "รอสักครู่"}</span>
          </div> : ""}
      </>
    )
  }
}

export default OverlayLoading
