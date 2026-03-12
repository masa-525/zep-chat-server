import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let chats = [];

// ZEPからチャットを受け取る
app.post("/chat",(req,res)=>{

  const {name,message} = req.body;

  chats.push({
    name,
    message,
    time: Date.now()
  });

  res.sendStatus(200);

});

// 監視サイトがチャット取得
app.get("/chats",(req,res)=>{

  res.json(chats);

});

app.listen(3000,()=>{
  console.log("server running");
});
