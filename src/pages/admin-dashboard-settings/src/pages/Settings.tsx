import React from 'react';
import CodeEditorSection from '../components/CodeEditorSection';
import ToggleOptions from '../components/ToggleOptions';
import HeaderFooterEditor from '../components/HeaderFooterEditor';
import PageManagement from '../components/PageManagement';
import ContactNumberEditor from '../components/ContactNumberEditor';
import SocialMediaLinksEditor from '../components/SocialMediaLinksEditor';
import DMCAEditor from '../components/DMCAEditor';
import AdvertisementManager from '../components/AdvertisementManager';
import PIPSettings from '../components/PIPSettings';
import GeneralSiteSettings from '../components/GeneralSiteSettings';
import OptimizationTools from '../components/OptimizationTools';
import RevenueTracking from '../components/RevenueTracking';
import PerformanceMonitoring from '../components/PerformanceMonitoring';

const Settings: React.FC = () => {
    return (
        <div className="settings-page">
            <h1>Admin Dashboard Settings</h1>
            <ToggleOptions />
            <HeaderFooterEditor />
            <CodeEditorSection />
            <ContactNumberEditor />
            <SocialMediaLinksEditor />
            <DMCAEditor />
            <AdvertisementManager />
            <PIPSettings />
            <GeneralSiteSettings />
            <OptimizationTools />
            <RevenueTracking />
            <PerformanceMonitoring />
            <PageManagement />
        </div>
    );
};

export default Settings;