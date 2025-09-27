"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, AlertTriangle, TrendingUp, BookOpen, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

export default function AttendancePage() {
  const [selectedSubject, setSelectedSubject] = useState("all")

  // Mock data for attendance
  const subjects = [
    {
      id: "ds",
      name: "Data Structures",
      code: "CS301",
      totalClasses: 45,
      attendedClasses: 38,
      percentage: 84.4,
      status: "good",
      lastAttended: "2024-01-15",
      warning: false,
    },
    {
      id: "dbms",
      name: "Database Management",
      code: "CS302",
      totalClasses: 42,
      attendedClasses: 32,
      percentage: 76.2,
      status: "warning",
      lastAttended: "2024-01-14",
      warning: true,
    },
    {
      id: "cn",
      name: "Computer Networks",
      code: "CS303",
      totalClasses: 40,
      attendedClasses: 28,
      percentage: 70.0,
      status: "critical",
      lastAttended: "2024-01-12",
      warning: true,
    },
    {
      id: "os",
      name: "Operating Systems",
      code: "CS304",
      totalClasses: 38,
      attendedClasses: 35,
      percentage: 92.1,
      status: "excellent",
      lastAttended: "2024-01-15",
      warning: false,
    },
    {
      id: "se",
      name: "Software Engineering",
      code: "CS305",
      totalClasses: 36,
      attendedClasses: 30,
      percentage: 83.3,
      status: "good",
      lastAttended: "2024-01-13",
      warning: false,
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      code: "CS306",
      totalClasses: 34,
      attendedClasses: 31,
      percentage: 91.2,
      status: "excellent",
      lastAttended: "2024-01-15",
      warning: false,
    },
  ]

  const weeklyData = [
    { week: "Week 1", attendance: 85 },
    { week: "Week 2", attendance: 90 },
    { week: "Week 3", attendance: 78 },
    { week: "Week 4", attendance: 82 },
    { week: "Week 5", attendance: 88 },
    { week: "Week 6", attendance: 75 },
    { week: "Week 7", attendance: 92 },
    { week: "Week 8", attendance: 80 },
  ]

  const recentAttendance = [
    { date: "2024-01-15", subject: "Data Structures", status: "present", time: "09:00 AM" },
    { date: "2024-01-15", subject: "Operating Systems", status: "present", time: "11:00 AM" },
    { date: "2024-01-15", subject: "Artificial Intelligence", status: "present", time: "02:00 PM" },
    { date: "2024-01-14", subject: "Database Management", status: "present", time: "10:00 AM" },
    { date: "2024-01-14", subject: "Software Engineering", status: "absent", time: "03:00 PM" },
    { date: "2024-01-13", subject: "Computer Networks", status: "absent", time: "09:00 AM" },
    { date: "2024-01-13", subject: "Data Structures", status: "present", time: "11:00 AM" },
    { date: "2024-01-12", subject: "Operating Systems", status: "present", time: "02:00 PM" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500"
      case "good":
        return "bg-blue-500"
      case "warning":
        return "bg-yellow-500"
      case "critical":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string, percentage: number) => {
    if (percentage >= 90) return <Badge className="bg-green-100 text-green-800 border-green-200">Excellent</Badge>
    if (percentage >= 80) return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Good</Badge>
    if (percentage >= 75) return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Warning</Badge>
    return <Badge className="bg-red-100 text-red-800 border-red-200">Critical</Badge>
  }

  const overallAttendance = subjects.reduce((acc, subject) => acc + subject.percentage, 0) / subjects.length

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
                <Calendar className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Attendance Tracker</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Overall Attendance</p>
                <p className="text-lg font-bold text-blue-600">{overallAttendance.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Subjects</p>
                  <p className="text-2xl font-bold text-gray-900">{subjects.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Classes This Week</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Attended</p>
                  <p className="text-2xl font-bold text-gray-900">20</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Warnings</p>
                  <p className="text-2xl font-bold text-gray-900">2</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="subjects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="subjects">Subject-wise</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="space-y-6">
            {/* Warnings Section */}
            {subjects.some((s) => s.warning) && (
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    <span>Attendance Warnings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {subjects
                      .filter((s) => s.warning)
                      .map((subject) => (
                        <div
                          key={subject.id}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{subject.name}</p>
                            <p className="text-sm text-gray-600">
                              Attendance: {subject.percentage}% (Minimum required: 75%)
                            </p>
                          </div>
                          <Badge variant="destructive">Action Required</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Subject Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects.map((subject) => (
                <Card key={subject.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <CardDescription>{subject.code}</CardDescription>
                      </div>
                      {getStatusBadge(subject.status, subject.percentage)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Attendance</span>
                          <span className="font-medium">{subject.percentage}%</span>
                        </div>
                        <Progress value={subject.percentage} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Attended</p>
                          <p className="font-medium">{subject.attendedClasses}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Total</p>
                          <p className="font-medium">{subject.totalClasses}</p>
                        </div>
                      </div>

                      <div className="text-sm">
                        <p className="text-gray-600">Last Attended</p>
                        <p className="font-medium">{new Date(subject.lastAttended).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Trend */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>Weekly Attendance Trend</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Subject Comparison */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Subject-wise Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjects}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="code" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="percentage" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Recent Attendance Records</CardTitle>
                <CardDescription>Your attendance history for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAttendance.map((record, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        {record.status === "present" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{record.subject}</p>
                          <p className="text-sm text-gray-600">{record.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={record.status === "present" ? "default" : "destructive"}>
                          {record.status === "present" ? "Present" : "Absent"}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">{new Date(record.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
