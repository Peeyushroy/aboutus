// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  content: string
}

const ssgdata : Data = {
  name : 'Static Site Generation',
  content:'This page is Rendering with SSG (Static Site Generation)'

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(ssgdata)
}
