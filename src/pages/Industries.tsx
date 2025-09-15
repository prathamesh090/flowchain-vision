import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShoppingBagIcon,
  HeartIcon,
  TruckIcon,
  CubeIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/components/layout/PageTransition';

const Industries: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Manufacturing', 'Retail', 'Healthcare', 'Automotive', 'Technology', 'Food & Beverage'];

  const industries = [
    {
      id: 'retail',
      icon: ShoppingBagIcon,
      title: 'Retail & E-commerce',
      category: 'Retail',
      description: 'Optimize inventory management and demand forecasting for seasonal fluctuations and trending products.',
      challenges: [
        'Seasonal demand variations',
        'Fast fashion cycles',
        'Multi-channel inventory',
        'Customer expectation management'
      ],
      solutions: [
        'Real-time demand sensing',
        'Automated replenishment',
        'Cross-channel visibility',
        'Trend-based forecasting'
      ],
      metrics: {
        improvement: '45%',
        metric: 'Inventory Turnover',
        companies: '150+'
      },
      caseStudy: 'Fashion retailer reduced stockouts by 60% during peak season'
    },
    {
      id: 'healthcare',
      icon: HeartIcon,
      title: 'Healthcare & Pharma',
      category: 'Healthcare',
      description: 'Ensure compliance and traceability while maintaining critical inventory levels for life-saving products.',
      challenges: [
        'Regulatory compliance (FDA)',
        'Temperature-sensitive products',
        'Batch tracking requirements',
        'Recall management'
      ],
      solutions: [
        'Compliance monitoring',
        'Cold chain management',
        'Automated batch tracking',
        'Recall automation'
      ],
      metrics: {
        improvement: '99.9%',
        metric: 'Compliance Rate',
        companies: '85+'
      },
      caseStudy: 'Pharma company achieved 100% batch traceability compliance'
    },
    {
      id: 'automotive',
      icon: TruckIcon,
      title: 'Automotive',
      category: 'Automotive',
      description: 'Manage complex supplier networks and ensure just-in-time delivery for manufacturing operations.',
      challenges: [
        'Just-in-time delivery',
        'Complex part dependencies',
        'Supplier tier management',
        'Quality control integration'
      ],
      solutions: [
        'JIT optimization',
        'Dependency mapping',
        'Tier visibility',
        'Quality integration'
      ],
      metrics: {
        improvement: '35%',
        metric: 'Lead Time Reduction',
        companies: '120+'
      },
      caseStudy: 'Auto manufacturer reduced production delays by 40%'
    },
    {
      id: 'fmcg',
      icon: CubeIcon,
      title: 'FMCG & Food',
      category: 'Food & Beverage',
      description: 'Handle perishable goods with optimized shelf-life management and regulatory compliance.',
      challenges: [
        'Shelf-life optimization',
        'Food safety regulations',
        'Seasonal demand spikes',
        'Waste reduction'
      ],
      solutions: [
        'Expiry date tracking',
        'Safety compliance tools',
        'Demand smoothing',
        'Waste analytics'
      ],
      metrics: {
        improvement: '50%',
        metric: 'Waste Reduction',
        companies: '200+'
      },
      caseStudy: 'Food distributor cut waste by 55% with smart forecasting'
    },
    {
      id: 'technology',
      icon: ComputerDesktopIcon,
      title: 'Technology & Electronics',
      category: 'Technology',
      description: 'Navigate component shortages and manage complex global supplier networks.',
      challenges: [
        'Component shortage prediction',
        'Rapid product lifecycles',
        'Global supplier coordination',
        'Quality assurance'
      ],
      solutions: [
        'Shortage alerts',
        'Lifecycle planning',
        'Global coordination',
        'Quality tracking'
      ],
      metrics: {
        improvement: '40%',
        metric: 'Component Availability',
        companies: '90+'
      },
      caseStudy: 'Tech company avoided $2M in shortage costs'
    },
    {
      id: 'manufacturing',
      icon: WrenchScrewdriverIcon,
      title: 'Packaging & Materials',
      category: 'Manufacturing',
      description: 'Optimize material sourcing and promote circular economy practices.',
      challenges: [
        'Sustainability tracking',
        'Material cost optimization',
        'Circular economy integration',
        'Environmental compliance'
      ],
      solutions: [
        'Sustainability metrics',
        'Cost optimization',
        'Circular tracking',
        'Environmental monitoring'
      ],
      metrics: {
        improvement: '30%',
        metric: 'Sustainability Score',
        companies: '180+'
      },
      caseStudy: 'Packaging firm achieved carbon-neutral supply chain'
    }
  ];

  const filteredIndustries = activeFilter === 'All' 
    ? industries 
    : industries.filter(industry => industry.category === activeFilter);

  const successStories = [
    {
      year: '2021',
      company: 'Global Retailer',
      achievement: 'Reduced inventory costs by $50M',
      industry: 'Retail'
    },
    {
      year: '2022',
      company: 'Pharma Leader',
      achievement: 'Achieved 100% regulatory compliance',
      industry: 'Healthcare'
    },
    {
      year: '2023',
      company: 'Auto Manufacturer',
      achievement: 'Eliminated production delays',
      industry: 'Automotive'
    },
    {
      year: '2024',
      company: 'Food Distributor',
      achievement: 'Cut waste by 60% with AI forecasting',
      industry: 'Food & Beverage'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-secondary/20 to-highlight/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <nav className="text-sm text-muted-foreground mb-4">
                <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Industries</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Industries We Transform
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Specialized solutions for diverse supply chain challenges across sectors
              </p>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(filter)}
                    className={activeFilter === filter ? 'btn-hero' : ''}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((industry) => (
                <Card key={industry.id} className="card-elevated group hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <industry.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{industry.metrics.companies}</div>
                        <div className="text-xs text-muted-foreground">companies</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-6">
                      {/* Challenges */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Challenges</h4>
                        <ul className="space-y-1">
                          {industry.challenges.slice(0, 2).map((challenge, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Solutions */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Our Solutions</h4>
                        <ul className="space-y-1">
                          {industry.solutions.slice(0, 2).map((solution, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center">
                              <CheckCircleIcon className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Metrics */}
                      <div className="bg-highlight/50 rounded-lg p-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">
                            {industry.metrics.improvement}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {industry.metrics.metric}
                          </div>
                        </div>
                      </div>
                      
                      {/* Case Study */}
                      <div className="border-t pt-4">
                        <div className="text-sm text-muted-foreground italic">
                          "{industry.caseStudy}"
                        </div>
                      </div>
                      
                      <Button className="w-full btn-hero group">
                        Learn More
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Timeline */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Success Stories Timeline
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from real companies across industries
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {successStories.map((story, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <Card className="card-elevated">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{story.year}</div>
                          <div className="font-semibold text-foreground mb-1">{story.company}</div>
                          <div className="text-muted-foreground mb-2">{story.achievement}</div>
                          <div className="text-sm text-accent">{story.industry}</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-4 h-4 bg-gradient-primary rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join industry leaders who've revolutionized their supply chains
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-4">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Industries;