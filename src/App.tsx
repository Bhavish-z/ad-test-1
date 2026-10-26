/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { AdCard } from './components/AdCard';
import { SocialBarTop } from './components/SocialBarTop';
import { PopunderTester } from './components/PopunderTester';
import { SmartlinkTester } from './components/SmartlinkTester';
import { NativeBannerUnit } from './components/NativeBannerUnit';
import { AD_UNITS } from './data/adUnits';

export default function App() {
  const socialBarUnit = AD_UNITS.find((u) => u.id === 'social_bar_top')!;
  const nativeBannerUnit = AD_UNITS.find((u) => u.id === 'native_banner')!;
  const popunderUnit = AD_UNITS.find((u) => u.id === 'popunder_top')!;
  const smartlinkUnit = AD_UNITS.find((u) => u.id === 'smartlink')!;

  const banner728 = AD_UNITS.find((u) => u.id === 'banner_728x90')!;
  const banner468 = AD_UNITS.find((u) => u.id === 'banner_468x60')!;
  const banner300 = AD_UNITS.find((u) => u.id === 'banner_300x250')!;
  const banner160x300 = AD_UNITS.find((u) => u.id === 'banner_160x300')!;
  const banner160x600 = AD_UNITS.find((u) => u.id === 'banner_160x600')!;
  const banner320 = AD_UNITS.find((u) => u.id === 'banner_320x50')!;

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans antialiased">
      {/* Header */}
      <Header />

      {/* Body Only (No Footer) */}
      <main className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* 1. Social Bar TOP */}
          <SocialBarTop unit={socialBarUnit} />

          {/* 2. Native Banner */}
          <NativeBannerUnit unit={nativeBannerUnit} />

          {/* 3. PopunderTOP */}
          <PopunderTester unit={popunderUnit} />

          {/* 4. Smartlink */}
          <SmartlinkTester unit={smartlinkUnit} />

          {/* 5. Leaderboard (728x90) */}
          <AdCard unit={banner728} />

          {/* 6. Banner (468x60) */}
          <AdCard unit={banner468} />

          {/* 7, 8, 9. 300x250, 160x300, 160x600 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <AdCard unit={banner300} />
            <AdCard unit={banner160x300} />
            <AdCard unit={banner160x600} />
          </div>

          {/* 10. Mobile Banner (320x50) */}
          <AdCard unit={banner320} />
        </div>
      </main>
    </div>
  );
}
