import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BuildingOfficeIcon, 
  TruckIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/components/layout/PageTransition';

const Features: React.FC = () => {
  const features = [
    {
      id: 'forecasting',
      icon: ChartBarIcon,
      title: 'AI Demand Forecasting',
      description: 'Advanced machine learning algorithms analyze historical data, market trends, and external factors to predict demand with 95% accuracy.',
      benefits: [
        'Reduce inventory costs by 30%',
        'Minimize stockouts and overstock',
        'Improve cash flow management',
        'Real-time demand signals'
      ],
      metrics: ['95% accuracy', '30% inventory reduction', '24/7 monitoring'],
      cta: 'Try Demo'
    },
    {
      id: 'risk',
      icon: ShieldCheckIcon,
      title: 'Risk Assessment & Analytics',
      description: 'Comprehensive risk management with real-time monitoring, supplier scoring, and proactive mitigation strategies.',
      benefits: [
        'Early warning system for disruptions',
        'Supplier reliability scoring',
        'Geopolitical risk analysis',
        'Automated contingency planning'
      ],
      metrics: ['99% uptime', '40% risk reduction', 'Real-time alerts'],
      cta: 'View Sample Report'
    },
    {
      id: 'directory',
      icon: BuildingOfficeIcon,
      title: 'Manufacturer Directory & Networking',
      description: 'Connect with verified manufacturers and suppliers worldwide through our comprehensive directory platform.',
      benefits: [
        'Access to 10,000+ verified suppliers',
        'Quality certification tracking',
        'Streamlined RFQ process',
        'Secure communication platform'
      ],
      metrics: ['10,000+ suppliers', '95% match rate', '50+ countries'],
      cta: 'Explore Directory'
    },
    {
      id: 'logistics',
      icon: TruckIcon,
      title: 'Inventory & Logistics Tracking',
      description: 'End-to-end visibility of your inventory and shipments with real-time tracking and automated reporting.',
      benefits: [
        'Real-time shipment tracking',
        'Automated inventory updates',
        'Performance analytics',
        'Integration with major carriers'
      ],
      metrics: ['100% visibility', '25% faster delivery', '15+ integrations'],
      cta: 'Calculate Savings'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic demand forecasting',
        'Up to 100 SKUs',
        'Email support',
        'Basic reporting'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Advanced AI forecasting',
        'Up to 10,000 SKUs',
        'Risk assessment tools',
        'Priority support',
        'Custom integrations',
        'Advanced analytics'
      ],
      cta: 'Start Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited SKUs',
        'Full platform access',
        'Dedicated support team',
        'Custom development',
        'SLA guarantees',
        'White-label options'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <nav className="text-sm text-muted-foreground mb-4">
                <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Features</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Powerful Features for Supply Chain Excellence
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive tools to optimize your entire supply chain operation
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  id={feature.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {feature.metrics.map((metric, i) => (
                        <div key={i} className="px-3 py-1 bg-highlight rounded-full text-sm font-medium text-primary">
                          {metric}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="btn-hero">
                      {feature.cta}
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Visual/Mockup */}
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-highlight to-secondary/50 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-center">
                        <feature.icon className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                        <div className="text-muted-foreground">
                          {feature.title} Dashboard Preview
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-muted-foreground">
                Scale with confidence - upgrade or downgrade anytime
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`card-elevated relative ${plan.popular ? 'ring-2 ring-primary shadow-primary' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircleIcon className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'btn-hero' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Features;