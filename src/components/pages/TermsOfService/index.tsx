const TermsOfService = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="prose prose-invert max-w-none">
                <h1 className="gradient-text text-center font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase max-w-full mx-auto leading-8 sm:leading-10 md:leading-12 lg:leading-[70px] animate-fade-up mb-8">
                    Terms of Service
                </h1>
                
                <div className="text-gray-300 space-y-6 font-roboto-mono">
                    <p className="text-sm text-gray-400">Last updated: 16 May 2025</p>
                    
                    <p>
                        By accessing in any way or paying for the services, you agree to the following Terms of Service.
                    </p>
                    
                    <p className="text-sm text-gray-400">
                        This ToS was provided by Nostr Land relay services and modified to be used in Jellyfish.
                    </p>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Definitions</h2>
                        <ul className="space-y-2">
                            <li>"We" refers to the operator of this service.</li>
                            <li>"Service(s)" refers to the Jellyfish Relay/NIP-05 server/Media server, and the payment interfaces.</li>
                            <li>"You" refers to you, the user of the services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Disclaimer</h2>
                        <p>
                            This service (and supporting services) are provided "as is", without
                            warranty of any kind, express or implied, including but not limited
                            to the warranties of merchantability, fitness for a particular purpose
                            and noninfringement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Purchase Terms</h2>
                        <p>By paying for the services, you agree that:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>All payments are final, and are non-refundable.</li>
                            <li>We may revoke your access to services you have paid for any reason without a refund.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">Relay Usage Terms</h2>
                        <p>By using this relay in any way, you agree that:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>You are solely responsible for checking for any updates to this ToS regularly.</li>
                            <li>By continuing to use the relay after a ToS change, you automatically agree to the new ToS.</li>
                            <li>You will not engage in spam or any attempt of DoS attack against the services.</li>
                            <li>You will not disseminate any content in the following categories using the services:
                                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                    <li>CSAM</li>
                                    <li>Spam</li>
                                </ul>
                            </li>
                            <li>We may collect your IP address and public key for the purpose of combatting abuse, and may share it in full, truncated or hashed form with other parties for the sole purpose of mitigating abuse.</li>
                            <li>You will not attempt to impede the rights of others to use this relay.</li>
                            <li>Your access to the service may be blocked, throttled or restricted at any time.</li>
                            <li>Your content on the service may be removed or altered at any time.</li>
                            <li>The services provided to you may be shut down, change ownership or otherwise altered at any time.</li>
                        </ul>
                    </section>

                    <section>
                        <p>You agree that you are also fully aware that:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The services come with no guarantee of moderation, and that we are not liable for the content you are exposed to.</li>
                            <li>That we only control the relay service we provide, and cannot provide support or help for any matters related to other relays.</li>
                            <li>That requests for deletion of content is only guaranteed on Jellyfish relays and not other relays due the protocol design.</li>
                            <li>That we are not liable and have no involvement in the type, quality or legality of the content produced by the users of the relay.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-4">NIP-05 Service Usage Terms</h2>
                        <p>By using this NIP-05 service in any way, you agree that:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>You are solely responsible for checking for any updates to this ToS regularly.</li>
                            <li>By continuing to use the service after a ToS change, you automatically agree to the new ToS.</li>
                            <li>You will not disseminate any content in the following categories using the services:
                                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                    <li>CSAM</li>
                                    <li>Spam</li>
                                    <li>Impersonation</li>
                                    <li>Scamming</li>
                                </ul>
                            </li>
                            <li>Any impersonation attempt can ban your pubkey and NIP-05 handle permanently.</li>
                            <li>The services provided to you may be shut down, change ownership or otherwise altered at any time.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
