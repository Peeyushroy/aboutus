import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  content: string
}

const ssrdata : Data = {
  name : 'Server Side Rendering',
  content:'This page is Rendering with SSR (Server Side Rendering)'

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(ssrdata)
}
