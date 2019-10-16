import React from 'react'
import Switch from 'react-switch'

interface Props {
  handleSwitch: () => void
  defaultTheme: boolean
}
export const SwitchButton: React.FC<Props> = ({
  defaultTheme,
  handleSwitch
}) => {
  return (
    <div style={{ margin: 5 }}>
      <Switch
        onChange={handleSwitch}
        checked={defaultTheme}
        onColor={'#FA8072'}
        offColor={'#808080'}
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </div>
  )
}
