const express = require("express");
const router = express.Router();
const knights = require ('knights-canvas')

router.get('/', (req, res)=>{
res.send('ok')})

router.get('/welcome', async(req, res) => {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Welcome()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
})
router.get('/goodbye', async(req, res) => {
  var name = req.query.name
   var gcname = req.query.gcname
    var ppgc = req.query.ppgc
     var member = req.query.member
      var bg = req.query.bg
       var pp = req.query.pp

	if (!name) return res.json({ message: 'Masukan parameter name?='})
  if (!gcname) return res.json({ message: 'Masukan parameter &gcname?='})
if (!ppgc) return res.json({ message: 'Masukan parameter &ppgc?='})
if (!bg) return res.json({ message: 'Masukan parameter &bg?='})
if (!pp) return res.json({ message: 'Masukan parameter &pp?='})
  if (!member) return res.json({ message: 'Masukan parameter &member?='})
const image = await new knights.Goodbye()
    .setUsername(name)
    .setGuildName(gcname)
    .setGuildIcon(ppgc)
    .setMemberCount(member)
    .setAvatar(pp)
    .setBackground(bg)
    .toAttachment();
 data = image.toBuffer();
    res.set({'Content-Type': 'png'})
res.send(data)
  });
module.exports = router;