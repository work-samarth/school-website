import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, GraduationCap, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/images/school-building.png"
          width={1600}
          height={400}
          alt="Fatherson Public School Building"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our History</h1>
            <p className="mt-4 max-w-lg text-xl">
              The journey of excellence and commitment to education at Fatherson Public School.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-12">
              <div className="mr-6">
                <Image
                  src="/images/school-logo.png"
                  width={100}
                  height={100}
                  alt="Fatherson Public School Logo"
                  className="rounded-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Journey Through the Years</h2>
                <p className="text-lg text-gray-700">
                  From humble beginnings to becoming a center of educational excellence in Chandpur, Bijnor.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* Foundation */}
              <div className="relative pl-16 border-l-4 border-blue-600 py-2">
                <div className="absolute left-0 top-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">Foundation (1995)</h3>
                  <p className="text-gray-700 mb-4">
                    Fatherson Public School was established in 1995 with a vision to provide quality education to the
                    children of Chandpur, Bijnor and surrounding areas. The school started with just a handful of
                    students and a few dedicated teachers in a small building.
                  </p>
                  <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                    <p className="italic text-gray-700">
                      "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                    </p>
                  </div>
                </div>
              </div>

              {/* Early Growth */}
              <div className="relative pl-16 border-l-4 border-blue-600 py-2">
                <div className="absolute left-0 top-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">Early Growth (2000-2005)</h3>
                  <p className="text-gray-700 mb-4">
                    During this period, the school witnessed significant growth in terms of student enrollment and
                    infrastructure development. New classrooms were added, and specialized facilities like science
                    laboratories and a library were established. The school also expanded its faculty, bringing in
                    experienced educators from various fields.
                  </p>
                  <div className="mt-4 relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="School expansion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Excellence */}
              <div className="relative pl-16 border-l-4 border-blue-600 py-2">
                <div className="absolute left-0 top-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">Academic Excellence (2005-2010)</h3>
                  <p className="text-gray-700 mb-4">
                    This period marked the school's focus on academic excellence. The curriculum was enhanced to meet
                    international standards, and special emphasis was placed on holistic development. Our students began
                    to excel in board examinations and various competitive tests, establishing the school's reputation
                    for academic rigor.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Board Results</h4>
                      <p className="text-gray-700">
                        Consistently achieved 100% pass rate with over 40% students scoring above 90% in board exams.
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Competitive Exams</h4>
                      <p className="text-gray-700">
                        Students began qualifying for prestigious national-level competitions and scholarships.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infrastructure Development */}
              <div className="relative pl-16 border-l-4 border-blue-600 py-2">
                <div className="absolute left-0 top-0 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                  <Trophy className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">Modern Era (2010-Present)</h3>
                  <p className="text-gray-700 mb-4">
                    In recent years, Fatherson Public School has embraced modern educational technologies and
                    methodologies. Smart classrooms, digital libraries, and advanced laboratories have been established.
                    The school has also expanded its co-curricular offerings, providing students with opportunities to
                    excel in sports, arts, and various other fields.
                  </p>
                  <div className="mt-4 relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Modern facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Recognition as one of the top schools in the district</li>
                      <li>State-level awards for academic and co-curricular excellence</li>
                      <li>Implementation of innovative teaching methodologies</li>
                      <li>Development of comprehensive sports facilities</li>
                      <li>Establishment of cultural exchange programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Present Day */}
            <div className="mt-12 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Present Day</h3>
              <p className="text-gray-700 mb-4">
                Today, Fatherson Public School stands as a testament to educational excellence in Chandpur, Bijnor. With
                state-of-the-art facilities, a dedicated faculty, and a comprehensive curriculum, we continue to nurture
                young minds and prepare them for future challenges.
              </p>
              <p className="text-gray-700 mb-4">
                Our alumni have gone on to excel in various fields, including medicine, engineering, business, arts, and
                sports, carrying forward the values and knowledge imparted at our institution.
              </p>
              <p className="text-gray-700">
                As we look to the future, we remain committed to our founding vision of providing quality education
                while adapting to the changing needs of the 21st century.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link href="/about">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Back to About
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
