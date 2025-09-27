"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Target,
  Calendar,
  Award,
  AlertTriangle,
  Users,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  Area,
} from "recharts"

export default function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("semester")
  const [selectedMetric, setSelectedMetric] = useState("overall")

  // Mock analytics data
  const performanceOverview = {
    currentSemester: {
      sgpa: 9.1,
      attendance: 85.2,
      rank: 12,
      totalStudents: 120,
      improvement: {
        sgpa: 0.2,
        attendance: -2.1,
        rank: 3,
      },
    },
    overall: {
      cgpa: 8.7,
      totalCredits: 118,
      completedCredits: 142,
      achievements: 4,
    },
  }

  const semesterTrends = [
    { semester: "Sem 1", sgpa: 8.5, attendance: 88, rank: 15 },
    { semester: "Sem 2", sgpa: 8.2, attendance: 85, rank: 18 },
    { semester: "Sem 3", sgpa: 8.8, attendance: 90, rank: 10 },
    { semester: "Sem 4", sgpa: 8.6, attendance: 87, rank: 14 },
    { semester: "Sem 5", sgpa: 8.9, attendance: 89, rank: 9 },
    { semester: "Sem 6", sgpa: 9.1, attendance: 85, rank: 12 },
  ]

  const subjectPerformance = [
    { subject: "Data Structures", marks: 87.4, attendance: 84.4, credits: 4, grade: "A" },
    { subject: "DBMS", marks: 78.9, attendance: 76.2, credits: 4, grade: "B+" },
    { subject: "Networks", marks: 86.3, attendance: 70.0, credits: 3, grade: "A" },
    { subject: "OS", marks: 93.7, attendance: 92.1, credits: 4, grade: "A+" },
    { subject: "SE", marks: 82.9, attendance: 83.3, credits: 3, grade: "A" },
    { subject: "AI", marks: 92.6, attendance: 91.2, credits: 4, grade: "A+" },
  ]

  const attendanceDistribution = [
    { name: "Excellent (90%+)", value: 2, color: "#10b981" },
    { name: "Good (80-89%)", value: 3, color: "#3b82f6" },
    { name: "Warning (75-79%)", value: 1, color: "#f59e0b" },
    { name: "Critical (<75%)", value: 1, color: "#ef4444" },
  ]

  const gradeDistribution = [
    { name: "A+", value: 2, color: "#10b981" },
    { name: "A", value: 3, color: "#3b82f6" },
    { name: "B+", value: 1, color: "#f59e0b" },
    { name: "B", value: 0, color: "#ef4444" },
  ]

  const weeklyStudyPattern = [
    { day: "Mon", hours: 6, efficiency: 85 },
    { day: "Tue", hours: 7, efficiency: 90 },
    { day: "Wed", hours: 5, efficiency: 75 },
    { day: "Thu", hours: 8, efficiency: 95 },
    { day: "Fri", hours: 6, efficiency: 80 },
    { day: "Sat", hours: 9, efficiency: 88 },
    { day: "Sun", hours: 4, efficiency: 70 },
  ]

  const competitiveAnalysis = [
    { metric: "CGPA", you: 8.7, classAvg: 7.8, topPerformer: 9.2 },
    { metric: "Attendance", you: 85.2, classAvg: 82.1, topPerformer: 96.5 },
    { metric: "Assignments", you: 92, classAvg: 85, topPerformer: 98 },
    { metric: "Projects", you: 88, classAvg: 80, topPerformer: 95 },
  ]

  const predictiveInsights = [
    {
      type: "warning",
      title: "Attendance Risk",
      description: "Computer Networks attendance is below 75%. Attend next 3 classes to avoid eligibility issues.",
      impact: "High",
      action: "Immediate attention required",
    },
    {
      type: "opportunity",
      title: "CGPA Improvement",
      description: "Improving DBMS performance by 10% could boost your CGPA to 8.9.",
      impact: "Medium",
      action: "Focus on upcoming assignments",
    },
    {
      type: "achievement",
      title: "Rank Improvement",
      description: "You've moved up 3 positions this semester. Maintain current performance to reach top 10.",
      impact: "Positive",
      action: "Keep up the good work",
    },
  ]

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      case "opportunity":
        return <Target className="w-5 h-5 text-blue-500" />
      case "achievement":
        return <Award className="w-5 h-5 text-green-500" />
      default:
        return <TrendingUp className="w-5 h-5 text-gray-500" />
    }
  }

  const getInsightColor = (type: string) => {
    switch (type) {
      case "warning":
        return "border-red-200 bg-red-50"
      case "opportunity":
        return "border-blue-200 bg-blue-50"
      case "achievement":
        return "border-green-200 bg-green-50"
      default:
        return "border-gray-200 bg-gray-50"
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
                <h1 className="text-xl font-bold text-gray-900">Analytics Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="semester">This Semester</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="overall">Overall</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Current SGPA</p>
                  <p className="text-2xl font-bold text-gray-900">{performanceOverview.currentSemester.sgpa}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">
                      +{performanceOverview.currentSemester.improvement.sgpa}
                    </span>
                  </div>
                </div>
                <Award className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">{performanceOverview.currentSemester.attendance}%</p>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                    <span className="text-sm text-red-600">
                      {performanceOverview.currentSemester.improvement.attendance}%
                    </span>
                  </div>
                </div>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Class Rank</p>
                  <p className="text-2xl font-bold text-gray-900">#{performanceOverview.currentSemester.rank}</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">
                      +{performanceOverview.currentSemester.improvement.rank} positions
                    </span>
                  </div>
                </div>
                <Users className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Overall CGPA</p>
                  <p className="text-2xl font-bold text-gray-900">{performanceOverview.overall.cgpa}</p>
                  <div className="flex items-center mt-1">
                    <BookOpen className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-sm text-blue-600">
                      {performanceOverview.overall.completedCredits} credits
                    </span>
                  </div>
                </div>
                <Target className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="bg-white shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span>AI-Powered Insights</span>
            </CardTitle>
            <CardDescription>Personalized recommendations based on your academic data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {predictiveInsights.map((insight, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}>
                  <div className="flex items-start space-x-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {insight.impact} Impact
                        </Badge>
                        <span className="text-xs text-gray-500">{insight.action}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="performance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="performance">Performance Trends</TabsTrigger>
            <TabsTrigger value="subjects">Subject Analysis</TabsTrigger>
            <TabsTrigger value="comparison">Competitive Analysis</TabsTrigger>
            <TabsTrigger value="patterns">Study Patterns</TabsTrigger>
          </TabsList>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Semester Trends */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Academic Performance Trend</CardTitle>
                  <CardDescription>SGPA progression across semesters</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={semesterTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="sgpa" fill="#3b82f6" fillOpacity={0.3} />
                      <Line type="monotone" dataKey="sgpa" stroke="#3b82f6" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Attendance vs Rank */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Attendance vs Class Rank</CardTitle>
                  <CardDescription>Correlation between attendance and academic ranking</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={semesterTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="semester" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Bar yAxisId="left" dataKey="attendance" fill="#10b981" />
                      <Line yAxisId="right" type="monotone" dataKey="rank" stroke="#ef4444" strokeWidth={2} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Grade Distribution */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Grade Distribution</CardTitle>
                  <CardDescription>Current semester grade breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={gradeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {gradeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Attendance Distribution */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Attendance Distribution</CardTitle>
                  <CardDescription>Subject-wise attendance categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={attendanceDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {attendanceDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Subject Performance Radar */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Subject Performance Radar</CardTitle>
                  <CardDescription>Multi-dimensional subject analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={subjectPerformance}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Marks" dataKey="marks" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                      <Radar name="Attendance" dataKey="attendance" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Subject Performance Bar Chart */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle>Subject-wise Performance</CardTitle>
                  <CardDescription>Marks and attendance comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjectPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="marks" fill="#3b82f6" name="Marks %" />
                      <Bar dataKey="attendance" fill="#10b981" name="Attendance %" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Subject Details Table */}
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Detailed Subject Analysis</CardTitle>
                <CardDescription>Comprehensive breakdown of all subjects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Subject</th>
                        <th className="text-left p-2">Marks</th>
                        <th className="text-left p-2">Attendance</th>
                        <th className="text-left p-2">Credits</th>
                        <th className="text-left p-2">Grade</th>
                        <th className="text-left p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectPerformance.map((subject, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-2 font-medium">{subject.subject}</td>
                          <td className="p-2">{subject.marks}%</td>
                          <td className="p-2">
                            <span className={subject.attendance < 75 ? "text-red-600" : "text-green-600"}>
                              {subject.attendance}%
                            </span>
                          </td>
                          <td className="p-2">{subject.credits}</td>
                          <td className="p-2">
                            <Badge
                              className={
                                subject.grade === "A+"
                                  ? "bg-green-100 text-green-800"
                                  : subject.grade === "A"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {subject.grade}
                            </Badge>
                          </td>
                          <td className="p-2">
                            {subject.attendance < 75 ? (
                              <Badge variant="destructive">At Risk</Badge>
                            ) : (
                              <Badge className="bg-green-100 text-green-800">Good</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription>Your performance vs class average and top performers</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={competitiveAnalysis} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="metric" type="category" />
                    <Tooltip />
                    <Bar dataKey="you" fill="#3b82f6" name="Your Performance" />
                    <Bar dataKey="classAvg" fill="#e5e7eb" name="Class Average" />
                    <Bar dataKey="topPerformer" fill="#10b981" name="Top Performer" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="patterns" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Weekly Study Pattern</CardTitle>
                <CardDescription>Study hours and efficiency throughout the week</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={weeklyStudyPattern}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="hours" fill="#3b82f6" name="Study Hours" />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="efficiency"
                      stroke="#10b981"
                      strokeWidth={2}
                      name="Efficiency %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
