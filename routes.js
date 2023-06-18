const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

       if(url==='/'){
        res.write('<html><body><form action="/message" method="POST">')
        res.write('<input type="text" name="input" />')
        res.write('<button type="submit">Enter</button>')
        res.write("</form></body></html>")
        return res.end()
    }

      if(url === '/message' && method === 'POST'){
         const arr = []
         req.on('data', (chunk)=>{
            arr.push(chunk)
         })
         req.on('end', ()=>{
            const parsedBody = Buffer.concat(arr).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, (err)=>{
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
         })
      }
    }

    // module.exports = requestHandler

    /* module.exports = {
        handler : requestHandler,
        text : "Hello Node js"
    } */

    module.exports.handler = requestHandler;
    module.exports.text = "Hello Node js" 