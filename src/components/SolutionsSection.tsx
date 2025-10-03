import ProductMockup from '@/assets/mockup.png';
import labEquipment from '@/assets/lab-equipment.jpg';
import { Card } from '@/components/ui/card';

const SolutionsSection = () => {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium mb-4">
            Our Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Revolutionary 
            <span className="gradient-text"> Bio-Based Ingredients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge alternatives to petrochemical ingredients, delivering superior performance 
            with unprecedented environmental benefits.
          </p>
        </div>

        {/* Lab Image */}
        <div className="mb-16">
          <img 
            src={ProductMockup}
            alt="Professional bio-based cosmetics laboratory"
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-eco"
          />
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Plant-Based Surfactants */}
          <Card className="card-eco group hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-eco rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Plant-Based Surfactants</h3>
              <p className="text-muted-foreground mb-6">
                Biodegradable, non-ethoxylated surfactants derived from renewable feedstocks. 
                Perfect for shampoos, cleansers, and makeup removers without toxic by-products.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Key Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  No 1,4-dioxane formation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  100% biodegradable within 28 days
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Superior foaming properties
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Regulatory compliant globally
                </li>
              </ul>
            </div>
          </Card>

          {/* Bio-Fermented Glycolic Acid */}
          <Card className="card-eco group hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-eco rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Bio-Fermented Glycolic Acid</h3>
              <p className="text-muted-foreground mb-6">
                High-performance anti-aging ingredient produced through sustainable fermentation. 
                Ideal for premium serums and chemical peels with exceptional purity.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Key Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  60-70% lower carbon footprint
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Pharmaceutical-grade purity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Consistent molecular structure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-success rounded-full mr-3"></span>
                  Scalable production from agricultural waste
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Performance Data */}
        <div className="mt-16 bg-gradient-earth p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Performance & Compliance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="stat-number mb-2">99.9%</div>
              <p className="text-muted-foreground">Purity Level</p>
            </div>
            <div className="text-center">
              <div className="stat-number mb-2">28</div>
              <p className="text-muted-foreground">Days to Biodegrade</p>
            </div>
            <div className="text-center">
              <div className="stat-number mb-2">0</div>
              <p className="text-muted-foreground">Toxic By-products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;