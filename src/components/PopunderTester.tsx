import React, { useEffect, useState } from 'react';
import { Layers } from 'lucide-react';
import { AdUnitConfig } from '../types/ad';

interface PopunderTesterProps {
  unit: AdUnitConfig;
}

export const PopunderTester: React.FC<PopunderTesterProps> = ({ unit }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Add the user's popunder script code
    const script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.src = 'https://ahuramazda.org/1/7e3c14ee79297a85231ebe58bfcb9e84';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Popunder script container and click trigger area */}
      <div
        id="popunder-ad-slot"
        className="cursor-pointer bg-neutral-50 hover:bg-neutral-100/80 border-2 border-dashed border-neutral-300 hover:border-neutral-400 rounded-lg p-6 text-center transition-colors select-none"
      >
        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-800 shadow-2xs">
          <Layers className="w-5 h-5 text-neutral-700" />
        </div>
        <div className="text-sm font-semibold text-neutral-900">
          Click Here to Test Popunder
        </div>
      </div>
    </div>
  );
};
