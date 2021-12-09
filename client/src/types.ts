export interface IPlayer {
  name: string // можно использовать как ID, всегда будет уникальным
  avatar: string // ссылка на фото игрока
  score: number // текущий счёт
  bio: string // краткое описание игрока
}
