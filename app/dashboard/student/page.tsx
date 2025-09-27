"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, TrendingUp, Award, Clock, Sparkles, GraduationCap, Star } from "lucide-react"
import RealTimeNotifications from "@/components/real-time-notifications"
import LiveAttendanceTracker from "@/components/live-attendance-tracker"
import LiveChat from "@/components/live-chat"

export default function StudentDashboard() {
  const [currentUser] = useState({
    name: "John Doe",
    rollNumber: "21CS001",
    semester: "6th Semester",
    branch: "Computer Science & Engineering",
    profileImage: "/diverse-student-profiles.png",
  })

  const quickStats = [
    {
      label: "Overall Attendance",
      value: "85%",
      change: "+2%",
      trend: "up",
      icon: Calendar,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      label: "Current CGPA",
      value: "8.2",
      change: "+0.3",
      trend: "up",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      label: "Active Subjects",
      value: "6",
      change: "0",
      trend: "neutral",
      icon: BookOpen,
      gradient: "from-purple-500 to-violet-500",
    },
    {
      label: "Class Rank",
      value: "#12",
      change: "+3",
      trend: "up",
      icon: Award,
      gradient: "from-orange-500 to-red-500",
    },
  ]

  const attendanceData = [
    { subject: "Data Structures", percentage: 92, status: "excellent", color: "bg-green-500" },
    { subject: "Database Management", percentage: 88, status: "good", color: "bg-blue-500" },
    { subject: "Computer Networks", percentage: 72, status: "warning", color: "bg-orange-500" },
    { subject: "Software Engineering", percentage: 95, status: "excellent", color: "bg-green-500" },
    { subject: "Web Technologies", percentage: 80, status: "good", color: "bg-blue-500" },
    { subject: "Machine Learning", percentage: 68, status: "critical", color: "bg-red-500" },
  ]

  const recentMarks = [
    { subject: "Data Structures", test: "Mid-term", marks: "45/50", grade: "A", date: "2 days ago" },
    { subject: "Database Management", test: "Assignment 3", marks: "38/40", grade: "A+", date: "5 days ago" },
    { subject: "Computer Networks", test: "Quiz 2", marks: "18/20", grade: "A", date: "1 week ago" },
  ]

  const upcomingEvents = [
    { title: "Machine Learning Mid-term", date: "Tomorrow", type: "exam", color: "bg-red-500" },
    { title: "Web Tech Assignment Due", date: "3 days", type: "assignment", color: "bg-orange-500" },
    { title: "Database Project Presentation", date: "1 week", type: "presentation", color: "bg-blue-500" },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm shadow-xl border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Dropshield Mentoring</h1>
                <p className="text-sm text-gray-300">Advanced Academic Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <RealTimeNotifications />
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {currentUser.semester}
              </Badge>
              <div className="flex items-center space-x-3">
                <img
                  src={currentUser.profileImage || "/placeholder.svg"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border-2 border-primary/20"
                />
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{currentUser.name}</p>
                  <p className="text-xs text-gray-300">{currentUser.rollNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-3xl font-bold text-white">Welcome back, {currentUser.name.split(" ")[0]}!</h2>
              <p className="text-gray-300 text-lg">
                {currentUser.branch} • {currentUser.semester}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card
                key={index}
                className="bg-gray-900 border border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Attendance Overview */}
          <div className="lg:col-span-2">
            <LiveAttendanceTracker />
          </div>

          {/* Upcoming Events */}
          <div>
            <Card className="bg-gray-900 border border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-white">Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50">
                      <div className={`w-2 h-8 rounded-full ${event.color}`}></div>
                      <div className="flex-1">
                        <p className="font-medium text-white">{event.title}</p>
                        <p className="text-xs text-gray-300">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Marks and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Marks */}
          <Card className="bg-gray-900 border border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-white">Recent Marks</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMarks.map((mark, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50">
                    <div>
                      <p className="font-medium text-white">{mark.subject}</p>
                      <p className="text-sm text-gray-300">{mark.test}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {mark.grade}
                        </Badge>
                        <span className="font-semibold text-white">{mark.marks}</span>
                      </div>
                      <p className="text-xs text-gray-300">{mark.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <LiveChat />
        </div>
      </main>
    </div>
  )
}
