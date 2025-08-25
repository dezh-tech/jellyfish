import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
    // Set SEO for Privacy Policy page
    useSEO('privacy');

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="prose prose-invert max-w-none">
                <h1 className="gradient-text text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase max-w-full mx-auto leading-8 sm:leading-10 md:leading-12 lg:leading-[70px] animate-fade-up mb-8">
                    Privacy Policy
                </h1>
                
                <div className="text-gray-300 space-y-6 font-roboto-mono">
                    <p className="text-sm text-gray-400">Last updated: 24 August 2025</p>
                    
                    <p>
                        This Privacy Policy describes how JellyFish ("we", "our", or "us") collects, uses, and protects your information when you use our services.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong>Public Keys:</strong> Your Nostr public key when you use our services</li>
                            <li><strong>IP Addresses:</strong> For security and abuse prevention purposes</li>
                            <li><strong>Usage Data:</strong> Information about how you interact with our services</li>
                            <li><strong>Payment Information:</strong> Transaction data for paid services (processed through third-party payment processors)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">How We Use Your Information</h2>
                        <p>We use the collected information for:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Providing and maintaining our relay and NIP-05 services</li>
                            <li>Preventing abuse and spam</li>
                            <li>Improving our services</li>
                            <li>Complying with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Information Sharing</h2>
                        <p>We may share your information:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>With other parties for abuse mitigation purposes (IP addresses and public keys may be shared in full, truncated, or hashed form)</li>
                            <li>When required by law or legal process</li>
                            <li>To protect our rights and the safety of our users</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Data Retention</h2>
                        <p>
                            We retain your information for as long as necessary to provide our services and comply with legal obligations. 
                            Note that due to the nature of the Nostr protocol, content published to relays may be replicated across the network.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your information. 
                            However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Your Rights</h2>
                        <p>Depending on your jurisdiction, you may have certain rights regarding your personal information, including:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The right to access your personal information</li>
                            <li>The right to correct inaccurate information</li>
                            <li>The right to request deletion of your information</li>
                            <li>The right to object to processing</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us through our official channels.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
