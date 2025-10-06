import ecoProducts from '@/assets/eco-products.jpeg';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={ecoProducts}
              alt="Sustainable beauty products collection"
              className="rounded-2xl shadow-eco w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium">
              About BioBeauty
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Pioneering Bio-Based Ingredients for a 
              <span className="gradient-text"> Sustainable Beauty Industry</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The beauty industry relies on unsustainable petrochemical-derived ingredients that release toxins, 
              produce carcinogenic by-products like 1,4-dioxane, and have a massive carbon footprint.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're changing that with next-generation bio-based ingredients that are biodegradable, 
              toxin-free, high-performing, and aligned with major industry goals.
            </p>

            {/* Mission Alignment */}
            <div className="bg-card p-6 rounded-xl border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Aligned with Industry Leaders
              </h3>
              <p className="text-muted-foreground">
                Our solutions directly support L'Oréal's commitment to 100% eco-designed formulas by 2030, 
                providing true petrochemical substitution with regulatory compliance and scalability.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-medium">100% Biodegradable</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-medium">Toxin-Free</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-medium">High Performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-foreground font-medium">Scalable Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;