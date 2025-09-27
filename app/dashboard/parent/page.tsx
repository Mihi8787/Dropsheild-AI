"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Calendar,
  BookOpen,
  Award,
  Bell,
  Users,
  Phone,
  Mail,
  MapPin,
  Heart,
  Star,
  Clock,
} from "lucide-react"

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState(0)

  const children = [
    {
      name: "John Doe",
      rollNumber: "21CS001",
      semester: "6th Semester",
      branch: "Computer Science & Engineering",
      profileImage: "/diverse-student-profiles.png",
      overallAttendance: 85,
      cgpa: 8.2,
      rank: 12,
      totalStudents: 120,
    },
    {
      name: "Jane Doe",
      rollNumber: "22EC015",
      semester: "4th Semester",
      branch: "Electronics & Communication",
      profileImage: "/diverse-student-profiles.png",
      overallAttendance: 92,
      cgpa: 8.8,
      rank: 5,
      totalStudents: 80,
    },
  ]

  const currentChild = children[selectedChild]

  const alerts = [
    {
      type: "warning",
      title: "Low Attendance Alert",
      message: "Computer Networks attendance is below 75% (72%)",
      time: "2 hours ago",
      severity: "medium",
      icon: AlertTriangle,
      color: "text-orange-500",
    },
    {
      type: "success",
      title: "Excellent Performance",
      message: "Scored A+ in Database Management Assignment",
      time: "1 day ago",
      severity: "low",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      type: "info",
      title: "Upcoming Exam",
      message: "Machine Learning Mid-term exam tomorrow",
      time: "3 hours ago",
      severity: "high",
      icon: Clock,
      color: "text-blue-500",
    },
  ]

  const attendanceData = [
    { subject: "Data Structures", percentage: 92, trend: "up", change: "+3%" },
    { subject: "Database Management", percentage: 88, trend: "up", change: "+1%" },
    { subject: "Computer Networks", percentage: 72, trend: "down", change: "-5%" },
    { subject: "Software Engineering", percentage: 95, trend: "up", change: "+2%" },
    { subject: "Web Technologies", percentage: 80, trend: "neutral", change: "0%" },
    { subject: "Machine Learning", percentage: 68, trend: "down", change: "-8%" },
  ]

  const recentMarks = [
    { subject: "Data Structures", test: "Mid-term", marks: "45/50", grade: "A", percentage: 90 },
    { subject: "Database Management", test: "Assignment 3", marks: "38/40", grade: "A+", percentage: 95 },
    { subject: "Computer Networks", test: "Quiz 2", marks: "18/20", grade: "A", percentage: 90 },
    { subject: "Software Engineering", test: "Project", marks: "47/50", grade: "A", percentage: 94 },
  ]

  const behaviorNotes = [
    {
      date: "2024-01-15",
      teacher: "Dr. Smith",
      subject: "Data Structures",
      note: "Excellent participation in class discussions. Shows strong problem-solving skills.",
      type: "positive",
    },
    {
      date: "2024-01-12",
      teacher: "Prof. Johnson",
      subject: "Computer Networks",
      note: "Needs to improve attendance. Missing important lab sessions.",
      type: "concern",
    },
    {
      date: "2024-01-10",
      teacher: "Dr. Williams",
      subject: "Database Management",
      note: "Outstanding project presentation. Demonstrates deep understanding of concepts.",
      type: "positive",
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm shadow-xl border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Parent Dashboard</h1>
                <p className="text-sm text-gray-300">Monitor Your Child's Progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative text-white hover:bg-gray-800">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">Parent Portal</p>
                  <p className="text-xs text-gray-300">Family Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Child Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Select Child</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {children.map((child, index) => (
              <Card
                key={index}
                className={`bg-gray-900 border-gray-800 shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedChild === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedChild(index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={child.profileImage || "/placeholder.svg"}
                      alt={child.name}
                      className="w-16 h-16 rounded-full border-2 border-primary/20"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{child.name}</h3>
                      <p className="text-sm text-gray-400">{child.rollNumber}</p>
                      <p className="text-sm text-gray-400">{child.branch}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {child.semester}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Overall Attendance</p>
                  <p className="text-2xl font-bold text-white">{currentChild.overallAttendance}%</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Current CGPA</p>
                  <p className="text-2xl font-bold text-white">{currentChild.cgpa}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Class Rank</p>
                  <p className="text-2xl font-bold text-white">#{currentChild.rank}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Total Students</p>
                  <p className="text-2xl font-bold text-white">{currentChild.totalStudents}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts Section */}
        <Card className="bg-gray-900 border-gray-800 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-primary" />
              <span className="text-white">Recent Alerts & Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => {
                const IconComponent = alert.icon
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800 border border-gray-700"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center ${alert.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">{alert.title}</h4>
                        <Badge
                          variant={
                            alert.severity === "high"
                              ? "destructive"
                              : alert.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 mb-1">{alert.message}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tabs */}
        <Tabs defaultValue="attendance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-900 border-gray-800">
            <TabsTrigger
              value="attendance"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Attendance
            </TabsTrigger>
            <TabsTrigger
              value="marks"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Marks & Grades
            </TabsTrigger>
            <TabsTrigger
              value="behavior"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Behavior Notes
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Contact Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attendance">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Subject-wise Attendance</CardTitle>
                <CardDescription className="text-gray-400">
                  Detailed attendance tracking for each subject
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {attendanceData.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-800 border border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <span className="font-medium text-white">{subject.subject}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32">
                          <Progress value={subject.percentage} className="h-2" />
                        </div>
                        <span className="text-sm font-semibold text-white w-12">{subject.percentage}%</span>
                        <div className="flex items-center space-x-1">
                          {subject.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                          {subject.trend === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                          <span
                            className={`text-xs ${subject.trend === "up" ? "text-green-500" : subject.trend === "down" ? "text-red-500" : "text-gray-400"}`}
                          >
                            {subject.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marks">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Recent Marks & Performance</CardTitle>
                <CardDescription className="text-gray-400">Latest test scores and academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentMarks.map((mark, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-800 border border-gray-700"
                    >
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-white">{mark.subject}</p>
                          <p className="text-sm text-gray-400">{mark.test}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32">
                          <Progress value={mark.percentage} className="h-2" />
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {mark.grade}
                        </Badge>
                        <span className="font-semibold text-white">{mark.marks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Teacher Remarks & Behavior Notes</CardTitle>
                <CardDescription className="text-gray-400">
                  Feedback from teachers about classroom behavior and participation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {behaviorNotes.map((note, index) => (
                    <div key={index} className="p-4 rounded-xl bg-gray-800 border border-gray-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Badge variant={note.type === "positive" ? "default" : "destructive"}>
                            {note.type === "positive" ? "Positive" : "Concern"}
                          </Badge>
                          <span className="text-sm font-medium text-white">{note.subject}</span>
                        </div>
                        <span className="text-xs text-gray-500">{note.date}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{note.note}</p>
                      <p className="text-xs text-gray-500">- {note.teacher}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Student Contact Information</CardTitle>
                <CardDescription className="text-gray-400">Personal and emergency contact details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-400">Phone Number</p>
                        <p className="font-medium text-white">+91 9876543210</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-400">Email Address</p>
                        <p className="font-medium text-white">john.doe@student.vjit.ac.in</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-400">Home Address</p>
                        <p className="font-medium text-white">123 Main Street, Hyderabad, Telangana</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 rounded-xl bg-gray-800 border border-gray-700">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-400">Emergency Contact</p>
                        <p className="font-medium text-white">Parent: +91 9876543211</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
