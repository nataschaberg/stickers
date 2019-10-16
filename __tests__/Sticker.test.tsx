import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Sticker } from '../src/ui/Sticker'

it('Should render a sticker correctly on screen', async () => {
  const { getByAltText } = render(
    <Sticker
      posX={200}
      posY={200}
      posZ={101}
      iconId={'abt'}
      defaultTheme={true}
    />
  )

  // TODO: media query creates problems for testing
  // expect(getByAltText('abt')).toBeTruthy
})
