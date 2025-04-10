import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, FlaskRoundIcon as Flask, Globe, Palette, Music, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School departments"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Academic Departments</h1>
            <p className="mt-4 max-w-lg text-xl">
              Specialized departments led by expert faculty members dedicated to excellence in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Academic Departments</h2>
            <p className="text-lg text-gray-700">
              Fatherson Public School is organized into specialized departments, each focused on delivering excellence
              in their respective subject areas.
            </p>
          </div>

          <Tabs defaultValue="languages" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="sciences">Sciences</TabsTrigger>
              <TabsTrigger value="humanities">Humanities</TabsTrigger>
              <TabsTrigger value="others">Others</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">English Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The English Department focuses on developing strong communication skills, critical thinking, and
                      appreciation for literature.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Comprehensive language skills development</li>
                        <li>Exposure to diverse literary works</li>
                        <li>Creative writing workshops</li>
                        <li>Debate and public speaking programs</li>
                        <li>Language lab for pronunciation and listening skills</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Led by experienced language educators with specializations in literature, linguistics, and
                        language teaching methodologies.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Hindi & Sanskrit Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      This department is dedicated to promoting proficiency in Hindi and Sanskrit languages, along with
                      an appreciation for Indian literature and cultural heritage.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Comprehensive language instruction</li>
                        <li>Study of classical and contemporary literature</li>
                        <li>Cultural and traditional knowledge</li>
                        <li>Creative writing in Hindi</li>
                        <li>Sanskrit shloka recitation</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Experienced educators with deep knowledge of Hindi and Sanskrit literature, grammar, and
                        teaching methodologies.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sciences" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Calculator className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Mathematics Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Mathematics Department focuses on developing strong analytical skills, logical reasoning, and
                      problem-solving abilities.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Conceptual understanding through practical applications</li>
                        <li>Advanced problem-solving techniques</li>
                        <li>Mathematics laboratory for hands-on learning</li>
                        <li>Preparation for mathematics olympiads</li>
                        <li>Integration of technology in mathematics education</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Qualified mathematicians with expertise in various branches of mathematics and innovative
                        teaching methods.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Flask className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Science Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Science Department is dedicated to fostering scientific inquiry, critical thinking, and a deep
                      understanding of natural phenomena.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Well-equipped laboratories for Physics, Chemistry, and Biology</li>
                        <li>Inquiry-based learning approach</li>
                        <li>Regular practical sessions and demonstrations</li>
                        <li>Science projects and exhibitions</li>
                        <li>Field trips and nature studies</li>
                        <li>Preparation for science olympiads and competitions</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Experienced science educators with specializations in Physics, Chemistry, and Biology, many with
                        research backgrounds.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="humanities" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Social Science Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Social Science Department focuses on developing an understanding of human society, history,
                      geography, civics, and economics.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Comprehensive coverage of history, geography, civics, and economics</li>
                        <li>Interactive teaching methods using maps, models, and visual aids</li>
                        <li>Project-based learning approach</li>
                        <li>Field trips to historical and geographical sites</li>
                        <li>Mock parliament and civic engagement activities</li>
                        <li>Current affairs discussions and debates</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Qualified educators with specializations in various social science disciplines and a passion for
                        making history and civics engaging.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Commerce Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Commerce Department prepares students for careers in business, finance, and economics through
                      comprehensive education in commercial subjects.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Comprehensive coverage of accountancy, business studies, and economics</li>
                        <li>Practical training in accounting software</li>
                        <li>Business case studies and analysis</li>
                        <li>Entrepreneurship development programs</li>
                        <li>Industrial visits and interactions with business professionals</li>
                        <li>Career guidance for commerce students</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Faculty:</h4>
                      <p className="text-gray-700">
                        Experienced educators with backgrounds in commerce, accounting, and business management, many
                        with industry experience.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="others" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Computer Science Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Computer Science Department focuses on developing digital literacy, programming skills, and an
                      understanding of information technology.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Well-equipped computer laboratories</li>
                        <li>Programming and coding instruction</li>
                        <li>Web development and design</li>
                        <li>Digital literacy and cyber safety</li>
                        <li>Robotics and AI introduction</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Palette className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Art Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The Art Department nurtures creativity and artistic expression through various visual arts
                      programs.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Drawing and painting instruction</li>
                        <li>Craft and sculpture</li>
                        <li>Art appreciation and history</li>
                        <li>Exhibition opportunities</li>
                        <li>Integration with academic subjects</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Music className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Music & Dance Department</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      This department focuses on developing musical abilities and dance skills, fostering cultural
                      appreciation and artistic expression.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Vocal and instrumental music training</li>
                        <li>Classical and folk dance instruction</li>
                        <li>Regular performances and recitals</li>
                        <li>Music appreciation and theory</li>
                        <li>Cultural events and celebrations</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Department Heads</h2>
            <p className="text-lg text-gray-700">
              Our academic departments are led by experienced educators who bring expertise and passion to their
              respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Anita Sharma",
                department: "Science Department",
                bio: "Ph.D. in Physics with over 15 years of teaching experience. Specializes in innovative science education methodologies.",
              },
              {
                name: "Mr. Rajiv Gupta",
                department: "Mathematics Department",
                bio: "M.Sc. in Mathematics with 12 years of experience. Known for making complex mathematical concepts accessible to students.",
              },
              {
                name: "Mrs. Priya Singh",
                department: "English Department",
                bio: "M.A. in English Literature with 10 years of experience. Passionate about fostering a love for reading and creative writing.",
              },
              {
                name: "Dr. Suresh Patel",
                department: "Social Science Department",
                bio: "Ph.D. in History with 14 years of teaching experience. Specializes in interactive teaching methods for history and civics.",
              },
              {
                name: "Mrs. Meena Verma",
                department: "Hindi & Sanskrit Department",
                bio: "M.A. in Hindi Literature with 18 years of experience. Dedicated to promoting Indian languages and cultural heritage.",
              },
              {
                name: "Mr. Anil Kumar",
                department: "Computer Science Department",
                bio: "M.Tech in Computer Science with industry experience. Focuses on practical applications and emerging technologies.",
              },
            ].map((head, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold mb-1 text-center">{head.name}</h3>
                  <p className="text-blue-600 mb-3 text-center text-sm">{head.department}</p>
                  <p className="text-gray-700 text-sm">{head.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interdisciplinary Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Interdisciplinary Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                While our departments specialize in specific subject areas, we emphasize an interdisciplinary approach
                to education that helps students make connections across different fields of knowledge.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our curriculum includes integrated projects and thematic units that bring together concepts from
                multiple subjects, helping students develop a holistic understanding of the world.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">STEAM Integration</h3>
                  <p className="text-gray-700">
                    Projects that combine Science, Technology, Engineering, Arts, and Mathematics to solve real-world
                    problems.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Humanities Connection</h3>
                  <p className="text-gray-700">
                    Exploring the historical, social, and ethical dimensions of scientific and technological
                    developments.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Environmental Studies</h3>
                  <p className="text-gray-700">
                    Integrating science, geography, civics, and ethics to understand and address environmental
                    challenges.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Interdisciplinary learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Department Activities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Department Activities</h2>
            <p className="text-lg text-gray-700">
              Our academic departments organize various activities throughout the year to enhance learning and provide
              opportunities for students to showcase their talents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Science Exhibition",
                desc: "Annual event where students showcase innovative science projects and experiments.",
                department: "Science Department",
              },
              {
                title: "Mathematics Olympiad",
                desc: "Competitive examination to identify and encourage mathematical talent among students.",
                department: "Mathematics Department",
              },
              {
                title: "Literary Festival",
                desc: "Celebration of literature through poetry recitation, storytelling, and creative writing competitions.",
                department: "English Department",
              },
              {
                title: "Hindi Diwas",
                desc: "Cultural program celebrating Hindi language and literature with various competitions and performances.",
                department: "Hindi Department",
              },
              {
                title: "Social Science Exhibition",
                desc: "Display of projects related to history, geography, civics, and economics.",
                department: "Social Science Department",
              },
              {
                title: "Tech Fest",
                desc: "Showcase of computer projects, coding competitions, and technology demonstrations.",
                department: "Computer Science Department",
              },
            ].map((activity, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-blue-600 text-sm mb-3">{activity.department}</p>
                  <p className="text-gray-700">{activity.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/events">
              <Button className="bg-blue-600 hover:bg-blue-700">
                View All School Events
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
            <h2 className="text-3xl font-bold mb-6">Experience Academic Excellence</h2>
            <p className="text-xl mb-8">
              Visit our campus to meet our faculty and learn more about our academic departments.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Contact Academic Office
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
