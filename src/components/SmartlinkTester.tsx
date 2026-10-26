import React, { useState } from 'react';
import { Link2, Copy, Check, ArrowRight } from 'lucide-react';
import { AdUnitConfig } from '../types/ad';

interface SmartlinkTesterProps {
  unit: AdUnitConfig;
}

export const SmartlinkTester: React.FC<SmartlinkTesterProps> = ({ unit }) => {
  const [copied, setCopied] = useState(false);
  const smartlinkUrl = 'https://smartroute.network/in?id=9482&geo=auto&subid=test';

  const handleCopy = () => {
    navigator.clipboard.writeText(smartlinkUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Smartlink URL Box */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-md p-3 mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Link2 className="w-4 h-4 text-neutral-500 shrink-0" />
          <span className="font-mono text-xs text-neutral-800 truncate">
            {smartlinkUrl}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors shrink-0"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'Copy Link'}</span>
        </button>
      </div>

      {/* Test Execution */}
      <div className="flex items-center justify-between gap-4 p-4 bg-neutral-100/70 border border-neutral-200 rounded-lg">
        <div className="text-xs font-semibold text-neutral-900">
          Smartlink Redirection Test
        </div>

        <a
          href={smartlinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-xs font-semibold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
        >
          <span>Test Route Click</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
