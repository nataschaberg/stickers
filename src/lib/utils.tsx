import { iconsList } from '../assets'

export function getCryptoIconsIds() {
  return iconsList.map(el => el.symbol.toLowerCase())
}
