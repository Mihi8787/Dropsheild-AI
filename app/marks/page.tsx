"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Award, ArrowLeft, Target, BookOpen, Calculator } from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export default function MarksPage() {
  const [selectedSemester, setSelectedSemester] = useState("current")

  // Mock data for marks and CGPA
  const currentSemester = {
    semester: 6,
    subjects: [
      {
        id: "ds",
        name: "Data Structures",
        code: "CS301",
        credits: 4,
        marks: {
          internal1: 18,
          internal2: 22,
          internal3: 20,
          assignment: 8,
          external: 85,
          total: 153,
          maxMarks: 175,
        },
        grade: "A",
        gradePoints: 9,
        percentage: 87.4,
      },
      {
        id: "dbms",
        name: "Database Management",
        code: "CS302",
        credits: 4,
        marks: {
          internal1: 16,
          internal2: 19,
          internal3: 18,
          assignment: 7,
          external: 78,
          total: 138,
          maxMarks: 175,
        },
        grade: "B+",
        gradePoints: 8,
        percentage: 78.9,
      },
      {
        id: "cn",
        name: "Computer Networks",
        code: "CS303",
        credits: 3,
        marks: {
          internal1: 20,
          internal2: 18,
          internal3: 22,
          assignment: 9,
          external: 82,
          total: 151,
          maxMarks: 175,
        },
        grade: "A",
        gradePoints: 9,
        percentage: 86.3,
      },
      {
        id: "os",
        name: "Operating Systems",
        code: "CS304",
        credits: 4,
        marks: {
          internal1: 22,
          internal2: 20,
          internal3: 24,
          assignment: 10,
          external: 88,
          total: 164,
          maxMarks: 175,
        },
        grade: "A+",
        gradePoints: 10,
        percentage: 93.7,
      },
      {
        id: "se",
        name: "Software Engineering",
        code: "CS305",
        credits: 3,
        marks: {
          internal1: 17,
          internal2: 21,
          internal3: 19,
          assignment: 8,
          external: 80,
          total: 145,
          maxMarks: 175,
        },
        grade: "A",
        gradePoints: 9,
        percentage: 82.9,
      },
      {
        id: "ai",
        name: "Artificial Intelligence",
        code: "CS306",
        credits: 4,
        marks: {
          internal1: 19,
          internal2: 23,
          internal3: 21,
          assignment: 9,
          external: 90,
          total: 162,
          maxMarks: 175,
        },
        grade: "A+",
        gradePoints: 10,
        percentage: 92.6,
      },
    ],
  }

  const semesterHistory = [
    { semester: 1, sgpa: 8.5, cgpa: 8.5 },
    { semester: 2, sgpa: 8.2, cgpa: 8.35 },
    { semester: 3, sgpa: 8.8, cgpa: 8.5 },
    { semester: 4, sgpa: 8.6, cgpa: 8.53 },
    { semester: 5, sgpa: 8.9, cgpa: 8.62 },
    { semester: 6, sgpa: 9.1, cgpa: 8.7 },
  ]

  const subjectComparison = currentSemester.subjects.map((subject) => ({
    name: subject.code,
    current: subject.percentage,
    average: 82.5,
  }))

  const performanceRadar = [
    { subject: "DS", score: 87.4, fullMark: 100 },
    { subject: "DBMS", score: 78.9, fullMark: 100 },
    { subject: "CN", score: 86.3, fullMark: 100 },
    { subject: "OS", score: 93.7, fullMark: 100 },
    { subject: "SE", score: 82.9, fullMark: 100 },
    { subject: "AI", score: 92.6, fullMark: 100 },
  ]

  // Calculate SGPA and CGPA
  const calculateSGPA = () => {
    const totalCredits = currentSemester.subjects.reduce((sum, subject) => sum + subject.credits, 0)
    const totalGradePoints = currentSemester.subjects.reduce(
      (sum, subject) => sum + subject.gradePoints * subject.credits,
      0,
    )
    return (totalGradePoints / totalCredits).toFixed(2)
  }

  const currentSGPA = calculateSGPA()
  const currentCGPA = "8.70"

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-100 text-green-800 border-green-200"
      case "A":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "B+":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "B":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

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
                <BarChart3 className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Marks & CGPA</h1>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600">Current SGPA</p>
                <p className="text-lg font-bold text-blue-600">{currentSGPA}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600">Overall CGPA</p>
                <p className="text-lg font-bold text-green-600">{currentCGPA}</p>
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
                  <p className="text-2xl font-bold text-gray-900">{currentSemester.subjects.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Average Percentage</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(
                      currentSemester.subjects.reduce((sum, s) => sum + s.percentage, 0) /
                      currentSemester.subjects.length
                    ).toFixed(1)}
                    %
                  </p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">A+ Grades</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {currentSemester.subjects.filter((s) => s.grade === "A+").length}
                  </p>
                </div>
                <Award className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Credits</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {currentSemester.subjects.reduce((sum, s) => sum + s.credits, 0)}
                  </p>
                </div>
                <Calculator className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="current">Current Semester</TabsTrigger>
            <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
            <TabsTrigger value="history">CGPA History</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            {/* Subject Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentSemester.subjects.map((subject) => (
                <Card key={subject.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <CardDescription>
                          {subject.code} • {subject.credits} Credits
                        </CardDescription>
                      </div>
                      <Badge className={getGradeColor(subject.grade)}>{subject.grade}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Overall Score</span>
                          <span className="font-medium">{subject.percentage}%</span>
                        </div>
                        <Progress value={subject.percentage} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Total Marks</p>
                          <p className="font-medium">
                            {subject.marks.total}/{subject.marks.maxMarks}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Grade Points</p>
                          <p className="font-medium">{subject.gradePoints}/10</p>
                        </div>
                      </div>

                      <div className="border-t pt-3">
                        <p className="text-sm font-medium text-gray-700 mb-2">Breakdown:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Internal 1:</span>
                            <span>{subject.marks.internal1}/25</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Internal 2:</span>
                            <span>{subject.marks.internal2}/25</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Internal 3:</span>
                            <span>{subject.marks.internal3}/25</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Assignment:</span>
                            <span>{subject.marks.assignment}/10</span>
                          </div>
                          <div className="flex justify-between col-span-2">
                            <span className="text-gray-600">External:</span>
                            <span className="font-medium">{subject.marks.external}/90</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Comparison */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>Subject Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjectComparison}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="current" fill="#3b82f6" name="Your Score" />
                      <Bar dataKey="average" fill="#e5e7eb" name="Class Average" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Radar */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Performance Radar</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={performanceRadar}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Performance" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Grade Distribution */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["A+", "A", "B+", "B"].map((grade) => {
                    const count = currentSemester.subjects.filter((s) => s.grade === grade).length
                    const percentage = (count / currentSemester.subjects.length) * 100
                    return (
                      <div key={grade} className="text-center p-4 border border-gray-200 rounded-lg">
                        <div
                          className={`text-2xl font-bold mb-2 ${getGradeColor(grade).replace("bg-", "text-").replace("-100", "-600")}`}
                        >
                          {count}
                        </div>
                        <div className="text-sm text-gray-600">Grade {grade}</div>
                        <div className="text-xs text-gray-500">{percentage.toFixed(1)}%</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* CGPA Trend */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span>CGPA Progression</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={semesterHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis domain={[7, 10]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="cgpa" stroke="#10b981" strokeWidth={3} name="CGPA" />
                      <Line type="monotone" dataKey="sgpa" stroke="#3b82f6" strokeWidth={2} name="SGPA" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Semester Summary */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Semester Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {semesterHistory.map((sem) => (
                      <div
                        key={sem.semester}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">Semester {sem.semester}</p>
                          <p className="text-sm text-gray-600">SGPA: {sem.sgpa}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">{sem.cgpa}</p>
                          <p className="text-xs text-gray-500">CGPA</p>
                        </div>
                      </div>
                    ))}
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
