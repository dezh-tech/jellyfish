import HeroSection from "./HeroSection";
import ServicesSection from "./Services";
// import TeamMembersSection from "./TeamMembers";
import ContributeSection from "./ContributeSection";
import { SEOHead } from "@/components/SEO/SEOHead";

export const HomePage = () => {
    // Enhanced structured data for homepage
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "JellyFish",
        "alternateName": ["JellyFish Nostr", "Jellyfish Relay"],
        "url": "https://jellyfish.land",
        "logo": "https://jellyfish.land/fav-icon.svg",
        "description": "Premium Nostr relay and NIP-05 services with WoT protection. Professional Nostr infrastructure for the decentralized web.",
        "foundingDate": "2024",
        "sameAs": [
            "https://github.com/jellyfish-land",
            "https://nostr.eco"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "url": "https://jellyfish.land"
        },
        "offers": [
            {
                "@type": "Service",
                "name": "Premium Nostr Relay",
                "description": "Spam-free, WoT protected Nostr relay at wss://jellyfish.land",
                "provider": {
                    "@type": "Organization",
                    "name": "JellyFish"
                },
                "serviceType": "Nostr Relay Service",
                "areaServed": "Worldwide",
                "category": "Web of Trust Relay"
            },
            {
                "@type": "Service",
                "name": "NIP-05 Identity Verification",
                "description": "Human-readable, WoT protected Nostr ID on @nostr.eco domain",
                "provider": {
                    "@type": "Organization",
                    "name": "JellyFish"
                },
                "serviceType": "Digital Identity Verification",
                "areaServed": "Worldwide",
                "category": "NIP-05 Names"
            }
        ],
        "keywords": [
            "Nostr", "Jellyfish", "Jellyfish Nostr", "Jellyfish Relay",
            "Nostr Relay", "Paid Relay", "Nostr paid relay", "NIP-05 names",
            "Paid NIP-05 names", "WoT Web of Trust relay", "WoT relay",
            "Web of Trust", "Nostr infrastructure", "decentralized social",
            "Bitcoin", "Lightning", "spam-free relay", "premium Nostr"
        ]
    };

    return (
        <>
            <SEOHead
                pageKey="home"
                structuredData={structuredData}
            />
            <HeroSection />
            <ServicesSection />
            {/* <TeamMembersSection /> */}
            <ContributeSection />
        </>
    );
};
