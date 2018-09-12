import { bus } from '@/bus'
import store from '@/store'

import { Block } from '@/classes/blocks'
import { Direction } from '@/classes/direction'

export default class GameManager {

	framerate = 1

	brickSize = 20
	boardWidth: number = 10
	boardHeight = 20
	boardState = []

	constructor() {
		const clock = setInterval(this.tick, 1000/this.framerate)

		bus.$on('tick', () => {
			this.handleTick()
		})
	}

	tick = () => {
		bus.$emit('tick')
	}

	handleTick() {
		if (store.getters.gameState === 'running') {
			// console.log(store.getters.currentBlock)
			store.dispatch('tickCurrentBlockDown')
		}
	}

	setFramerate(newFramerate: number): number {
		this.framerate = newFramerate
		return this.framerate
	}

	checkRight(block: Block) {
		let newLoc = Object.assign({}, block)
		newLoc.x++

		if (newLoc.x + newLoc.width > this.boardWidth) {
			console.log('hit right wall')
			return false
		}

		return this.checkBricks(newLoc)
	}

	checkLeft(block: Block) {
		let newLoc = Object.assign({}, block)
		newLoc.x--
		
		if (newLoc.x < 0) {
			console.log('that`s the left wall!')
			return false
		}

		return this.checkBricks(newLoc)
	}

	checkDown(block: Block) {
		let newLoc = Object.assign({}, block)
		newLoc.y++

		if (newLoc.y + block.height > this.boardHeight) {
			console.log('we hit rock bottom')
			// add to the board and get a new block
			return false
		}

		return this.checkBricks(newLoc)
	}

	checkBricks(block: Block) {
		// console.log(block)
		for (let y=0; y < block.matrix.length; y++) {
			for (let x=0; x < block.matrix[y].length; x++) {
				// console.log(store.getters.boardState[newLoc.y + y][newLoc.x + x])
				if (block.matrix[y][x] && store.getters.boardState[block.y +y][block.x +x].type != null) {
					return false
				}
			}
		}
		return true
	}
}