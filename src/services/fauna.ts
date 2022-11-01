import { Client } from 'faunadb'

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  endpoint: 'https://db.us.fauna.com',
})