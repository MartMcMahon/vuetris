import { bus } from '@/bus'
import store from '@/store'

export default class StyleManager {

	calculateStyle(block: { x: number, y: number, style: string }): string {
		const styleStr = "{position: relative, top: " + 10*block.x + ", left: " + block.y*10 + "}"
		block.style = styleStr
		return styleStr
	}
}