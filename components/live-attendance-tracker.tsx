"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, TrendingUp, TrendingDown, Clock } from "lucide-react"

interface AttendanceData {
  subject: string
  present: number
  total: number
  percentage: number
  trend: "up" | "down" | "stable"
  lastUpdated: Date
}

export default function LiveAttendanceTracker() {
  const [attendanceData, setAttendanceData] = useState<AttendanceData[]>([
    {
      subject: "Data Structures",
      present: 42,
      total: 45,
      percentage: 93,
      trend: "up",
      lastUpdated: new Date(),
    },
    {
      subject: "Database Management",
      present: 38,
      total: 45,
      percentage: 84,
      trend: "stable",
      lastUpdated: new Date(),
    },
    {
      subject: "Computer Networks",
      present: 32,
      total: 45,
      percentage: 71,
      trend: "down",
      lastUpdated: new Date(),
    },
    {
      subject: "Software Engineering",
      present: 44,
      total: 45,
      percentage: 98,
      trend: "up",
      lastUpdated: new Date(),
    },
  ])

  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      setAttendanceData((prev) =>
        prev.map((subject) => {
          // Simulate real-time attendance updates
          const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0
          const newPresent = Math.max(0, Math.min(subject.total, subject.present + change))
          const newPercentage = Math.round((newPresent / subject.total) * 100)

          let newTrend: "up" | "down" | "stable" = "stable"
          if (newPercentage > subject.percentage) newTrend = "up"
          else if (newPercentage < subject.percentage) newTrend = "down"

          if (change !== 0) {
            console.log(`[v0] Live attendance update: ${subject.subject} - ${newPercentage}%`)
          }

          return {
            ...subject,
            present: newPresent,
            percentage: newPercentage,
            trend: newTrend,
            lastUpdated: change !== 0 ? new Date() : subject.lastUpdated,
          }
        }),
      )
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [isLive])

  const overallAttendance = Math.round(
    attendanceData.reduce((sum, subject) => sum + subject.percentage, 0) / attendanceData.length,
  )

  return (
    <Card className="glass dark:glass-dark border-0 shadow-xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Live Attendance Tracker</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${isLive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}></div>
            <Badge variant={isLive ? "default" : "secondary"} className="text-xs">
              {isLive ? "LIVE" : "OFFLINE"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall Stats */}
          <div className="p-4 rounded-xl bg-card/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Overall Class Attendance</span>
              <span className="text-lg font-bold text-foreground">{overallAttendance}%</span>
            </div>
            <Progress value={overallAttendance} className="h-2" />
          </div>

          {/* Subject-wise Attendance */}
          <div className="space-y-4">
            {attendanceData.map((subject, index) => (
              <div key={index} className="p-4 rounded-xl bg-card/50 hover:bg-card/70 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-foreground">{subject.subject}</h4>
                  <div className="flex items-center space-x-2">
                    {subject.trend === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {subject.trend === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                    <span className="text-sm font-semibold text-foreground">{subject.percentage}%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>
                      {subject.present}/{subject.total} present
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Updated {subject.lastUpdated.toLocaleTimeString()}</span>
                  </div>
                </div>
                <Progress value={subject.percentage} className="h-2" />
              </div>
            ))}
          </div>

          {/* Live Status Toggle */}
          <div className="flex items-center justify-center pt-4">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isLive
                  ? "bg-green-500/20 text-green-600 hover:bg-green-500/30"
                  : "bg-gray-500/20 text-gray-600 hover:bg-gray-500/30"
              }`}
            >
              {isLive ? "Live Tracking Active" : "Enable Live Tracking"}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
