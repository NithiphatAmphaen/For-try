"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap, MonitorSmartphone, Rocket } from "lucide-react";
import EditableDropdown from "@/components/ui/editdropdown";

const features = [
  { icon: Rocket, title: "Fast", description: "ไม่รู้ว่าทำไมถึงเร็ว" },
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    description: "ทำไว้เป็นตัวอย่าง",
  },
  { icon: Zap, title: "Useable", description: "น่าจะใช้งานได้นะ" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-white px-4 sm:px-6 py-20 min-h-screen transition-colors duration-500">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 max-w-2xl"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          Home Page
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Create with Next.js, TypeScript, Tailwind CSS and Framer Motion.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Button size="lg" className="dark:bg-white dark:text-slate-900">
          <Rocket className="w-4 h-4 mr-2" />
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="dark:bg-slate-900 dark:text-white dark:border-slate-900"
        >
          <Zap className="w-4 h-4 mr-2" />
          Learn More
        </Button>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 gap-y-12 max-w-5xl w-full px-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center md:justify-start mb-4">
                <Icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
      <EditableDropdown options={['1','2','3']}/>
    </div>
  );
}
