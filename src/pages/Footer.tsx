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
    KorName: '모구리',
  },
  { EngName: 'MAD', github: 'https://github.com/maaaaaaaaad', KorName: 'MAD' },
  {
    EngName: 'LIM-JUNG-MYEONG',
    github: 'https://github.com/wjdaud107',
    KorName: '임정명',
  },
]

const BE: MemberType[] = [
  { EngName: 'SANHA', github: 'https://github.com/9sanha', KorName: '산하' },
  {
    EngName: 'WOO-TAE-GYUN',
    github: 'https://github.com/TaegyunWoo',
    KorName: '우태균',
  },
  {
    EngName: 'SHIN-HEE-JAE',
    github: 'https://github.com/whco',
    KorName: '신희재',
  },
]

const Footer = () => {
  const printMember = (member: MemberType) => {
    return (
      <Member key={member.EngName} className={member.EngName}>
        <GitHubLink href={member.github} target="_blank">
          {member.KorName}
        </GitHubLink>
      </Member>
    )
  }

  return (
    <FooterElement>
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
