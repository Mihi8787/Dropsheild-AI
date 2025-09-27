"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, BookOpen, Eye, EyeOff, Monitor } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeRole, setActiveRole] = useState("student")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (activeRole === "student") {
        router.push("/dashboard/student")
      } else if (activeRole === "parent") {
        router.push("/dashboard/parent")
      } else {
        router.push("/dashboard/teacher")
      }
    }, 2000)
  }

  const roles = [
    {
      id: "student",
      label: "Student",
      icon: GraduationCap,
      description: "Access your academic dashboard",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "parent",
      label: "Parent",
      icon: Users,
      description: "Monitor your child's progress",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "teacher",
      label: "Teacher",
      icon: BookOpen,
      description: "Manage student records",
      color: "from-purple-500 to-violet-600",
    },
  ]

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
        <div className="w-full max-w-md animate-slide-up">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-4 shadow-modern">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 text-balance text-violet-600">Dropshield Mentoring</h1>
            <p className="text-muted-foreground">Advanced academic management system</p>
          </div>

          <Card className="modern-card shadow-modern-lg border animate-scale-in">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-foreground">Welcome Back</CardTitle>
              <CardDescription>Choose your role to continue</CardDescription>
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
                        <h3 className="font-semibold text-xl text-foreground mb-2">{role.label} Login</h3>
                        <p className="text-sm text-muted-foreground max-w-xs mx-auto">{role.description}</p>
                      </div>

                      <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor={`${role.id}-identifier`} className="text-sm font-medium">
                            {role.id === "student" ? "Roll Number" : "Email"}
                          </Label>
                          <Input
                            id={`${role.id}-identifier`}
                            type={role.id === "student" ? "text" : "email"}
                            placeholder={role.id === "student" ? "Enter your roll number" : "Enter your email"}
                            className="h-11 border-border bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor={`${role.id}-password`} className="text-sm font-medium">
                            Password
                          </Label>
                          <div className="relative">
                            <Input
                              id={`${role.id}-password`}
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
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

                        <Button
                          type="submit"
                          className="w-full h-11 bg-accent hover:bg-accent/90 text-accent-foreground shadow-modern transition-all duration-200 hover-modern font-medium"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                              Signing in...
                            </div>
                          ) : (
                            `Sign in as ${role.label}`
                          )}
                        </Button>
                      </form>

                      {role.id === "student" && (
                        <div className="text-center pt-4">
                          <p className="text-sm text-muted-foreground">
                            Demo credentials:{" "}
                            <Badge variant="outline" className="ml-1 border-border">
                              21CS001
                            </Badge>
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-accent hover:underline font-medium">
                              Register here
                            </Link>
                          </p>
                        </div>
                      )}
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
