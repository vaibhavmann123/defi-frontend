import React from 'react'
import { Svg, SvgProps } from '@doodaswap/uikit'

interface LogoProps extends SvgProps {
  isDark: boolean
}

const CarosalMain: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="-10 0 25 15" {...props}>
      {/* <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
      <rect width="24" height="4" rx="2" fill="#636C7D" />
      {/* </svg> */}
    </Svg>
  )
}

export default React.memo(CarosalMain, (prev, next) => prev.isDark === next.isDark)
