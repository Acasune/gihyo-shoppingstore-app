// 商品カテゴリ
export type Categori = 'shoes' | 'clothes' | 'book'
// 商品の状態
export type Condition = 'new' | 'used'

// ユーザー
export type User = {
  id: number
  username: stirng
  displayName: string
  email: string
  prifileImageUrl: string
  description: string
}

export type Product = {
  id: number
  categori: Category
  title: string
  description: string
  imageUrl: string
  blurDataUrl: string
  price: number
  condition: Condition
  owner: User
}

// API Context
export type ApiContext = {
  apiRootUrl: string
}
