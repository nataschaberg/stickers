import React from 'react'
const ReactTypingEffect = require('react-typing-effect').default

interface Props {
  displayText: string[]
}

export const TextInteractive: React.FC<Props> = ({ displayText }) => {
  return <ReactTypingEffect text={displayText} speed={200} eraseDelay={300} />
}
