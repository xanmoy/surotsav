import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mountain, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
             
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Surotsav
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              The ultimate college fest experience featuring Mobmania, Manthan, Udaan, and Tarang. Join us for an
              unforgettable celebration.
            </p>
            <div className="flex gap-4">
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
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mobmania" className="text-gray-400 hover:text-white">
                  Mobmania (Mar 18)
                </Link>
              </li>
              <li>
                <Link href="/manthan" className="text-gray-400 hover:text-white">
                  Manthan (Mar 19-20)
                </Link>
              </li>
              <li>
                <Link href="/udaan" className="text-gray-400 hover:text-white">
                  Udaan (Mar 20)
                </Link>
              </li>
              <li>
                <Link href="/tarang" className="text-gray-400 hover:text-white">
                  Tarang (Mar 21)
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>540 Dum Dum Road, Surermath, (Near Dum Dum Jn. Station)</li>
              <li>Kolkata-700074 West Bengal</li>
              <li>info@dsec.ac.in</li>
              <li>+91 6291977707</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for updates</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Surotsav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

