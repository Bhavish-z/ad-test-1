import React, { useState } from 'react';
import { Layers, Play, ExternalLink } from 'lucide-react';
import { AdUnitConfig } from '../types/ad';

interface PopunderTesterProps {
  unit: AdUnitConfig;
}

export const PopunderTester: React.FC<PopunderTesterProps> = ({ unit }) => {
  const [showSandboxWindow, setShowSandboxWindow] = useState(false);
  const targetUrl = 'https://example.com/advertiser-landing-page';

  const executeTrigger = () => {
    try {
      const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (!win) {
        setShowSandboxWindow(true);
      }
    } catch {
      setShowSandboxWindow(true);
    }
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Interactive Trigger Zone */}
      <div
        onClick={executeTrigger}
        className="cursor-pointer bg-neutral-50 hover:bg-neutral-100/80 border-2 border-dashed border-neutral-300 hover:border-neutral-400 rounded-lg p-6 text-center transition-colors"
      >
        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 shadow-2xs">
          <Layers className="w-5 h-5 text-neutral-700" />
        </div>
        <div className="text-sm font-semibold text-neutral-900">
          Click to Test Popunder Window
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white rounded text-xs font-medium">
          <Play className="w-3 h-3" />
          <span>Launch Popunder</span>
        </div>
      </div>

      {/* Popunder Sandbox Window Preview */}
      {showSandboxWindow && (
        <div className="border border-neutral-300 rounded-lg overflow-hidden bg-white shadow-sm mt-4">
          <div className="bg-neutral-800 text-neutral-200 px-3 py-1.5 text-xs flex items-center justify-between font-mono">
            <span>Popunder Window</span>
            <button
              type="button"
              onClick={() => setShowSandboxWindow(false)}
              className="text-neutral-400 hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="p-6 bg-white text-center">
            <h4 className="text-base font-bold text-neutral-900 mb-2">
              Advertiser Landing Preview
            </h4>
            <a
              href={targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Open Target URL Directly</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
