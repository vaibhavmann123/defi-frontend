import React from 'react'
import { Svg, SvgProps } from '@doodaswap/uikit'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const CarosalSub: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = '#3763A4'
  return (
    <Svg viewBox="-10 0 25 15" {...props}>
      {/* <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <circle cx="2" cy="2" r="2" fill="#636C7D" />
      {/* </svg> */}
    </Svg>
  )
}

export default React.memo(CarosalSub, (prev, next) => prev.isDark === next.isDark)
