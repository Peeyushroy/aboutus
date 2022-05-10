import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  content: string
}

const csrdata : Data = {
  name : 'Client Side Rendering',
  content:'This page is Rendering with CSR (Client Side Rendering)'

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(csrdata)
}