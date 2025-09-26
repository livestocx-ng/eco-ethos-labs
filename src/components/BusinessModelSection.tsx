import { Card } from '@/components/ui/card';

const BusinessModelSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium mb-4">
            Business Model
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Three Revenue Streams for 
            <span className="gradient-text"> Maximum Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diversified approach ensures rapid market penetration while demonstrating 
            the real-world potential of our sustainable ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* B2B Ingredient Supply */}
          <Card className="card-eco group hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-eco rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">B2B Ingredient Supply</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-center">
              Direct supply of bio-based surfactants and glycolic acid to major beauty manufacturers 
              like L'Oréal, Unilever, and P&G.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Target Customers:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Multinational beauty conglomerates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Premium skincare brands
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Private label manufacturers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sustainable beauty startups
                </li>
              </ul>

              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">$50M+</div>
                <div className="text-sm text-muted-foreground">Projected annual revenue by Year 3</div>
              </div>
            </div>
          </Card>

          {/* Licensing Green Formulations */}
          <Card className="card-eco group hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-eco rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Licensing Green Formulations</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-center">
              Licensing complete eco-friendly formulations to partner brands, enabling rapid market 
              entry with proven sustainable solutions.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Key Offerings:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Complete shampoo formulations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Anti-aging serum recipes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Makeup remover solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Custom formulation development
                </li>
              </ul>

              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">15-25%</div>
                <div className="text-sm text-muted-foreground">Royalty on licensed products</div>
              </div>
            </div>
          </Card>

          {/* D2C Eco-Beauty Line */}
          <Card className="card-eco group hover:scale-[1.02] transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-eco rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">D2C Eco-Beauty Line</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 text-center">
              Direct-to-consumer products showcasing our ingredients' potential while building 
              brand awareness and consumer trust.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Product Portfolio:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Gentle cleansing shampoos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Premium glycolic acid serums
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Eco-friendly makeup removers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Sustainable body care
                </li>
              </ul>

              <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">40-60%</div>
                <div className="text-sm text-muted-foreground">Gross margins on D2C products</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Strategic Advantages */}
        <div className="mt-16 bg-gradient-earth p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Strategic Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Rapid Scale</h4>
              <p className="text-sm text-muted-foreground">Multiple revenue streams enable faster market penetration</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Market Validation</h4>
              <p className="text-sm text-muted-foreground">D2C line proves consumer acceptance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Recurring Revenue</h4>
              <p className="text-sm text-muted-foreground">Licensing provides predictable income streams</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Global Reach</h4>
              <p className="text-sm text-muted-foreground">B2B partnerships enable worldwide distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;