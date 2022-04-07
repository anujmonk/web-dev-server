
const helloController = (app) => {
app.get('/hello',(req,res) => {res.send('Life is good')})
app.get('/',(req,res) => {res.send('Welcome to node server')})
}

export default helloController;