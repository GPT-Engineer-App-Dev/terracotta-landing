import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <header className="text-center py-20 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg')"}}>
        <h1 className="text-5xl font-bold text-white mb-4">Discover China</h1>
        <p className="text-2xl text-white">A Journey Through the Middle Kingdom</p>
      </header>

      {/* Introduction Section */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to China</h2>
        <p className="max-w-2xl mx-auto">
          China, with its rich history spanning over 5,000 years, is a land of diverse landscapes, 
          ancient traditions, and modern marvels. From the iconic Great Wall to the bustling streets 
          of Shanghai, China offers a unique blend of the old and new, making it a fascinating 
          destination for travelers from around the world.
        </p>
      </section>

      {/* Key Highlights Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Chinese Culture" className="w-full h-48 object-cover mb-4" />
              <CardDescription>
                Experience the depth of Chinese culture through its art, festivals, and traditions that have 
                been passed down through generations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Chinese Cuisine" className="w-full h-48 object-cover mb-4" />
              <CardDescription>
                Savor the diverse flavors of Chinese cuisine, from dim sum to Peking duck, each dish 
                telling a story of its regional origins.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Landmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Chinese Landmarks" className="w-full h-48 object-cover mb-4" />
              <CardDescription>
                Marvel at China's iconic landmarks, from the Great Wall to the Terracotta Army, each a 
                testament to the country's rich history.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tourist Attractions Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Top Tourist Attractions</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {['Great Wall', 'Forbidden City', 'Terracotta Army', 'Li River', 'Shanghai Skyline'].map((attraction, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src="/placeholder.svg" alt={attraction} className="w-full h-full object-cover" />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-center">{attraction}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p>Email: info@discoverchinaguide.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">Instagram</Button>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2024 Discover China. All rights reserved.</p>
            <p>Images: Placeholder images used for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;