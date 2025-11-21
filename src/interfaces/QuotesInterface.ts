// anime quotes
interface Anime {
  id: number
  name: string
  altName?: string
}

interface Data {
  content: string
  anime: Anime
  character: Anime
}

interface TaylorSwift {
  quote?: string
  song?: string
  album?: string
}

export interface Quote extends TaylorSwift {
  status?: string
  data?: Data
}