'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setUploading(true);
    // TODO: Implement upload logic
    console.log('Uploading:', file.name);
    setUploading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>آپلود فایل ECG</CardTitle>
          <CardDescription>
            فایل ECG خود را برای تحلیل آپلود کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input 
            type="file" 
            accept=".csv,.xml,.json"
            onChange={handleFileChange}
          />
          {file && (
            <Badge variant="secondary">
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </Badge>
          )}
          <Button 
            onClick={handleUpload} 
            disabled={!file || uploading}
            className="w-full"
          >
            {uploading ? 'در حال آپلود...' : 'آپلود فایل'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
