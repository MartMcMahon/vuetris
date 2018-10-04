import Vue from 'vue'
import Vuex from 'vuex'

import GameManager from '@/gameManager'
import BlockManager, { Block } from '@/classes/blocks'
import { Direction } from '@/classes/direction'

import { bus } from '@/bus'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameManager: new GameManager(),
    blockManager: new BlockManager(),

    // scoreMulti[# of lines]
    baseScore: {
      1: 40,
      2: 100,
      3: 300,
      4: 1200
    },

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
    highestLevel: 0,
    level: 0,
    score: 0,
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
    score(state) {
      return state.score
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
    mutateHighest(state, y) {
      state.highestLevel = y
    },
    mutateNextBlock(state, newBlock) {
      console.log('new next=block')
    },
    setGameState(state, newGameState) {
      state.gameState = newGameState
    },
    // score mutations
    scoreByLines(state: any, n) {
      console.log('mutate score')
      const lineScore = state.baseScore[n] * (state.level +1)
      state.score += lineScore;
    },
    scoreByMove(state) {
      console.log('mutate score')
      state.score++;
    },
  },

  actions: {
    addBlockToBoard(context, block) {
      const board: any = context.state.boardState
      for (let y = 0; y < block.matrix.length; y++) {
        for (let x = 0; x < block.matrix[y].length; x++) {
          if (block.matrix[y][x]) {
            board[block.y + y][block.x + x] = { type: block.color }

            // keep track of highest level we need to check below
            if (y > context.state.highestLevel) {
              context.commit('mutateHighest', y)
            }
          }
        }
      }

      // update board
      context.commit('mutateBoardState', board)

      // new block
      context.commit('mutateCurrentBlock', BlockManager.getRandomBlock())
    },

    checkGameState(context) {
      const board: any = context.state.boardState

      /* tslint:disable */
      // check for full rows
      const rowsToClear: any = {}
      let n = context.state.gameManager.boardHeight;
      Object.keys(board).forEach((y) => {
        rowsToClear[y] = true

        const row = board[y]
        for (let x = 0; x < Object.keys(row).length; x++) {
          const brick = row[x]
          if (brick.type === null) {
            rowsToClear[y] = false
            n--;
            break
          }
        }
      })

      // console.log(rowsToClear)
      /* tslint:enable */

      context.commit('setGameState', 'paused')
      Object.keys(rowsToClear).forEach((y) => {
        if (rowsToClear[y]) {
          context.dispatch('clearRow', y)

          // TODO replace 2000 with 'clear wait time' var
          // setTimeout(() => {console.log('wait')}, 2000)
        }
      })

      // increase score for cleared lines
      if (n > 0) {
        context.commit('scoreByLines', n)
      }
      context.commit('setGameState', 'running')
    },

    async clearRow(context, y) {
      // TELL RENDERER THAT WE'RE DELETING THIS ROW

      // for now JUST clear the blocks
      const board: any = Object.assign({}, context.state.boardState)
      for (let x = 0; x < context.state.gameManager.boardWidth; x++) {
        console.log('clearing square: ' + x)
        board[y][x] = await {type: null}
        // context.state.gameManager.hang(200)
      }

      // after filled row is clear, check until highestLevel and move
      // above blocks down
      //
      // highestLevel I think needs some rethinking

      for (y -= 1; y >= 0; y--) {
        for (let x = 0;
          x < context.state.gameManager.boardWidth; x++) {
          if (board[y][x].type !!) {
            board[y +1][x] = board[y][x]
            board[y][x] = {type: null}
          }
        }
      }

      context.commit('mutateBoardState', board)
    },

    moveBlock(context, payload: {direction: Direction, natTick: boolean | undefined}) {
      const {direction, natTick} = payload
      console.log(direction)
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
            // if this is not natural (natTick), we want
            // to increase the score
            if (! natTick) {
              context.commit('scoreByMove')
            }
          } else {
            // add to the board!
            context.dispatch('addBlockToBoard', block)
            bus.$emit('blockPlace')
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
      context.dispatch('moveBlock',
        {direction: Direction.down, natTick: true})
    },

    rotateBlock(context, rotDirection) {
      if (rotDirection === 'cw') {
        console.log('action: rotating currentBlock ' + rotDirection)
      }
      context.commit('mutateCurrentBlock', BlockManager.rotate(context.state.currentBlock, 'cw'))
    },
  },
})
