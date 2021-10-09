import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { Box, Flex, Text } from '@doodaswap/uikit'
import { useTranslation } from 'contexts/Localization'

const GappedFlex = styled(Flex)`
  gap: 24px;
`

const BoxContainer = styled(Flex)`
gap: 24px;
width: 100%;
flex-direction: column;
${({ theme }) => theme.mediaQueries.md} {
  flex-direction: row;
}
`
const EarningBoxContainer = styled(Flex)`
gap: 24px;
width: 100%;
margin-top:31px;
flex-direction: column;
${({ theme }) => theme.mediaQueries.md} {
  flex-direction: row;
}
`
const StyledHeadingFlex = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 156px;
  width:400px;
`

const PageHeading = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  color:#3763A4;
  font-size:20px;
  line-height:36px;
  font-weight:bold;
`
const PageHeadingDesc = styled(Box)`
  display: flex;
  align-self: baseline;
  position: relative;
  color:#99A2AB;
  font-size:13px;
  line-height:24px;
`
const StyledBoxCard = styled(Box)`
flex-direction: column;
  display: flex;
  align-self: baseline;
  position: relative;
  padding: 1px 1px 3px 1px;
`

const BoxCardInner = styled(Box)`
  width: 100%;
  padding: 20px 24px;
  background: ${({ theme }) => theme.card.background};
  border-radius: 4px;
  margin-top:9px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
`
const BalanceBox=styled(Box)`
position:absolute;
flex-direction: row;
bottom:20px;
right:24px;
text-alight:right;
justifyContent: flex-end;
`

const BalanceText=styled(Box)`
color:#3763A4;
font-weight:bold;
font-size:20px;
display: inline-block;
margin-left:2px;
`
const BalanceCurrencyText=styled(Box)`
color:#CAD0D7;
font-weight:bold;
font-size:20px;
display: inline-block;
`
const EarningTitle=styled(Box) `
color:#FF0000;
font-size:16px;
position:absolute;
left:16px;
`

const EarningUpperBox=styled(Box)`
border-bottom:1px solid #DEE2E6;
padding:16px 0;
flexDirection:row;
`
const EarningLowerBox=styled(Box)`
padding:16px 0 0 0;
flexDirection:row;
`
const EarningUpperLeftBox=styled(Box)`
border-right:1px solid #DEE2E6;
padding:0 24px;
width:50%;
display:inline-block;
font-family: Roboto;
`
const EarningUpperRightBox=styled(Box)`
padding:0 24px;
width:50%;
display:inline-block;
`
const EarningBalanceHeading=styled(Box)`
color:#99A2AB;
font-size:13px;
font-family: Roboto;
`
const EarningBalanceQty=styled(Box)`
color:#4D5560;
font-size:20px;
text-align:right;
font-family: Roboto;
`
const EarningBalanceAmt=styled(Box)`
color:#DEE2E6;
font-size:12px;
text-align:right;
font-family: Roboto;
`

type Step = {cardno:number;heading:string;  title: string;currencysymbol: string; balance: string }
type Earning = {title:string;heading:string;dailyTx: number; dailyAmt: number;weeklyTx: number; weeklyAmt: number;monthlyTx: number; monthlyAmt: number;yearlyTx: number; yearlyAmt: number }

const BoxCard: React.FC<{ step: Step }> = ({ step }) => {
  return (
    <StyledBoxCard width="100%">
      <Text color="#FF0000">{step.heading}</Text>
      <BoxCardInner height={['173px']}>
        <Text color="#4D5560" fontSize="13">{step.title}</Text>
        <BalanceBox >
          <BalanceCurrencyText>{step.currencysymbol}</BalanceCurrencyText>
          <BalanceText>{step.balance}</BalanceText>
        </BalanceBox>
        
      </BoxCardInner>
    </StyledBoxCard>
  )
}

