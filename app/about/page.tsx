import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School campus"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Our School</h1>
            <p className="mt-4 max-w-lg text-xl">
              Learn about our history, vision, mission, and the values that drive us.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Fatherson Public School was established with a vision to provide quality education to the children of
                Chandpur, Bijnor and surrounding areas. Since our inception, we have been committed to academic
                excellence and holistic development of our students.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our school has grown over the years, expanding our facilities and enhancing our educational programs to
                meet the evolving needs of our students and the community.
              </p>
              <p className="text-lg text-gray-700">
                Today, we stand as one of the leading educational institutions in the region, known for our academic
                rigor, values-based education, and nurturing environment.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="School building"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
            <p className="text-lg text-gray-700">
              We are guided by a clear vision and mission that shapes everything we do at Fatherson Public School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To be a center of excellence in education that nurtures young minds, builds character, and prepares
                students to be responsible global citizens who contribute positively to society.
              </p>
              <ul className="space-y-3">
                {[
                  "Excellence in education",
                  "Character development",
                  "Global citizenship",
                  "Innovation and creativity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To provide a stimulating learning environment that encourages critical thinking, creativity, and
                personal growth, while instilling values of integrity, respect, and social responsibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Quality education for all",
                  "Holistic development",
                  "Value-based learning",
                  "Community engagement",
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
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
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
            ].map((value, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-600">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
            <p className="text-lg text-gray-700">
              Meet the dedicated professionals who lead our institution with vision and commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Principal",
                bio: "With over 20 years of experience in education, Dr. Kumar leads our school with vision and dedication.",
              },
              {
                name: "Mrs. Sunita Sharma",
                position: "Vice Principal",
                bio: "Mrs. Sharma oversees academic programs and ensures the highest standards of teaching and learning.",
              },
              {
                name: "Mr. Amit Verma",
                position: "Administrative Head",
                bio: "Mr. Verma manages the administrative functions of the school with efficiency and precision.",
              },
            ].map((leader, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-blue-600 mb-4">{leader.position}</p>
                <p className="text-gray-700">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
