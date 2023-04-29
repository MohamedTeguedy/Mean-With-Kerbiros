// import app
const app=require("./backend/app");

// Server is listening on Port 3000
app.listen(3000,()=>{
    console.log("Express Server is listening ON PORT 3000.....");
});

app.get('/api/data', function(req, res) {
    const token = req.headers.authorization.split(' ')[1];
  
    try {
      const decoded = jwt.verify(token, 'secretkey');
      res.status(200).send({ message: 'Protected data' });
    } catch (err) {
      res.status(401).send('Unauthorized');
    }
  });
  




