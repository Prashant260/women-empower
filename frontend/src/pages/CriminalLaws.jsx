import React, { useState } from 'react';
import { Shield, AlertCircle, Phone, FileText, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Alert, AlertDescription } from '../components/ui/alert';
import { criminalLaws } from '../data/mock';

const CriminalLaws = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-rose-100 rounded-full">
              <Shield className="h-12 w-12 text-rose-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Criminal Laws <span className="text-rose-600">Protecting Women</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive overview of Indian criminal laws designed to protect women from violence, 
            harassment, and discrimination. Know these laws to protect yourself and seek justice.
          </p>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="bg-red-50 border-red-200">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Emergency:</strong> If you are in immediate danger, call <strong>112</strong> for emergency services or <strong>181</strong> for Women Helpline.
              These services are available 24/7 and are confidential.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Laws Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {criminalLaws.map((law) => (
              <Card key={law.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50 pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-rose-100 text-rose-800 px-3 py-1">
                          {law.shortName}
                        </Badge>
                        <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">Criminal Law</span>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 mb-3">{law.act}</CardTitle>
                      <CardDescription className="text-gray-700 text-base leading-relaxed">
                        {law.purpose}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCard(law.id)}
                      className="ml-4 hover:bg-rose-100"
                    >
                      {expandedCard === law.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                      <h4 className="font-semibold text-blue-900 mb-2">Coverage</h4>
                      <p className="text-blue-800 text-sm">{law.coverage}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
                      <h4 className="font-semibold text-orange-900 mb-2">Penalties</h4>
                      <p className="text-orange-800 text-sm">{law.penalties}</p>
                    </div>
                  </div>

                  {expandedCard === law.id && (
                    <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-green-500" />
                          Key Provisions
                        </h4>
                        <ul className="space-y-2">
                          {law.keyProvisions.map((provision, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{provision}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          How to File Complaint
                        </h4>
                        <p className="text-purple-800 leading-relaxed">{law.howToFile}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Info className="h-4 w-4 mr-2 text-indigo-500" />
                          Important Sections
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {law.importantSections.map((section, index) => (
                            <div key={index} className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-300">
                              <p className="text-indigo-800 text-sm font-medium">{section}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help? We're Here for You</h2>
            <p className="text-gray-300">
              If you or someone you know needs immediate assistance, these helplines are available 24/7
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/30 p-6 rounded-lg border border-red-700">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-red-200">Emergency Services</h3>
              </div>
              <div className="space-y-2">
                <p className="text-red-100"><strong>112</strong> - National Emergency Number</p>
                <p className="text-red-100"><strong>100</strong> - Police</p>
                <p className="text-red-100"><strong>108</strong> - Ambulance</p>
              </div>
            </div>
            
            <div className="bg-rose-900/30 p-6 rounded-lg border border-rose-700">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-rose-400 mr-3" />
                <h3 className="text-xl font-semibold text-rose-200">Women's Helplines</h3>
              </div>
              <div className="space-y-2">
                <p className="text-rose-100"><strong>181</strong> - Women Helpline</p>
                <p className="text-rose-100"><strong>1091</strong> - Women PowerLine</p>
                <p className="text-rose-100"><strong>7827170170</strong> - iCall Psychosocial Helpline</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your Safety and Rights Matter
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            These laws exist to protect you. Don't hesitate to use them when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
              <a href="#top">Back to Top</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
              <a href="/search">Search Specific Laws</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CriminalLaws;