import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, BookOpen, Search, ArrowRight, Users, Gavel, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-rose-100 rounded-full">
                <Scale className="h-12 w-12 text-rose-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Know Your <span className="text-rose-600">Legal Rights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RAKSHA (rights-awareness-knowledge-safety-hope-action)
              <br /> Understanding your rights is the first step towards justice and equality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-6">
                <Link to="/constitutional-rights">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explore Constitutional Rights
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-rose-300 text-rose-700 hover:bg-rose-50">
                <Link to="/criminal-laws">
                  <Shield className="mr-2 h-5 w-5" />
                  Learn Criminal Laws
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legal Knowledge at Your Fingertips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive information about your constitutional rights and legal protections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-rose-500">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
                  <BookOpen className="h-6 w-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Constitutional Rights</CardTitle>
                <CardDescription>
                  Learn about Articles 14, 15, 16, 19, and 21 that guarantee fundamental rights and equality for women
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Right to Equality (Article 14)</li>
                  <li>• Prohibition of Discrimination (Article 15)</li>
                  <li>• Equal Employment Opportunities (Article 16)</li>
                  <li>• Fundamental Freedoms (Article 19)</li>
                  <li>• Right to Life and Liberty (Article 21)</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/constitutional-rights">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Criminal Law Protection</CardTitle>
                <CardDescription>
                  Understand laws that protect women from violence, harassment, and discrimination
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Domestic Violence Act, 2005</li>
                  <li>• Sexual Harassment Act, 2013</li>
                  <li>• Indian Penal Code Sections</li>
                  <li>• Dowry Prohibition Act</li>
                  <li>• Anti-Trafficking Laws</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/criminal-laws">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Search & Discover</CardTitle>
                <CardDescription>
                  Find specific laws, articles, and legal provisions relevant to your situation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Search by keywords</li>
                  <li>• Filter by law type</li>
                  <li>• Quick reference guides</li>
                  <li>• Related case studies</li>
                  <li>• Practical applications</li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/search">
                    Search Laws <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-rose-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50%</div>
              <p className="text-gray-600">Of India's population are women who deserve equal rights and protection</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="h-8 w-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <p className="text-gray-600">Key laws and constitutional articles protecting women's rights</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600">Helpline support available for women in distress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Legal Awareness Journey Today
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Knowledge of your rights is your strongest defense. Begin learning about the laws that protect and empower you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6">
              <Link to="/constitutional-rights">
                Begin Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600 px-8 py-6">
              <Link to="/search">
                Search Specific Laws
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;