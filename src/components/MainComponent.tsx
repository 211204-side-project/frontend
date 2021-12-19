import React, { useState } from 'react'
import {
  Wrapper_style1,
  Inner,
  Header,
  FlexBoxs,
  Colum,
  ImageFit,
  Caption,
  Wrapper_style2,
  Flex_tabs,
  Tabs,
  Tab,
  Col,
  Wrapper_style3,
} from '../pages/styles/MainComponent.style'

const MainComponent = () => {
  const [actFirst, setActFirst] = useState<boolean>(true)
  const [actSecond, setActSecond] = useState<boolean>(false)
  const [actThird, setActThird] = useState<boolean>(false)

  const TabFirst = () => {
    setActFirst(true)
    setActSecond(false)
    setActThird(false)
  }
  const TabSecond = () => {
    setActFirst(false)
    setActSecond(true)
    setActThird(false)
  }
  const TabThird = () => {
    setActFirst(false)
    setActSecond(false)
    setActThird(true)
  }
  return (
    <>
      <Wrapper_style1 className="section-2">
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
      <Wrapper_style2 className="section-3">
        <Inner>
          <Header>
            <h2>Etiam veroeros lorem</h2>
            <p>
              Fusce fringilla enim sit amet lectus sollicitudin, eu tincidunt
              odio semper.
            </p>
          </Header>
          <Flex_tabs>
            <ul>
              <li onClick={TabFirst}>
                <a className={actFirst ? 'active' : undefined}>
                  Duis vestibulum tellus
                </a>
              </li>
              <li onClick={TabSecond}>
                <a className={actSecond ? 'active' : undefined}>
                  Quam tempus sodales ipsum
                </a>
              </li>
              <li onClick={TabThird}>
                <a className={actThird ? 'active' : undefined}>
                  Donec faucibus risus cursus
                </a>
              </li>
            </ul>
            <Tabs>
              {/* Tab1  */}
              {actFirst ? (
                <Tab>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic07.jpg"></img>
                    </ImageFit>
                  </Col>
                </Tab>
              ) : undefined}
              {/* Tab2 */}
              {actSecond ? (
                <Tab>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic08.jpg"></img>
                    </ImageFit>
                  </Col>
                </Tab>
              ) : undefined}
              {/* Tab3 */}
              {actThird ? (
                <Tab>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                  <Col>
                    <ImageFit className="tab-img">
                      <img src="assets/images/pic10.jpg"></img>
                    </ImageFit>
                  </Col>
                </Tab>
              ) : undefined}
            </Tabs>
          </Flex_tabs>
        </Inner>
      </Wrapper_style2>
      <Wrapper_style3 className="section-4">
        <Inner>
          <Header>
            <h2>Aliquam ipsum purus dolor</h2>
            <p>
              Cras sagittis turpis sit amet est tempus, sit amet consectetur
              purus tincidunt.
            </p>
          </Header>
          <FlexBoxs>
            <Col>
              <ImageFit className="section3-img">
                <img src="assets/images/pic09.jpg"></img>
              </ImageFit>
              <Caption>
                Pellentesque at nunc vitae urna suscipit mollis nec in arcu
              </Caption>
            </Col>
            <Col>
              <ImageFit className="section3-img">
                <img src="assets/images/pic10.jpg"></img>
              </ImageFit>
              <Caption>
                Morbi mattis ligula ut eros ipsum aliquam iaculis dictum
                suscipit
              </Caption>
            </Col>
            <Col>
              <ImageFit className="section3-img">
                <img src="assets/images/pic11.jpg"></img>
              </ImageFit>
              <Caption>
                Pellentesque at nunc vitae urna suscipit mollis nec in arcu
              </Caption>
            </Col>
          </FlexBoxs>
        </Inner>
      </Wrapper_style3>
    </>
  )
}

export default MainComponent
