import { Card, CardContent } from "@/components/ui/card";

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326353/wiley_bxlqpc.jpg" },
  { id: 2, name: "Sponsor 2", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326393/WhatsApp_Image_2025-03-18_at_15.54.30_l0vuvq.jpg" },
  { id: 3, name: "Sponsor 3", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326432/WhatsApp_Image_2025-03-18_at_15.54.30_gnopvj.jpg" },
  { id: 4, name: "Sponsor 4", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326469/WhatsApp_Image_2025-03-18_at_15.54.33_trmqmk.jpg" },
  { id: 5, name: "Sponsor 5", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326496/WhatsApp_Image_2025-03-18_at_15.54.34_pbfdx2.jpg" },
  { id: 6, name: "Sponsor 7", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326522/WhatsApp_Image_2025-03-18_at_15.54.34_donild.jpg" },
  { id: 7, name: "Sponsor 8", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326576/WhatsApp_Image_2025-03-18_at_15.54.35_ge5yco.jpg" },
  { id: 8, name: "Sponsor 9", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326654/WhatsApp_Image_2025-03-18_at_15.54.35_f7wcmz.jpg" },
  { id: 9, name: "Sponsor 10", logo: "https://res.cloudinary.com/dg6vdv82c/image/upload/v1742326728/WhatsApp_Image_2025-03-18_at_15.54.35_ojbedx.jpg" },
];

export default function SponsorSection() {
  return (
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm text-blue-700 dark:text-blue-300">
              Our Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Proudly Supported By</h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These amazing organizations make TechCultura possible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center mt-8">
          {sponsors.map((sponsor) => (
            <Card key={sponsor.id} className="bg-white dark:bg-gray-800 border-0 shadow-none">
              <CardContent className="flex items-center justify-center p-8 lg:p-8">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 lg:max-h-20 w-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
