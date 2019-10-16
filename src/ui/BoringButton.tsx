import React from 'react'
import './BoringButton.css'

interface Props {
  handleStickerWipe: () => void
  defaultTheme: boolean
}

export const BoringButton: React.FC<Props> = ({
  handleStickerWipe,
  defaultTheme
}) => {
  return (
    <div
      className={defaultTheme ? 'Boring-Button-Dark' : 'Boring-Button-Light'}
      onClick={handleStickerWipe}
    >
      Bored
    </div>
  )
}
