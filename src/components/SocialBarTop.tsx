import React from 'react';
import { Bell, X } from 'lucide-react';
import { AdUnitConfig } from '../types/ad';

interface SocialBarTopProps {
  unit: AdUnitConfig;
}

export const SocialBarTop: React.FC<SocialBarTopProps> = ({ unit }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Ad Unit Preview */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
        <div className="bg-white border border-neutral-300 rounded-lg shadow-sm px-4 py-3 flex items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 text-neutral-900">
              <Bell className="w-4 h-4 text-neutral-700" />
            </div>
            <div className="truncate">
              <div className="text-xs font-semibold text-neutral-900 flex items-center gap-2 truncate">
                <span>{unit.defaultHeadline}</span>
                <span className="text-[10px] text-neutral-500 font-normal">Just now</span>
              </div>
              <div className="text-xs text-neutral-600 truncate">{unit.defaultSubtext}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              className="px-3 py-1.5 bg-neutral-900 text-white text-xs font-medium rounded hover:bg-neutral-800 transition-colors"
            >
              {unit.defaultCta}
            </button>
            <button
              type="button"
              className="p-1 text-neutral-400 hover:text-neutral-700 rounded transition-colors"
              aria-label="Close social bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