const EarningCard: React.FC<{ earning: Earning }> = ({ earning }) => {
  return (
    <StyledBoxCard width="100%">
      <EarningTitle>{earning.title}</EarningTitle>
      <BoxCardInner>
        <Text color="#4D5560" fontSize="13">{earning.heading}</Text>
        <EarningUpperBox>
          <EarningUpperLeftBox> 
            <EarningBalanceHeading>Daily</EarningBalanceHeading>
            <EarningBalanceQty>{earning.dailyTx}</EarningBalanceQty>
            <EarningBalanceAmt>($ {earning.dailyAmt})</EarningBalanceAmt>
            </EarningUpperLeftBox>
          <EarningUpperRightBox>
          <EarningBalanceHeading>Weekly</EarningBalanceHeading>
            <EarningBalanceQty>{earning.weeklyTx}</EarningBalanceQty>
            <EarningBalanceAmt>($ {earning.weeklyAmt})</EarningBalanceAmt>
          </EarningUpperRightBox>
        </EarningUpperBox>
        
        <EarningLowerBox>
        <EarningUpperLeftBox> 
            <EarningBalanceHeading>Monthly</EarningBalanceHeading>
            <EarningBalanceQty>{earning.monthlyTx}</EarningBalanceQty>
            <EarningBalanceAmt>($ {earning.weeklyAmt})</EarningBalanceAmt>
            </EarningUpperLeftBox>
          <EarningUpperRightBox>
          <EarningBalanceHeading>Yearly</EarningBalanceHeading>
            <EarningBalanceQty>{earning.yearlyTx}</EarningBalanceQty>
            <EarningBalanceAmt>($ {earning.yearlyAmt})</EarningBalanceAmt>
          </EarningUpperRightBox>
        </EarningLowerBox>
        
      </BoxCardInner>
    </StyledBoxCard>
  )
}

const Dashboard = () => {
  const { t } = useTranslation()
  const steps: Step[] = [
    {
      cardno:1,
      heading: t('TVL all pools'),
      title: t('Assets in Deposit'),
      currencysymbol: t('$'),
      balance: t('0.00'),
    },
    {
      cardno:2,
      heading: t('Dooda Holdingds'),
      title: t('DOODA Possession'),
      currencysymbol: t(''),
      balance: t('0.00'),
    },
    {
      cardno:3,
      heading: t('Dooda price'),
      title: t('DOODA Current Price'),
      currencysymbol: t('$'),
      balance: t('3.52'),
    },
  ]

  const earnings: Earning[] = [
    {
      title:t('your earnings'),
      heading: t('Compensation by period($)'),
      dailyTx: 0,
      dailyAmt: 0.00,
      weeklyTx: 0,
      weeklyAmt: 0.00,
      monthlyTx: 0,
      monthlyAmt: 0.00,
      yearlyTx: 0,
      yearlyAmt: 0.00,
    },
    {
      title:t('your APR'),
      heading: t('expected return($)'),
      dailyTx: 0,
      dailyAmt: 0.00,
      weeklyTx: 0,
      weeklyAmt: 0.00,
      monthlyTx: 0,
      monthlyAmt: 0.00,
      yearlyTx: 0,
      yearlyAmt: 0.00,
    },
  ]

  return (
    <Page>
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
        <Flex flex="2" flexDirection="column">
<StyledHeadingFlex>
<PageHeading>
          {t('My Asset Report')}
        </PageHeading>
        <PageHeadingDesc>{t('Make a deposit and earn money. Opportunities for steady revenue generation are at hand.')}</PageHeadingDesc>
</StyledHeadingFlex>
        
        </Flex>
        <Flex flex="1" justifyContent="center">
        <img src="/images/frame.png" width="336px" height="287px" alt="" />
        </Flex>
      </GappedFlex>

      
      <BoxContainer>
        {steps.map((step) => (
          <BoxCard key={step.cardno} step={step} />
        ))}
      </BoxContainer>
      
      <GappedFlex flexDirection={['column', 'column', 'column', 'row']}>
      <EarningBoxContainer>
      {earnings.map((earning) => (
          <EarningCard key={earning.title} earning={earning} />
        ))}
      </EarningBoxContainer>
      </GappedFlex>
    </Page>
  )
}

export default Dashboard


