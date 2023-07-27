require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient,twitterBearer } = require("./twitterClient.js")
const CronJob = require("cron").CronJob;
const express = require('express')
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;


app.get("/", (req, res) => {
  res.json({message:"hi"})
})

app.post("/", async (req, res)=>{
  const tweetContent=req.body;
  const content=tweetContent.Tweet;
  const timer =tweetContent.Time;
  let counter=0;
  const tweet = async () => {
    try {
      counter++;
      await twitterClient.v2.tweet(`${content} ${counter}`);
    } catch (e) {
      console.log(e)
    }
  }
  const cronTweet = new CronJob(`${timer} * * * * *`, async () => {
    tweet();
  });
  
  cronTweet.start();

})





app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


// const search = async () => {
//     const whereTakenTweets = await twitterBearer.v2.search('#WhereTaken There were');

//     for await (const tweet of whereTakenTweets) {
//         console.log(tweet);
//     }

// }

// search()
// const cronTweet = new CronJob("1 * * * * *", async () => {
//     tweet();
//   });
  
//   cronTweet.start();
