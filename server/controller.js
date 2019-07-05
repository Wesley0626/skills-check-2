

module.exports ={ 
  getProducts(req, res){
    console.log('hit get')
    const db = req.app.get('db')
    db.get_products().then( dbRes => {
      res.status(200).send(dbRes)
    })
  },
  addProduct(req, res){
    console.log('addhit')
    const db = req.app.get('db')
    let{price, imgurl, name} = req.body
    db.create_item([name, price, imgurl]).then(dbRes => {
      res.sendStatus(200)
    })
  }
}