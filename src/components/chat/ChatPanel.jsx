import { useState, useRef, useEffect } from 'react'
import { buildSystemPrompt } from '../../data/resume'
import './Chat.css'

const SUGGESTED_PROMPTS = [
  "What are Monika's strongest skills?",
  "Tell me about her work experience",
  "Has she worked on accessibility?",
  "What is her educational background?",
  "What technologies does she specialize in?",
]

export default function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  async function sendMessage(text) {
    if (!text.trim() || isLoading) return

    const userMsg = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    const history = messages.map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content,
    }))

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: buildSystemPrompt(),
          messages: [...history, { role: 'user', content: text }],
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      setMessages(prev => [...prev, { role: 'assistant', content: data.content }])
    } catch (err) {
      console.error('Claude error:', err)
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          className="chat-fab"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Career Coach"
        >
          {/* Bot icon */}
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zM7 14v2a5 5 0 0 0 10 0v-2H7zm-2 6h2v1a1 1 0 0 1-2 0v-1zm12 0h2v1a1 1 0 0 1-2 0v-1zM9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="chat-panel" role="dialog" aria-label="AI Career Coach">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zM7 14v2a5 5 0 0 0 10 0v-2H7zm-2 6h2v1a1 1 0 0 1-2 0v-1zm12 0h2v1a1 1 0 0 1-2 0v-1zM9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
              </div>
              <div>
                <p className="chat-header-title">AI Career Coach</p>
                <p className="chat-header-sub">Ask about Monika&apos;s profile</p>
              </div>
            </div>
            <button
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          {/* Messages */}
          {messages.length === 0 ? (
            <div className="chat-empty">
              <div className="chat-empty-icon">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zM7 14v2a5 5 0 0 0 10 0v-2H7zm-2 6h2v1a1 1 0 0 1-2 0v-1zm12 0h2v1a1 1 0 0 1-2 0v-1zM9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
              </div>
              <h3>Ask me anything!</h3>
              <p>I can tell you about Monika&apos;s skills, experience, and background.</p>
            </div>
          ) : (
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-msg ${msg.role}`}>
                  <div className="chat-msg-avatar">
                    {msg.role === 'user' ? (
                      <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" style={{fill:'var(--accent-light)', stroke:'none'}}>
                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zM7 14v2a5 5 0 0 0 10 0v-2H7zm-2 6h2v1a1 1 0 0 1-2 0v-1zm12 0h2v1a1 1 0 0 1-2 0v-1zM9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>
                    )}
                  </div>
                  <div className="chat-bubble">
                    {msg.content || (isLoading && i === messages.length - 1 && (
                      <div className="typing-dots"><span/><span/><span/></div>
                    ))}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                <div className="chat-msg assistant">
                  <div className="chat-msg-avatar">
                    <svg viewBox="0 0 24 24" style={{fill:'var(--accent-light)', stroke:'none'}}>
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7H4a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2zM7 14v2a5 5 0 0 0 10 0v-2H7zm-2 6h2v1a1 1 0 0 1-2 0v-1zm12 0h2v1a1 1 0 0 1-2 0v-1zM9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                  </div>
                  <div className="chat-bubble">
                    <div className="typing-dots"><span/><span/><span/></div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          )}

          {/* Suggested prompts — only when no messages */}
          {messages.length === 0 && (
            <div className="chat-suggestions">
              <p>Suggested questions</p>
              <div className="chat-suggestions-list">
                {SUGGESTED_PROMPTS.map(prompt => (
                  <button
                    key={prompt}
                    className="suggestion-chip"
                    onClick={() => sendMessage(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              className="chat-input"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Monika's experience..."
              disabled={isLoading}
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={isLoading || !input.trim()}
              aria-label="Send"
            >
              <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
