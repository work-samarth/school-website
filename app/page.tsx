import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, ChevronRight, GraduationCap, MapPin, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1600"
          width={1600}
          height={600}
          alt="School campus"
          className="w-full h-[600px] object-cover"
          priority
        />
        <div className="container relative z-20 mx-auto px-4 py-24 sm:px-6 lg:flex lg:h-[600px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Fatherson Public School
              <span className="block text-blue-200">Chandpur, Bijnor</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl">
              Nurturing minds, building character, and creating future leaders through quality education.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Admissions Open
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20">
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Bar */}
      <section className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Admissions for 2025-26 Academic Year Now Open</span>
          </div>
          <Link href="/admissions" className="text-sm font-medium flex items-center hover:underline">
            Apply Now
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Comprehensive curriculum designed to nurture critical thinking and creativity.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Experienced Faculty</h3>
                <p className="text-muted-foreground">
                  Dedicated teachers committed to providing personalized attention to each student.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Facilities</h3>
                <p className="text-muted-foreground">
                  State-of-the-art infrastructure with well-equipped labs, library, and sports facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Our School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fatherson Public School in Chandpur, Bijnor is committed to providing quality education that focuses on
                academic excellence, character building, and overall development of students.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Established with a vision to nurture young minds and prepare them for future challenges, our school
                offers a blend of traditional values and modern educational approaches.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700">Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="School building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us</p>
                    <p className="font-semibold">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Academic Programs</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive education from pre-primary to senior secondary levels following the CBSE
              curriculum.
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
                  <h3 className="text-xl font-semibold mb-4">Pre-Primary Education (Nursery to KG)</h3>
                  <p className="text-gray-700 mb-4">
                    Our pre-primary program focuses on developing basic motor skills, language abilities, and social
                    interaction through play-based learning activities.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Activity-based learning approach</li>
                    <li>Introduction to basic concepts through play</li>
                    <li>Development of social and emotional skills</li>
                    <li>Regular parent-teacher interaction</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="primary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Primary Education (Classes I-V)</h3>
                  <p className="text-gray-700 mb-4">
                    The primary section follows the CBSE curriculum with a focus on building a strong foundation in core
                    subjects while encouraging creativity and critical thinking.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Comprehensive coverage of all subjects</li>
                    <li>Regular assessments and feedback</li>
                    <li>Integration of co-curricular activities</li>
                    <li>Focus on developing communication skills</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secondary" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Secondary Education (Classes VI-XII)</h3>
                  <p className="text-gray-700 mb-4">
                    Our secondary program prepares students for board examinations while also focusing on overall
                    development and career guidance.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Specialized teaching for board examination preparation</li>
                    <li>Career counseling and guidance</li>
                    <li>Science, Commerce, and Humanities streams</li>
                    <li>Regular workshops and seminars by experts</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Parents Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our school community about their experiences at Fatherson Public School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 flex-grow">
                      "The teachers at Fatherson Public School are extremely dedicated and supportive. My child has
                      shown remarkable improvement in both academics and confidence since joining."
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                        <div className="ml-4">
                          <h4 className="font-semibold">Parent {i}</h4>
                          <p className="text-sm text-gray-500">Parent of Class {i + 3} student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest happenings at our school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Sports Day",
                date: "October 15, 2025",
                desc: "Annual inter-house sports competition featuring various athletic events.",
              },
              {
                title: "Science Exhibition",
                date: "November 5, 2025",
                desc: "Students showcase their innovative science projects and experiments.",
              },
              {
                title: "Parent-Teacher Meeting",
                date: "September 30, 2025",
                desc: "Discuss your child's academic progress and development with teachers.",
              },
            ].map((event, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-blue-600" />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.desc}</p>
                  <Button variant="link" className="p-0 h-auto mt-4 text-blue-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our School Community?</h2>
            <p className="text-xl mb-8">
              Take the first step towards providing your child with quality education and a nurturing environment.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply for Admission
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
