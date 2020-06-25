import React, {useEffect} from 'react'
import fetch from 'isomorphic-unfetch'


export const allComercios = async () => {
    const query = `query{
      allComercios{
        data{
          _id
          nombre
          ciudad
        }
      }
    }`
  
    const res = await fetch(process.env.faunaDbGraphQlEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.faunaDbSecret}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query
      }),
    })
    const {data: {allComercios:{data}}} = await res.json()
    return { data : data}
  }

  export const comercioBySlug = async (slug) => {
    const query = `query finduserbyid($slug: String!){
      comercioBySlug(slug: $slug) {
        _id
        nombre
        ciudad
      }
    }`
  
    const res = await fetch(process.env.faunaDbGraphQlEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.faunaDbSecret}`,
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    })
    const data = await res.json()
    return { data : data}
  }