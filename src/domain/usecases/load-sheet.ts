export type Model = {
  image: string
  title: string
  id: string
}


export interface LoadSheet {
  load: () => Promise<Model[]>
}
  
  
    