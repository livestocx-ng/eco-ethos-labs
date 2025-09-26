import marketData from '@/assets/market-data.jpg';
import { Card } from '@/components/ui/card';

const MarketSection = () => {
  return (
    <section id="market" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium mb-4">
            Market Opportunity
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Massive Growth in 
            <span className="gradient-text"> Sustainable Beauty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The convergence of regulatory pressure, consumer demand, and corporate sustainability goals 
            creates an unprecedented opportunity for bio-based ingredients.
          </p>
        </div>

        {/* Market Data Visualization */}
        <div className="mb-16">
          <img 
            src={marketData}
            alt="Market growth data visualization"
            className="w-full h-[400px] object-cover rounded-2xl shadow-eco"
          />
        </div>

        {/* Market Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="card-eco text-center">
            <div className="stat-number mb-2">$14B</div>
            <p className="text-muted-foreground mb-2">Surfactant Market (2023)</p>
            <p className="text-sm text-success font-medium">Growing to $21B by 2030</p>
          </Card>

          <Card className="card-eco text-center">
            <div className="stat-number mb-2">$415M</div>
            <p className="text-muted-foreground mb-2">Glycolic Acid Market (2023)</p>
            <p className="text-sm text-success font-medium">Growing to $760M by 2030</p>
          </Card>

          <Card className="card-eco text-center">
            <div className="stat-number mb-2">60%</div>
            <p className="text-muted-foreground mb-2">Gen Z & Millennials</p>
            <p className="text-sm text-success font-medium">Prefer eco-friendly brands</p>
          </Card>

          <Card className="card-eco text-center">
            <div className="stat-number mb-2">$530B</div>
            <p className="text-muted-foreground mb-2">Total Beauty Industry</p>
            <p className="text-sm text-success font-medium">Shifting to sustainability</p>
          </Card>
        </div>

        {/* Consumer Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="card-eco">
            <h3 className="text-2xl font-bold mb-6 text-primary">Consumer Trends</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Demand for sustainable products</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-muted rounded-full mr-2">
                    <div className="w-16 h-2 bg-gradient-eco rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">67%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Willingness to pay premium for eco-products</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-muted rounded-full mr-2">
                    <div className="w-14 h-2 bg-gradient-eco rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">58%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Read ingredient labels regularly</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-muted rounded-full mr-2">
                    <div className="w-18 h-2 bg-gradient-eco rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">74%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Avoid products with harmful chemicals</span>
                <div className="flex items-center">
                  <div className="w-24 h-2 bg-muted rounded-full mr-2">
                    <div className="w-20 h-2 bg-gradient-eco rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">82%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card-eco">
            <h3 className="text-2xl font-bold mb-6 text-primary">Industry Drivers</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Regulatory Pressure</h4>
                <p className="text-muted-foreground text-sm">
                  Increasing bans on toxic ingredients and stricter environmental regulations across markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Corporate Commitments</h4>
                <p className="text-muted-foreground text-sm">
                  Major brands like L'Oréal committing to 100% eco-designed formulas by 2030.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">ESG Requirements</h4>
                <p className="text-muted-foreground text-sm">
                  Investor pressure for environmental, social, and governance improvements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Supply Chain Resilience</h4>
                <p className="text-muted-foreground text-sm">
                  Reducing dependence on volatile petrochemical markets with sustainable alternatives.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;