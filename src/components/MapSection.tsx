const MapSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Find Us Here
          </h2>
          <p className="text-lg text-muted-foreground">
            Visit our workshop in Chennai
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps?q=Muthu+Suspension+Works,1,113,Medavakkam+Main+Rd,Vanuvampet,Ullagaram,Chennai,Tamil+Nadu+600091&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muthu Suspension Works Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
