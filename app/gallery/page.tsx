"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample gallery data
const galleryData = {
  campus: Array.from({ length: 8 }, (_, i) => ({
    id: `campus-${i + 1}`,
    src: `/placeholder.svg?height=300&width=400`,
    alt: `Campus image ${i + 1}`,
    title: `Campus View ${i + 1}`,
  })),
  events: Array.from({ length: 8 }, (_, i) => ({
    id: `event-${i + 1}`,
    src: `/placeholder.svg?height=300&width=400`,
    alt: `Event image ${i + 1}`,
    title: `School Event ${i + 1}`,
  })),
  sports: Array.from({ length: 8 }, (_, i) => ({
    id: `sports-${i + 1}`,
    src: `/placeholder.svg?height=300&width=400`,
    alt: `Sports image ${i + 1}`,
    title: `Sports Activity ${i + 1}`,
  })),
  classroom: Array.from({ length: 8 }, (_, i) => ({
    id: `classroom-${i + 1}`,
    src: `/placeholder.svg?height=300&width=400`,
    alt: `Classroom image ${i + 1}`,
    title: `Classroom Activity ${i + 1}`,
  })),
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
    title: string
  }>(null)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=400&width=1600"
          width={1600}
          height={400}
          alt="School gallery"
          className="w-full h-[400px] object-cover"
        />
        <div className="container relative z-20 mx-auto px-4 py-16 sm:px-6 lg:flex lg:h-[400px] lg:items-center lg:px-8">
          <div className="max-w-2xl text-center sm:text-left text-white">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Photo Gallery</h1>
            <p className="mt-4 max-w-lg text-xl">
              Explore our school through images capturing campus life, events, and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="campus" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="campus">Campus</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="classroom">Classroom</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="campus">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData.campus.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative h-64">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="text-sm font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData.events.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative h-64">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="text-sm font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sports">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData.sports.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative h-64">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="text-sm font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="classroom">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryData.classroom.map((image) => (
                  <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative h-64">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="text-sm font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white z-10 bg-black/50 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="bg-white p-2 rounded-lg">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Gallery</h2>
            <p className="text-lg text-gray-700">
              Watch videos showcasing our school events, student performances, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md">
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-medium mb-1">School Video {i + 1}</h3>
                  <p className="text-sm text-gray-600">Description of the video content goes here.</p>
                  <Button variant="link" className="p-0 h-auto mt-2 text-blue-600">
                    Watch Video
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Experience Our School in Person</h2>
            <p className="text-xl mb-8">Visit our campus to see our facilities and meet our faculty and students.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
