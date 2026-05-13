'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { User, Settings, LogOut, Bell, Lock } from 'lucide-react';
import { useState } from 'react';

const profileTabs = ['Overview', 'Settings', 'Notifications'];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 via-dark-950 to-dark-950 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 pt-24">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <div className="w-20 h-20 rounded-full bg-gradient-purple-blue flex items-center justify-center text-4xl">
                  🧑‍💻
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">Alex Chen</h1>
                  <p className="text-white/60">Premium Member • Joined 3 months ago</p>
                </div>
              </div>
              <button className="btn-secondary">
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/60 text-xs mb-1">Current Level</p>
                <p className="text-3xl font-bold gradient-text">28</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/60 text-xs mb-1">Total XP</p>
                <p className="text-3xl font-bold">125K</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/60 text-xs mb-1">Streak</p>
                <p className="text-3xl font-bold text-neon-pink">42 days</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/60 text-xs mb-1">Achievements</p>
                <p className="text-3xl font-bold">24</p>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex space-x-4 border-b border-white/10 mb-8">
              {profileTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold transition-all duration-300 border-b-2 ${
                    activeTab === tab
                      ? 'border-neon-purple text-white'
                      : 'border-transparent text-white/60 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'Overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Learning Statistics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-white/60 text-sm mb-3">Courses Completed</p>
                      <p className="text-5xl font-bold gradient-text">12</p>
                      <p className="text-sm text-white/60 mt-2">of 18 enrolled</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-3">Lessons Completed</p>
                      <p className="text-5xl font-bold gradient-text">342</p>
                      <p className="text-sm text-white/60 mt-2">Total this month: 24</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'Settings' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Lock size={20} />
                        <div>
                          <p className="font-semibold">Password</p>
                          <p className="text-white/60 text-sm">Change your password</p>
                        </div>
                      </div>
                      <button className="text-neon-blue hover:text-neon-cyan transition-colors">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'Notifications' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      { title: 'Course Updates', description: 'Get notified about new courses' },
                      { title: 'Achievement Unlocked', description: 'Celebrate your wins' },
                      { title: 'Leaderboard Changes', description: 'Know when your rank changes' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-white/60 text-sm">{item.description}</p>
                        </div>
                        <input type="checkbox" defaultChecked className="w-5 h-5" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
