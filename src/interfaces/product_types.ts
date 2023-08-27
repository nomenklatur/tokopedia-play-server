export interface Product {
  product_id: string
  product_url: string
  name: string
  price: number
}

export interface ProductPayload {
  product_url: string
  name: string
  price: number
}
