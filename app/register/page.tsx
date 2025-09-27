"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { GraduationCap, Users, BookOpen, Eye, EyeOff, Monitor, UserPlus, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeRole, setActiveRole] = useState("student")
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const router = useRouter()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      setRegistrationSuccess(true)

      // Redirect to login after 3 seconds
      setTimeout(() => {
        router.push("/login")
      }, 3000)
    }, 2000)
  }

  const roles = [
    {
      id: "student",
      label: "Student",
      icon: GraduationCap,
      description: "Register as a student",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "parent",
      label: "Parent",
      icon: Users,
      description: "Register as a parent/guardian",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "teacher",
      label: "Teacher",
      icon: BookOpen,
      description: "Register as a teacher/mentor",
      color: "from-purple-500 to-violet-600",
    },
  ]

  const branches = [
    "Computer Science & Engineering",
    "Electronics & Communication Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Artificial Intelligence & Machine Learning",
    "Data Science",
  ]

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

  if (registrationSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Your account has been created successfully. You will be redirected to the login page shortly.
            </p>
            <Button onClick={() => router.push("/login")} className="w-full">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl animate-fade-in"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl animate-fade-in"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 text-primary-foreground bg-card">
        <div className="w-full max-w-2xl animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-4 shadow-modern">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-balance text-violet-600">Dropshield Mentoring</h1>
            <p className="text-muted-foreground">Create your account to get started</p>
          </div>

          <Card className="modern-card shadow-modern-lg border animate-scale-in">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                <UserPlus className="w-6 h-6" />
                Create Account
              </CardTitle>
              <CardDescription>Choose your role and fill in your details</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6 bg-muted/50 p-1 gap-1">
                  {roles.map((role) => {
                    const IconComponent = role.icon
                    return (
                      <TabsTrigger
                        key={role.id}
                        value={role.id}
                        className="flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-md data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all min-h-[60px]"
                      >
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        <span className="text-xs font-medium text-center leading-tight">{role.label}</span>
                      </TabsTrigger>
                    )
                  })}
                </TabsList>

                {roles.map((role) => {
                  const IconComponent = role.icon
                  return (
                    <TabsContent key={role.id} value={role.id} className="space-y-6">
                      <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                          <div
                            className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${role.color} rounded-xl shadow-modern`}
                          >
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-xl text-foreground mb-2">{role.label} Registration</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">{role.description}</p>
                      </div>

                      <form onSubmit={handleRegister} className="space-y-4">
                        {/* Basic Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-sm font-medium">
                              First Name
                            </Label>
                            <Input
                              id="firstName"
                              type="text"
                              placeholder="Enter your first name"
                              className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-sm font-medium">
                              Last Name
                            </Label>
                            <Input
                              id="lastName"
                              type="text"
                              placeholder="Enter your last name"
                              className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        </div>

                        {/* Role-specific fields */}
                        {role.id === "student" && (
                          <>
                            <div className="space-y-2">
                              <Label htmlFor="rollNumber" className="text-sm font-medium">
                                Roll Number
                              </Label>
                              <Input
                                id="rollNumber"
                                type="text"
                                placeholder="e.g., 21CS001"
                                className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                required
                              />
                              <p className="text-xs text-muted-foreground">
                                Format: YearBranchNumber (e.g., 21CS001, 22EC045)
                              </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="branch" className="text-sm font-medium">
                                  Branch
                                </Label>
                                <Select required>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Select your branch" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {branches.map((branch) => (
                                      <SelectItem key={branch} value={branch}>
                                        {branch}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="semester" className="text-sm font-medium">
                                  Current Semester
                                </Label>
                                <Select required>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Select semester" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                      <SelectItem key={sem} value={sem.toString()}>
                                        Semester {sem}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          </>
                        )}

                        {role.id === "parent" && (
                          <div className="space-y-2">
                            <Label htmlFor="childRollNumber" className="text-sm font-medium">
                              Child's Roll Number
                            </Label>
                            <Input
                              id="childRollNumber"
                              type="text"
                              placeholder="e.g., 21CS001"
                              className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        )}

                        {role.id === "teacher" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="employeeId" className="text-sm font-medium">
                                Employee ID
                              </Label>
                              <Input
                                id="employeeId"
                                type="text"
                                placeholder="Enter your employee ID"
                                className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="department" className="text-sm font-medium">
                                Department
                              </Label>
                              <Select required>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                  {branches.map((branch) => (
                                    <SelectItem key={branch} value={branch}>
                                      {branch}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        )}

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+91 9876543210"
                              className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              required
                            />
                          </div>
                        </div>

                        {/* Additional Information for Students */}
                        {role.id === "student" && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="dateOfBirth" className="text-sm font-medium">
                                  Date of Birth
                                </Label>
                                <Input
                                  id="dateOfBirth"
                                  type="date"
                                  className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="bloodGroup" className="text-sm font-medium">
                                  Blood Group
                                </Label>
                                <Select required>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Select blood group" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {bloodGroups.map((group) => (
                                      <SelectItem key={group} value={group}>
                                        {group}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="address" className="text-sm font-medium">
                                Address
                              </Label>
                              <Textarea
                                id="address"
                                placeholder="Enter your complete address"
                                className="border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                rows={3}
                                required
                              />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="fatherName" className="text-sm font-medium">
                                  Father's Name
                                </Label>
                                <Input
                                  id="fatherName"
                                  type="text"
                                  placeholder="Enter father's name"
                                  className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                  required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="motherName" className="text-sm font-medium">
                                  Mother's Name
                                </Label>
                                <Input
                                  id="motherName"
                                  type="text"
                                  placeholder="Enter mother's name"
                                  className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                  required
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="guardianPhone" className="text-sm font-medium">
                                Guardian Phone Number
                              </Label>
                              <Input
                                id="guardianPhone"
                                type="tel"
                                placeholder="+91 9876543210"
                                className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                required
                              />
                            </div>
                          </>
                        )}

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                              Password
                            </Label>
                            <div className="relative">
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
                                className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                              </Button>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-sm font-medium">
                              Confirm Password
                            </Label>
                            <div className="relative">
                              <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all pr-10"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              >
                                {showConfirmPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground shadow-modern transition-all duration-200 hover-modern font-medium"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                              Creating Account...
                            </div>
                          ) : (
                            `Create ${role.label} Account`
                          )}
                        </Button>
                      </form>

                      <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                          Already have an account?{" "}
                          <Link href="/login" className="text-accent hover:underline font-medium">
                            Sign in here
                          </Link>
                        </p>
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Powered by <span className="font-semibold text-accent">Dropshield Education Tech</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
