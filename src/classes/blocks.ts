export interface Block {
  x: number
  y: number

  height: number
  width: number

  matrix: boolean[][]

  color: string
  type: BlockType
}

export enum BlockType {
  'none' = 0,
  'line' = 1,
  'square' = 2,
  'leftL' = 3,
  'rightL' = 4,
  'leftZ' = 5,
  'rightZ' = 6,
}

export const Colors = {
  1: '#9D24A5', // pink
  2: '#420666', // purple
  3: '#001F54', // navy
  4: '#083D77', // blue
  5: '#3D5A80', // grey blue
  6: '#F9876B', // peach
  7: '#57A773', // green
  8: '#484D6D', // slate
}

export default class BlockManager {
  public static Line: Block = {
    x: 0,
    y: 0,
    width: 1,
    height: 4,
    matrix: [ [true], [true], [true], [true] ],
    type: BlockType.line,
    color: Colors[BlockType.line],
  }
  public static Square: Block  = {
    x: 0,
    y: 0,
    width: 2,
    height: 2,
    matrix: [ [true, true], [true, true] ],
    type: BlockType.square,
    color: Colors[BlockType.square],
  }
  public static LeftL: Block  = {
    x: 0,
    y: 0,
    width: 2,
    height: 3,
    matrix: [
      [false, true],
      [false, true],
      [true, true],
    ],
    type: BlockType.leftL,
    color: Colors[BlockType.leftL],
  }
  public static RightL: Block = {
    x: 0,
    y: 0,
    width: 2,
    height: 3,
    matrix: [
      [true, false],
      [true, false],
      [true, true],
    ],
    type: BlockType.rightL,
    color: Colors[BlockType.rightL],
  }
  public static LeftZ: Block = {
    x: 0,
    y: 0,
    width: 3,
    height: 2,
    matrix: [
      [false, true, true],
      [true, true, false],
    ],
    type: BlockType.leftZ,
    color: Colors[BlockType.leftZ],
  }
  public static RightZ: Block = {
    x: 0,
    y: 0,
    width: 3,
    height: 2,
    matrix: [
      [true, true, false],
      [false, true, true],
    ],
    type: BlockType.rightZ,
    color: Colors[BlockType.rightZ],
  }

  public static getRandomBlock(): Block {
    const val = (Math.floor(Math.random() * 10) % 6) + 1
    return this.getBlock(val)
  }

  public static getBlock(type: BlockType): Block {
    switch (type) {
      default:
        return Object.assign({}, this.Square)
      case BlockType.line:
        return Object.assign({}, this.Line)
      case BlockType.square:
        return Object.assign({}, this.Square)
      case BlockType.leftL:
        return Object.assign({}, this.LeftL)
      case BlockType.rightL:
        return Object.assign({}, this.RightL)
      case BlockType.leftZ:
        return Object.assign({}, this.LeftZ)
      case BlockType.rightZ:
        return Object.assign({}, this.RightZ)
    }
  }

  public static rotate(block: Block, rotDirection: any): Block {
    if (rotDirection === 'cw') {
      console.log(block)

      // test for borders

      // mix around matricies

      // swap width and height
    }
    return this.Square
  }
}