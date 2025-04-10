import Image from "next/image"
import { BookOpen, Microscope, Library, Computer, Music, Trophy, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FacilitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/images/school-building.png"
          width={1600}
          height={400}
          alt="School facilities"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Facilities</h1>
            <p className="mt-4 max-w-lg text-xl">
              State-of-the-art infrastructure designed to provide an optimal learning environment for our students.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">World-Class Facilities</h2>
            <p className="text-lg text-gray-700">
              At Fatherson Public School, we provide modern facilities that support academic excellence, physical
              development, and creative expression.
            </p>
          </div>

          <Tabs defaultValue="academic" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="arts">Arts & Culture</TabsTrigger>
              <TabsTrigger value="others">Other Facilities</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Microscope className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Science Laboratories</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our school has well-equipped laboratories for Physics, Chemistry, and Biology, providing students
                      with hands-on learning experiences.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Modern equipment and apparatus</li>
                        <li>Safety measures and protocols</li>
                        <li>Qualified lab assistants</li>
                        <li>Regular practical sessions</li>
                        <li>Demonstration facilities</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Science laboratory"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Computer className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Computer Labs</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our computer laboratories are equipped with the latest hardware and software to provide students
                      with essential digital skills.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>High-speed internet connectivity</li>
                        <li>Latest computer systems</li>
                        <li>Educational software and applications</li>
                        <li>Interactive learning tools</li>
                        <li>Coding and programming facilities</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Computer laboratory"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Library className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Library</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our well-stocked library serves as a resource center for students and teachers, fostering a love
                      for reading and research.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Extensive collection of books, journals, and magazines</li>
                        <li>Digital resources and e-library</li>
                        <li>Comfortable reading spaces</li>
                        <li>Reference section</li>
                        <li>Regular book exhibitions and reading programs</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="School library"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Smart Classrooms</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our classrooms are equipped with modern teaching aids and technology to enhance the learning
                      experience.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Interactive whiteboards</li>
                        <li>Projectors and audio-visual equipment</li>
                        <li>Wi-Fi connectivity</li>
                        <li>Ergonomic furniture</li>
                        <li>Proper lighting and ventilation</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Smart classroom"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sports" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Trophy className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Sports Ground</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our spacious sports ground provides ample space for various outdoor sports and physical
                      activities.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Football field</li>
                        <li>Cricket pitch</li>
                        <li>Athletics track</li>
                        <li>Basketball court</li>
                        <li>Volleyball court</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Sports ground"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Trophy className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Indoor Sports Facilities</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our indoor sports facilities allow students to engage in various sports activities regardless of
                      weather conditions.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Badminton courts</li>
                        <li>Table tennis</li>
                        <li>Chess and carrom</li>
                        <li>Yoga and aerobics room</li>
                        <li>Fitness equipment</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Indoor sports"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="arts" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Music className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Music Room</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our music room is equipped with various instruments and facilities for vocal and instrumental
                      training.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Various musical instruments</li>
                        <li>Sound-proof practice rooms</li>
                        <li>Recording facilities</li>
                        <li>Qualified music instructors</li>
                        <li>Regular music programs and recitals</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Music room"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Music className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Dance Studio</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our dance studio provides space for students to learn various dance forms and express themselves
                      through movement.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Spacious dance floor</li>
                        <li>Mirrors for practice</li>
                        <li>Sound system</li>
                        <li>Changing rooms</li>
                        <li>Qualified dance instructors</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Dance studio"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Music className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Art Room</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our art room is a creative space where students can explore various art forms and develop their
                      artistic abilities.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Art supplies and materials</li>
                        <li>Easels and drawing boards</li>
                        <li>Pottery and sculpture facilities</li>
                        <li>Display area for student artwork</li>
                        <li>Qualified art instructors</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image src="/placeholder.svg?height=200&width=400" alt="Art room" fill className="object-cover" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Music className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Auditorium</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our auditorium serves as a venue for school assemblies, cultural programs, and other events.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Seating capacity for 500 people</li>
                        <li>Modern sound and lighting system</li>
                        <li>Stage for performances</li>
                        <li>Projection facilities</li>
                        <li>Backstage area</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Auditorium"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="others" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <Utensils className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Cafeteria</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our cafeteria provides nutritious and hygienic meals to students and staff in a clean and
                      comfortable environment.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Balanced and nutritious meals</li>
                        <li>Hygienic food preparation</li>
                        <li>Spacious seating area</li>
                        <li>Regular menu updates</li>
                        <li>Special dietary options available</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Cafeteria"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Medical Room</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our medical room is equipped to handle minor injuries and health issues, ensuring the well-being
                      of our students.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>First aid facilities</li>
                        <li>Qualified nurse on duty</li>
                        <li>Regular health check-ups</li>
                        <li>Tie-up with nearby hospitals for emergencies</li>
                        <li>Health and hygiene awareness programs</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Medical room"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Transport Facilities</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our school provides safe and reliable transportation for students from various areas of the city.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Fleet of well-maintained buses</li>
                        <li>Experienced drivers and conductors</li>
                        <li>GPS tracking system</li>
                        <li>Strict safety protocols</li>
                        <li>Coverage of major areas in and around Chandpur, Bijnor</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="School bus"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Counseling Center</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Our counseling center provides academic, career, and emotional support to students, helping them
                      navigate challenges and make informed decisions.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Qualified counselors</li>
                        <li>Private counseling rooms</li>
                        <li>Career guidance resources</li>
                        <li>Regular workshops and sessions</li>
                        <li>Parent counseling services</li>
                      </ul>
                    </div>
                    <div className="mt-4 relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Counseling center"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campus Infrastructure</h2>
            <p className="text-lg text-gray-700">
              Our school campus is designed to provide a safe, comfortable, and stimulating environment for learning and
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4">Campus Features</h3>
              <p className="text-gray-700 mb-6">
                Fatherson Public School is spread over a spacious campus with modern buildings, green spaces, and
                well-maintained facilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Modern Buildings</h4>
                    <p className="text-gray-700">
                      Well-designed, spacious classrooms with proper lighting, ventilation, and modern amenities.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Green Spaces</h4>
                    <p className="text-gray-700">
                      Landscaped gardens, play areas, and open spaces that provide a refreshing environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Safety Measures</h4>
                    <p className="text-gray-700">
                      CCTV surveillance, fire safety equipment, and security personnel to ensure a safe environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Accessibility</h4>
                    <p className="text-gray-700">
                      Ramps, elevators, and other facilities to ensure accessibility for all students.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image
                src="/images/school-building.png"
                width={600}
                height={400}
                alt="School campus"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance and Upgradation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Maintenance and Upgradation</h2>
              <p className="text-lg text-gray-700">
                We are committed to maintaining our facilities at the highest standards and regularly upgrading them to
                incorporate the latest advancements.
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                At Fatherson Public School, we understand that well-maintained facilities are essential for an effective
                learning environment. Our maintenance team works diligently to ensure that all facilities are kept in
                excellent condition.
              </p>
              <p>
                We also have a systematic plan for upgrading our facilities to incorporate the latest advancements in
                educational infrastructure. This includes regular updates to our technology, laboratory equipment,
                library resources, and sports facilities.
              </p>
              <p>
                Our commitment to providing the best facilities for our students is reflected in our annual budget
                allocation for maintenance and upgradation. We believe that investing in our infrastructure is investing
                in the future of our students.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Recent Upgrades</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Installation of smart boards in all classrooms</li>
                <li>Upgrade of computer laboratory with the latest hardware and software</li>
                <li>Enhancement of science laboratories with new equipment</li>
                <li>Renovation of sports facilities</li>
                <li>Expansion of library resources with new books and digital materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our Facilities</h2>
            <p className="text-xl mb-8">
              Visit our campus to see our world-class facilities and experience the learning environment we provide.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule a Visit
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                View Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
