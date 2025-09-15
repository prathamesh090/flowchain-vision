import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MagnifyingGlassIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  StarIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import PageTransition from '@/components/layout/PageTransition';

const Directory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const manufacturers = [
    {
      id: 1,
      name: 'TechComponents Ltd',
      location: 'Shenzhen, China',
      category: 'Electronics',
      size: 'Large',
      capacity: '10M+ units/month',
      rating: 4.8,
      reviews: 127,
      certifications: ['ISO 9001', 'RoHS', 'CE'],
      specialties: ['Semiconductors', 'PCB Assembly', 'IoT Devices'],
      logo: '🔧',
      established: '2008',
      employees: '5000+'
    },
    {
      id: 2,
      name: 'GreenPack Solutions',
      location: 'Munich, Germany',
      category: 'Packaging',
      size: 'Medium',
      capacity: '5M+ units/month',
      rating: 4.9,
      reviews: 89,
      certifications: ['FSC', 'ISO 14001', 'BRC'],
      specialties: ['Sustainable Packaging', 'Biodegradable Materials', 'Custom Design'],
      logo: '📦',
      established: '2015',
      employees: '500-1000'
    },
    {
      id: 3,
      name: 'MediSupply Corp',
      location: 'Boston, USA',
      category: 'Healthcare',
      size: 'Large',
      capacity: '2M+ units/month',
      rating: 4.7,
      reviews: 156,
      certifications: ['FDA', 'ISO 13485', 'GMP'],
      specialties: ['Medical Devices', 'Surgical Instruments', 'Diagnostics'],
      logo: '🏥',
      established: '1995',
      employees: '2000+'
    },
    {
      id: 4,
      name: 'AutoParts International',
      location: 'Guadalajara, Mexico',
      category: 'Automotive',
      size: 'Large',
      capacity: '1M+ parts/month',
      rating: 4.6,
      reviews: 203,
      certifications: ['IATF 16949', 'ISO 9001', 'VDA'],
      specialties: ['Engine Components', 'Transmission Parts', 'Electronics'],
      logo: '🚗',
      established: '2003',
      employees: '3000+'
    },
    {
      id: 5,
      name: 'FreshFood Distributors',
      location: 'Amsterdam, Netherlands',
      category: 'Food & Beverage',
      size: 'Medium',
      capacity: '500K+ units/month',
      rating: 4.8,
      reviews: 92,
      certifications: ['BRC', 'IFS', 'Organic'],
      specialties: ['Organic Produce', 'Frozen Foods', 'Dairy Products'],
      logo: '🥬',
      established: '2010',
      employees: '200-500'
    },
    {
      id: 6,
      name: 'TextilePro Manufacturing',
      location: 'Istanbul, Turkey',
      category: 'Textiles',
      size: 'Medium',
      capacity: '2M+ units/month',
      rating: 4.5,
      reviews: 74,
      certifications: ['OEKO-TEX', 'GOTS', 'ISO 9001'],
      specialties: ['Sustainable Fabrics', 'Technical Textiles', 'Fashion'],
      logo: '🧵',
      established: '2001',
      employees: '1000+'
    },
    {
      id: 7,
      name: 'ChemPure Industries',
      location: 'Mumbai, India',
      category: 'Chemicals',
      size: 'Large',
      capacity: '50K+ tons/month',
      rating: 4.4,
      reviews: 111,
      certifications: ['ISO 9001', 'OHSAS 18001', 'ISO 14001'],
      specialties: ['Industrial Chemicals', 'Specialty Chemicals', 'Polymers'],
      logo: '⚗️',
      established: '1987',
      employees: '4000+'
    },
    {
      id: 8,
      name: 'MetalCraft Solutions',
      location: 'Birmingham, UK',
      category: 'Metals',
      size: 'Medium',
      capacity: '10K+ tons/month',
      rating: 4.7,
      reviews: 66,
      certifications: ['ISO 9001', 'AS9100', 'NADCAP'],
      specialties: ['Precision Machining', 'Casting', 'Surface Treatment'],
      logo: '🔩',
      established: '1978',
      employees: '800+'
    }
  ];

  const locations = ['All Locations', 'China', 'Germany', 'USA', 'Mexico', 'Netherlands', 'Turkey', 'India', 'UK'];
  const categories = ['All Categories', 'Electronics', 'Packaging', 'Healthcare', 'Automotive', 'Food & Beverage', 'Textiles', 'Chemicals', 'Metals'];
  const sizes = ['All Sizes', 'Small', 'Medium', 'Large', 'Enterprise'];

  const filteredManufacturers = manufacturers.filter(manufacturer => {
    const matchesSearch = searchQuery === '' || 
      manufacturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      manufacturer.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === '' || selectedLocation === 'All Locations' ||
      manufacturer.location.includes(selectedLocation);
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All Categories' ||
      manufacturer.category === selectedCategory;
    
    const matchesSize = selectedSize === '' || selectedSize === 'All Sizes' ||
      manufacturer.size === selectedSize;
    
    return matchesSearch && matchesLocation && matchesCategory && matchesSize;
  });

  const handleConnectionRequest = (manufacturerName: string) => {
    // This would open a modal or navigate to a contact form
    alert(`Connection request sent to ${manufacturerName}!`);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-accent/20 to-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <nav className="text-sm text-muted-foreground mb-4">
                <span>Home</span> <span className="mx-2">&gt;</span> <span className="text-primary">Directory</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Manufacturer Directory
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Connect with verified manufacturers and suppliers worldwide
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by product, location, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map(size => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Showing {filteredManufacturers.length} of {manufacturers.length} manufacturers</span>
                <div className="flex items-center gap-2">
                  <FunnelIcon className="w-4 h-4" />
                  <span>Sort by: Relevance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturers Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredManufacturers.map((manufacturer) => (
                <Card key={manufacturer.id} className="card-elevated group hover:shadow-primary transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{manufacturer.logo}</div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {manufacturer.name}
                          </CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            {manufacturer.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center">
                          <StarIcon className="w-4 h-4 text-accent fill-current mr-1" />
                          <span className="font-semibold">{manufacturer.rating}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          ({manufacturer.reviews} reviews)
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">{manufacturer.category}</Badge>
                      <Badge variant="outline">{manufacturer.capacity}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-1">
                          {manufacturer.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Certifications */}
                      <div>
                        <h4 className="font-semibold text-sm text-foreground mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-1">
                          {manufacturer.certifications.map((cert, i) => (
                            <div key={i} className="flex items-center text-xs text-primary">
                              <CheckBadgeIcon className="w-3 h-3 mr-1" />
                              {cert}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Company Info */}
                      <div className="bg-highlight/30 rounded-lg p-3">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-muted-foreground">Est.</span>
                            <span className="font-semibold ml-1">{manufacturer.established}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Employees</span>
                            <span className="font-semibold ml-1">{manufacturer.employees}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button 
                          className="flex-1 btn-hero"
                          onClick={() => handleConnectionRequest(manufacturer.name)}
                        >
                          Request Connection
                        </Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredManufacturers.length === 0 && (
              <div className="text-center py-12">
                <BuildingOffice2Icon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No manufacturers found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLocation('');
                    setSelectedCategory('');
                    setSelectedSize('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our team help you find the perfect supplier for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white text-lg px-8 py-4">
                Contact Our Team
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-hero-outline text-lg px-8 py-4">
                Request Custom Search
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Directory;