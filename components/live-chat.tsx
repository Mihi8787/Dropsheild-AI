"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Bot, User, Clock } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "ai" | "system"
  timestamp: Date
  type?: "info" | "success" | "warning"
}

export default function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Welcome to the Dropshield Mentoring AI Assistant! I'm powered by advanced AI and have comprehensive knowledge about your academic progress. I can help you with attendance analysis, grade insights, assignment tracking, exam preparation, and personalized study recommendations. What would you like to know?",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: "2",
      content: "System: AI-powered chat is now active. Ask me anything about your academic journey!",
      sender: "system",
      timestamp: new Date(Date.now() - 30000),
      type: "info",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const systemMessages = [
          "AI Analysis: New attendance patterns detected",
          "Smart Alert: Grade improvement opportunity identified",
          "AI Insight: Upcoming exam preparation recommendations available",
          "Intelligent Update: Your academic risk assessment has been refreshed",
        ]

        const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)]

        const systemMessage: Message = {
          id: Date.now().toString(),
          content: `System: ${randomMessage}`,
          sender: "system",
          timestamp: new Date(),
          type: "info",
        }

        setMessages((prev) => [...prev, systemMessage])
      }
    }, 45000)

    return () => clearInterval(interval)
  }, [])

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = newMessage
    setNewMessage("")
    setIsTyping(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: currentMessage }),
      })

      if (!res.ok) {
        throw new Error("Failed to get AI response")
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let fullResponse = ""

      const aiMessageId = (Date.now() + 1).toString()
      const aiMessage: Message = {
        id: aiMessageId,
        content: "",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value, { stream: true })
          fullResponse += chunk

          setMessages((prev) => prev.map((msg) => (msg.id === aiMessageId ? { ...msg, content: fullResponse } : msg)))
        }
      }
    } catch (error) {
      console.error("Error getting AI response:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I apologize, but I'm having trouble connecting to my AI systems right now. Please try again in a moment. In the meantime, I can still help you with basic information about your academic progress.",
        sender: "ai",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <Card className="glass dark:glass-dark border-0 shadow-xl h-96 flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span>AI Assistant</span>
            <Badge
              variant="outline"
              className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0"
            >
              GROK AI
            </Badge>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
            <Badge variant={isOnline ? "default" : "secondary"} className="text-xs">
              {isOnline ? "ONLINE" : "OFFLINE"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : message.sender === "system"
                      ? "bg-blue-500/20 text-blue-600 border border-blue-500/30"
                      : "bg-card/70 text-foreground"
                }`}
              >
                <div className="flex items-center space-x-2 mb-1">
                  {message.sender === "user" && <User className="w-4 h-4" />}
                  {message.sender === "ai" && <Bot className="w-4 h-4" />}
                  {message.sender === "system" && <Clock className="w-4 h-4" />}
                  <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-card/70 text-foreground p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-border/50">
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about your academic progress, study tips, or career guidance..."
              className="glass dark:glass-dark border-0"
              disabled={!isOnline}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || !isOnline}
              className="bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
