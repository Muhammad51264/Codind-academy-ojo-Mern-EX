import { useState } from "react"
const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [time, setTime]=useState(0);
  return (
    <div className="tweet__container">
        <form className="mt-4 m-auto d-flex flex-column align-items-center gap-2" action="" onSubmit={(e)=>{
          e.preventDefault();
          console.log(tweet);
          console.log(time);

          fetch("http://localhost:8080/",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Tweet:tweet, Time:time})}
          )

        }}>
          <div className="tweet__content d-flex gap-1">
            <p>Content:</p>
            <input type="text" onChange={(e)=>{setTweet(e.target.value)}}/>
          </div>
          <div className="tweet__timer d-flex gap-1">
            <p>time:</p>
            <input type="number" onChange={(e)=>{setTime(e.target.value)}}/>
          </div>
          <button type="submit">Tweet</button>
        </form>
    </div>
  )
}

export default Tweet
