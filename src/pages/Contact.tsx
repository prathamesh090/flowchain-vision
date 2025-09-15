import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/components/layout/PageTransition';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    companySize: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const industries = [
    'Retail & E-commerce',
    'Healthcare & Pharma',
    'Automotive',
    'FMCG & Food',
    'Technology & Electronics',
    'Manufacturing',
    'Other'
  ];

  const companySizes = [
    'Startup (1-10 employees)',
    'Small (11-50 employees)',
    'Medium (51-200 employees)',
    'Large (201-1000 employees)',
    'Enterprise (1000+ employees)'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Office Address',
      details: [
        '123 Business District',
        'Tech City, TC 12345',
        'United States'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: ['+1 (555) 123-4567']
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: ['contact@chainlinkpro.com']
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9AM - 6PM EST',
        'Saturday: 10AM - 2PM EST',
        'Sunday: Closed'
      ]
    }
  ];

  const alternativeContacts = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our team in real-time',
      action: 'Start Chat',
      available: true
    },
    {
      icon: CalendarDaysIcon,
      title: 'Schedule Demo',
      description: 'Book a 15-minute product demo',
      action: 'Book Demo',
      available: true
    },
    {
      icon: QuestionMarkCircleIcon,
      title: 'Help Center',
      description: 'Browse our knowledge base',
      action: 'Visit Help Center',
      available: true
    }
  ];

  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-16 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
          <Card className="card-elevated max-w-md w-full mx-4">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <Button 
                className="btn-hero w-full"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-highlight/30 to-secondary/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <nav className="text-sm text-muted-foreground mb-4">
                <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Contact</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your supply chain? Let's talk about how ChainLink Pro can help your business.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company">Company Name *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your company"
                            className={errors.company ? 'border-destructive' : ''}
                          />
                          {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="industry">Industry</Label>
                          <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              {industries.map(industry => (
                                <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="companySize">Company Size</Label>
                          <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              {companySizes.map(size => (
                                <SelectItem key={size} value={size}>{size}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your supply chain challenges and how we can help..."
                          rows={5}
                          className={errors.message ? 'border-destructive' : ''}
                        />
                        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                      </div>
                      
                      <Button type="submit" className="w-full btn-hero">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="card-elevated">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, i) => (
                                <p key={i} className="text-muted-foreground">{detail}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Alternative Contact Methods */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    {alternativeContacts.map((contact, index) => (
                      <Card key={index} className="card-elevated group hover:shadow-primary transition-all duration-300 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                <contact.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{contact.title}</h4>
                                <p className="text-sm text-muted-foreground">{contact.description}</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="group-hover:btn-hero transition-all">
                              {contact.action}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <Card className="card-elevated">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-highlight to-secondary/50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPinIcon className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">📍 123 Business District, Tech City</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;