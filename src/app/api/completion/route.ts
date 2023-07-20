// app/api/completion/route.ts

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const apiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(apiConfig);

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt } = await req.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    // a precise prompt is important for the AI to reply with the correct tokens
    messages: [
      {
        role: "user",
        content: `Crea un plan de negocios en 4 pasos, de manera didactica y sencilla , empieza la respuesta saludando por el nombre, luego de mostrar los 4 pasos,termina con un pequeño parrafo, no des un saludo final ni una despedida. ${prompt}`,
      },
    ],
    max_tokens: 700,
    temperature: 0, // you want absolute certainty for spell check
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}