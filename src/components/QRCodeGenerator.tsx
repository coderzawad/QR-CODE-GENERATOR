import React, { useState } from 'react';
import QRCodeReact from 'qrcode.react';
import { Download, Link, Github } from 'lucide-react';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('https://zawad.vercel.app');
  const [size, setSize] = useState(256);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code') as HTMLCanvasElement;
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-gray-800">QR Code Generator</h1>
        <p className="text-gray-600">Generate and customize your QR codes instantly</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">URL or Text</label>
            <div className="relative">
              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter URL or text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <input
              type="range"
              min="128"
              max="512"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm text-gray-500 text-right">{size}px</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Foreground Color</label>
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
            <QRCodeReact
              id="qr-code"
              value={url}
              size={size}
              bgColor={bgColor}
              fgColor={fgColor}
              level="H"
              includeMargin={true}
            />
            <button
              onClick={downloadQRCode}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              Download QR Code
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center text-gray-600">
        <a
          href="https://github.com/coderzawad/QR-CODE-GENERATOR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Github size={20} />
          View on GitHub
        </a>
      </footer>
    </div>
  );
};

export default QRCodeGenerator;
