const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const ai = async(q)=>{
const anu = await openai.createCompletion({
       model: "text-davinci-003",
  prompt: q,
  top_p: 1,
          frequency_penalty: 0.2,
          presence_penalty: 0,
          max_tokens: 400,
  temperature: 0,});
          return anu.data.choices[0].text.trim()
          }
  router.get("/", async (req, res) => {
    const text1 = req.query.q
    const ano = await ai(text1)
    res.json({text: ano })
});
module.exports = router;