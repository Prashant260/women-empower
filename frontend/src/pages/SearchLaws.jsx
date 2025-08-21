import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Shield, Scale, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { searchData } from '../data/mock';

const SearchLaws = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResults, setSelectedResults] = useState([]);

  const filteredData = useMemo(() => {
    let filtered = searchData;

    // Filter by category
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'constitutional') {
        filtered = filtered.filter(item => item.article);
      } else if (selectedCategory === 'criminal') {
        filtered = filtered.filter(item => item.act);
      }
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item => {
        const title = (item.title || item.act || '').toLowerCase();
        const description = (item.description || item.purpose || '').toLowerCase();
        const context = (item.womenContext || '').toLowerCase();
        const article = (item.article || '').toLowerCase();
        const shortName = (item.shortName || '').toLowerCase();
        
        return title.includes(searchLower) || 
               description.includes(searchLower) || 
               context.includes(searchLower) ||
               article.includes(searchLower) ||
               shortName.includes(searchLower);
      });
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const addToSelected = (item) => {
    if (!selectedResults.find(selected => selected.id === item.id)) {
      setSelectedResults([...selectedResults, item]);
    }
  };

  const removeFromSelected = (itemId) => {
    setSelectedResults(selectedResults.filter(item => item.id !== itemId));
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedResults([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-100 rounded-full">
              <Search className="h-12 w-12 text-purple-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Search <span className="text-purple-600">Legal Provisions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find specific constitutional articles and criminal laws relevant to your situation. 
            Search by keywords, topics, or legal provisions.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search for laws, articles, or legal provisions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 text-lg"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="py-3">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Laws</SelectItem>
                    <SelectItem value="constitutional">Constitutional Rights</SelectItem>
                    <SelectItem value="criminal">Criminal Laws</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={clearSearch} variant="outline" className="md:w-auto">
                Clear
              </Button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Found {filteredData.length} results</span>
              {selectedResults.length > 0 && (
                <span>{selectedResults.length} items selected for comparison</span>
              )}
            </div>
          </div>

          {/* Selected Items Bar */}
          {selectedResults.length > 0 && (
            <div className="bg-white p-4 rounded-lg shadow mb-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Selected for Comparison ({selectedResults.length})</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedResults([])}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedResults.map((item) => (
                  <Badge key={item.id} variant="secondary" className="px-3 py-1">
                    {item.article || item.shortName}
                    <button
                      onClick={() => removeFromSelected(item.id)}
                      className="ml-2 hover:text-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="grid gap-6">
            {filteredData.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filter criteria.</p>
              </div>
            ) : (
              filteredData.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className={`pb-4 ${item.article ? 'bg-blue-50' : 'bg-rose-50'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge 
                            variant="secondary" 
                            className={`px-3 py-1 ${item.article ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'}`}
                          >
                            {item.article || item.shortName}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${item.article ? 'bg-blue-400' : 'bg-rose-400'}`}></div>
                          <span className="text-sm text-gray-600">
                            {item.article ? 'Constitutional Right' : 'Criminal Law'}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">
                          {item.title || item.act}
                        </CardTitle>
                        <CardDescription className="text-gray-700">
                          <div className="flex items-start mb-2">
                            {item.article ? <Scale className="h-4 w-4 mr-2 mt-0.5 text-blue-500" /> : <Shield className="h-4 w-4 mr-2 mt-0.5 text-rose-500" />}
                            <span>{item.description || item.purpose}</span>
                          </div>
                        </CardDescription>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addToSelected(item)}
                          disabled={selectedResults.find(selected => selected.id === item.id)}
                          className="whitespace-nowrap"
                        >
                          {selectedResults.find(selected => selected.id === item.id) ? 'Selected' : 'Compare'}
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    {item.womenContext && (
                      <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-300 mb-4">
                        <h4 className="font-semibold text-rose-900 mb-2">Significance for Women</h4>
                        <p className="text-rose-800 text-sm leading-relaxed">{item.womenContext}</p>
                      </div>
                    )}
                    
                    {item.keyPoints && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Points</h4>
                        <ul className="space-y-1">
                          {item.keyPoints.slice(0, 3).map((point, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {point}
                            </li>
                          ))}
                          {item.keyPoints.length > 3 && (
                            <li className="text-sm text-gray-500 ml-3.5">
                              ... and {item.keyPoints.length - 3} more points
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {item.keyProvisions && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Provisions</h4>
                        <ul className="space-y-1">
                          {item.keyProvisions.slice(0, 3).map((provision, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              {provision}
                            </li>
                          ))}
                          {item.keyProvisions.length > 3 && (
                            <li className="text-sm text-gray-500 ml-3.5">
                              ... and {item.keyProvisions.length - 3} more provisions
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need More Specific Information?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            If you can't find what you're looking for, consult with legal professionals for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
              <a href="/">Back to Home</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <a href="/constitutional-rights">Browse All Rights</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchLaws;