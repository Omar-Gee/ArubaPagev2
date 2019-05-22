import React from 'react';
import radioStations from '../../services/radiosStations'
import 'antd/dist/antd.css';
import { Slider } from "antd"
import styled from "styled-components/macro"
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious
} from "react-icons/md"

const audioPlayer = new Audio()

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRadioStation: 0,
      volume: 0.1,
      isPaused: false,
    }
  }
  componentDidMount() {
    audioPlayer.audioTracks = radioStations
    audioPlayer.src = audioPlayer.audioTracks[this.state.currentRadioStation].url
    audioPlayer.volume = 0.2
  }
  componentDidUpdate() {
    audioPlayer.pause()
    audioPlayer.src = audioPlayer.audioTracks[this.state.currentRadioStation].url
    if (this.state.isPaused) {
      audioPlayer.play()
    }
  }

  play = (e) => {
    const {  isPaused  } = this.state
    if (!isPaused) {
      this.setState({
          isPaused: !isPaused
        }
      )
      audioPlayer.play()
    } else {
      this.setState({
          isPaused: !isPaused
      })
      audioPlayer.pause()
    }
  }
  formatter = (value) => {
    return `${value}%`
  }
  next = () => {
    this.setState(prevState => {
      if (prevState.currentRadioStation === radioStations.length - 1){
        return {currentRadioStation: 0}
      } else {
        return {currentRadioStation: prevState.currentRadioStation + 1}
      }
    }, () => {

    })
  }
  previous = () => {
    this.setState(prevState => {
      if (prevState.currentRadioStation === 0){
        return {currentRadioStation: radioStations.length - 1}
      } else {
        return {currentRadioStation: prevState.currentRadioStation - 1}
      }
    })
  }
  volumeChange = (value) => {
    audioPlayer.volume = value/100
  }
  render() {
    return (
      <Container>
        <ButtonContainer>
          <Button onClick={this.previous}><MdSkipPrevious /></Button>
          <Button onClick={this.play}>{!this.state.isPaused ? <MdPlayArrow /> : <MdPause /> }</Button>
          <Button onClick={this.next}><MdSkipNext /></Button>
        </ButtonContainer>
        <StyledSlider  defaultValue={25} tipFormatter={this.formatter} onChange={this.volumeChange} />
        <Span>{radioStations[this.state.currentRadioStation].title}</Span>
      </Container>
    );
  }
};

const Container = styled.div`
  color: #fff;
  background: cornflowerblue;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`
const ButtonContainer = styled.div`
  margin: 0 16px;
  @media(min-width: 320px) {
    margin: 0;
  }
`
const StyledSlider = styled(Slider)`
  width: 90px;
  margin: 0 8px;
`
const Button = styled.button`
  border: none;
  background: none;
  font-size: 2rem;
  margin: 0 8px;
  @media(min-width: 320px) {
    margin: 0;
    font-size: 1.5rem;
  }
`

const Span = styled.span`
  margin: 0 8px;
  @media(min-width: 320px) {
    margin: 0;
    width: 124px;
  }
`

export default Radio;