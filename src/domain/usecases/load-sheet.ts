export type Model = {
  image: string
  title: string

}


export interface LoadSheet {
  load: () => Promise<Model[]>
}
  
  
    