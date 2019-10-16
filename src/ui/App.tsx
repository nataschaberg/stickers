import React from 'react'
import './App.css'
import { Sticker } from './Sticker'
import { getCryptoIconsIds } from '../lib/utils'
import { BoringButton } from './BoringButton'
import { SwitchButton } from './SwitchButton'
import { StickerScreen } from './StickerScreen'

type StickerDetails = {
  x: number
  y: number
  z: number
  stickerId: number
  iconId: string
}

interface State {
  darkTheme: boolean
  stickers: StickerDetails[] | []
  iconIds: String[] | []
}

interface Props {}

class App extends React.Component<Props, State> {
  state = {
    darkTheme: true,
    stickers: [],
    iconIds: []
  }

  componentDidMount() {
    this.setState({ iconIds: getCryptoIconsIds() })
  }
  handleThemeSwitch = () => {
    this.setState({ darkTheme: !this.state.darkTheme })
    this.handleStickerWipe()
  }

  handleStickerWipe = () => {
    this.setState({ stickers: [] })
  }

  addSticker = (e: any) => {
    const { iconIds } = this.state
    const stickers: StickerDetails[] = this.state.stickers
    const randomIcon = iconIds[Math.floor(Math.random() * iconIds.length)]

    const newStickers = stickers.concat({
      x: e.pageX - 22,
      y: e.pageY - 22,
      z: stickers.length > 2 ? ++stickers[stickers.length - 1].z : 100,
      iconId: randomIcon,
      stickerId: Math.floor(Math.random() * 100000) // TODO: maybe better way
    })

    this.setState({ stickers: newStickers })
  }

  stickIt = () => {
    return this.state.stickers.map((el: StickerDetails) => (
      <Sticker
        posX={el.x}
        posY={el.y}
        posZ={el.z}
        key={el.stickerId}
        iconId={el.iconId}
        defaultTheme={this.state.darkTheme}
      />
    ))
  }

  render() {
    return (
      <div className={this.state.darkTheme ? 'App-Dark' : 'App-Light'}>
        <div className="App-Switch-Button-Container">
          <SwitchButton
            handleSwitch={this.handleThemeSwitch}
            defaultTheme={this.state.darkTheme}
          />
        </div>
        <div
          className="App-Sticker-Screen-Container"
          onClick={e => this.addSticker(e)}
        >
          {this.stickIt()}
          <StickerScreen />
        </div>
        <div className="App-Boring-Button-Container">
          <BoringButton
            handleStickerWipe={this.handleStickerWipe}
            defaultTheme={this.state.darkTheme}
          />
        </div>
      </div>
    )
  }
}

export default App
