const MapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Find Us Here
          </h2>
          <p className="text-lg text-muted-foreground">
            1, 113, Medavakkam Main Rd, Vanuvampet, Ullagaram, Chennai, Tamil Nadu 600091
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3738866!2d80.1456!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMDgnNDQuMiJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muthu Suspension Works Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
