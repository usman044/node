const http=require('http')
const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('wellcome to home page')
    }
})