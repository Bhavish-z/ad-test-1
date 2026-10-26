export type AdUnitId =
  | 'banner_468x60'
  | 'banner_300x250'
  | 'banner_160x300'
  | 'banner_160x600'
  | 'banner_320x50'
  | 'banner_728x90'
  | 'social_bar_top'
  | 'native_banner'
  | 'popunder_top'
  | 'smartlink';

export type AdCategory = 'standard' | 'high_impact';

export interface AdUnitConfig {
  id: AdUnitId;
  twoWordTitle: string; // Strictly 2 words as requested by user
  formatLabel: string;
  category: AdCategory;
  width?: number;
  height?: number;
  isResponsive?: boolean;
  notes: string;
  defaultHeadline: string;
  defaultSubtext: string;
  defaultCta: string;
  defaultBrand: string;
}

export interface CustomAdCode {
  unitId: AdUnitId;
  type: 'creative' | 'html' | 'image';
  htmlContent: string;
  imageUrl?: string;
  clickUrl?: string;
}
