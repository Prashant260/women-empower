import React, { useState } from 'react';
import { BookOpen, Scale, Users, Gavel, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { constitutionalRights } from '../data/mock';

const ConstitutionalRights = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-100 rounded-full">
              <Scale className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Constitutional Rights for <span className="text-blue-600">Women</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The Indian Constitution guarantees fundamental rights that ensure equality, dignity, and justice for all women. 
            These articles form the foundation of women's legal rights in India.
          </p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {constitutionalRights.map((right) => (
              <Card key={right.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-3 py-1">
                          {right.article}
                        </Badge>
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-600">Fundamental Right</span>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 mb-3">{right.title}</CardTitle>
                      <CardDescription className="text-gray-700 text-base leading-relaxed">
                        {right.description}
                      </CardDescription>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCard(right.id)}
                      className="ml-4 hover:bg-blue-100"
                    >
                      {expandedCard === right.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-rose-500" />
                      Significance for Women
                    </h4>
                    <p className="text-gray-700 leading-relaxed bg-rose-50 p-4 rounded-lg border-l-4 border-rose-300">
                      {right.womenContext}
                    </p>
                  </div>

                  {expandedCard === right.id && (
                    <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                          Key Points
                        </h4>
                        <ul className="space-y-2">
                          {right.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Gavel className="h-4 w-4 mr-2 text-green-500" />
                          Important Legal Cases
                        </h4>
                        <div className="space-y-3">
                          {right.relatedCases.map((case_info, index) => (
                            <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-300">
                              <p className="text-gray-700 text-sm leading-relaxed">{case_info}</p>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Understanding Your Rights is Empowerment
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            These constitutional rights are not just legal provisions - they are tools for equality, justice, and dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="#top">Back to Top</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="/criminal-laws">Learn About Criminal Laws</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstitutionalRights;