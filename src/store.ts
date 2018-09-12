import Vue from 'vue'
import Vuex from 'vuex'

import GameManager from '@/gameManager'
import BlockManager, { Block } from '@/classes/blocks'
import { Direction } from '@/classes/direction'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		gameManager: new GameManager(),
		blockManager: new BlockManager(),

		boardState: {
			0: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			1: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			2: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			3: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			4: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			5: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			6: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			7: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			8: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			9: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			10: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			11: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			12: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			13: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			14: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			15: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			16: {
				0: {type: null},
				1: {type: null},
				2: {type: null},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: null},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			17: {
				0: {type: null},
				1: {type: 'orange'},
				2: {type: 'orange'},
				3: {type: null},
				4: {type: null},
				5: {type: null},
				6: {type: 'orange'},
				7: {type: null},
				8: {type: null},
				9: {type: null},
			},
			18: {
				0: {type: 'orange'},
				1: {type: 'orange'},
				2: {type: 'orange'},
				3: {type: 'orange'},
				4: {type: 'orange'},
				5: {type: 'orange'},
				6: {type: 'orange'},
				7: {type: 'orange'},
				8: {type: 'orange'},
				9: {type: 'orange'},
			},
			19: {
				0: {type: 'orange'},
				1: {type: 'orange'},
				2: {type: 'orange'},
				3: {type: 'orange'},
				4: {type: 'orange'},
				5: {type: 'orange'},
				6: {type: 'orange'},
				7: {type: 'orange'},
				8: {type: 'orange'},
				9: {type: 'orange'},
			},
		},

		currentBlock: BlockManager.getRandomBlock(),
		gameState: 'stopped',
	},
	getters: {
		brickSize(state) {
			return state.gameManager.brickSize
		},
		boardHeight(state) {
			return state.gameManager.boardHeight
		},
		boardWidth(state) {
			return state.gameManager.boardWidth
		},
		boardState(state) {
			return state.boardState
		},
		currentBlock(state) {
			return state.currentBlock
		},
		gameState(state) {
			return state.gameState
		},
	},
	mutations: {
		mutateBoardState(state, newBoard) {
			console.log(newBoard)
			state.boardState = Object.assign({}, newBoard)
		},
		mutateCurrentBlock(state, newBlock) {
			state.currentBlock = Object.assign({}, newBlock)
		},
		mutateNextBlock(state, newBlock) {
      console.log('new next=block')
		},
		setGameState(state, newGameState) {
			state.gameState = newGameState
		},
	},

	actions: {
		addBlockToBoard(context, block) {

			const board: any = context.state.boardState

			for (let y = 0; y < block.matrix.length; y++) {
				for (let x = 0; x < block.matrix[y].length; x++) {
					if (block.matrix[y][x]) {
						board[block.y + y][block.x + x] = { type: block.color }
					}
				}
			}

			// update board
			context.commit('mutateBoardState', board)

			// new block
			context.commit('mutateCurrentBlock', BlockManager.getRandomBlock())
		},

		moveBlock(context, direction: Direction) {
			const block = context.state.currentBlock
			let movement: null | undefined | boolean = false

			switch (direction) {
				case Direction.up:
					// move up
					// ???
					break
				case Direction.right:
					// move right
					movement = context.state.gameManager.checkRight(block)
					if (movement) {
						block.x++
					}
					break
				case Direction.down:
					// move down
					movement = context.state.gameManager.checkDown(block)
					// console.log('movin down')
					if (movement) {
						block.y++
					} else {
						// add to the board!
						context.dispatch('addBlockToBoard', block)
					}
					break
					case Direction.left:
					// move left
					movement = context.state.gameManager.checkLeft(block)
					if (movement) {
						block.x--
					}
					break
			}

			if (movement) {
				context.commit('mutateCurrentBlock', block)
			}
		},

		tickCurrentBlockDown(context) {
			context.dispatch('moveBlock', Direction.down)
		},

    rotateBlock(context, rotDirection) {
      if (rotDirection === 'cw') {
        console.log('action: rotating currentBlock '+rotDirection)
      }
      BlockManager.rotate(context.state.currentBlock, 'cw')
    }
	},
})
