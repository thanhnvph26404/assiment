export interface Product {
    id?: string | number 
    name: string
    image: any
    price: number
    flavor: string
    description: string
    note: string
    categoryId?: string | number
}