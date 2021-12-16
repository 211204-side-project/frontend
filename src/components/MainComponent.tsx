import React from 'react'
import {
  Wrapper_style1,
  Inner,
  Header,
  FlexBoxs,
  Colum,
  ImageFit,
  Caption,
  Wrapper_style2,
} from '../pages/styles/MainComponent.style'

const MainComponent = () => {
  return (
    <>
      <Wrapper_style1>
        <Inner>
          <Header>
            <h2>Nam eu nisi non ante sodale</h2>
            <p>
              Cras sagittis turpis sit amet est tempus, sit amet consectetur
              purus tincidunt.
            </p>
          </Header>
          <FlexBoxs>
            <Colum>
              <ImageFit>
                <img src="assets/images/pic07.jpg"></img>
              </ImageFit>
              <Caption>
                Pellentesque at nunc vitae urna suscipit mollis nec in arcu
              </Caption>
            </Colum>
            <Colum>
              <ImageFit>
                <img src="assets/images/pic08.jpg"></img>
              </ImageFit>
              <Caption>
                Morbi mattis ligula ut eros ipsum aliquam iaculis dictum
                suscipit
              </Caption>
            </Colum>
          </FlexBoxs>
        </Inner>
      </Wrapper_style1>
      <Wrapper_style2>
        <Inner>
          <Header>{/* <h2>Etiam veroeros lorem</h2> */}</Header>
        </Inner>
      </Wrapper_style2>
    </>
  )
}

export default MainComponent
