import React from 'react';
import { Helmet } from 'react-helmet-async';
import TemplateRenderer from '../../components/vendor/website-sections/TemplateRenderer';
import { UnifiedVendorData } from '../../types/vendor.types';

const VendorWebsite: React.FC = () => {
  // Website data from vendor profile
  const vendorData: UnifiedVendorData & { workspaceId: number } = {
  "hero": {
    "heroImage": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666841783_b44e87dd75b6cc8b.jpg"
  },
  "goals": {
    "timeline": "3months",
    "priorities": [
      "more_inquiries",
      "online_presence",
      "streamline_ops",
      "conversion_rate"
    ],
    "monthlyBookings": "35",
    "averageBookingValue": "22000"
  },
  "gallery": {
    "images": [
      {
        "alt": "IMG_6474",
        "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666270726_dd89da71affa6cc3.jpg"
      },
      {
        "alt": "IMG_6475",
        "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666288683_e5b395f6b20bf9dd.jpg"
      },
      {
        "alt": "IMG_6476",
        "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666299665_43f2eb4ef059656e.jpg"
      },
      {
        "alt": "IMG_6478",
        "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666307469_20915c1f84758b42.jpg"
      },
      {
        "alt": "IMG_6473",
        "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666318973_1a62543f9e3ffc20.jpg"
      }
    ],
    "heroImage": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666841783_b44e87dd75b6cc8b.jpg",
    "instagram": ""
  },
  "pricing": {},
  "business": {
    "name": "Nia’s Purpose LLC",
    "type": "venue",
    "details": {
      "capacity": "130",
      "amenities": [
        "dance_floor",
        "tables_chairs",
        "av_equipment",
        "lighting",
        "wifi",
        "wheelchair",
        "heating_ac",
        "security",
        "cleanup",
        "other"
      ]
    }
  },
  "personal": {
    "name": "Tahmia Walker",
    "email": "twalker@niaspurposellc.com",
    "phone": "2182105410"
  },
  "services": {
    "spaces": [
      "patio",
      "banquet"
    ],
    "amenities": [
      "dance_floor",
      "tables_chairs",
      "av_equipment",
      "lighting",
      "wifi",
      "wheelchair",
      "heating_ac",
      "security",
      "cleanup",
      "other"
    ],
    "eventTypes": [
      "weddings",
      "corporate",
      "birthday",
      "anniversary",
      "baby_shower",
      "graduation",
      "reunion",
      "gala"
    ]
  },
  "createdAt": "2025-10-28T15:36:03.360Z",
  "sessionId": "73e505d9-4181-4a04-a2a9-60c8ef14fac5",
  "formConfig": {
    "customFields": [],
    "enabledFields": [
      "name",
      "email",
      "phone",
      "date",
      "eventType",
      "guestCount",
      "budget",
      "message",
      "referral"
    ]
  },
  "selections": {},
  "templateId": "luxury",
  "workspaceId": 892,
  "lastModified": "2025-10-28T15:47:24.561Z",
  "testimonials": [
    {
      "id": "1",
      "event": "Wedding Reception",
      "quote": "The venue was absolutely stunning and the staff went above and beyond.",
      "author": "Sarah & John",
      "rating": 5
    },
    {
      "id": "2",
      "event": "Corporate Event",
      "quote": "Perfect space for our corporate event. Everything was flawless.",
      "author": "Emily R.",
      "rating": 5
    }
  ],
  "customization": {},
  "businessDetails": {},
  "templateSettings": {},
  "currentChallenges": [
    "low-bookings",
    "no-website"
  ],
  "testimonialsTitle": "What Our Clients Say",
  "userUploadedImages": [
    {
      "alt": "IMG_6473",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666259133_90efab4449110b02.jpg",
      "uploadedAt": "2025-10-28T15:44:19.208Z"
    },
    {
      "alt": "IMG_6474",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666270726_dd89da71affa6cc3.jpg",
      "uploadedAt": "2025-10-28T15:44:31.267Z"
    },
    {
      "alt": "IMG_6475",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666288683_e5b395f6b20bf9dd.jpg",
      "uploadedAt": "2025-10-28T15:44:48.829Z"
    },
    {
      "alt": "IMG_6476",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666299665_43f2eb4ef059656e.jpg",
      "uploadedAt": "2025-10-28T15:44:59.787Z"
    },
    {
      "alt": "IMG_6478",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666307469_20915c1f84758b42.jpg",
      "uploadedAt": "2025-10-28T15:45:07.609Z"
    },
    {
      "alt": "IMG_6473",
      "url": "https://f005.backblazeb2.com/file/VenueBox/workspaces/892/images/1761666318973_1a62543f9e3ffc20.jpg",
      "uploadedAt": "2025-10-28T15:45:20.171Z"
    }
  ],
  "testimonialsSubtitle": "Real stories from happy customers"
};

  // Enabled sections configuration
  const enabledSections = {
    hero: true,
    services: true,
    gallery: true,
    pricing: false,
    testimonials: true,
    addons: false,
    form: true,
    footer: true
  };

  return (
    <>
      <Helmet>
        <title>Nia’s Purpose LLC - Premier Event Venue</title>
        <meta
          name="description"
          content="Professional event venue services"
        />
        <meta name="keywords" content="event venue, weddings, corporate, birthday, anniversary, baby_shower, graduation, reunion, gala, Nia’s Purpose LLC" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <TemplateRenderer
          websiteData={vendorData}
          currentSection="form"
          sectionAnimations={{
            hero: true,
            services: true,
            gallery: true,
            pricing: false,
            testimonials: true,
            addons: false,
            form: true
          }}
          isRevealed={true}
          isMobileEdit={false}
          isEditMode={false}
          enabledSections={enabledSections}
          sectionOrder={vendorData.sectionOrder || ["hero", "services", "gallery", "testimonials", "form", "footer"]}
          showAddButtons={false}
        />
      </div>
    </>
  );
};

export default VendorWebsite;
