import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Target, Lightbulb, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VisionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School vision"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Vision & Mission</h1>
            <p className="mt-4 max-w-lg text-xl">
              Guiding principles that shape our approach to education and student development.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To be a center of excellence in education that nurtures young minds, builds character, and prepares
                students to be responsible global citizens who contribute positively to society.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">We Envision:</h3>
                <ul className="space-y-3">
                  {[
                    "A learning environment that fosters curiosity, creativity, and critical thinking",
                    "Students who are academically proficient and morally upright",
                    "A community that values diversity, inclusivity, and mutual respect",
                    "Graduates who are prepared to face global challenges with confidence and competence",
                    "An institution that continuously evolves to meet the changing needs of education",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <Image src="/images/school-logo.png" width={400} height={400} alt="School logo" className="mx-auto" />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="italic text-gray-700 text-sm">
                  "Education is not the filling of a pail, but the lighting of a fire."
                </p>
                <p className="text-right text-gray-500 text-xs mt-2">- William Butler Yeats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="italic text-gray-700 text-sm">
                  "The function of education is to teach one to think intensively and to think critically."
                </p>
                <p className="text-right text-gray-500 text-xs mt-2">- Martin Luther King Jr.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Compass className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To provide a stimulating learning environment that encourages critical thinking, creativity, and
                personal growth, while instilling values of integrity, respect, and social responsibility.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">We Commit To:</h3>
                <ul className="space-y-3">
                  {[
                    "Provide quality education that balances academic rigor with holistic development",
                    "Foster a safe, supportive, and inclusive learning environment",
                    "Employ innovative teaching methodologies that cater to diverse learning styles",
                    "Develop leadership qualities and life skills essential for success",
                    "Promote cultural awareness, environmental consciousness, and social responsibility",
                    "Maintain open communication and collaborative relationships with parents and the community",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Our Core Values</h2>
            </div>
            <p className="text-lg text-gray-700">
              These fundamental principles guide our approach to education and shape our school culture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                desc: "Striving for the highest standards in all aspects of education and school life.",
              },
              {
                title: "Integrity",
                desc: "Fostering honesty, ethics, and moral principles in all actions and decisions.",
              },
              {
                title: "Respect",
                desc: "Cultivating mutual respect, empathy, and appreciation for diversity.",
              },
              {
                title: "Responsibility",
                desc: "Encouraging accountability, commitment, and social responsibility.",
              },
              {
                title: "Innovation",
                desc: "Embracing new ideas, approaches, and technologies to enhance learning.",
              },
              {
                title: "Collaboration",
                desc: "Working together to achieve common goals and foster a sense of community.",
              },
              {
                title: "Perseverance",
                desc: "Developing resilience and determination to overcome challenges.",
              },
              {
                title: "Compassion",
                desc: "Nurturing empathy, kindness, and concern for the welfare of others.",
              },
            ].map((value, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Educational Philosophy</h2>
              <p className="text-lg text-gray-700">
                At Fatherson Public School, we believe that education should be transformative, empowering students to
                discover their potential and pursue their passions.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Our educational philosophy is rooted in the belief that every child is unique, with their own strengths,
                interests, and learning styles. We strive to create an environment that recognizes and nurtures this
                individuality, while also fostering a sense of community and shared values.
              </p>
              <p>
                We believe in a balanced approach to education that integrates academic excellence with character
                development. Our curriculum is designed to challenge students intellectually, while also providing
                opportunities for creative expression, physical activity, and social engagement.
              </p>
              <p>
                We recognize that education extends beyond the classroom, and we encourage our students to engage with
                the world around them. Through community service, environmental initiatives, and cultural exchanges, we
                help students develop a global perspective and a sense of social responsibility.
              </p>
              <p>
                Technology is integrated thoughtfully into our teaching and learning processes, enhancing educational
                experiences while ensuring that human connection remains at the heart of education.
              </p>
              <p>
                Above all, we believe that education should inspire a lifelong love of learning. By fostering curiosity,
                critical thinking, and a growth mindset, we prepare our students not just for academic success, but for
                a fulfilling and purposeful life.
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
