import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, FileText, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AdmissionsPage() {
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
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Admissions</h1>
            <p className="mt-4 max-w-lg text-xl">
              Join our vibrant learning community and embark on a journey of academic excellence and personal growth.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
            <p className="text-lg text-gray-700">
              Our admission process is designed to be straightforward and transparent. Follow these steps to apply for
              admission to Fatherson Public School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Application Submission",
                desc: "Complete and submit the application form along with required documents and application fee.",
              },
              {
                step: "Step 2",
                title: "Entrance Assessment",
                desc: "Students undergo an age-appropriate assessment to evaluate their academic readiness.",
              },
              {
                step: "Step 3",
                title: "Interview & Admission",
                desc: "Selected candidates and parents are invited for an interview, followed by admission formalities.",
              },
            ].map((step, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-blue-600 font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Eligibility Criteria</h2>
              <p className="text-lg text-gray-700 mb-6">
                Admission to Fatherson Public School is based on the following eligibility criteria:
              </p>
              <ul className="space-y-4">
                {[
                  "Age Requirement: The child should have completed the minimum age requirement for the respective class as of March 31st of the academic year.",
                  "Academic Performance: For classes II and above, the child's previous academic records will be considered.",
                  "Entrance Assessment: Performance in the entrance assessment conducted by the school.",
                  "Interview: Performance in the personal interview (for both student and parents).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Required Documents</h2>
              <p className="text-lg text-gray-700 mb-6">
                Please ensure you have the following documents ready for the admission process:
              </p>
              <ul className="space-y-4">
                {[
                  "Completed application form",
                  "Birth certificate of the child (original and photocopy)",
                  "Transfer Certificate from the previous school (for classes II and above)",
                  "Report card of the previous academic year",
                  "Four passport-sized photographs of the child",
                  "Aadhar Card of the child (photocopy)",
                  "Residential proof (photocopy)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FileText className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
              <p className="text-lg text-gray-700">
                Our fee structure is designed to be transparent and affordable. Below is an overview of the fees for the
                academic year 2025-26.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="border px-4 py-2 text-left">Fee Component</th>
                    <th className="border px-4 py-2 text-center">Pre-Primary</th>
                    <th className="border px-4 py-2 text-center">Primary</th>
                    <th className="border px-4 py-2 text-center">Secondary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">Admission Fee (One-time)</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Tuition Fee (Quarterly)</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">Development Fee (Annual)</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-4 py-2 font-medium">Computer Lab Fee (Annual)</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border px-4 py-2 font-medium">Examination Fee (Annual)</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                    <td className="border px-4 py-2 text-center">₹XXXX</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                * The above fee structure is subject to change. Please contact the school office for the most up-to-date
                information.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">Download Complete Fee Structure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Find answers to commonly asked questions about our admission process.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "When does the admission process start for the new academic year?",
                  answer:
                    "The admission process for the new academic year typically begins in September-October of the previous year. We recommend applying early as seats are limited.",
                },
                {
                  question: "Is there an entrance test for admission?",
                  answer:
                    "Yes, there is an age-appropriate entrance assessment for all classes. For pre-primary, it's a simple interaction, while for higher classes, it includes written tests in core subjects.",
                },
                {
                  question: "What is the student-teacher ratio at Fatherson Public School?",
                  answer:
                    "We maintain a healthy student-teacher ratio of approximately 25:1 to ensure personalized attention to each student.",
                },
                {
                  question: "Does the school provide transportation facilities?",
                  answer:
                    "Yes, we provide transportation facilities covering major areas around Chandpur, Bijnor. The bus fee is charged separately based on the distance.",
                },
                {
                  question: "Are there any scholarships available?",
                  answer:
                    "Yes, we offer merit-based scholarships to deserving students. Additionally, we have special provisions for economically disadvantaged students.",
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-lg mb-4">Still have questions? Feel free to contact our admissions office.</p>
              <Link href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:underline">
                Contact Admissions Office
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl mb-8">
              Take the first step towards providing your child with quality education at Fatherson Public School.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Online
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                Download Application Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
