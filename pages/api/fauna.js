const faunadb = require('faunadb');

const secret = 'fnADvJ5QvfACACNpsYIHM7vdvpeS4eBHZrgsek4w';


const q = faunadb.query;
let roleFlag = false;
var client = new faunadb.Client({ secret });

module.exports = async(req, res) => {

    try {
        
      let clientRol = await client.query(
        q.CreateRole({
            name: 'dev2020',
            privileges: [
              {
                resource: q.Collection('Usuario'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Collection('Comercio'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Collection('Ticket'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Collection('Producto'),
                actions: { read: true, write: true, create: true },
              },
              {
                resource: q.Index('allComercios'),
                actions: { read: true },
              },
              {
                resource: q.Index('allComerciosByStatus'),
                actions: { read: true },
              },
              {
                resource: q.Index('allUsers'),
                actions: { read: true },
              },
              {
                resource: q.Index('allTickets'),
                actions: { read: true },
              },
              {
                resource: q.Index('allProducts'),
                actions: { read: true },
              },
              {
                resource: q.Index('allProductsByEnum'),
                actions: { read: true },
              },
              {
                resource: q.Index('productByName'),
                actions: { read: true },
              },
              {
                resource: q.Index('userByEmail'),
                actions: { read: true },
              },
              {
                resource: q.Index('comercioBySlug'),
                actions: { read: true },
              },
            ],
          })
      )
      clientRol = await client.query(
          
        q.CreateKey({
            role: q.Role('dev2020'),
        })
    );
    res.status(200).json(clientRol);
    console.log(clientRol);
    } catch (e) {
      // something went wrong
      res.status(500).json({ error: e.message })
    }
  }


