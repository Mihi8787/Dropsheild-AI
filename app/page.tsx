"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  GraduationCap,
  Users,
  BookOpen,
  Shield,
  TrendingUp,
  Bell,
  BarChart3,
  UserPlus,
  LogIn,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: Shield,
      title: "Dropout Prevention",
      description: "Advanced AI-powered risk assessment to identify students at risk of dropping out",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with live attendance tracking and performance metrics",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Instant alerts for attendance issues, grade drops, and behavioral concerns",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor academic progress with detailed reports and trend analysis",
      color: "from-purple-500 to-violet-500",
    },
  ]

  const roles = [
    {
      id: "student",
      label: "Students",
      icon: GraduationCap,
      description: "Access your academic dashboard, track attendance, view grades, and get personalized insights",
      color: "from-blue-500 to-indigo-600",
      benefits: [
        "Real-time attendance tracking",
        "Grade monitoring",
        "AI-powered study recommendations",
        "Risk factor alerts",
      ],
    },
    {
      id: "parent",
      label: "Parents",
      icon: Users,
      description: "Monitor your child's academic progress and receive important notifications",
      color: "from-green-500 to-emerald-600",
      benefits: [
        "Child's attendance reports",
        "Academic performance updates",
        "Behavioral notifications",
        "Direct teacher communication",
      ],
    },
    {
      id: "teacher",
      label: "Teachers",
      icon: BookOpen,
      description: "Manage student records, track performance, and identify at-risk students",
      color: "from-purple-500 to-violet-600",
      benefits: [
        "Student risk assessment",
        "Bulk attendance marking",
        "Performance analytics",
        "Intervention tracking",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl mb-8 shadow-2xl">
              <Monitor className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dropshield
              </span>
              <br />
              <span className="text-white">Mentoring</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
              Advanced academic management system with AI-powered dropout prevention and comprehensive student
              monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
                AI-Powered Risk Assessment
              </Badge>
              <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/20 px-4 py-2">
                Real-time Monitoring
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-2">
                Comprehensive Analytics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to ensure student success and prevent dropouts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Built for Everyone</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored experiences for students, parents, and teachers
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const IconComponent = role.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${role.color} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">{role.label}</CardTitle>
                    <CardDescription className="text-gray-300 text-base">{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {role.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions using Dropshield Mentoring to improve student outcomes and
            prevent dropouts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Create Account
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Dropshield Mentoring</h3>
                <p className="text-sm text-gray-400">Advanced Academic Management</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                Powered by <span className="font-semibold text-white">Dropshield Education Tech</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">© 2025 All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
