export interface PokemonListResp {
    count: number, 
    next: string
    previous: null,
    results:PokemonItemModel[]
}
export interface PokemonItemModel {
    name:string
    url:string
    id?:number
    imageUrl?:string
}