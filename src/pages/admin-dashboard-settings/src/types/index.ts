export interface PageSettings {
    showHeader: boolean;
    showFooter: boolean;
    content: string;
}

export interface ContactSettings {
    contactNumber: string;
}

export interface SocialMediaLinks {
    discord: string;
    telegram: string;
    youtube: string;
    twitch: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    pinterest: string;
}

export interface DMCASettings {
    policyContent: string;
}

export interface AdvertisementProvider {
    name: string;
    code: string;
}

export interface PIPSettings {
    location: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    width: number;
    height: number;
}

export interface GeneralSiteSettings {
    logo: string;
    websiteName: string;
    contactEmail: string;
    siteDescription: string;
    googleGeoTag: string;
    seoSettings: string;
}

export interface OptimizationTools {
    metaTags: string[];
    keywords: string[];
}

export interface RevenueTracking {
    adPerformance: string;
    affiliateLinks: string[];
}

export interface PerformanceMetrics {
    traffic: number;
    loadTime: number;
}