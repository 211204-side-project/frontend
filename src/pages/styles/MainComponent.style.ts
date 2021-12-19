import styled from 'styled-components'

export const Wrapper_style1 = styled.section`
  background-color: #062038;
  color: #c1c7cd;
  width: 100%;
  height: 100vh;
  padding: 6em 0 4em 0;
  position: relative;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(../../../assets/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.35;
    z-index: 1;
  }
`

export const Inner = styled.div`
  width: 80%;
  margin: 0 1.5rem;
  z-index: 1;
  @media screen and (max-width: 980px) {
    width: 90%;
  }
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 4em;
  h2 {
    font-size: 2.5em;
    font-weight: 700;
    line-height: 1.5;
    margin: 0 0 1em 0;
  }
  p {
    font-size: 1.25em;
  }
`

export const FlexBoxs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  font: inherit;
  vertical-align: baseline;
  width: 100%;
  margin: 0 1.5rem;
`

export const Colum = styled.div`
  width: 48%;
  background: rgba(255, 255, 255, 0.075);
  border-radius: 4px;
  margin: 0 0 2em 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 32px;
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    img {
      height: 350px;
      transform: scale(1.075);
    }
  }
`

export const ImageFit = styled.div`
  margin: 0;
  max-height: 350px;
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
`

export const Caption = styled.p`
  color: #c0c5c9;
  padding: 1.5em;
  font-size: 1.25em;
  font-weight: 300;
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 1.85;
`

//section2
export const Wrapper_style2 = styled.section`
  background-color: #041625;
  color: #c0c5c9;
  width: 100%;
  height: 100vh;
  padding: 6em 0 4em 0;
  position: relative;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-image: url(../../../assets/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.35;
    z-index: 1;
  }
  Header {
    display: block;
    text-align: left;
    margin-bottom: 4em;
    h2 {
      font-size: 2.5em;
      font-weight: 700;
      line-height: 1.5;
      margin: 0 0 1em 0;
    }
    p {
      font-size: 1.25em;
    }
  }
`

export const Flex_tabs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;

  ul {
    width: 20%;
    list-style: none;
    margin: 1.5em 0 1em 0;
    padding: 0;
    @media screen and (max-width: 980px) {
      width: 30%;
    }
  }
  li {
    padding-left: 0.5em;
    display: list-item;
    list-style: none;
  }
  a {
    background: rgba(255, 255, 255, 0.075);
    color: #c1c7cd;
    border-radius: 4px;
    margin-bottom: 0.5em;
    padding: 1em 1em;
    display: inline-block;
    width: 100%;
    transition: color 0.2s ease-in-out;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
    color: #ffffff;
    background: #693dcc;
  }
  .active {
    background: #aa14cc;
    color: #fff !important;
  }
`

export const Tabs = styled.div`
  width: 77%;
  @media screen and (max-width: 980px) {
    width: 67%;
  }
`

export const Tab = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
`
export const Col = styled.div`
  width: 31%;
  background: rgba(255, 255, 255, 0.075);
  border-radius: 4px;
  margin: 0 0 2em 0;
  overflow: hidden;
  position: relative;
  .tab-img {
    max-height: 196px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    img {
      height: 100%;
      transform: scale(1.075);
    }
  }
`

export const Wrapper_style3 = styled.section`
  background-color: #061014;
  color: #c1c7cd;
  width: 100%;
  height: 100vh;
  padding: 6em 0 4em 0;
  position: relative;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: block;
    background-image: url(../../../assets/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.35;
    z-index: 1;
  }

  .section3-img {
    margin: 0;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    display: block;
    width: 100%;
  }
`
