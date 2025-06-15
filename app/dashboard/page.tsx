"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart, Calendar, Clock, Flame, Gift, Home, MessageSquare, Settings, Trophy, User } from "lucide-react"

export default function Dashboard() {
  const [daysClean, setDaysClean] = useState(245)

  return (
    <div className="min-h-screen bg-[#0a0a16] text-white">
      {/* Dashboard Layout */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 bg-[#0d0d1f] p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
            </div>
            <span className="text-xl font-semibold text-purple-400">QuitBet</span>
          </div>

          <nav className="flex-1 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400"
            >
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <Calendar size={20} />
              <span>Progress</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <MessageSquare size={20} />
              <span>Community</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <Trophy size={20} />
              <span>Achievements</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <Gift size={20} />
              <span>Rewards</span>
            </Link>
          </nav>

          <div className="pt-4 border-t border-gray-800">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <User size={20} />
              <span>Profile</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-500/10 text-gray-300 hover:text-purple-400"
            >
              <Settings size={20} />
              <span>Settings</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Mobile Header */}
          <header className="md:hidden flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              </div>
              <span className="text-lg font-semibold text-purple-400">QuitBet</span>
            </div>
            <Button variant="ghost" size="icon">
              <Settings size={20} />
            </Button>
          </header>

          {/* Dashboard Content */}
          <div className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, Alex</h1>
                <p className="text-gray-400">Here's your recovery progress</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700">Share Progress</Button>
            </div>

            {/* Main Stats Card */}
            <Card className="mb-8 bg-[#0d0d1f] border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 flex flex-col items-center">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Flame className="w-12 h-12 text-orange-500" />
                      </div>
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#1e1e3f" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="none"
                          stroke="#9333ea"
                          strokeWidth="8"
                          strokeDasharray="283"
                          strokeDashoffset={283 - 283 * 0.67}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-400">You've been gambling-free for</p>
                      <h2 className="text-4xl font-bold text-purple-400">{daysClean} Days</h2>
                    </div>
                  </div>

                  <div className="flex-1 grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#12122a] p-4 rounded-xl">
                        <p className="text-sm text-gray-400">Money Saved</p>
                        <p className="text-2xl font-bold">$4,320</p>
                      </div>
                      <div className="bg-[#12122a] p-4 rounded-xl">
                        <p className="text-sm text-gray-400">Streak</p>
                        <p className="text-2xl font-bold">32 Days</p>
                      </div>
                    </div>
                    <div className="bg-[#12122a] p-4 rounded-xl">
                      <div className="flex justify-between mb-2">
                        <p className="text-sm text-gray-400">Next Milestone</p>
                        <p className="text-sm font-bold">250 Days</p>
                      </div>
                      <Progress value={98} className="h-2 bg-gray-700" />
                      <p className="text-xs text-gray-400 mt-2">5 days remaining</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="progress" className="mb-8">
              <TabsList className="bg-[#0d0d1f]">
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              <TabsContent value="progress" className="mt-4">
                <Card className="bg-[#0d0d1f] border-0">
                  <CardHeader>
                    <CardTitle>Weekly Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-end justify-between gap-2">
                      {[65, 40, 75, 50, 90, 60, 80].map((value, i) => (
                        <div key={i} className="relative flex-1">
                          <div className="bg-purple-600 rounded-t-md w-full" style={{ height: `${value}%` }}></div>
                          <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="insights" className="mt-4">
                <Card className="bg-[#0d0d1f] border-0">
                  <CardHeader>
                    <CardTitle>Triggers & Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Stress</span>
                        <Progress value={75} className="w-2/3 h-2 bg-gray-700" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Boredom</span>
                        <Progress value={60} className="w-2/3 h-2 bg-gray-700" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Social Pressure</span>
                        <Progress value={40} className="w-2/3 h-2 bg-gray-700" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Financial Worry</span>
                        <Progress value={85} className="w-2/3 h-2 bg-gray-700" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="community" className="mt-4">
                <Card className="bg-[#0d0d1f] border-0">
                  <CardHeader>
                    <CardTitle>Community Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-[#12122a] p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20"></div>
                          <div>
                            <p className="font-semibold">Sarah L.</p>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                          </div>
                        </div>
                        <p className="text-sm">
                          Just hit 100 days gambling-free! Never thought I'd make it this far. Thanks for all the
                          support!
                        </p>
                      </div>
                      <div className="bg-[#12122a] p-4 rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-purple-500/20"></div>
                          <div>
                            <p className="font-semibold">Michael T.</p>
                            <p className="text-xs text-gray-400">5 hours ago</p>
                          </div>
                        </div>
                        <p className="text-sm">
                          Having a tough day today. Any tips for dealing with strong urges to gamble?
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Achievements Section */}
            <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#0d0d1f] p-4 rounded-xl flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm font-semibold text-center">200 Days Clean</p>
              </div>
              <div className="bg-[#0d0d1f] p-4 rounded-xl flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <BarChart className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm font-semibold text-center">$4K Saved</p>
              </div>
              <div className="bg-[#0d0d1f] p-4 rounded-xl flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm font-semibold text-center">30 Day Streak</p>
              </div>
              <div className="bg-[#0d0d1f] p-4 rounded-xl flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-sm font-semibold text-center">Community Helper</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
