import React from 'react'
import './Sticker.css'
const MediaQuery = require('react-responsive').default

interface Props {
  posX: number
  posY: number
  posZ: number
  iconId: string
  defaultTheme: boolean
}

export const Sticker: React.FC<Props> = ({
  posX,
  posY,
  posZ,
  iconId,
  defaultTheme
}) => {
  return (
    <div
      className={defaultTheme ? 'Sticker-Dark' : 'Sticker-Light'}
      style={{
        zIndex: posZ,
        top: posY,
        left: posX
      }}
    >
      <MediaQuery maxDeviceWidth={767}>
        <img
          src={require(`../assets/32/${
            defaultTheme ? 'white' : 'icon'
          }/${iconId}.png`)}
          alt={iconId}
        />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768}>
        <img
          src={require(`../assets/32x2/${
            defaultTheme ? 'white' : 'icon'
          }/${iconId}@2x.png`)}
          alt={iconId}
        />
      </MediaQuery>
    </div>
  )
}
