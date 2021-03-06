import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  background-color: #020b13;
  scroll-snap-align: start;
`

const IntroduceMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MemberList = styled.ul`
  margin: 0px 10px;
`

const Member = styled.li`
  padding: 10px;
`

const GitHubLink = styled.a`
  color: #ffffff;
  text-decoration: none;
`

export { Footer, IntroduceMembers, MemberList, Member, GitHubLink }
