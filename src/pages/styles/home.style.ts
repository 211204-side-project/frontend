import styled from 'styled-components'

export const Main = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  text-align: center;
  height: 100vh;
  padding: 8em 0px 6em;
  background-position: center center;
  background-repeat: no-repeat;
  border-top: 0px;
  overflow: hidden;
  scroll-snap-align: start;
`

export const Content = styled.div`
  transform: scale(1);
  opacity: 1;
  position: relative;
  z-index: 2;
  transition: opacity 1s ease 0s, transform 1s ease 0s;
`

export const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 0.25em;
  color: rgb(255, 255, 255);
  font-weight: 700;
  line-height: 1.5;
`

export const SubTitle = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1.5em;
`

export const Video = styled.video`
  transform: translateX(50%) translateY(50%);
  position: absolute;
  bottom: 50%;
  right: 50%;
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
`
