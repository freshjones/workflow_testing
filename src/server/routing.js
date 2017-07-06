import renderApp from './render-app'

export default (app) => {
  
  app.get('/', (req, res) => {
    res.send(
      renderApp(req.url)
    )
  })

  app.get('/other*', (req, res) => {
    res.send(
      renderApp(req.url)
    )
  })

}
