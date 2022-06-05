export type HttpPostParams = {
  url?: string
  body?: any
}

export type HttpPostResponse = {
  id: string
}

export interface HttpPostClient {
  post: (params: HttpPostParams) => Promise<HttpPostResponse>
}
