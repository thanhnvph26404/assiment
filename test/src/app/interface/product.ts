export interface Product {
    id?: string | number 
    name: string
    image: File
    price: number
    flavor: string
    description: string
    note: string
    categoryId?: string | number
}