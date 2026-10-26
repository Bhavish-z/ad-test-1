import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AdUnitConfig } from '../types/ad';

interface NativeBannerUnitProps {
  unit: AdUnitConfig;
}

interface NativeCard {
  id: number;
  title: string;
  sponsor: string;
  category: string;
  readTime: string;
  gradient: string;
}

const SAMPLE_NATIVE_STORIES: NativeCard[] = [
  {
    id: 1,
    title: 'New AI Monetization Engines Break Record CPMs Across Web Publishers',
    sponsor: 'AdYield Quarterly',
    category: 'Industry Insights',
    readTime: '3 min read',
    gradient: 'from-blue-600 to-indigo-700',
  },
  {
    id: 2,
    title: 'Top 7 Ad Formats That Drive 3x More Click-Throughs Without Banners',
    sponsor: 'GrowthMedia Labs',
    category: 'Publisher Strategy',
    readTime: '4 min read',
    gradient: 'from-slate-700 to-neutral-900',
  },
  {
    id: 3,
    title: 'Direct Mediation vs Open Bidding: How Modern Networks Maximize Fill Rates',
    sponsor: 'AdTech Benchmark',
    category: 'Case Study',
    readTime: '5 min read',
    gradient: 'from-emerald-700 to-teal-800',
  },
];

export const NativeBannerUnit: React.FC<NativeBannerUnitProps> = ({ unit }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6">
      {/* 2-WORD TITLE ONLY */}
      <h2 className="text-lg font-bold text-neutral-900 tracking-tight mb-4">
        {unit.twoWordTitle}
      </h2>

      {/* Native Widget Container */}
      <div className="bg-neutral-50/50 border border-neutral-200 rounded-lg p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            You Might Also Like
          </div>
          <div className="text-[11px] text-neutral-500 font-medium">
            Sponsored Stories
          </div>
        </div>

        {/* Responsive Grid of Native Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_NATIVE_STORIES.map((story) => (
            <div
              key={story.id}
              className="group cursor-pointer bg-white border border-neutral-200 rounded-lg overflow-hidden hover:border-neutral-400 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Banner */}
                <div
                  className={`h-32 bg-linear-to-tr ${story.gradient} p-4 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 bg-black/40 backdrop-blur-xs rounded">
                      Sponsored
                    </span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div className="text-[11px] font-medium text-white/80 z-10">
                    {story.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-3.5">
                  <h3 className="text-xs font-semibold text-neutral-900 line-clamp-2 group-hover:text-neutral-700 transition-colors leading-snug">
                    {story.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="truncate font-medium">{story.sponsor}</span>
                    <span className="shrink-0">{story.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Bottom action button */}
              <div className="px-3.5 pb-3 pt-0">
                <div className="w-full py-1.5 text-center text-[11px] font-medium text-neutral-700 bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white rounded transition-colors">
                  Read Article
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
