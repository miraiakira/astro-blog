// import {getProduct} from '../db'

import type { APIRoute } from "astro"

export async function GET({}) {
//   const id = params.id
// const product = await getProduct(id)

// if(!product) {
//   return new Response(null, {
//     status: 404,
//     statusText: 'Not Found'
//   })
// }

  return new Response(JSON.stringify({msg: 'hello world'}), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
  })
}

export const POST:APIRoute = async ({request}) => {  
  const body = await request.json()
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      }
    })
  }