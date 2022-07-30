import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'
export default (_req: NextApiRequest, res: NextApiResponse) => {
   //BY default get request

   //! complex backend logic :(
   console.log('API', services)

   res.status(200).json({ services })
}
