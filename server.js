import 'dotenv/config'
import express from 'express'
import OpenAI from 'openai'
import { buildSystemPrompt } from './src/data/resume.js'

const app = express()
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: buildSystemPrompt() }, ...messages],
    })
    res.json({ content: response.choices[0].message.content })
  } catch (err) {
    console.error('OpenAI error:', err.message)
    res.status(500).json({ error: 'Failed to get response' })
  }
})

app.listen(3001, () => console.log('API server running on http://localhost:3001'))
