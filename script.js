import {config} from "dotenv"
config() 

import OpenAI from "openai"

const openAi = new OpenAI({   
    apiKey: process.env.API_KEY,
})
const prompt = "You are an experienced LinkedIn Content creator.You are also an AI Automation Agency Owner, i.e. you create custom AI Automation Software to boost revenue, increase conversion rates etc. for businesses.You are writing a post about how AI can help smarter and faster dynamic pricing.You are using this text as reference.Stick to this text for structure, tone and the message.{What if the prices you set were always the best prices possible?Weighing micro and macro factors, in real time, so your prices always point towardsgrowth?AI can make that happen.Pricing is a high-stakes game.How do you hit the sweet spot between ever-changing market realities, customers’ willingnessto pay, and your bottom line?In a dynamic world, you need dynamic pricing models to keep the competition on its toes—andkeep customers satisfied.Say you’re a beauty brand with a hit skincare line.You want to drive strong traffic through competitive pricing and timely promotions—without leavingmoney on the table.But with ever-shifting customer preferences and new players constantly entering the market,it’s hard to figure out the best strategies to maximize profit.Now, imagine using AI to create pricing scenarios powered by the most relevant, up-to-date information—allwhile growing your brand and keeping your most loyal customers happy.AI analyzes a vast amount of data to develop the right pricing models, using competitor,location, and promotion data—even weather metrics.By testing thousands of scenarios, AI can recommend tactics like direct discounts, changesto assortment or in-store placement – or whether a monthly foundation subscriptioncan be the foundation for new growth.And since AI is always learning, your pricing models are always improving—so your customerscan check out at the right price for them.This can be applied in nearly all industries.}The structure of the post should be as follows:{1. Good Hook for Business owners in one line2. ⁠The message of the text above3. ⁠Closer}The length should be at max 2/3 of the provided text"
const chatCompletion = await openAi.chat.completions.create({
  model: "gpt-4",
  messages: [{"role": "user", "content": prompt}],
  temperature: 0.25
});

const contract = chatCompletion.choices[0].message.content;
console.log(contract);