const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "how ar you?" }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

const PORT = 8000;
app.listen(PORT, () => console.log("Your server is running on PORT " + PORT));

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// async function getChatGptResponse(request) {
//   try {
//     const completion = await openai.createChatCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         { role: "user", content: "Hello world" },
//       ],
//     });
//     console.log(completion.data.choices[0].message);
//     return completion.data.choices[0].message.content;
//   } catch (err) {
//     console.log("Error: " + err);
//     return err;
//   }
// }

// getChatGptResponse();
