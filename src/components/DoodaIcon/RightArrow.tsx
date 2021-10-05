import React from 'react'
import { Svg, SvgProps } from '@doodaswap/uikit'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const RightArrow: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = '#3763A4'
  return (
    <Svg viewBox="-10 0 25 15" {...props}>
      {/* <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <path d="M0.5 1.7971L4.82839 6L0.5 10.2029L1.83578 11.5L7.5 6L1.83578 0.5L0.5 1.7971Z" fill="#4D5560" />
      {/* </svg> */}
    </Svg>
  )
}

export default React.memo(RightArrow, (prev, next) => prev.isDark === next.isDark)
