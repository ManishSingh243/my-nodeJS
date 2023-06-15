const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
      res.write('<html>')
      res.write('<body>')
      res.write("<form action='/home' method='POST'>")
      res.write("<h2>Go to home page</h2>")
      res.write("<button type='submit' name='submit1'>Home</button>")
      res.write('</form>')

      res.write("<form action='/about' method='POST'>")
      res.write("<h2>Go to about page</h2>")
      res.write("<button type='submit' name='submit2'>About</button>")
      res.write('</form>')

      res.write("<form action='/node' method='POST'>")
      res.write("<h2>Go to nodejs page</h2>")
      res.write("<button type='submit' name='submit3'>Node</button>")
      res.write('</form>')

      res.write('</body></html>')
      return res.end()
    }

    if(url === '/home' && method === 'POST'){
         res.write("<html><body><h1>Welcome home</h1>")
         res.write("<form action='/' method='POST'>")
      res.write("<button type='submit'>Back</button>")
      res.write('</form></body></html>')
      res.end();
    }

    if(url === '/about' && method === 'POST'){
      res.write("<html><body><h1>Welcome to About Us page</h1>")
      res.write("<form action='/' method='POST'>")
      res.write("<button type='submit'>Back</button>")
      res.write('</form></body></html>')
      res.end()
 }

 if(url === '/node' && method === 'POST'){
  res.write("<html><body><h1>Welcome to my Node Js project</h1>")
  res.write("<form action='/' method='POST'>")
      res.write("<button type='submit'>Back</button>")
      res.write('</form></body></html>')
      res.end()
}
})

server.listen(3000)