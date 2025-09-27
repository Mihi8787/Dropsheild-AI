"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, ArrowLeft, Send, Bot, User, Sparkles, BookOpen, BarChart3, Calendar } from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  type?: "text" | "suggestion"
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your VJIT Academic Assistant. I can help you with questions about your attendance, marks, CGPA calculations, academic policies, and more. How can I assist you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const quickSuggestions = [
    {
      text: "What's my current attendance?",
      icon: Calendar,
      category: "Attendance",
    },
    {
      text: "Calculate my CGPA",
      icon: BarChart3,
      category: "Academics",
    },
    {
      text: "Show my semester performance",
      icon: BookOpen,
      category: "Performance",
    },
    {
      text: "What are the attendance requirements?",
      icon: Calendar,
      category: "Policies",
    },
  ]

  // Mock AI responses based on common student queries
  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    if (message.includes("attendance")) {
      return "Based on your current records, your overall attendance is 85%. Here's a breakdown by subject:\n\n• Data Structures: 84.4%\n• Database Management: 76.2% ⚠️ (Below 75% requirement)\n• Computer Networks: 70.0% ⚠️ (Action needed)\n• Operating Systems: 92.1%\n• Software Engineering: 83.3%\n• Artificial Intelligence: 91.2%\n\nYou need to improve attendance in Database Management and Computer Networks to meet the minimum 75% requirement."
    }

    if (message.includes("cgpa") || message.includes("gpa")) {
      return "Your current academic performance:\n\n📊 **Current Semester (6th):**\n• SGPA: 9.1\n• Rank: 12/120\n\n📈 **Overall Performance:**\n• CGPA: 8.7\n• Total Credits: 118/142 completed\n\n**Grade Distribution:**\n• A+ grades: 2 subjects\n• A grades: 3 subjects  \n• B+ grades: 1 subject\n\nYou're performing excellently! Keep up the great work to maintain your high CGPA."
    }

    if (message.includes("marks") || message.includes("performance")) {
      return "Here's your current semester performance summary:\n\n**Top Performing Subjects:**\n1. Operating Systems: 93.7% (A+)\n2. Artificial Intelligence: 92.6% (A+)\n3. Data Structures: 87.4% (A)\n\n**Subjects needing attention:**\n• Database Management: 78.9% (B+)\n\n**Overall Average:** 86.8%\n\nYour performance is strong across most subjects. Consider focusing more on Database Management to bring it up to A grade level."
    }

    if (message.includes("requirement") || message.includes("policy")) {
      return "Here are the key academic requirements at VJIT:\n\n**Attendance Policy:**\n• Minimum 75% attendance required in each subject\n• Below 75%: Warning issued\n• Below 65%: May not be allowed to appear for exams\n\n**Grading System:**\n• A+: 90-100% (10 points)\n• A: 80-89% (9 points)\n• B+: 70-79% (8 points)\n• B: 60-69% (7 points)\n\n**CGPA Calculation:**\n• Minimum 5.0 CGPA required to pass\n• 8.0+ CGPA for honors\n• 9.0+ CGPA for high honors"
    }

    if (message.includes("help") || message.includes("what can you do")) {
      return "I can help you with various academic queries:\n\n🎓 **Academic Information:**\n• Check attendance and marks\n• Calculate CGPA/SGPA\n• View semester performance\n• Academic calendar and deadlines\n\n📊 **Analytics:**\n• Performance trends\n• Subject-wise analysis\n• Comparison with class average\n• Improvement suggestions\n\n📋 **Policies & Requirements:**\n• Attendance requirements\n• Grading system\n• Academic regulations\n• Exam eligibility criteria\n\n💡 **Guidance:**\n• Study tips and strategies\n• Career guidance\n• Course recommendations\n\nFeel free to ask me anything about your academics!"
    }

    // Default response for unrecognized queries
    return "I understand you're asking about your academics. While I can help with attendance, marks, CGPA calculations, and academic policies, I might need more specific information to give you the best answer. \n\nCould you please rephrase your question or try one of the suggested topics? I'm here to help with your academic journey at VJIT!"
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    // Simulate AI processing delay
    setTimeout(
      () => {
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: getAIResponse(inputMessage),
          sender: "ai",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, aiResponse])
        setIsLoading(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
    inputRef.current?.focus()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">AI Academic Assistant</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <Badge className="bg-purple-100 text-purple-800 border-purple-200">AI Powered</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Suggestions Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
                <CardDescription>Click on any suggestion to get started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickSuggestions.map((suggestion, index) => {
                  const IconComponent = suggestion.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto p-3 bg-transparent"
                      onClick={() => handleSuggestionClick(suggestion.text)}
                    >
                      <div className="flex items-start space-x-3">
                        <IconComponent className="w-4 h-4 mt-0.5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">{suggestion.text}</p>
                          <p className="text-xs text-gray-500">{suggestion.category}</p>
                        </div>
                      </div>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-sm h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">VJIT Academic Assistant</CardTitle>
                    <CardDescription>Your personal AI helper for academic queries</CardDescription>
                  </div>
                </div>
              </CardHeader>

              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`flex items-start space-x-3 max-w-[80%] ${
                          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.sender === "user" ? "bg-blue-600" : "bg-gray-100"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-gray-600" />
                          )}
                        </div>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                          >
                            {message.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3 max-w-[80%]">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-gray-600" />
                        </div>
                        <div className="bg-gray-100 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about your attendance, marks, CGPA, or any academic question..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isLoading}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send • AI responses are based on your current academic data
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
