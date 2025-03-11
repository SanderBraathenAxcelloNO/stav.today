"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Gamepad2, Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const callouts = [
  {
    name: '',
    description: '',
    imageSrc: 'klipp-3.jpg',
    imageAlt: '',
    href: '#',
  },
  {
    name: '',
    description: '',
    imageSrc: '/klipp-1.jpg',
    imageAlt: '',
    href: '#',
  },
  {
    name: '',
    description: '',
    imageSrc: 'klipp-4.jpg',
    imageAlt: '',
    href: '#',
  },
]

const calloutsGaming = [
  {
    name: '',
    description: '',
    imageSrc: '/Gaming-1.jpg',
    imageAlt: '',
    href: '#',
  },
  {
    name: '',
    description: '',
    imageSrc: '/Gaming-2.jpg',
    imageAlt: '',
    href: '#',
  },
]
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80')",
            opacity: 0.7
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Stav.Today</h1>
          <p className="text-xl max-w-2xl">Velkommen til Stav ungdomsskole sin helt egene hjemmeside!</p>
        </div>
      </div>

    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Barber shop</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Gaming Rom</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {calloutsGaming.map((calloutsGaming) => (
              <div key={calloutsGaming.name} className="group relative">
                <img
                  alt={calloutsGaming.imageAlt}
                  src={calloutsGaming.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={calloutsGaming.href}>
                    <span className="absolute inset-0" />
                    {calloutsGaming.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{calloutsGaming.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  



      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="barber" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="barber" className="text-lg">
              <Scissors className="mr-2 h-5 w-5" />
              Barber Shop
            </TabsTrigger>
            <TabsTrigger value="gaming" className="text-lg">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Gaming Room
            </TabsTrigger>
          </TabsList>

          <TabsContent value="barber">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Åpnings tider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Mandag - Fredag: 11:50 - 12:15</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scissors className="mr-2 h-5 w-5" />
                    Tjenester
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Hårklipp - Kr30</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Nå
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p></p>
                  <a
  href="https://outlook.office365.com/book/Stavtoday1@lillestrom.onmicrosoft.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button className="w-full">Gå til booking</Button>
</a>

                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gaming">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Gaming rom setup
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>PS5</li>
                    <li>Nintendo Switch</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Åpnings tider
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                  <li>Mandag - Fredag: 11:50 - 12:15</li>
                  <li>NB! Det er rullering på hvem som har rommene de forskjellige dagene</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
              <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Nå
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p></p>
                  <a
  href="https://outlook.office365.com/book/Stavtoday1@lillestrom.onmicrosoft.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  <Button className="w-full">Gå til booking</Button>
</a>

                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Location Section */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
 
          <p className="text-muted-foreground">© 2022-2024 Stav.today | This website is hosted by Axcello.net </p>
        </div>
      </div>
    </main>
  );
}