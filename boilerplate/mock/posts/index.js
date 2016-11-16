module.exports = [{
  method: 'GET',
  route: '/posts',
  handler: require('./posts.json')
}, {
  method: 'GET',
  // test:
  // http://localhost:3001/task/123
  // http://localhost:3001/task/123?callback=cb
  route: '/posts/:id',
  handler: (req, res) => res.jsonp({
    code: 1,
    id: req.params.id,
    userId: 1,
    title: 'title',
    body: 'body' + req.params.id
  })
}, {
  method: 'POST',
  route: '/new-post',
  handler: (req, res) => res.json({
    code: 1,
    msg: 'success'
  })
}]
