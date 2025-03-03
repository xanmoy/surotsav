"use client"
import { Toaster } from "@/components/ui/toaster"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Have questions about Surotsav 2025? We're here to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-center items-center">
            <div className="space-y-8 w-full max-w-3xl"> {/* Reduced max-width */}
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-[600px] text-center mx-auto">
                  Reach out to us directly using the information below.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      540 Dum Dum Road, Surermath, (Near Dum Dum Jn. Station)
                      <br />
                      Kolkata-700074 West Bengal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">anushwabhattacharya01@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      +91 6291977707
                      <br />
                      +91 8902496652
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden h-[300px] mt-8 w-full">
                {/* Map */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3682.942995052196!2d88.4047502!3d22.6186038!3m2!1i1024!2i768!4f13.1!2m1!1ssurtech!5e0!3m2!1sen!2sin!4v1740766736892!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
