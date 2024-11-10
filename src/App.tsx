import React from 'react';
import QRCodeGenerator from './components/QRCodeGenerator';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <QRCodeGenerator />
    </div>
  );
}

export default App;