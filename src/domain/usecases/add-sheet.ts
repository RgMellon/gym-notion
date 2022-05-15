export type Params = {
    title: string
    image: string;
}

export interface AddSheet {
    add:(params: Params) => void
}
