import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to the UFO Enthusiasts Hub</h1>
          <p className="text-2xl mt-4">Explore the unknown</p>
        </div>
      </section>

      <section className="about text-center py-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">We are dedicated to exploring and sharing information about UFO sightings and related phenomena. Join us in our quest to uncover the mysteries of the universe.</p>
      </section>

      <section className="latest-sightings py-8">
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

      <footer className="footer py-8 text-center">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Button variant="link">Facebook</Button>
          <Button variant="link">Twitter</Button>
          <Button variant="link">Instagram</Button>
        </div>
        <p className="mt-4">Contact us: info@ufohub.com</p>
      </footer>
    </div>
  );
};

export default Index;
    
