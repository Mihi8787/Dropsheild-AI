"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import ThemeSelector from "@/components/theme-selector"
import { Settings, Bell, Shield, Crown, Sparkles, Eye, Smartphone } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="glass dark:glass-dark shadow-xl border-0 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Premium Settings</h1>
                <p className="text-sm text-muted-foreground">Customize Your Luxury Experience</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Crown className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Tabs defaultValue="themes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-card/50">
            <TabsTrigger value="themes">Themes</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
          </TabsList>

          <TabsContent value="themes">
            <ThemeSelector />
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="glass dark:glass-dark border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5 text-primary" />
                  <span>Notification Preferences</span>
                </CardTitle>
                <CardDescription>Manage how you receive alerts and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Attendance Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get notified when attendance drops below 75%</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Grade Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications for new marks and grades</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Assignment Reminders</Label>
                      <p className="text-sm text-muted-foreground">Get reminded about upcoming assignments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Sound Notifications</Label>
                      <p className="text-sm text-muted-foreground">Play sound for important alerts</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="glass dark:glass-dark border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Privacy & Security</span>
                </CardTitle>
                <CardDescription>Control your data and privacy settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">Allow teachers and parents to view your profile</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Performance Analytics</Label>
                      <p className="text-sm text-muted-foreground">Share anonymous performance data for insights</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility">
            <Card className="glass dark:glass-dark border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>Accessibility Options</span>
                </CardTitle>
                <CardDescription>Customize the interface for better accessibility</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">High Contrast Mode</Label>
                      <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Large Text</Label>
                      <p className="text-sm text-muted-foreground">Increase font size throughout the app</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Reduce Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base font-medium">Screen Reader Support</Label>
                      <p className="text-sm text-muted-foreground">Enhanced compatibility with screen readers</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="premium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass dark:glass-dark border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span>Premium Features</span>
                  </CardTitle>
                  <CardDescription>Unlock exclusive luxury features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-card/50">
                      <div className="flex items-center space-x-3">
                        <Crown className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Premium Themes</p>
                          <p className="text-sm text-muted-foreground">6 exclusive luxury themes</p>
                        </div>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-card/50">
                      <div className="flex items-center space-x-3">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Advanced Analytics</p>
                          <p className="text-sm text-muted-foreground">Detailed performance insights</p>
                        </div>
                      </div>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-card/50">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-foreground">Mobile App</p>
                          <p className="text-sm text-muted-foreground">Premium mobile experience</p>
                        </div>
                      </div>
                      <Badge variant="outline">Coming Soon</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass dark:glass-dark border-0 shadow-xl">
                <CardHeader>
                  <CardTitle>Subscription Status</CardTitle>
                  <CardDescription>Manage your premium subscription</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
                      <div className="flex items-center space-x-3 mb-2">
                        <Crown className="w-6 h-6 text-primary" />
                        <h3 className="font-semibold text-foreground">Premium Plan</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Enjoy unlimited access to all luxury features
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Next billing: March 15, 2024</span>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-yellow-500 hover:from-primary/90 hover:to-yellow-500/90">
                      Manage Subscription
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
