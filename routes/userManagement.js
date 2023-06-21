var express = require('express');
var router = express.Router();
const Realm = require("realm");

const app = new Realm.App({
    id: "usermanagement-yrxaw",
  });


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome!!');
});

router.get('/registerUser',async (req,res)=>{
  const token = req.query.token;
  const tokenId = req.query.tokenId;
  const conf = await app.emailPasswordAuth.confirmUser({ token, tokenId });
  const credentials = Realm.Credentials.emailPassword("sivasankar53662@gmail.com", "Pa55w0rd!");
  const user = await app.logIn(credentials);
  res.send('Thanks for Confirmation!');
})

app.get('/resetPassword',async (req,res)=>{
  res.send('resetPassword!');
})

module.exports = router;
