export type Params = {
    title: string
    image: string;
}

export type Response = {
    id: string
}

export interface AddSheet {
    add:(params: Params) => Promise<Response>
}
