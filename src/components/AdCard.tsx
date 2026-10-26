import React from 'react';
import { AdUnitConfig } from '../types/ad';

interface AdCardProps {
  unit: AdUnitConfig;
}

export const AdCard: React.FC<AdCardProps> = ({ unit }) => {
  // Render the sample creative based on dimensions
  const renderCreative = () => {
    switch (unit.id) {
      case 'banner_728x90':
        return (
          <div className="w-[728px] h-[90px] bg-neutral-900 text-white px-6 py-2.5 flex items-center justify-between select-none relative overflow-hidden">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-10 h-10 rounded bg-white text-neutral-900 font-bold text-xs flex items-center justify-center shrink-0 tracking-tighter">
                ADS
              </div>
              <div className="truncate">
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                  {unit.defaultBrand}
                </div>
                <div className="text-sm font-bold text-white truncate">
                  {unit.defaultHeadline}
                </div>
                <div className="text-[11px] text-neutral-400 truncate">
                  {unit.defaultSubtext}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="px-4 py-2 bg-white text-neutral-900 text-xs font-semibold rounded hover:bg-neutral-100 transition-colors">
                {unit.defaultCta}
              </span>
            </div>
            <div className="absolute top-1 right-2 text-[9px] text-neutral-500 font-mono">
              Ad · 728x90
            </div>
          </div>
        );

      case 'banner_468x60':
        return (
          <div className="w-[468px] h-[60px] bg-neutral-900 text-white px-4 py-2 flex items-center justify-between select-none relative overflow-hidden">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded bg-white text-neutral-900 font-bold text-[10px] flex items-center justify-center shrink-0">
                TS
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">
                  {unit.defaultHeadline}
                </div>
                <div className="text-[10px] text-neutral-400 truncate">
                  {unit.defaultSubtext}
                </div>
              </div>
            </div>

            <div className="shrink-0 ml-3">
              <span className="px-2.5 py-1.5 bg-white text-neutral-900 text-[11px] font-semibold rounded hover:bg-neutral-100 transition-colors whitespace-nowrap">
                {unit.defaultCta}
              </span>
            </div>
            <div className="absolute top-0.5 right-1.5 text-[8px] text-neutral-500 font-mono">
              468x60
            </div>
          </div>
        );

      case 'banner_300x250':
        return (
          <div className="w-[300px] h-[250px] bg-neutral-900 text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                  {unit.defaultBrand}
                </span>
                <span className="text-[9px] font-mono text-neutral-500">
                  Ad · 300x250
                </span>
              </div>
              <h3 className="text-base font-bold text-white leading-tight mb-2">
                {unit.defaultHeadline}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {unit.defaultSubtext}
              </p>
            </div>

            <div>
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <span className="text-[11px] text-neutral-400 font-mono">
                  Sponsor Spotlight
                </span>
                <span className="px-3.5 py-1.5 bg-white text-neutral-900 text-xs font-semibold rounded hover:bg-neutral-100 transition-colors">
                  {unit.defaultCta}
                </span>
              </div>
            </div>
          </div>
        );

      case 'banner_160x300':
        return (
          <div className="w-[160px] h-[300px] bg-neutral-900 text-white p-4 flex flex-col justify-between select-none relative overflow-hidden text-center">
            <div>
              <div className="text-[8px] uppercase font-mono text-neutral-400 mb-2">
                Ad · 160x300
              </div>
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                DP
              </div>
              <h3 className="text-xs font-bold text-white leading-tight mb-2">
                {unit.defaultHeadline}
              </h3>
              <p className="text-[11px] text-neutral-400 leading-snug">
                {unit.defaultSubtext}
              </p>
            </div>

            <div>
              <span className="w-full block py-1.5 bg-white text-neutral-900 text-[11px] font-semibold rounded hover:bg-neutral-100 transition-colors">
                {unit.defaultCta}
              </span>
            </div>
          </div>
        );

      case 'banner_160x600':
        return (
          <div className="w-[160px] h-[600px] bg-neutral-900 text-white p-4 flex flex-col justify-between select-none relative overflow-hidden text-center">
            <div>
              <div className="text-[8px] uppercase font-mono text-neutral-400 mb-4">
                Ad · 160x600
              </div>
              <div className="w-12 h-12 rounded-lg bg-white text-neutral-900 font-bold text-sm flex items-center justify-center mx-auto mb-4">
                TM
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                {unit.defaultBrand}
              </div>
              <h3 className="text-sm font-bold text-white leading-tight mb-3">
                {unit.defaultHeadline}
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                {unit.defaultSubtext}
              </p>

              <div className="space-y-3 text-left bg-neutral-800/80 p-3 rounded text-[11px] text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Featured Campaign</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Targeted Placement</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>Brand Safe</span>
                </div>
              </div>
            </div>

            <div>
              <span className="w-full block py-2 bg-white text-neutral-900 text-xs font-semibold rounded hover:bg-neutral-100 transition-colors">
                {unit.defaultCta}
              </span>
              <div className="text-[9px] text-neutral-500 mt-2 font-mono">
                Wide Skyscraper
              </div>
            </div>
          </div>
        );

      case 'banner_320x50':
        return (
          <div className="w-[320px] h-[50px] bg-neutral-900 text-white px-3 py-1 flex items-center justify-between select-none relative overflow-hidden">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded bg-white text-neutral-900 font-bold text-[10px] flex items-center justify-center shrink-0">
                MB
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">
                  {unit.defaultHeadline}
                </div>
                <div className="text-[9px] text-neutral-400 truncate">
                  {unit.defaultSubtext}
                </div>
              </div>
            </div>

            <div className="shrink-0 ml-2">
              <span className="px-2.5 py-1 bg-white text-neutral-900 text-[10px] font-semibold rounded hover:bg-neutral-100 transition-colors whitespace-nowrap">
                {unit.defaultCta}
              </span>
            </div>
            <div className="absolute top-0.5 right-1 text-[7px] text-neutral-500 font-mono">
              320x50
            </div>
          </div>
        );

      default:
        return (
          <div className="p-4 bg-neutral-100 text-neutral-800 text-xs font-medium text-center">
            {unit.twoWordTitle}
          </div>
        );
    }
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Rendered Ad Frame with exact pixel dimensions */}
      <div className="overflow-x-auto py-2">
        <div className="flex flex-col items-center justify-center">
          <div
            style={{
              width: unit.width ? `${unit.width}px` : '100%',
              height: unit.height ? `${unit.height}px` : 'auto',
            }}
            className="border border-neutral-200 rounded shadow-xs relative overflow-hidden bg-neutral-50 flex items-center justify-center shrink-0"
          >
            {renderCreative()}
          </div>
        </div>
      </div>
    </div>
  );
};
