import { Card } from '@/components/ui/card';

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium mb-4">
            Environmental Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforming the Industry's 
            <span className="gradient-text"> Environmental Footprint</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our bio-based ingredients deliver measurable environmental benefits while supporting 
            industry-wide sustainability goals and regulatory compliance.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-eco text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <div className="stat-number text-success">50-70%</div>
              <div className="text-sm text-muted-foreground">Lower Carbon Footprint</div>
            </div>
            <p className="text-xs text-muted-foreground">
              Compared to traditional petrochemical ingredients
            </p>
          </Card>

          <Card className="card-eco text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <div className="stat-number text-success">100%</div>
              <div className="text-sm text-muted-foreground">Biodegradable</div>
            </div>
            <p className="text-xs text-muted-foreground">
              Complete breakdown within 28 days
            </p>
          </Card>

          <Card className="card-eco text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <div className="stat-number text-success">0</div>
              <div className="text-sm text-muted-foreground">Toxic By-products</div>
            </div>
            <p className="text-xs text-muted-foreground">
              No 1,4-dioxane or carcinogenic compounds
            </p>
          </Card>

          <Card className="card-eco text-center group hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
              <div className="stat-number text-success">80%</div>
              <div className="text-sm text-muted-foreground">Waste Utilization</div>
            </div>
            <p className="text-xs text-muted-foreground">
              Sourced from agricultural waste streams
            </p>
          </Card>
        </div>

        {/* Environmental Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="card-eco">
            <h3 className="text-2xl font-bold mb-6 text-primary">Carbon Footprint Reduction</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Traditional Glycolic Acid</span>
                  <span className="text-destructive font-bold">High Impact</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-destructive h-3 rounded-full w-full"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Petroleum-derived, energy-intensive synthesis</p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Bio-Fermented Glycolic Acid</span>
                  <span className="text-success font-bold">Low Impact</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-success h-3 rounded-full w-3/10"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Renewable feedstock, efficient fermentation</p>
              </div>

              <div className="bg-accent/50 p-4 rounded-lg">
                <div className="text-lg font-bold text-success">60-70% Reduction</div>
                <div className="text-sm text-muted-foreground">In greenhouse gas emissions</div>
              </div>
            </div>
          </Card>

          <Card className="card-eco">
            <h3 className="text-2xl font-bold mb-6 text-primary">Sustainability Alignment</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">L'Oréal Green Sciences 2030</h4>
                  <p className="text-sm text-muted-foreground">100% eco-designed formulas by 2030</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">UN Sustainable Development Goals</h4>
                  <p className="text-sm text-muted-foreground">Supporting SDG 12: Responsible Consumption</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">EU Green Deal Compliance</h4>
                  <p className="text-sm text-muted-foreground">Meeting circular economy requirements</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Corporate ESG Goals</h4>
                  <p className="text-sm text-muted-foreground">Supporting investor environmental mandates</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Lifecycle Benefits */}
        <div className="bg-gradient-earth p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Complete Lifecycle Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Renewable Sourcing</h4>
              <p className="text-sm text-muted-foreground">
                Agricultural waste and renewable feedstocks replace petroleum-based inputs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Clean Production</h4>
              <p className="text-sm text-muted-foreground">
                Efficient bio-fermentation processes with minimal energy and water usage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-bold mb-2">Complete Biodegradation</h4>
              <p className="text-sm text-muted-foreground">
                Full breakdown into harmless compounds without environmental accumulation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;