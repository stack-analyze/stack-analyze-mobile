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

export interface AnimeQuote {
  status: string
  data: Data
}