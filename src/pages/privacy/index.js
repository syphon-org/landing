import Link from 'next/link'
import Head from 'next/head'

// Components  
import Header from 'components/header';
import SectionWaves from 'components/section-waves';

import assets from '../../global/assets';
import Footer from 'components/footer';

function Privacy() {
        return (
                <div className="app sans-serif bg-white">
                        <Head>
                                <title>Syphon • Privacy</title>
                        </Head>
                        <Header />
                        <section class="pt-32 bg-white">
                                <div style={{ paddingBottom: 1000 }} class="container bg-white px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
                                        <div class="bg-white pt-8">
                                                <section class="container bg-white text-black max-w-5xl mx-auto ">
                                                        <div class="splash flex flex-grow flex-col justify-start items-center bg-white">
                                                                <div class="bg-white">
                                                                        <div>
                                                                                <strong>Privacy Policy</strong> <p>
                                                                                        Taylor Ereio built the Syphon app as
                                                                                        an Open Source app. This application is provided by
                                                                                        Taylor Ereio at no cost and is intended for use as
                                                                                        is.
                </p> <p>
                                                                                        This page is used to inform visitors regarding my
                                                                                        policies with the collection, use, and disclosure of Personal
                                                                                        Information if anyone decided to use my Service.
                </p> <p>
                                                                                        If you choose to use my Service, then you agree to
                                                                                        the collection and use of information in relation to this
                                                                                        policy. The Personal Information that I collect is
                                                                                        used for providing and improving the Service. I will not use or share your information with
                                                                                        anyone except as described in this Privacy Policy.
                </p> <p>
                                                                                        The terms used in this Privacy Policy have the same meanings
                                                                                        as in our Terms and Conditions, which is accessible at
                                                                                        Syphon unless otherwise defined in this Privacy Policy.
                </p><br></br> <p><strong>Information Collection and Use</strong></p> <p>
                                                                                        No analytics are used within the Syphon app. The website also has
                                                                                        no analytics software used within, but does use cloudflare dns which
                                                                                        tracks information of requests.
                </p><br></br>  <p><strong>Log Data</strong></p> <p>
                                                                                        I want to inform you that whenever you
                                                                                        use Syphon, I do not collect data and information through a third party
                </p><br></br> <p><strong>Website Service Providers</strong></p> <p>
                                                                                        I may employ third-party companies and
                                                                                        individuals due to the following reasons:
                </p><br></br> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p>
                                                                                        I want to inform users of this Service
                                                                                        that these third parties may have access to your Personal
                                                                                        Information. The reason is to perform the tasks assigned to
                                                                                        them on our behalf. However, they are obligated not to
                                                                                        disclose or use the information for any other purpose.
                </p><br></br>  <p><strong>Security</strong></p> <p>
                                                                                        I value your trust in providing us your
                                                                                        Personal Information, thus we are striving to use commercially
                                                                                        acceptable means of protecting it. But remember that no method
                                                                                        of transmission over the internet, or method of electronic
                                                                                        storage is 100% secure and reliable, and I cannot
                                                                                        guarantee its absolute security.
                </p><br></br>  <p><strong>Links to Other Sites</strong></p> <p>
                                                                                        This Service may contain links to other sites. If you click on
                                                                                        a third-party link, you will be directed to that site. Note
                                                                                        that these external sites are not operated by me.
                                                                                        Therefore, I strongly advise you to review the
                                                                                        Privacy Policy of these websites. I have
                                                                                        no control over and assume no responsibility for the content,
                                                                                        privacy policies, or practices of any third-party sites or
                                                                                        services.
                </p><br></br>  <p><strong>Children’s Privacy</strong></p> <p>
                                                                                        These Services do not address anyone under the age of 13.
                                                                                        I do not knowingly collect personally
                                                                                        identifiable information from children under 13. In the case
                                                                                        I discover that a child under 13 has provided
                                                                                        me with personal information, I immediately
                                                                                        delete this from our servers. If you are a parent or guardian
                                                                                        and you are aware that your child has provided us with
                                                                                        personal information, please contact me so that
                                                                                        I will be able to do necessary actions.
                </p><br></br>  <p><strong>Changes to This Privacy Policy</strong></p> <p>
                                                                                        I may update our Privacy Policy from
                                                                                        time to time. Thus, you are advised to review this page
                                                                                        periodically for any changes. I will
                                                                                        notify you of any changes by posting the new Privacy Policy on
                                                                                        this page.
                </p><br></br>  <p>This policy is effective as of 2020-06-28</p> <p><strong>Contact Us</strong></p> <p>
                                                                                        If you have any questions or suggestions about my
                                                                                        Privacy Policy, do not hesitate to contact me at contact@syphon.org.
                </p><br></br>  <p>
                                                                                        This privacy policy page was created at
                  <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer">privacypolicytemplate.net</a>
                  and modified/generated by
                  <a href="https://app-privacy-policy-generator.firebaseapp.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </section>
                                        </div>
                                </div>
                        </section>
                </div>

        )
}


export default Privacy