'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AnalyzePage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = async () => {
    setAnalyzing(true);
    // TODO: Implement analysis logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult('نتیجه تحلیل: ریتم قلب نرمال تشخیص داده شد.');
    setAnalyzing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>تحلیل ECG</CardTitle>
          <CardDescription>
            تحلیل هوش مصنوعی نوار قلب
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleAnalyze} 
            disabled={analyzing}
            className="w-full"
          >
            {analyzing ? 'در حال تحلیل...' : 'شروع تحلیل'}
          </Button>
          
          {result && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <Badge className="mb-2" variant="default">نتیجه</Badge>
                <p className="text-sm">{result}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
