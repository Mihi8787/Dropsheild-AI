"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Users,
  Calendar,
  BarChart3,
  Plus,
  Edit,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
  Award,
  FileText,
  GraduationCap,
  TrendingDown,
  Shield,
  AlertCircle,
} from "lucide-react"

export default function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState("6th-cse")
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isUpdatingAttendance, setIsUpdatingAttendance] = useState(false)
  const [isAddingMarks, setIsAddingMarks] = useState(false)
  const [isMarkingAttendance, setIsMarkingAttendance] = useState(false)
  const [isAddingBehaviorNote, setIsAddingBehaviorNote] = useState(false)
  const [isGeneratingReport, setIsGeneratingReport] = useState(false)
  const [behaviorNote, setBehaviorNote] = useState("")
  const [selectedStudentForNote, setSelectedStudentForNote] = useState("")

  const classes = [
    {
      id: "6th-cse",
      name: "6th Semester CSE",
      students: 45,
      subjects: ["Data Structures", "Database Management", "Computer Networks"],
    },
    {
      id: "4th-ece",
      name: "4th Semester ECE",
      students: 38,
      subjects: ["Digital Electronics", "Signals & Systems", "Microprocessors"],
    },
    {
      id: "2nd-mech",
      name: "2nd Semester MECH",
      students: 52,
      subjects: ["Engineering Mechanics", "Thermodynamics", "Materials Science"],
    },
  ]

  const currentClass = classes.find((c) => c.id === selectedClass)

  const students = [
    {
      id: 1,
      name: "John Doe",
      rollNumber: "21CS001",
      attendance: 85,
      cgpa: 8.2,
      lastAttended: "2024-01-15",
      status: "present",
      profileImage: "/diverse-student-profiles.png",
      dropoutRisk: "low",
      riskFactors: {
        attendance: 85,
        academicPerformance: 82,
        engagement: 90,
        financialStress: 20,
        personalIssues: 15,
      },
      riskScore: 25,
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNumber: "21CS002",
      attendance: 92,
      cgpa: 8.8,
      lastAttended: "2024-01-15",
      status: "present",
      profileImage: "/diverse-student-profiles.png",
      dropoutRisk: "low",
      riskFactors: {
        attendance: 92,
        academicPerformance: 88,
        engagement: 95,
        financialStress: 10,
        personalIssues: 5,
      },
      riskScore: 15,
    },
    {
      id: 3,
      name: "Mike Johnson",
      rollNumber: "21CS003",
      attendance: 68,
      cgpa: 7.1,
      lastAttended: "2024-01-12",
      status: "absent",
      profileImage: "/diverse-student-profiles.png",
      dropoutRisk: "high",
      riskFactors: {
        attendance: 68,
        academicPerformance: 71,
        engagement: 45,
        financialStress: 80,
        personalIssues: 70,
      },
      riskScore: 75,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      rollNumber: "21CS004",
      attendance: 95,
      cgpa: 9.1,
      lastAttended: "2024-01-15",
      status: "present",
      profileImage: "/diverse-student-profiles.png",
      dropoutRisk: "low",
      riskFactors: {
        attendance: 95,
        academicPerformance: 91,
        engagement: 88,
        financialStress: 25,
        personalIssues: 10,
      },
      riskScore: 20,
    },
  ]

  const classStats = {
    totalStudents: currentClass?.students || 0,
    presentToday: 38,
    averageAttendance: 84,
    averageCGPA: 8.1,
    lowAttendanceCount: 8,
    highRiskStudents: students.filter((s) => s.dropoutRisk === "high").length,
    mediumRiskStudents: students.filter((s) => s.dropoutRisk === "medium").length,
  }

  const recentActivities = [
    { action: "Updated attendance", student: "John Doe", subject: "Data Structures", time: "10 minutes ago" },
    { action: "Added marks", student: "Jane Smith", subject: "Database Management", time: "1 hour ago" },
    { action: "Added behavior note", student: "Mike Johnson", subject: "Computer Networks", time: "2 hours ago" },
    { action: "Updated attendance", student: "Sarah Wilson", subject: "Data Structures", time: "3 hours ago" },
  ]

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "default"
      default:
        return "outline"
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  const handleAttendanceUpdate = (studentId: number, status: string) => {
    console.log(`[v0] Updating attendance for student ${studentId} to ${status}`)
    // Simulate API call
    setIsUpdatingAttendance(true)
    setTimeout(() => {
      setIsUpdatingAttendance(false)
    }, 1000)
  }

  const handleMarksSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitting marks")
    setIsAddingMarks(true)
    setTimeout(() => {
      setIsAddingMarks(false)
    }, 1000)
  }

  const handleQuickAttendance = () => {
    console.log("[v0] Quick marking attendance for all students")
    setIsMarkingAttendance(true)
    // Simulate bulk attendance marking
    setTimeout(() => {
      setIsMarkingAttendance(false)
      alert("Attendance marked for all present students!")
    }, 2000)
  }

  const handleQuickAddMarks = () => {
    console.log("[v0] Opening quick add marks dialog")
    // This will switch to the marks tab
    const marksTab = document.querySelector('[data-value="marks"]') as HTMLElement
    if (marksTab) {
      marksTab.click()
    }
  }

  const handleBehaviorNoteSubmit = () => {
    if (!selectedStudentForNote || !behaviorNote.trim()) {
      alert("Please select a student and enter a behavior note")
      return
    }

    console.log(`[v0] Adding behavior note for student ${selectedStudentForNote}: ${behaviorNote}`)
    setIsAddingBehaviorNote(true)

    setTimeout(() => {
      setIsAddingBehaviorNote(false)
      setBehaviorNote("")
      setSelectedStudentForNote("")
      alert("Behavior note added successfully!")
    }, 1500)
  }

  const handleGenerateReport = (reportType: string) => {
    console.log(`[v0] Generating ${reportType} report`)
    setIsGeneratingReport(true)

    setTimeout(() => {
      setIsGeneratingReport(false)
      // Simulate file download
      const link = document.createElement("a")
      link.href = "#"
      link.download = `${reportType}-report-${new Date().toISOString().split("T")[0]}.pdf`
      alert(`${reportType} report generated and downloaded!`)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm shadow-xl border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Teacher Dashboard</h1>
                <p className="text-sm text-gray-300">Manage Student Records & Performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-48 bg-gray-900 border-gray-700 text-white">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="text-right">
                <p className="text-sm font-medium text-white">Prof. Anderson</p>
                <p className="text-xs text-gray-300">Computer Science Dept.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Class Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 mb-8">
          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Total Students</p>
                  <p className="text-2xl font-bold text-white">{classStats.totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Present Today</p>
                  <p className="text-2xl font-bold text-white">{classStats.presentToday}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Avg Attendance</p>
                  <p className="text-2xl font-bold text-white">{classStats.averageAttendance}%</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Avg CGPA</p>
                  <p className="text-2xl font-bold text-white">{classStats.averageCGPA}</p>
                </div>
                <Award className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Low Attendance</p>
                  <p className="text-2xl font-bold text-white">{classStats.lowAttendanceCount}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">High Risk</p>
                  <p className="text-2xl font-bold text-white">{classStats.highRiskStudents}</p>
                </div>
                <TrendingDown className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400 mb-1">Medium Risk</p>
                  <p className="text-2xl font-bold text-white">{classStats.mediumRiskStudents}</p>
                </div>
                <AlertCircle className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gray-900 border-gray-800">
            <TabsTrigger
              value="students"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Student Management
            </TabsTrigger>
            <TabsTrigger
              value="risk-assessment"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Risk Assessment
            </TabsTrigger>
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
              value="reports"
              className="text-gray-300 data-[state=active]:text-white data-[state=active]:bg-gray-800"
            >
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="students">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Student List */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-900 border-gray-800 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Student List - {currentClass?.name}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input
                            placeholder="Search students..."
                            className="pl-10 w-64 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        >
                          <Filter className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {students.map((student) => (
                        <div
                          key={student.id}
                          className="flex items-center justify-between p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer border border-gray-700"
                          onClick={() => setSelectedStudent(student)}
                        >
                          <div className="flex items-center space-x-4">
                            <img
                              src={student.profileImage || "/placeholder.svg"}
                              alt={student.name}
                              className="w-12 h-12 rounded-full border-2 border-primary/20"
                            />
                            <div>
                              <h4 className="font-semibold text-white">{student.name}</h4>
                              <p className="text-sm text-gray-400">{student.rollNumber}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className="text-sm font-medium text-white">{student.attendance}%</p>
                              <p className="text-xs text-gray-400">Attendance</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-white">{student.cgpa}</p>
                              <p className="text-xs text-gray-400">CGPA</p>
                            </div>
                            <div className="text-right">
                              <Badge variant={getRiskBadgeVariant(student.dropoutRisk)} className="mb-1">
                                {student.dropoutRisk} risk
                              </Badge>
                              <p className="text-xs text-gray-400">Dropout Risk</p>
                            </div>
                            <Badge variant={student.status === "present" ? "default" : "destructive"}>
                              {student.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card className="bg-gray-900 border-gray-800 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-white">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button
                        className="w-full justify-start bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90"
                        onClick={handleQuickAttendance}
                        disabled={isMarkingAttendance}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        {isMarkingAttendance ? "Marking..." : "Mark Attendance"}
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                        onClick={handleQuickAddMarks}
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Add Marks
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Add Behavior Note
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 border-gray-800 text-white">
                          <DialogHeader>
                            <DialogTitle>Add Behavior Note</DialogTitle>
                            <DialogDescription>Add a behavioral observation or note for a student</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="student-select">Select Student</Label>
                              <Select value={selectedStudentForNote} onValueChange={setSelectedStudentForNote}>
                                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                  <SelectValue placeholder="Choose a student" />
                                </SelectTrigger>
                                <SelectContent>
                                  {students.map((student) => (
                                    <SelectItem key={student.id} value={student.id.toString()}>
                                      {student.name} ({student.rollNumber})
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="behavior-note">Behavior Note</Label>
                              <Textarea
                                id="behavior-note"
                                placeholder="Enter behavioral observation, participation notes, or concerns..."
                                value={behaviorNote}
                                onChange={(e) => setBehaviorNote(e.target.value)}
                                className="bg-gray-800 border-gray-700 min-h-[100px]"
                              />
                            </div>
                            <Button
                              onClick={handleBehaviorNoteSubmit}
                              disabled={isAddingBehaviorNote}
                              className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90"
                            >
                              {isAddingBehaviorNote ? "Adding Note..." : "Add Behavior Note"}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                          >
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Generate Report
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 border-gray-800 text-white">
                          <DialogHeader>
                            <DialogTitle>Generate Report</DialogTitle>
                            <DialogDescription>Choose the type of report you want to generate</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <Button
                              variant="outline"
                              className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              onClick={() => handleGenerateReport("Attendance")}
                              disabled={isGeneratingReport}
                            >
                              <Calendar className="w-4 h-4 mr-2" />
                              Attendance Report
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              onClick={() => handleGenerateReport("Performance")}
                              disabled={isGeneratingReport}
                            >
                              <BarChart3 className="w-4 h-4 mr-2" />
                              Performance Report
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              onClick={() => handleGenerateReport("Grade Summary")}
                              disabled={isGeneratingReport}
                            >
                              <Award className="w-4 h-4 mr-2" />
                              Grade Summary
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              onClick={() => handleGenerateReport("Dropout Risk")}
                              disabled={isGeneratingReport}
                            >
                              <TrendingDown className="w-4 h-4 mr-2" />
                              Dropout Risk Report
                            </Button>
                            {isGeneratingReport && (
                              <div className="flex items-center justify-center p-4">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                                <span className="ml-2 text-sm text-gray-400">Generating report...</span>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="bg-gray-900 border-gray-800 shadow-xl mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-white">Recent Activities</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-white">{activity.action}</p>
                            <p className="text-xs text-gray-400">
                              {activity.student} - {activity.subject}
                            </p>
                            <p className="text-xs text-gray-400">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="risk-assessment">
            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="text-white">Student Dropout Risk Assessment</span>
                  </CardTitle>
                  <CardDescription>
                    Monitor and identify students at risk of dropping out based on multiple factors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Risk Overview */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white">Risk Distribution</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/20">
                          <div className="flex items-center space-x-3">
                            <TrendingDown className="w-6 h-6 text-red-500" />
                            <div>
                              <p className="font-medium text-red-700 dark:text-red-300">High Risk Students</p>
                              <p className="text-sm text-red-600 dark:text-red-400">Immediate intervention needed</p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                            {classStats.highRiskStudents}
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-yellow-50 dark:bg-yellow-900/20">
                          <div className="flex items-center space-x-3">
                            <AlertCircle className="w-6 h-6 text-yellow-500" />
                            <div>
                              <p className="font-medium text-yellow-700 dark:text-yellow-300">Medium Risk Students</p>
                              <p className="text-sm text-yellow-600 dark:text-yellow-400">Monitor closely</p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                            {classStats.mediumRiskStudents}
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 dark:bg-green-900/20">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-6 h-6 text-green-500" />
                            <div>
                              <p className="font-medium text-green-700 dark:text-green-300">Low Risk Students</p>
                              <p className="text-sm text-green-600 dark:text-green-400">Performing well</p>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {students.filter((s) => s.dropoutRisk === "low").length}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Factors Legend */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white">Risk Factors</h3>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <p className="font-medium text-white mb-1">Attendance Rate</p>
                          <p className="text-sm text-gray-400">Below 75% indicates high risk</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <p className="font-medium text-white mb-1">Academic Performance</p>
                          <p className="text-sm text-gray-400">CGPA below 7.0 indicates concern</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <p className="font-medium text-white mb-1">Class Engagement</p>
                          <p className="text-sm text-gray-400">Participation and interaction levels</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <p className="font-medium text-white mb-1">Financial Stress</p>
                          <p className="text-sm text-gray-400">Economic challenges affecting studies</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-800 border border-gray-700">
                          <p className="font-medium text-white mb-1">Personal Issues</p>
                          <p className="text-sm text-gray-400">Family or health-related concerns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Student Risk Analysis */}
              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Detailed Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {students.map((student) => (
                      <div key={student.id} className="p-6 rounded-xl bg-gray-800 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <img
                              src={student.profileImage || "/placeholder.svg"}
                              alt={student.name}
                              className="w-12 h-12 rounded-full border-2 border-primary/20"
                            />
                            <div>
                              <h4 className="font-semibold text-white">{student.name}</h4>
                              <p className="text-sm text-gray-400">{student.rollNumber}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <p className={`text-2xl font-bold ${getRiskColor(student.dropoutRisk)}`}>
                                {student.riskScore}%
                              </p>
                              <p className="text-xs text-gray-400">Risk Score</p>
                            </div>
                            <Badge variant={getRiskBadgeVariant(student.dropoutRisk)}>{student.dropoutRisk} risk</Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">Attendance</span>
                              <span className="text-sm text-gray-400">{student.riskFactors.attendance}%</span>
                            </div>
                            <Progress value={student.riskFactors.attendance} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">Academic</span>
                              <span className="text-sm text-gray-400">{student.riskFactors.academicPerformance}%</span>
                            </div>
                            <Progress value={student.riskFactors.academicPerformance} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">Engagement</span>
                              <span className="text-sm text-gray-400">{student.riskFactors.engagement}%</span>
                            </div>
                            <Progress value={student.riskFactors.engagement} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">Financial Stress</span>
                              <span className="text-sm text-gray-400">{student.riskFactors.financialStress}%</span>
                            </div>
                            <Progress value={student.riskFactors.financialStress} className="h-2 [&>div]:bg-red-500" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-white">Personal Issues</span>
                              <span className="text-sm text-gray-400">{student.riskFactors.personalIssues}%</span>
                            </div>
                            <Progress value={student.riskFactors.personalIssues} className="h-2 [&>div]:bg-red-500" />
                          </div>
                        </div>

                        {student.dropoutRisk === "high" && (
                          <div className="mt-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                            <div className="flex items-center space-x-2 mb-2">
                              <AlertTriangle className="w-4 h-4 text-red-500" />
                              <p className="font-medium text-red-700 dark:text-red-300">Intervention Recommended</p>
                            </div>
                            <p className="text-sm text-red-600 dark:text-red-400">
                              This student requires immediate attention. Consider scheduling a counseling session or
                              parent meeting.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Attendance Management</CardTitle>
                <CardDescription>Mark and update student attendance for today's classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Today's Attendance</h3>
                      <p className="text-sm text-gray-400">January 15, 2024 - Data Structures Class</p>
                    </div>
                    <Button
                      onClick={() => handleAttendanceUpdate(0, "bulk")}
                      disabled={isUpdatingAttendance}
                      className="bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90"
                    >
                      {isUpdatingAttendance ? "Updating..." : "Save All"}
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {students.map((student) => (
                      <div key={student.id} className="p-4 rounded-xl bg-gray-800 border border-gray-700">
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={student.profileImage || "/placeholder.svg"}
                            alt={student.name}
                            className="w-10 h-10 rounded-full border-2 border-primary/20"
                          />
                          <div>
                            <h4 className="font-medium text-white">{student.name}</h4>
                            <p className="text-xs text-gray-400">{student.rollNumber}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant={student.status === "present" ? "default" : "outline"}
                            onClick={() => handleAttendanceUpdate(student.id, "present")}
                            className="flex-1"
                          >
                            Present
                          </Button>
                          <Button
                            size="sm"
                            variant={student.status === "absent" ? "destructive" : "outline"}
                            onClick={() => handleAttendanceUpdate(student.id, "absent")}
                            className="flex-1"
                          >
                            Absent
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marks">
            <Card className="bg-gray-900 border-gray-800 shadow-xl">
              <CardHeader>
                <CardTitle className="text-white">Marks & Grades Management</CardTitle>
                <CardDescription>Add and update student marks for assignments, tests, and exams</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMarksSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {currentClass?.subjects.map((subject) => (
                            <SelectItem key={subject} value={subject.toLowerCase().replace(/\s+/g, "-")}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="test-type">Test Type</Label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select Test Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assignment">Assignment</SelectItem>
                          <SelectItem value="quiz">Quiz</SelectItem>
                          <SelectItem value="midterm">Mid-term</SelectItem>
                          <SelectItem value="final">Final Exam</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="max-marks">Maximum Marks</Label>
                      <Input
                        id="max-marks"
                        type="number"
                        placeholder="100"
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Student Marks</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {students.map((student) => (
                        <div
                          key={student.id}
                          className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800 border border-gray-700"
                        >
                          <img
                            src={student.profileImage || "/placeholder.svg"}
                            alt={student.name}
                            className="w-10 h-10 rounded-full border-2 border-primary/20"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-white">{student.name}</p>
                            <p className="text-xs text-gray-400">{student.rollNumber}</p>
                          </div>
                          <div className="w-24">
                            <Input
                              type="number"
                              placeholder="0"
                              className="bg-gray-700 border-gray-600 text-white text-center"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isAddingMarks}
                    className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90"
                  >
                    {isAddingMarks ? "Saving Marks..." : "Save All Marks"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Class Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">Average Attendance</span>
                        <span className="text-sm text-gray-400">84%</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">Average CGPA</span>
                        <span className="text-sm text-gray-400">8.1/10</span>
                      </div>
                      <Progress value={81} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-white">Assignment Completion</span>
                        <span className="text-sm text-gray-400">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-white">Generate Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Attendance Report
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Performance Report
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <Award className="w-4 h-4 mr-2" />
                      Grade Summary
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Class Analytics
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <TrendingDown className="w-4 h-4 mr-2" />
                      Dropout Risk Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
