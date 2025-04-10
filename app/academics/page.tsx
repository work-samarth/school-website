import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Library, Microscope, Music, Trophy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School academics"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Academic Excellence</h1>
            <p className="mt-4 max-w-lg text-xl">
              Discover our comprehensive curriculum designed to nurture critical thinking, creativity, and a lifelong
              love for learning.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-lg text-gray-700">
              Fatherson Public School follows the CBSE curriculum, enriched with additional programs to ensure holistic
              development of students.
            </p>
          </div>

          <Tabs defaultValue="primary" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pre-primary">Pre-Primary</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
            </TabsList>
            <TabsContent value="pre-primary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Pre-Primary Education (Nursery to KG)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our pre-primary program focuses on developing basic motor skills, language abilities, and social
                    interaction through play-based learning activities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Language development</li>
                        <li>Number concepts</li>
                        <li>Environmental awareness</li>
                        <li>Creative expression</li>
                        <li>Physical development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Teaching Methodology:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Play-based learning</li>
                        <li>Activity-centered approach</li>
                        <li>Thematic teaching</li>
                        <li>Experiential learning</li>
                        <li>Regular parent involvement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="primary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Primary Education (Classes I-V)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The primary section follows the CBSE curriculum with a focus on building a strong foundation in core
                    subjects while encouraging creativity and critical thinking.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Core Subjects:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Mathematics</li>
                        <li>Environmental Studies</li>
                        <li>General Knowledge</li>
                        <li>Computer Science</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Co-Curricular Activities:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Art and Craft</li>
                        <li>Music and Dance</li>
                        <li>Physical Education</li>
                        <li>Value Education</li>
                        <li>Library Sessions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secondary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Secondary Education (Classes VI-XII)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Our secondary program prepares students for board examinations while also focusing on overall
                    development and career guidance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Middle School (VI-VIII):</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>English, Hindi, Sanskrit</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Science</li>
                        <li>Computer Science</li>
                        <li>Art Education</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">High School (IX-XII):</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Science Stream (PCM/PCB)</li>
                        <li>Commerce Stream</li>
                        <li>Humanities Stream</li>
                        <li>Career Counseling</li>
                        <li>Competitive Exam Preparation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Teaching Methodology</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Fatherson Public School, we believe in a student-centered approach to education that fosters critical
                thinking, creativity, and a love for learning.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our teaching methodology combines traditional classroom learning with innovative teaching techniques to
                create an engaging and effective learning environment.
              </p>
              <ul className="space-y-4">
                {[
                  "Interactive Learning: Encouraging active participation and discussion",
                  "Experiential Learning: Learning by doing through projects and activities",
                  "Collaborative Learning: Developing teamwork and communication skills",
                  "Technology Integration: Using digital tools to enhance learning",
                  "Personalized Approach: Catering to different learning styles and abilities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-blue-600 font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Teaching methodology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Facilities</h2>
            <p className="text-lg text-gray-700">
              We provide state-of-the-art facilities to support our academic programs and enhance the learning
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="h-8 w-8 text-blue-600" />,
                title: "Science Laboratories",
                desc: "Well-equipped Physics, Chemistry, and Biology labs for practical learning.",
              },
              {
                icon: <Library className="h-8 w-8 text-blue-600" />,
                title: "Library",
                desc: "Extensive collection of books, journals, and digital resources for research and reading.",
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
                title: "Smart Classrooms",
                desc: "Technology-enabled classrooms with interactive boards and multimedia facilities.",
              },
              {
                icon: <Music className="h-8 w-8 text-blue-600" />,
                title: "Music and Dance Rooms",
                desc: "Dedicated spaces for music and dance classes with necessary equipment.",
              },
              {
                icon: <Trophy className="h-8 w-8 text-blue-600" />,
                title: "Sports Facilities",
                desc: "Indoor and outdoor sports facilities for physical education and sports training.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                title: "Language Lab",
                desc: "Special facility for language learning with audio-visual aids.",
              },
            ].map((facility, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                  <p className="text-gray-700">{facility.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Achievements</h2>
            <p className="text-lg text-gray-700">
              Our students have consistently performed exceptionally well in academics and competitive examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Board Examination Results</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Class X (2024-25)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>School Average: 85%</li>
                      <li>Students scoring above 90%: 45%</li>
                      <li>Top Score: 98.6%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Class XII (2024-25)</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>School Average: 83%</li>
                      <li>Students scoring above 90%: 40%</li>
                      <li>Top Score: 97.8%</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Competitive Examinations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">JEE & NEET Qualifiers</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>JEE Main Qualifiers: XX students</li>
                      <li>JEE Advanced Qualifiers: XX students</li>
                      <li>NEET Qualifiers: XX students</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Olympiads & Scholarships</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>National Science Olympiad: XX winners</li>
                      <li>International Mathematics Olympiad: XX winners</li>
                      <li>NTSE Scholars: XX students</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Faculty</h2>
            <p className="text-lg text-gray-700">
              Our dedicated team of experienced educators is committed to providing quality education and nurturing the
              potential of each student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="border-none shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">Teacher Name</h3>
                  <p className="text-blue-600 mb-4">Subject Specialist</p>
                  <p className="text-gray-700 text-sm">
                    Experienced educator with X years of teaching experience and expertise in their subject area.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/about/faculty">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All Faculty Members
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our Academic Excellence</h2>
            <p className="text-xl mb-8">
              Visit our campus to learn more about our academic programs and see our facilities firsthand.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
