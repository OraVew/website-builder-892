import React from 'react';
import { Helmet } from 'react-helmet-async';

const VendorWebsite: React.FC = () => {
  // Website data from vendor profile
  const vendorData = {
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
        {/* Hero Section */}
        {vendorData.hero && (
          <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {vendorData.hero.backgroundImage && (
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${vendorData.hero.backgroundImage})` }}
              />
            )}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {vendorData.hero.headline || vendorData.business?.name}
              </h1>
              {vendorData.hero.subheadline && (
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {vendorData.hero.subheadline}
                </p>
              )}
              {vendorData.hero.ctaText && (
                <a
                  href="#contact"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
                >
                  {vendorData.hero.ctaText}
                </a>
              )}
            </div>
          </section>
        )}

        {/* Services Section */}
        {vendorData.services && (
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vendorData.services.eventTypes?.map((eventType, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 capitalize">
                      {eventType.replace(/_/g, ' ')}
                    </h3>
                    <p className="text-gray-600">
                      Perfect venue for your {eventType.replace(/_/g, ' ')} celebration
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {vendorData.gallery?.images && vendorData.gallery.images.length > 0 && (
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {vendorData.gallery.images.map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials Section */}
        {vendorData.testimonials && vendorData.testimonials.length > 0 && (
          <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Testimonials</h2>
              <div className="space-y-8">
                {vendorData.testimonials.map((testimonial, index) => (
                  <div key={index} className="p-8 bg-gray-50 rounded-lg">
                    <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Form Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{vendorData.business?.name}</h3>
            {vendorData.personal?.phone && (
              <p className="mb-2">
                <a href={`tel:${vendorData.personal.phone}`} className="hover:text-gray-300">
                  {vendorData.personal.phone}
                </a>
              </p>
            )}
            {vendorData.personal?.email && (
              <p className="mb-4">
                <a href={`mailto:${vendorData.personal.email}`} className="hover:text-gray-300">
                  {vendorData.personal.email}
                </a>
              </p>
            )}
            <p className="text-gray-400 text-sm mt-8">
              © {new Date().getFullYear()} {vendorData.business?.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VendorWebsite;
