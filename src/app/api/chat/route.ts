// import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages } from "ai";

export const maxDuration = 30;

export async function POST(request: Request) {
  const { messages }: { messages: UIMessage[] } = await request.json();

  const results = await streamText({
    // model: openai("gpt-4o"),
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
  });

  return results.toUIMessageStreamResponse();
}
