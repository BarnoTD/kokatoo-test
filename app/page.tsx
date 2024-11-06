"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Brain,
  Zap,
  Trophy,
  ChevronRight,
  Instagram,
  Twitter,
  Share,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo flex space-x-2 items-center">
          <Image src="/Logo.svg" width={60} height={60} className="" alt="" />
          <h1 className="text-3xl font-bold">Kokatoo</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#features"
                className="hover:text-yellow-300 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-to-play"
                className="hover:text-yellow-300 transition-colors"
              >
                How to Play
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-yellow-300 transition-colors"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Level Up Your Knowledge with Kokatoo
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The coolest quiz game for teens who want to learn and have fun!
          </motion.p>
          <motion.form>
            <Link href="/dashboard/quiz">
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-400 text-purple-800 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Try Now!
              </button>
            </Link>
          </motion.form>
        </section>

        <section id="features" className="bg-white text-purple-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Kokatoo is Awesome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Star,
                  title: "Fun Challenges",
                  description: "Engaging quizzes on various topics",
                },
                {
                  icon: Brain,
                  title: "Brain Boosting",
                  description: "Improve your knowledge while having fun",
                },
                {
                  icon: Zap,
                  title: "Quick Rounds",
                  description: "Perfect for short attention spans",
                },
                {
                  icon: Trophy,
                  title: "Earn Rewards",
                  description: "Collect points and unlock achievements",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-play" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              How to Play
            </h2>
            <div className="max-w-2xl mx-auto">
              {[
                "Sign up and create your profile",
                "Choose a quiz category",
                "Answer questions and earn points",
                "Compete with friends and climb the leaderboard",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-yellow-400 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-purple-700 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Teens Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex, 16",
                  quote: "Kokatoo makes learning actually fun! I'm addicted!",
                },
                {
                  name: "Mia, 15",
                  quote:
                    "I love competing with my friends. It's so much better than boring flashcards.",
                },
                {
                  name: "Jamal, 17",
                  quote:
                    "The variety of topics is amazing. I always find something new to learn.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white text-purple-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; Made by{" "}
              <a
                className="text-yellow-300 hover:underline"
                target="_blank"
                href="https://github.com/barnoTD"
              >
                barnoTD
              </a>
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <Share />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
