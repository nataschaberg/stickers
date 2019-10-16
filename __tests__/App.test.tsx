import React from 'react'
import ReactDOM from 'react-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import App from '../src/ui/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('Should render with correct default theme', () => {
  const { getByTestId } = render(<App />)
  const div = getByTestId('app-container')
  expect(div).toHaveClass('App-Dark')
})

it('Should change theme when switch button is fired', async () => {
  const { getByTestId, getByRole } = render(<App />)

  fireEvent(
    getByRole('switch'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  )
  expect(getByTestId('app-container')).toHaveClass('App-Light')
})
