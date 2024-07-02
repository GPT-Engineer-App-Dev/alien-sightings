import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/ufo-banner.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to the UFO Enthusiasts Hub</h1>
          <p className="text-2xl mt-4">Explore the unknown</p>
        </div>
      </section>
      <section className="about p-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <p className="mt-4 text-center">We are a community of UFO enthusiasts dedicated to exploring and sharing information about UFO sightings and related phenomena.</p>
      </section>
      <section className="latest-sightings p-8">
        <h2 className="text-3xl font-bold text-center">Latest Sightings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Sighting 1</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/sighting1.jpg" alt="Sighting 1" className="w-full h-48 object-cover" />
              <p className="mt-2">Description of the sighting...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 2</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/sighting2.jpg" alt="Sighting 2" className="w-full h-48 object-cover" />
              <p className="mt-2">Description of the sighting...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sighting 3</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/sighting3.jpg" alt="Sighting 3" className="w-full h-48 object-cover" />
              <p className="mt-2">Description of the sighting...</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="footer p-8 bg-gray-800 text-white text-center">
        <p>Follow us on social media</p>
        <div className="mt-4 space-x-4">
          <Button variant="link" as="a" href="https://facebook.com" target="_blank">Facebook</Button>
          <Button variant="link" as="a" href="https://twitter.com" target="_blank">Twitter</Button>
          <Button variant="link" as="a" href="https://instagram.com" target="_blank">Instagram</Button>
        </div>
        <p className="mt-4">Contact us at <a href="mailto:info@ufohub.com" className="underline">info@ufohub.com</a></p>
      </footer>
    </div>
  );
};

export default Index;