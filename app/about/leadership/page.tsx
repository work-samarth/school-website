import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School leadership"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Leadership</h1>
            <p className="mt-4 max-w-lg text-xl">
              Meet the dedicated professionals who lead our institution with vision and commitment.
            </p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Principal's Message</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>Dear Parents, Students, and Visitors,</p>
                <p>
                  Welcome to Fatherson Public School, Chandpur, Bijnor. It is my privilege to lead this esteemed
                  institution that has been dedicated to providing quality education for over two decades.
                </p>
                <p>
                  At Fatherson Public School, we believe that education is not merely about academic achievement, but
                  about nurturing well-rounded individuals who are prepared to face the challenges of the future with
                  confidence and character. Our approach to education is holistic, focusing on intellectual, physical,
                  emotional, and social development.
                </p>
                <p>
                  We are committed to creating a learning environment that is stimulating, supportive, and inclusive,
                  where every student is valued and encouraged to reach their full potential. Our dedicated faculty
                  members work tirelessly to inspire a love for learning and to instill values that will guide our
                  students throughout their lives.
                </p>
                <p>
                  As we navigate the rapidly changing educational landscape, we remain steadfast in our commitment to
                  excellence while embracing innovation and adapting to new challenges. We value our partnership with
                  parents and the community, and we believe that together, we can provide the best possible education
                  for our children.
                </p>
                <p>
                  I invite you to explore our website to learn more about our programs, achievements, and the vibrant
                  community that makes Fatherson Public School special. If you have any questions or would like to visit
                  our campus, please do not hesitate to contact us.
                </p>
                <p>
                  Thank you for your interest in our school. We look forward to welcoming you to the Fatherson family.
                </p>
                <p className="font-semibold">
                  Warm regards,
                  <br />
                  Dr. Rajesh Kumar
                  <br />
                  Principal
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-center mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-blue-600 text-center mb-4">Principal</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">principal@fathersonschool.edu.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">+91 XXXXX XXXXX</span>
                  </div>
                </div>
                <div className="prose prose-sm text-gray-700">
                  <p>
                    <strong>Education:</strong> Ph.D. in Education, M.Ed., B.Ed.
                  </p>
                  <p>
                    <strong>Experience:</strong> Over 25 years in education, including 15 years in educational
                    leadership.
                  </p>
                  <p>
                    <strong>Achievements:</strong> State Award for Excellence in Education, Published author of
                    educational research papers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the dedicated professionals who guide our institution with expertise and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Mrs. Sunita Sharma",
                position: "Vice Principal",
                bio: "Mrs. Sharma oversees academic programs and ensures the highest standards of teaching and learning. With over 20 years of experience in education, she has been instrumental in developing innovative curriculum approaches.",
                education: "M.Ed., B.Ed., M.A. in English",
                expertise: "Curriculum Development, Teacher Training",
              },
              {
                name: "Mr. Amit Verma",
                position: "Administrative Head",
                bio: "Mr. Verma manages the administrative functions of the school with efficiency and precision. His background in educational administration has helped streamline school operations and improve resource management.",
                education: "MBA, B.Com",
                expertise: "School Administration, Financial Management",
              },
              {
                name: "Mrs. Priya Gupta",
                position: "Academic Coordinator",
                bio: "Mrs. Gupta coordinates academic activities across all grades and ensures curriculum implementation. She works closely with department heads to maintain academic standards and monitor student progress.",
                education: "M.Sc., B.Ed.",
                expertise: "Science Education, Assessment Strategies",
              },
              {
                name: "Mr. Sanjay Patel",
                position: "Head of Secondary Section",
                bio: "Mr. Patel leads the secondary section, overseeing classes IX to XII. His focus on board examination preparation has resulted in consistently excellent results for the school.",
                education: "M.Sc. in Mathematics, B.Ed.",
                expertise: "Mathematics Education, Examination Preparation",
              },
              {
                name: "Mrs. Anjali Singh",
                position: "Head of Primary Section",
                bio: "Mrs. Singh leads the primary section, focusing on building strong foundations for young learners. She has introduced several innovative teaching methodologies for early education.",
                education: "M.A. in Child Psychology, B.Ed.",
                expertise: "Early Childhood Education, Child Development",
              },
              {
                name: "Mr. Rahul Sharma",
                position: "Sports Director",
                bio: "Mr. Sharma oversees all sports and physical education activities. Under his guidance, the school has excelled in various district and state-level sports competitions.",
                education: "M.P.Ed., B.P.Ed.",
                expertise: "Physical Education, Sports Coaching",
              },
            ].map((leader, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-600 mb-4">{leader.position}</p>
                  <p className="text-gray-700 text-sm mb-4">{leader.bio}</p>
                  <div className="text-sm text-gray-700">
                    <p>
                      <strong>Education:</strong> {leader.education}
                    </p>
                    <p>
                      <strong>Expertise:</strong> {leader.expertise}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
              <p className="text-lg text-gray-700">
                Our school is guided by a distinguished board of directors who bring diverse expertise and a shared
                commitment to educational excellence.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Mr. Rakesh Agarwal",
                    position: "Chairperson",
                    bio: "A visionary leader with a strong commitment to education and community development.",
                  },
                  {
                    name: "Mrs. Meena Joshi",
                    position: "Vice Chairperson",
                    bio: "An education advocate with extensive experience in curriculum development and school management.",
                  },
                  {
                    name: "Dr. Alok Singh",
                    position: "Secretary",
                    bio: "A distinguished academician with a focus on educational policy and innovation.",
                  },
                  {
                    name: "Mr. Deepak Sharma",
                    position: "Treasurer",
                    bio: "A financial expert who ensures sound fiscal management of the institution.",
                  },
                ].map((member, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-blue-600 text-sm mb-2">{member.position}</p>
                      <p className="text-gray-700 text-sm">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
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
