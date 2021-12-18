import React from 'react'

import {
  Footer as FooterElement,
  IntroduceMembers,
  MemberList,
  Member,
  GitHubLink,
} from './styles/footer.style'
import { Title } from './styles/home.style'

import { MemberType } from './interface/footer.interface'

const FE: MemberType[] = [
  {
    EngName: 'MOGURI',
    github: 'https://github.com/moguri846',
    korName: '모구리',
  },
  { EngName: 'MAD', github: 'https://github.com/maaaaaaaaad', korName: 'MAD' },
  {
    EngName: 'LIM-JUNG-MYEONG',
    github: 'https://github.com/wjdaud107',
    korName: '임정명',
  },
]

const BE: MemberType[] = [
  { EngName: 'SANHA', github: 'https://github.com/9sanha', korName: '산하' },
  {
    EngName: 'WOO-TAE-GYUN',
    github: 'https://github.com/TaegyunWoo',
    korName: '우태균',
  },
  {
    EngName: 'SHIN-HEE-JAE',
    github: 'https://github.com/whco',
    korName: '신희재',
  },
]

const Footer = () => {
  const printMember = (member: MemberType) => {
    return (
      <Member className={member.EngName}>
        <GitHubLink href={member.github} target="_blank">
          {member.korName}
        </GitHubLink>
      </Member>
    )
  }

  return (
    <FooterElement className="section-4">
      <IntroduceMembers>
        <Title>FE</Title>
        <MemberList className="FE">
          {FE.map((member: MemberType) => printMember(member))}
        </MemberList>
        <Title>BE</Title>
        <MemberList className="BE">
          {BE.map((member: MemberType) => printMember(member))}
        </MemberList>
      </IntroduceMembers>
    </FooterElement>
  )
}

export default Footer
