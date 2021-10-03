import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, LogoWithTextIcon } from '@doodaswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
// import { LogoWithTextIcon } from '@doodaswap/uikit'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'
import CompositeImage, { getSrcSet, CompositeImageProps } from './CompositeImage'

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }  
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`
const DoodaStyledHeading = styled(Heading)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DoodaHomepageLogo = styled(LogoWithTextIcon)`
  content-align: center;
  margin: 0px auto;
  width: 20%;
`
const DoodaSubText = styled.h4`
  color: #4d5560 !important;
  font-family: Spoqa Han Sans Neo;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.8px;
`
const DmainLeft = styled.div`
  background: #ffffff;
  width: 25%;
  height: 314px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  margin-right: 5px;
  border-radius: 4px;
`
const DmainCenter = styled.div`
  background: #3763a4;
  width: 50%;
  height: 314px;
  margin-left: 5px;
  margin-right: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1.2rem;
`
const DmainRight = styled.div`
  background: #ffffff;
  width: 25%;
  height: 314px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  margin-left: 5px;
`
const DoodaSwapMain = styled.div`
  margin-top: 5rem;
`
const DoodaSubHead = styled.h6`
  color: #f1f3f5 !important;
  //   font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.02em;
`

const imagePath = '/images/home/lunar-bunny/'
const imageSrc = 'bunny'

const starsImage: CompositeImageProps = {
  path: '/images/home/lunar-bunny/',
  attributes: [
    { src: 'star-l', alt: '3D Star' },
    { src: 'star-r', alt: '3D Star' },
    { src: 'star-top-r', alt: '3D Star' },
  ],
}

const DoodaMain = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()

  return (
    <>
      {/* <BgWrapper> */}
      {/* <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper> */}
      {/* </BgWrapper> */}
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          {/* <Heading scale="xxl" color="secondary" mb="24px">
            {t('The moon is made of pancakes.')}
          </Heading>
          <Heading scale="md" mb="24px">
            {t('Trade, earn, and win crypto on the most popular decentralized platform in the galaxy.')}
          </Heading>
          <Flex>
            {!account && <ConnectWalletButton mr="8px" />}
            <Link to="/swap">
              <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
            </Link>
          </Flex> */}
          <DoodaStyledHeading scale="xxl">
            {/* <h1>Dooda LogoText Should Be here </h1> */}
            <DoodaHomepageLogo isDark={theme.isDark} />
            <DoodaSubText>안녕하세요, DOODA 입니다.</DoodaSubText>
          </DoodaStyledHeading>
          <DoodaSwapMain>
            <Flex
              flex="2"
              //   flexDirection="row"
              flexDirection={['column-reverse', null, null, 'row']}
              alignItems={['flex-end', null, null, 'center']}
            >
              <DmainLeft>
                <h4>아프로디테 (AFD) NFT 옥션이 시작되었습니다!</h4>
              </DmainLeft>
              <DmainCenter>
                <DoodaSubHead>Farms & Staking</DoodaSubHead>
              </DmainCenter>
              <DmainRight>
                <h4>아프로디테 (AFD) NFT 옥션이 시작되었습니다!</h4>
              </DmainRight>
            </Flex>
          </DoodaSwapMain>
        </Flex>

        {/* <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('Lunar bunny')} />
          </BunnyWrapper>
          <StarsWrapper>
            <CompositeImage {...starsImage} />
          </StarsWrapper>
        </Flex> */}
      </Flex>
    </>
  )
}

export default DoodaMain
