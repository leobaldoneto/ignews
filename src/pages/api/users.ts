import { NextApiRequest, NextApiResponse } from "next"

export default function users(request: NextApiRequest, response: NextApiResponse) {
  const users = [
    { id: 1, name: 'Diego'},
    { id: 2, name: 'Leobaldo'},
    { id: 3, name: 'Natália'},
  ]

  return response.json(users)
}