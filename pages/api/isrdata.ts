import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  content: string
}

const isrdata : Data = {
  name : 'Inceremental Site Generation',
  content:'This page is Rendering with ISG (Inceremental Site Generation)'

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(isrdata)
}