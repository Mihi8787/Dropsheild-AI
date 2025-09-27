"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Sun, Moon, Sparkles, Crown, Gem } from "lucide-react"

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme || "light")

  const themes = [
    {
      id: "light",
      name: "Luxury Light",
      description: "Premium glassmorphism with gold accents",
      icon: Sun,
      preview: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100",
      accent: "from-primary to-yellow-500",
      badge: "Premium",
    },
    {
      id: "dark",
      name: "Luxury Dark",
      description: "Deep charcoal with golden highlights",
      icon: Moon,
      preview: "bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900",
      accent: "from-primary to-yellow-500",
      badge: "Premium",
    },
    {
      id: "royal",
      name: "Royal Purple",
      description: "Majestic purple with platinum accents",
      icon: Crown,
      preview: "bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900",
      accent: "from-purple-500 to-pink-500",
      badge: "Exclusive",
    },
    {
      id: "emerald",
      name: "Emerald Elite",
      description: "Sophisticated green with silver touches",
      icon: Gem,
      preview: "bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900",
      accent: "from-emerald-500 to-teal-500",
      badge: "Elite",
    },
    {
      id: "rose",
      name: "Rose Gold",
      description: "Elegant rose with copper highlights",
      icon: Sparkles,
      preview: "bg-gradient-to-br from-rose-900 via-pink-900 to-red-900",
      accent: "from-rose-500 to-pink-500",
      badge: "Luxury",
    },
    {
      id: "ocean",
      name: "Ocean Depths",
      description: "Deep blue with aqua accents",
      icon: Sparkles,
      preview: "bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900",
      accent: "from-blue-500 to-cyan-500",
      badge: "Premium",
    },
  ]

  const handleThemeChange = (themeId: string) => {
    setSelectedTheme(themeId)
    setTheme(themeId)

    // Apply theme-specific CSS variables
    const root = document.documentElement

    switch (themeId) {
      case "royal":
        root.style.setProperty("--primary", "#8b5cf6")
        root.style.setProperty("--accent", "#a855f7")
        break
      case "emerald":
        root.style.setProperty("--primary", "#10b981")
        root.style.setProperty("--accent", "#14b8a6")
        break
      case "rose":
        root.style.setProperty("--primary", "#f43f5e")
        root.style.setProperty("--accent", "#ec4899")
        break
      case "ocean":
        root.style.setProperty("--primary", "#3b82f6")
        root.style.setProperty("--accent", "#06b6d4")
        break
      default:
        root.style.setProperty("--primary", "#d4af37")
        root.style.setProperty("--accent", "#d4af37")
    }
  }

  return (
    <Card className="glass dark:glass-dark border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Palette className="w-5 h-5 text-primary" />
          <span>Premium Themes</span>
        </CardTitle>
        <CardDescription>Choose your luxury interface theme</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {themes.map((themeOption) => {
            const IconComponent = themeOption.icon
            return (
              <div
                key={themeOption.id}
                className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedTheme === themeOption.id ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
                }`}
                onClick={() => handleThemeChange(themeOption.id)}
              >
                <div className={`h-24 rounded-lg mb-3 ${themeOption.preview} relative overflow-hidden`}>
                  <div className="absolute inset-0 glass dark:glass-dark"></div>
                  <div
                    className={`absolute bottom-2 right-2 w-6 h-6 rounded-full bg-gradient-to-r ${themeOption.accent}`}
                  ></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground text-sm">{themeOption.name}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                    {themeOption.badge}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{themeOption.description}</p>
                {selectedTheme === themeOption.id && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-card/50">
          <h4 className="font-semibold text-foreground mb-2">Theme Features</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Glassmorphism effects with backdrop blur</li>
            <li>• Smooth animations and transitions</li>
            <li>• Premium color palettes</li>
            <li>• Responsive design optimization</li>
            <li>• Dark/Light mode compatibility</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
