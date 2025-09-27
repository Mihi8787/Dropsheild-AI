"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  User,
  ArrowLeft,
  Download,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Users,
  GraduationCap,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock student data
  const studentData = {
    personal: {
      name: "John Doe",
      rollNumber: "21CS001",
      email: "john.doe@vjit.ac.in",
      phone: "+91 9876543210",
      dateOfBirth: "2003-05-15",
      bloodGroup: "O+",
      address: "123 Main Street, Hyderabad, Telangana - 500001",
      fatherName: "Robert Doe",
      motherName: "Jane Doe",
      guardianPhone: "+91 9876543211",
      profileImage: "/student-profile.png",
    },
    academic: {
      branch: "Computer Science & Engineering",
      semester: 6,
      section: "A",
      batch: "2021-2025",
      admissionDate: "2021-08-15",
      currentCGPA: 8.7,
      currentSGPA: 9.1,
      totalCredits: 142,
      completedCredits: 118,
      rank: 12,
      totalStudents: 120,
    },
    achievements: [
      {
        title: "Best Student Award",
        description: "Outstanding academic performance in Semester 5",
        date: "2024-01-15",
        type: "Academic",
      },
      {
        title: "Coding Competition Winner",
        description: "First place in Inter-college Programming Contest",
        date: "2023-11-20",
        type: "Technical",
      },
      {
        title: "Research Paper Published",
        description: "Machine Learning applications in Healthcare",
        date: "2023-09-10",
        type: "Research",
      },
      {
        title: "Leadership Excellence",
        description: "Class Representative for 2 consecutive semesters",
        date: "2023-08-01",
        type: "Leadership",
      },
    ],
    activities: [
      {
        activity: "Technical Club Member",
        role: "Vice President",
        duration: "2022-2024",
        description: "Organized technical workshops and coding competitions",
      },
      {
        activity: "NSS Volunteer",
        role: "Active Volunteer",
        duration: "2021-2023",
        description: "Participated in community service and social awareness programs",
      },
      {
        activity: "Sports Team",
        role: "Cricket Team Captain",
        duration: "2022-2024",
        description: "Led college cricket team to inter-college championship",
      },
    ],
    subjects: [
      { name: "Data Structures", code: "CS301", credits: 4, grade: "A", semester: 6 },
      { name: "Database Management", code: "CS302", credits: 4, grade: "B+", semester: 6 },
      { name: "Computer Networks", code: "CS303", credits: 3, grade: "A", semester: 6 },
      { name: "Operating Systems", code: "CS304", credits: 4, grade: "A+", semester: 6 },
      { name: "Software Engineering", code: "CS305", credits: 3, grade: "A", semester: 6 },
      { name: "Artificial Intelligence", code: "CS306", credits: 4, grade: "A+", semester: 6 },
    ],
  }

  const getAchievementColor = (type: string) => {
    switch (type) {
      case "Academic":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Technical":
        return "bg-green-100 text-green-800 border-green-200"
      case "Research":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Leadership":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

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

  const handleExportProfile = () => {
    // Mock export functionality
    const profileData = {
      ...studentData,
      exportDate: new Date().toISOString(),
    }
    const dataStr = JSON.stringify(profileData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = `${studentData.personal.rollNumber}_profile.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
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
                <User className="w-6 h-6 text-blue-600" />
                <h1 className="text-xl font-bold text-gray-900">Student Profile</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleExportProfile}>
                <Download className="w-4 h-4 mr-2" />
                Export Profile
              </Button>
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="w-32 h-32">
                <AvatarImage
                  src={studentData.personal.profileImage || "/placeholder.svg"}
                  alt={studentData.personal.name}
                />
                <AvatarFallback className="text-2xl">
                  {studentData.personal.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{studentData.personal.name}</h2>
                <p className="text-lg text-gray-600 mb-4">
                  {studentData.academic.branch} • {studentData.personal.rollNumber}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Semester {studentData.academic.semester}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">CGPA: {studentData.academic.currentCGPA}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">
                      Rank: {studentData.academic.rank}/{studentData.academic.totalStudents}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                    Batch {studentData.academic.batch}
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Section {studentData.academic.section}
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    {studentData.academic.completedCredits}/{studentData.academic.totalCredits} Credits
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="academic">Academic Details</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-blue-600" />
                    <span>Personal Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">{studentData.personal.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium">{studentData.personal.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Date of Birth</p>
                        <p className="font-medium">{new Date(studentData.personal.dateOfBirth).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-medium">{studentData.personal.address}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Family Information */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Family Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Father's Name</p>
                    <p className="font-medium">{studentData.personal.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Mother's Name</p>
                    <p className="font-medium">{studentData.personal.motherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Guardian Phone</p>
                    <p className="font-medium">{studentData.personal.guardianPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Blood Group</p>
                    <p className="font-medium">{studentData.personal.bloodGroup}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Current CGPA</p>
                      <p className="text-2xl font-bold text-gray-900">{studentData.academic.currentCGPA}</p>
                    </div>
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Current Rank</p>
                      <p className="text-2xl font-bold text-gray-900">#{studentData.academic.rank}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Credits Completed</p>
                      <p className="text-2xl font-bold text-gray-900">{studentData.academic.completedCredits}</p>
                    </div>
                    <BookOpen className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">Achievements</p>
                      <p className="text-2xl font-bold text-gray-900">{studentData.achievements.length}</p>
                    </div>
                    <Award className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Academic Details */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    <span>Academic Information</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Branch</p>
                    <p className="font-medium">{studentData.academic.branch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Admission Date</p>
                    <p className="font-medium">{new Date(studentData.academic.admissionDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Current Semester</p>
                    <p className="font-medium">{studentData.academic.semester}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Section</p>
                    <p className="font-medium">{studentData.academic.section}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Current Subjects */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-green-600" />
                    <span>Current Subjects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {studentData.subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <div>
                          <p className="font-medium text-gray-900">{subject.name}</p>
                          <p className="text-sm text-gray-600">
                            {subject.code} • {subject.credits} Credits
                          </p>
                        </div>
                        <Badge className={getGradeColor(subject.grade)}>{subject.grade}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span>Achievements & Awards</span>
                </CardTitle>
                <CardDescription>Recognition and accomplishments throughout academic journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.achievements.map((achievement, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        <Badge className={getAchievementColor(achievement.type)}>{achievement.type}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{achievement.description}</p>
                      <p className="text-sm text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-6">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span>Extracurricular Activities</span>
                </CardTitle>
                <CardDescription>Participation in clubs, sports, and community service</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.activities.map((activity, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{activity.activity}</h3>
                        <Badge variant="outline">{activity.role}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">{activity.description}</p>
                      <p className="text-sm text-gray-500">Duration: {activity.duration}</p>
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
