import Image from "next/image"
import { BookOpen, GraduationCap, Award, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School curriculum"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Curriculum</h1>
            <p className="mt-4 max-w-lg text-xl">
              A comprehensive educational framework designed to nurture academic excellence and holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Curriculum Overview</h2>
            </div>
            <p className="text-lg text-gray-700">
              Fatherson Public School follows the Central Board of Secondary Education (CBSE) curriculum, enriched with
              additional programs to ensure holistic development of students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">CBSE Curriculum</h3>
              <p className="text-gray-700 mb-6">
                The CBSE curriculum is designed to provide a balanced education that emphasizes both theoretical
                knowledge and practical skills. It focuses on developing critical thinking, problem-solving abilities,
                and creativity in students.
              </p>
              <p className="text-gray-700 mb-6">Our implementation of the CBSE curriculum is characterized by:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                <li>Comprehensive coverage of all subjects as prescribed by CBSE</li>
                <li>Integration of technology to enhance learning experiences</li>
                <li>Regular assessments aligned with CBSE guidelines</li>
                <li>Special emphasis on practical learning and application of concepts</li>
                <li>Preparation for competitive examinations alongside board examinations</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Our school is affiliated with the Central Board of Secondary Education (CBSE),
                  New Delhi, with Affiliation No. XXXXX.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/school-building.png"
                width={600}
                height={400}
                alt="School building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Structure</h2>
            <p className="text-lg text-gray-700">
              Our academic program is structured to provide age-appropriate learning experiences at each stage of a
              student's educational journey.
            </p>
          </div>

          <Tabs defaultValue="pre-primary" className="max-w-3xl mx-auto">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Language development (English and Hindi)</li>
                        <li>Number concepts and basic mathematics</li>
                        <li>Environmental awareness</li>
                        <li>Creative expression through art and music</li>
                        <li>Physical development and coordination</li>
                        <li>Social skills and emotional development</li>
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
                        <li>Use of educational toys and manipulatives</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Daily Schedule:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Morning Assembly</p>
                          <p className="text-sm text-gray-600">Prayer, exercise, and daily motivation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Circle Time</p>
                          <p className="text-sm text-gray-600">Interactive discussions and storytelling</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Activity Sessions</p>
                          <p className="text-sm text-gray-600">Hands-on learning through various activities</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Outdoor Play</p>
                          <p className="text-sm text-gray-600">Physical activities and games</p>
                        </div>
                      </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Core Subjects:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Mathematics</li>
                        <li>Environmental Studies (Classes I-II)</li>
                        <li>Science (Classes III-V)</li>
                        <li>Social Science (Classes III-V)</li>
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
                        <li>Yoga and Meditation</li>
                        <li>Public Speaking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Assessment Pattern:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Periodic Tests</p>
                          <p className="text-sm text-gray-600">Regular assessments throughout the term</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Half-Yearly Examination</p>
                          <p className="text-sm text-gray-600">Comprehensive assessment at mid-term</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Annual Examination</p>
                          <p className="text-sm text-gray-600">Final assessment at the end of the academic year</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Continuous Assessment</p>
                          <p className="text-sm text-gray-600">
                            Ongoing evaluation of classwork, projects, and activities
                          </p>
                        </div>
                      </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Middle School (VI-VIII):</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>English</li>
                        <li>Hindi</li>
                        <li>Sanskrit (as third language)</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Science</li>
                        <li>Computer Science</li>
                        <li>Art Education</li>
                        <li>Health and Physical Education</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">High School (IX-X):</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>English</li>
                        <li>Hindi/Sanskrit</li>
                        <li>Mathematics</li>
                        <li>Science</li>
                        <li>Social Science</li>
                        <li>Information Technology (Optional)</li>
                        <li>Art Education</li>
                        <li>Health and Physical Education</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Senior Secondary (XI-XII):</h4>
                    <p className="text-gray-700 mb-4">Students can choose from the following streams:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Science Stream</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                          <li>English</li>
                          <li>Physics</li>
                          <li>Chemistry</li>
                          <li>Mathematics/Biology</li>
                          <li>Computer Science/Physical Education (Optional)</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Commerce Stream</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                          <li>English</li>
                          <li>Accountancy</li>
                          <li>Business Studies</li>
                          <li>Economics</li>
                          <li>Mathematics/Informatics Practices (Optional)</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">Humanities Stream</h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                          <li>English</li>
                          <li>History</li>
                          <li>Political Science</li>
                          <li>Geography/Economics</li>
                          <li>Psychology/Physical Education (Optional)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Additional Support:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <GraduationCap className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Career Counseling</p>
                          <p className="text-sm text-gray-600">Guidance for higher education and career choices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                        <div>
                          <p className="font-medium">Competitive Exam Preparation</p>
                          <p className="text-sm text-gray-600">
                            Special coaching for JEE, NEET, and other competitive exams
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teaching Methodology</h2>
            <p className="text-lg text-gray-700">
              Our teaching approach combines traditional methods with innovative techniques to create an engaging and
              effective learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interactive Learning",
                desc: "Encouraging active participation and discussion to enhance understanding and retention.",
              },
              {
                title: "Experiential Learning",
                desc: "Learning by doing through projects, experiments, and hands-on activities.",
              },
              {
                title: "Collaborative Learning",
                desc: "Developing teamwork and communication skills through group activities and projects.",
              },
              {
                title: "Technology Integration",
                desc: "Using digital tools and resources to enhance learning experiences and develop digital literacy.",
              },
              {
                title: "Differentiated Instruction",
                desc: "Adapting teaching methods to cater to different learning styles and abilities.",
              },
              {
                title: "Inquiry-Based Learning",
                desc: "Encouraging curiosity and critical thinking through exploration and questioning.",
              },
            ].map((method, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-700">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment System */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Assessment System</h2>
              <p className="text-lg text-gray-700">
                Our comprehensive assessment system is designed to evaluate students' progress and provide constructive
                feedback for improvement.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                At Fatherson Public School, we follow the Continuous and Comprehensive Evaluation (CCE) system as
                prescribed by CBSE. This system focuses on holistic assessment of students, taking into account both
                scholastic and co-scholastic areas.
              </p>
              <p>
                Our assessment approach is designed to reduce stress and anxiety associated with examinations while
                providing a comprehensive evaluation of a student's progress and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Scholastic Assessment</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Periodic Tests:</strong> Regular assessments conducted throughout the term to evaluate
                    understanding of concepts.
                  </li>
                  <li>
                    <strong>Notebook Submission:</strong> Regular checking of notebooks to ensure completion of work and
                    regularity in assignments.
                  </li>
                  <li>
                    <strong>Subject Enrichment Activities:</strong> Activities designed to enhance learning in each
                    subject area.
                  </li>
                  <li>
                    <strong>Half-Yearly and Annual Examinations:</strong> Comprehensive assessments conducted at the end
                    of each term.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Co-Scholastic Assessment</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Work Education:</strong> Assessment of skills related to work experience and vocational
                    training.
                  </li>
                  <li>
                    <strong>Art Education:</strong> Evaluation of creativity and skills in visual and performing arts.
                  </li>
                  <li>
                    <strong>Health and Physical Education:</strong> Assessment of physical fitness, sports skills, and
                    health awareness.
                  </li>
                  <li>
                    <strong>Discipline:</strong> Evaluation of attendance, sincerity, behavior, and values.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reporting and Feedback</h3>
              <p className="text-gray-700 mb-4">Student progress is communicated to parents through:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Regular Parent-Teacher Meetings</li>
                <li>Detailed Report Cards at the end of each term</li>
                <li>Online Student Portal for continuous monitoring of progress</li>
                <li>Individual counseling sessions for students who need additional support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic Calendar</h2>
            <p className="text-lg text-gray-700">
              Our academic year is structured to provide a balanced schedule of learning, assessments, and co-curricular
              activities.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Academic Year 2025-26</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">First Term</p>
                      <p className="text-sm">April 2025 - September 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Second Term</p>
                      <p className="text-sm">October 2025 - March 2026</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Summer Vacation</p>
                      <p className="text-sm">May 15, 2025 - June 30, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Winter Break</p>
                      <p className="text-sm">December 25, 2025 - January 5, 2026</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Assessment Dates</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Periodic Test I</p>
                      <p className="text-sm">July 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Half-Yearly Examination</p>
                      <p className="text-sm">September 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Periodic Test II</p>
                      <p className="text-sm">December 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <div>
                      <p className="font-medium">Annual Examination</p>
                      <p className="text-sm">February-March 2026</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">Download Complete Academic Calendar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our Academic Excellence</h2>
            <p className="text-xl mb-8">
              Visit our campus to learn more about our curriculum and see our teaching methodology in action.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Download Curriculum Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
