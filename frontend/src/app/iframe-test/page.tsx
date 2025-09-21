'use client';

export default function IframeTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Iframe Test</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Google (should work)</h2>
            <iframe
              src="https://www.google.com"
              width="100%"
              height="400"
              className="border border-gray-300 rounded-lg"
              title="Google Test"
              onLoad={() => console.log('Google iframe loaded')}
              onError={(e) => console.error('Google iframe error:', e)}
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Sigma Direct URL</h2>
            <iframe
              src="https://app.sigmacomputing.com/playground/workbook/workbook-4osogXvjSNtZFo3DW2XYGs?:link_source=share"
              width="100%"
              height="600"
              className="border border-gray-300 rounded-lg"
              title="Sigma Direct"
              onLoad={() => console.log('Sigma direct iframe loaded')}
              onError={(e) => console.error('Sigma direct iframe error:', e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
