import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Fatherson Public School</h3>
            <p className="text-gray-400 mb-4">
              Nurturing minds, building character, and creating future leaders through quality education.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-400 hover:text-white">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-400 hover:text-white">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Chandpur, Bijnor, Uttar Pradesh, India</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@fathersonschool.edu.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 8:00 AM - 3:00 PM</li>
              <li>Saturday: 8:00 AM - 12:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Office Hours</h4>
              <p className="text-gray-400">Monday - Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Fatherson Public School. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
