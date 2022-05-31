export type ExerciseModel = {
    image: string
    title: string
    description?: string
    sheet_id: string
    video: string
  }
  
  
  export interface LoadExercises {
    load: () => Promise<ExerciseModel[]>
  }
    
    