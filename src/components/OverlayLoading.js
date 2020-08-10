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
      <BabelLoading size="large" color="#fff" />,
      <BlockLoading size="large" color="#fff" />,
      <BlockReserveLoading size="large" color="#fff" />,
      <BoxLoading size="large" color="#fff" />,
      <CircleLoading size="large" color="#fff" />,
      <CircleToBlockLoading size="large" color="#fff" />,
      <CommonLoading size="large" color="#fff" />,
      <DisappearedLoading size="large" color="#fff" />,
      <LoopCircleLoading size="large" color="#fff" />,
      <NineCellLoading size="large" color="#fff" />,
      <TouchBallLoading size="large" color="#fff" />,
      <TransverseLoading size="large" color="#fff" />,
      <WaveLoading size="large" color="#fff" />,
      <WaveTopBottomLoading size="large" color="#fff" />,
      <WindMillLoading size="large" color="#fff" />,
      <JumpCircleLoading size="large" color="#fff" />,
      <MeteorRainLoading size="large" color="#fff" />,
      <RotateCircleLoading size="large" color="#fff" />,
      <StickyBallLoading size="large" color="#fff" />,
      <SemipolarLoading size="large" color="#fff" />,
      <SolarSystemLoading size="large" color="#fff" />,
      <LadderLoading size="large" color="#fff" />,
      <HeartBoomLoading size="large" color="#fff" />,
      <RollBoxLoading size="large" color="#fff" />,
      <RectGraduallyShowLoading size="large" color="#fff" />,
      <PointSpreadLoading size="large" color="#fff" />,
      <ThreeHorseLoading size="large" color="#fff" />,
      <PassThrouthLoading size="large" color="#fff" />,
      <CoffeeLoading size="large" color="#fff" />,
      <BatteryLoading size="large" color="#fff" />,
    ]
    return (
      <>
        {active ?
          <div style={{ ...styles, ...moreStyles }}>
            {listOfLoading[loadingNumber >= 0 ? loadingNumber : randNo]}
            <span style={{ ...textStyles, ...moreTextStyles }}>{loadingText || "รอสักครู่"}</span>
          </div> : ""}
      </>
    )
  }
}

export default OverlayLoading
