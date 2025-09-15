import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  TruckIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/components/layout/PageTransition';
import heroNetwork from '@/assets/hero-network.jpg';

const Home: React.FC = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'AI Demand Forecasting',
      description: '95% accuracy in predicting demand patterns using advanced machine learning algorithms.',
      link: '/features#forecasting'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Assessment',
      description: 'Real-time risk analysis and mitigation strategies for your entire supply chain.',
      link: '/features#risk'
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Supplier Directory',
      description: 'Connect with verified manufacturers and suppliers worldwide.',
      link: '/directory'
    },
    {
      icon: TruckIcon,
      title: 'Logistics Tracking',
      description: 'End-to-end visibility of your inventory and shipments.',
      link: '/features#logistics'
    }
  ];

  const industries = [
    { name: 'Retail & E-commerce', count: '150+', color: 'from-primary to-accent' },
    { name: 'Healthcare & Pharma', count: '85+', color: 'from-accent to-secondary' },
    { name: 'Automotive', count: '120+', color: 'from-secondary to-highlight' },
    { name: 'FMCG & Food', count: '200+', color: 'from-primary to-secondary' },
    { name: 'Technology', count: '90+', color: 'from-accent to-highlight' },
    { name: 'Manufacturing', count: '180+', color: 'from-primary to-accent' }
  ];

  const testimonials = [
    {
      quote: "ChainLink Pro transformed our supply chain efficiency by 40%. The AI forecasting is incredibly accurate.",
      author: "Sarah Johnson",
      role: "Supply Chain Director",
      company: "TechCorp Industries",
      rating: 5
    },
    {
      quote: "The risk assessment features helped us avoid major disruptions during the global supply crisis.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "Global Manufacturing",
      rating: 5
    },
    {
      quote: "Finding reliable suppliers has never been easier. The directory is comprehensive and trustworthy.",
      author: "Emily Rodriguez",
      role: "Procurement Lead",
      company: "Healthcare Solutions",
      rating: 5
    }
  ];

  const stats = [
    { value: '500+', label: 'Companies Trust Us' },
    { value: '99.2%', label: 'Forecast Accuracy' },
    { value: '24/7', label: 'Support Available' },
    { value: '45%', label: 'Cost Reduction' }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroNetwork})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-hero/90"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Smart Supply Chain
                <span className="block text-highlight">Solutions for Modern Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                AI-powered demand forecasting, risk assessment, and supplier connections 
                for manufacturers, wholesalers & retailers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="btn-hero text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                  Explore Directory
                </Button>
                <Button size="lg" variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                  View Features
                </Button>
              </div>
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features for Supply Chain Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools to optimize your entire supply chain operation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Link 
                  key={index} 
                  to={feature.link}
                  className="group"
                >
                  <Card className="card-elevated h-full hover:shadow-primary transition-all duration-300 group-hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Preview */}
        <section className="py-16 bg-gradient-to-br from-highlight/20 to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Transform
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized solutions for diverse supply chain challenges
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl bg-gradient-to-br ${industry.color} text-white text-center hover:scale-105 transition-transform cursor-pointer`}
                >
                  <div className="text-2xl font-bold mb-2">{industry.count}</div>
                  <div className="text-sm font-medium">{industry.name}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/industries">
                <Button size="lg" className="btn-hero">
                  View All Industries
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Join hundreds of companies optimizing their supply chains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-muted-foreground mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ companies already optimizing their operations with ChainLink Pro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;