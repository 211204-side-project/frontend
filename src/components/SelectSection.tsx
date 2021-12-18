import React from 'react'
import { Nav, Li, Button } from './style/SelectSection.style'

function SelectSection() {
  const selectSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.parentNode?.parentNode?.childNodes.forEach((item) => {
      const target = item.childNodes[0] as HTMLElement
      if (target === e.currentTarget) {
        target.classList.add('current')
      } else {
        target.classList.remove('current')
      }
    })

    goToSection(e.currentTarget.value)
  }

  const goToSection = (target: string) => {
    document.querySelector(`.${target}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Nav>
      <ul>
        {[...Array(4)].map((item, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <Li>
                <Button
                  value={`section-${index + 1}`}
                  className="current"
                  onClick={selectSection}
                >
                  {/* {index + 1} */}
                </Button>
              </Li>
            ) : (
              <Li>
                <Button value={`section-${index + 1}`} onClick={selectSection}>
                  {/* {index + 1} */}
                </Button>
              </Li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </Nav>
  )
}

export default SelectSection
