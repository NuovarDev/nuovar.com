import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursorEffect } from "@/components/cursor-effect"
import { ShaderBackground } from "@/components/shader-background"
import { TableOfContents } from "@/components/table-of-contents"
import { company } from "@/lib/fixtures"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${company.name} | Privacy Policy`,
  description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: "https://www.nuovar.com/privacy",
  },
  openGraph: {
    title: `${company.name} | Privacy Policy`,
    description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information.`,
    type: "website",
    url: "https://www.nuovar.com/privacy",
  },
  twitter: {
    card: "summary",
    title: `${company.name} | Privacy Policy`,
    description: `Privacy Policy for ${company.name}. Learn how we collect, use, and protect your personal information.`,
  },
}

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen">
      <ShaderBackground />

      <div className="relative z-10">
        <CursorEffect />
        <Navbar />
        <main id="main-content" className="mx-auto max-w-6xl px-8 pb-20 pt-32">
          <div className="flex gap-12">
            <div className="flex-1">
              <h1 className="mb-8 text-4xl font-medium text-white md:text-5xl">
                Privacy Policy
              </h1>

              <div id="content" className="space-y-6 text-lg leading-relaxed text-white font-extralight">
                <p className="text-white/80">
                  Last updated: {new Date("2026-01-02").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <p>
                  This privacy notice for Nuovar LLC ("<b>Company</b>," "<b>we</b>," "<b>us</b>," or "<b>our</b>"), describes how and why we might collect, store, use, and/or share ("<b>process</b>") your information when you use our services ("<b>Services</b>"), such as when you:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">Visit our website at <a href="https://www.nuovar.com" className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80">nuovar.com</a>, or any website of ours that links to this privacy notice</li>
                  <li className="list-disc">Engage with us in other related ways, including any sales, marketing, or events</li>
                </ul>
                <p>
                  <b>Questions or concerns?</b> Reading this privacy notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@nuovar.com" className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80">support@nuovar.com</a>.
                </p>

                <h2 id="summary-of-key-points" className="text-2xl font-light">
                  <strong>Summary of Key Points</strong>
                </h2>
                <p>
                  <strong
                    >This summary provides key points from our privacy notice, but you can find
                    out more details about any of these topics by using our table of contents to
                    find the section you are looking for.</strong>
                </p>
                <p>
                  <strong>What personal information do we process?</strong> When you visit, use,
                  or navigate our Services, we may process personal information depending on how
                  you interact with Nuovar and the Services, the choices you make, and
                  the products and features you use.
                </p>
                <p>
                  <strong>Do we process any sensitive personal information?</strong> We do not
                  process sensitive personal information.
                </p>
                <p>
                  <strong>Do we receive any information from third parties?</strong> We do not
                  receive any information from third parties.
                </p>
                <p>
                  <strong>How do we process your information?</strong> We process your
                  information to provide, improve, and administer our Services, communicate with
                  you, for security and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent. We process your
                  information only when we have a valid legal reason to do so.
                </p>
                <p>
                  <strong
                    >In what situations and with which types of parties do we share personal
                    information?</strong>
                  We may share information in specific situations and with specific categories
                  of third parties.
                </p>
                <p>
                  <strong>How do we keep your information safe?</strong> We have organizational
                  and technical processes and procedures in place to protect your personal
                  information. However, no electronic transmission over the internet or
                  information storage technology can be guaranteed to be 100% secure, so we
                  cannot promise or guarantee that hackers, cybercriminals, or other
                  unauthorized third parties will not be able to defeat our security and
                  improperly collect, access, steal, or modify your information.
                </p>
                <p>
                  <strong>What are your rights?</strong> Depending on where you are located
                  geographically, the applicable privacy law may mean you have certain rights
                  regarding your personal information.
                </p>
                <p>
                  <strong>How do you exercise your rights?</strong> The easiest way to exercise
                  your rights is by contacting us. We will consider and act upon any request in
                  accordance with applicable data protection laws.
                </p>
                <h2
                  id="what-information-do-we-collect"
                  className="text-2xl font-light"
                >
                  <strong>What information do we collect?</strong>
                </h2>
                <h4>
                  <strong>Personal information you disclose to us</strong>
                </h4>
                <p>
                  <strong><em>In Short:</em></strong> <em>We collect personal information that you provide to us.</em>
                </p>
                <p>
                  We collect personal information that you voluntarily provide to us when you
                  register on the Services, express an interest in obtaining information about
                  us or our products and Services, when you participate in activities on the
                  Services, or otherwise when you contact us.
                </p>
                <p>
                  <strong>Personal Information Provided by You.</strong> The personal
                  information that we collect depends on the context of your interactions with
                  us and the Services, the choices you make, and the products and features you
                  use. The personal information we collect may include the following:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">names</li>
                  <li className="list-disc">email addresses</li>
                  <li className="list-disc">passwords</li>
                  <li className="list-disc">contact preferences</li>
                  <li className="list-disc">billing addresses</li>
                  <li className="list-disc">debit/credit card numbers</li>
                </ul>
                <p>
                  <strong>Sensitive Information.</strong> We do not process sensitive
                  information.
                </p>
                <p>
                  <strong>Payment Data.</strong> We may collect data necessary to process your
                  payment if you make purchases, such as your payment instrument number (such as
                  a credit card number), and the security code associated with your payment
                  instrument. All payment data is handled and stored by Stripe. You may find
                  their privacy notice link(s) here: <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://stripe.com/privacy"
                    >Privacy Policy</a>.
                </p>
                <p>
                  <strong>Social Media Login Data.</strong> We may provide you with the option
                  to register with us using your existing social media account details, like
                  your Google, GitHub, or other social media account. If you choose to register
                  in this way, we will collect the information described in the section called
                  "How do we handle your social logins?" below.
                </p>
                <p>
                  All personal information that you provide to us must be true, complete, and
                  accurate, and you must notify us of any changes to such personal information.
                </p>
                <h4>
                  <strong>Information automatically collected</strong>
                </h4>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    Some information — such as your Internet Protocol (IP) address and/or
                    browser and device characteristics — is collected automatically when you
                    visit our Services.
                  </em>
                </p>
                <p>
                  We automatically collect certain information when you visit, use, or navigate
                  the Services. This information does not reveal your specific identity (like
                  your name or contact information) but may include device and usage
                  information, such as your IP address, browser and device characteristics,
                  operating system, language preferences, referring URLs, device name, country,
                  location, information about how and when you use our Services, and other
                  technical information. This information is primarily needed to maintain the
                  security and operation of our Services, for our internal analytics and
                  reporting purposes, and to maintain records of user consent as required by
                  applicable laws
                </p>
                <p>
                  Like many businesses, we also collect information through cookies and similar
                  technologies.
                </p>
                <p>The information we collect includes:</p>
                <ul className="ml-4">
                  <li className="list-disc">
                      <em>Log and Usage Data.</em> Log and usage data is service-related,
                      diagnostic, usage, and performance information our servers automatically
                      collect when you access or use our Services and which we record in log
                      files. Depending on how you interact with us, this log data may include
                      your IP address, device information, browser type, and settings and
                      information about your activity in the Services (such as the date/time
                      stamps associated with your usage, pages and files viewed, searches, and
                      other actions you take such as which features you use), device event
                      information (such as system activity, error reports (sometimes called
                      "crash dumps"), and hardware settings).
                  </li>
                  <li className="list-disc">
                      <em>Device Data.</em> We collect device data such as information about
                      your computer, phone, tablet, or other device you use to access the
                      Services. Depending on the device used, this device data may include
                      information such as your IP address (or proxy server), device and
                      application identification numbers, location, browser type, hardware
                      model, Internet service provider and/or mobile carrier, operating system,
                      and system configuration information.
                  </li>
                </ul>
                <p><strong>Google API</strong></p>
                <p>
                  Our use of information received from Google APIs will adhere to <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    >Google API Services User Data Policy</a>, including the <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                    >Limited Use requirements</a>.
                </p>
                <h2 className="text-2xl font-light" id="how-do-we-process-your-information">
                  <strong>How do we process your information?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We process your information to provide, improve, and administer our
                    Services, communicate with you, for security and fraud prevention, and to
                    comply with law. We may also process your information for other purposes
                    with your consent.</em>
                </p>
                <p>
                  <strong
                    >We process your personal information for a variety of reasons, depending on
                    how you interact with our Services, including:</strong>
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      <strong>To facilitate account creation and authentication and otherwise manage
                        user accounts.</strong>
                      We may process your information so you can create and log in to your
                      account, as well as keep your account in working order.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To deliver and facilitate delivery of services to the user.</strong>
                      We may process your information to provide you with the requested service.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To send administrative information to you. </strong>We may process
                      your information to send you details about our products and services,
                      changes to our terms and policies, and other similar information.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To fulfill and manage your orders.</strong> We may process your
                      information to fulfill and manage your orders, payments, returns, and
                      exchanges made through the Services.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To send you marketing and promotional communications. </strong>We
                      may process the personal information you send to us for our marketing
                      purposes, if this is in accordance with your marketing preferences. You
                      can opt out of our marketing emails at any time. For more information, see
                      "What are your privacy rights?" below.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To protect our Services.</strong> We may process your information
                      as part of our efforts to keep our Services safe and secure, including
                      fraud monitoring and prevention.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To identify usage trends.</strong> We may process information
                      about how you use our Services to better understand how they are being
                      used so we can improve them.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>To save or protect an individual's vital interest.</strong> We may
                      process your information when necessary to save or protect an individual's
                      vital interest, such as to prevent harm.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-light" id="what-legal-bases-do-we-rely-on-to-process-your-information">
                  <strong>What legal bases do we rely on to process your information?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We only process your personal information when we believe it is necessary
                    and we have a valid legal reason (i.e., legal basis) to do so under
                    applicable law, like with your consent, to comply with laws, to provide you
                    with services to enter into or fulfill our contractual obligations, to
                    protect your rights, or to fulfill our legitimate business interests.</em>
                </p>
                <p>
                  <strong><u>If you are located in the EU or UK, this section applies to you.</u></strong>
                </p>
                <p>
                  The General Data Protection Regulation (GDPR) and UK GDPR require us to
                  explain the valid legal bases we rely on in order to process your personal
                  information. As such, we may rely on the following legal bases to process your
                  personal information:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      <strong>Consent.</strong> We may process your information if you have
                      given us permission (i.e., consent) to use your personal information for a
                      specific purpose. You can withdraw your consent at any time.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Performance of a Contract.</strong> We may process your personal
                      information when we believe it is necessary to fulfill our contractual
                      obligations to you, including providing our Services or at your request
                      prior to entering into a contract with you.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Legitimate Interests.</strong> We may process your information
                      when we believe it is reasonably necessary to achieve our legitimate
                      business interests and those interests do not outweigh your interests and
                      fundamental rights and freedoms. For example, we may process your personal
                      information for some of the purposes described in order to:
                    </p>
                    <ul className="ml-8">
                      <li className="list-disc">
                        <p>
                          Send users information about special offers and discounts on our
                          products and services
                        </p>
                      </li>
                      <li className="list-disc">
                        <p>
                          Analyze how our Services are used so we can improve them to engage and
                          retain users
                        </p>
                      </li>
                      <li className="list-disc"><p>Diagnose problems and/or prevent fraudulent activities</p></li>
                    </ul>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Legal Obligations.</strong> We may process your information where
                      we believe it is necessary for compliance with our legal obligations, such
                      as to cooperate with a law enforcement body or regulatory agency, exercise
                      or defend our legal rights, or disclose your information as evidence in
                      litigation in which we are involved.
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Vital Interests.</strong> We may process your information where we
                      believe it is necessary to protect your vital interests or the vital
                      interests of a third party, such as situations involving potential threats
                      to the safety of any person.
                    </p>
                  </li>
                </ul>
                <p>
                  <strong><u>If you are located in Canada, this section applies to you.</u></strong>
                </p>
                <p>
                  We may process your information if you have given us specific permission
                  (i.e., express consent) to use your personal information for a specific
                  purpose, or in situations where your permission can be inferred (i.e., implied
                  consent). You can withdraw your consent at any time.
                </p>
                <p>
                  In some exceptional cases, we may be legally permitted under applicable law to
                  process your information without your consent, including, for example:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      If collection is clearly in the interests of an individual and consent
                      cannot be obtained in a timely way
                    </p>
                  </li>
                  <li className="list-disc"><p>For investigations and fraud detection and prevention</p></li>
                  <li className="list-disc"><p>For business transactions provided certain conditions are met</p></li>
                  <li className="list-disc">
                    <p>
                      If it is contained in a witness statement and the collection is necessary
                      to assess, process, or settle an insurance claim
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      For identifying injured, ill, or deceased persons and communicating with
                      next of kin
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If we have reasonable grounds to believe an individual has been, is, or
                      may be victim of financial abuse
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If it is reasonable to expect collection and use with consent would
                      compromise the availability or the accuracy of the information and the
                      collection is reasonable for purposes related to investigating a breach of
                      an agreement or a contravention of the laws of Canada or a province
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If disclosure is required to comply with a subpoena, warrant, court order,
                      or rules of the court relating to the production of records
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If it was produced by an individual in the course of their employment,
                      business, or profession and the collection is consistent with the purposes
                      for which the information was produced
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If the collection is solely for journalistic, artistic, or literary
                      purposes
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      If the information is publicly available and is specified by the
                      regulations
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-light" id="when-and-with-whom-do-we-share-your-personal-information">
                  <strong>When and with whom do we share your personal information?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We may share information in specific situations described in this section
                    and/or with the following categories of third parties.</em>
                </p>
                <p>
                  <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers,
                  contractors, or agents ("<strong>third parties</strong>") who perform services
                  for us or on our behalf and require access to such information to do that
                  work. We have contracts in place with our third parties, which are designed to
                  help safeguard your personal information. This means that they cannot do
                  anything with your personal information unless we have instructed them to do
                  it. They will also not share your personal information with any organization
                  apart from us. They also commit to protect the data they hold on our behalf
                  and to retain it for the period we instruct. The categories of third parties
                  we may share personal information with are as follows:
                </p>
                <ul className="ml-4">
                  <li className="list-disc"><p>Cloud Computing Services</p></li>
                  <li className="list-disc"><p>Payment Processors</p></li>
                  <li className="list-disc"><p>Data Analytics Services</p></li>
                  <li className="list-disc"><p>User Account Registration &amp; Authentication Services</p></li>
                </ul>
                <p>
                  We also may need to share your personal information in the following
                  situations:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      <strong>Business Transfers.</strong> We may share or transfer your
                      information in connection with, or during negotiations of, any merger,
                      sale of company assets, financing, or acquisition of all or a portion of
                      our business to another company.
                    </p>
                  </li>
                </ul>
                <h2 className="text-2xl font-light" id="do-we-use-cookies-and-other-tracking-technologies">
                  <strong>Do we use cookies and other tracking technologies?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We may use cookies and other tracking technologies to collect and store your
                    information.</em>
                </p>
                <p>
                  We may use cookies and similar tracking technologies (like web beacons and
                  pixels) to gather information when you interact with our Services. Some online
                  tracking technologies help us maintain the security of our Services and your
                  account, prevent crashes, fix bugs, save your preferences, and assist with
                  basic site functions.
                </p>
                <p>
                  To the extent these online tracking technologies are deemed to be a "sale" /
                  "sharing" (which includes targeted advertising, as defined under the
                  applicable laws) under applicable US state laws, you can opt out of these
                  online tracking technologies by submitting a request as described below under
                  section "Do United States residents have specific privacy rights?"
                </p>
                <p><strong>Google Analytics</strong></p>
                <p>
                  We may share your information with Google Analytics to track and analyze the
                  use of the Services. To opt out of being tracked by Google Analytics across
                  the Services, visit <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://tools.google.com/dlpage/gaoptout">Google Analytics Opt-out Browser Add-on Download Page</a>. For more information on the privacy practices of Google, please visit the <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://policies.google.com/privacy"
                    >Google Privacy &amp; Terms page</a>.
                </p>
                <h2 className="text-2xl font-light" id="how-do-we-handle-your-social-logins">
                  <strong>How do we handle your social logins?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    If you choose to register or log in to our services using a social media
                    account, we may have access to certain information about you.</em>
                </p>
                <p>
                  Our Services offer you the ability to register and log in using your
                  third-party social media account details (like your Google or GitHub logins).
                  Where you choose to do this, we will receive certain profile information about
                  you from your social media provider. The profile information we receive may
                  vary depending on the social media provider concerned, but will often include
                  your name, email address, friends list, and profile picture, as well as other
                  information you choose to make public on such a social media platform.
                </p>
                <p>
                  We will use the information we receive only for the purposes that are
                  described in this privacy notice or that are otherwise made clear to you on
                  the relevant Services. Please note that we do not control, and are not
                  responsible for, other uses of your personal information by your third-party
                  social media provider. We recommend that you review their privacy notice to
                  understand how they collect, use, and share your personal information, and how
                  you can set your privacy preferences on their sites and apps.
                </p>
                <h2 className="text-2xl font-light" id="how-long-do-we-keep-your-information">
                  <strong>How long do we keep your information?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We keep your information for as long as necessary to fulfill the purposes
                    outlined in this privacy notice unless otherwise required by law.</em>
                </p>
                <p>
                  We will only keep your personal information for as long as it is necessary for
                  the purposes set out in this privacy notice, unless a longer retention period
                  is required or permitted by law (such as tax, accounting, or other legal
                  requirements). No purpose in this notice will require us keeping your personal
                  information for longer than three (3) months past the termination of the
                  user's account.
                </p>
                <p>
                  When we have no ongoing legitimate business need to process your personal
                  information, we will either delete or anonymize such information, or, if this
                  is not possible (for example, because your personal information has been
                  stored in backup archives), then we will securely store your personal
                  information and isolate it from any further processing until deletion is
                  possible.
                </p>
                <h2 className="text-2xl font-light" id="how-do-we-keep-your-information-safe">
                  <strong>How do we keep your information safe?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We aim to protect your personal information through a system of
                    organizational and technical security measures.</em>
                </p>
                <p>
                  We have implemented appropriate and reasonable technical and organizational
                  security measures designed to protect the security of any personal information
                  we process. However, despite our safeguards and efforts to secure your
                  information, no electronic transmission over the Internet or information
                  storage technology can be guaranteed to be 100% secure, so we cannot promise
                  or guarantee that hackers, cybercriminals, or other unauthorized third parties
                  will not be able to defeat our security and improperly collect, access, steal,
                  or modify your information. Although we will do our best to protect your
                  personal information, transmission of personal information to and from our
                  Services is at your own risk. You should only access the Services within a
                  secure environment.
                </p>
                <h2 className="text-2xl font-light" id="do-we-collect-information-from-minors">
                  <strong>Do we collect information from minors?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    We do not knowingly collect data from or market to children under 18 years
                    of age.</em>
                </p>
                <p>
                  We do not knowingly solicit data from or market to children under 18 years of
                  age. By using the Services, you represent that you are at least 18 or that you
                  are the parent or guardian of such a minor and consent to such minor
                  dependent's use of the Services. If we learn that personal information from
                  users less than 18 years of age has been collected, we will deactivate the
                  account and take reasonable measures to promptly delete such data from our
                  records. If you become aware of any data we may have collected from children
                  under age 18, please contact us at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:support@nuovar.com"
                    >support@nuovar.com</a>.
                </p>
                <h2 className="text-2xl font-light" id="what-are-your-privacy-rights">
                  <strong>What are your privacy rights?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    In some regions, such as the European Economic Area (EEA), United Kingdom
                    (UK), and Canada, you have rights that allow you greater access to and
                    control over your personal information. You may review, change, or terminate
                    your account at any time.</em>
                </p>
                <p>
                  In some regions (like the EEA, UK, and Canada), you have certain rights under
                  applicable data protection laws. These may include the right (i) to request
                  access and obtain a copy of your personal information, (ii) to request
                  rectification or erasure; (iii) to restrict the processing of your personal
                  information; and (iv) if applicable, to data portability. In certain
                  circumstances, you may also have the right to object to the processing of your
                  personal information. You can make such a request by contacting us by using
                  the contact details provided in the section "How can you contact us about this notice?" below.
                </p>
                <p>
                  We will consider and act upon any request in accordance with applicable data
                  protection laws.
                </p>
                <p>
                  If you are located in the EEA or UK and you believe we are unlawfully
                  processing your personal information, you also have the right to complain to
                  your local data protection supervisory authority. You can find their contact
                  details here: <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                    >JUSTICE AND CONSUMERS ARTICLE 29 - National Data Protection Authorities</a>.
                </p>
                <p>
                  If you are located in Switzerland, the contact details for the data protection
                  authorities are available here: <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                    >Welcome to the FDPIC</a>.
                </p>
                <p>
                  <strong><u>Withdrawing your consent</u></strong>: If we are relying on your consent to process your personal information,
                  which may be express and/or implied consent depending on the applicable law,
                  you have the right to withdraw your consent at any time. You can withdraw your
                  consent at any time by contacting us by using the contact details provided in
                  the section "How can you contact us about this notice?" below.
                </p>
                <p>
                  However, please note that this will not affect the lawfulness of the
                  processing before its withdrawal nor, when applicable law allows, will it
                  affect the processing of your personal information conducted in reliance on
                  lawful processing grounds other than consent.
                </p>
                <p>
                  <strong><u>Opting out of marketing and promotional communications:</u> </strong>You can unsubscribe from our marketing and promotional communications at any
                  time by clicking on the unsubscribe link in the emails that we send, or by
                  contacting us using the details provided in the section "How can you contact us about this notice?" below. You will then be removed from the marketing
                  lists. However, we may still communicate with you — for example, to send you
                  service-related messages that are necessary for the administration and use of
                  your account, to respond to service requests, or for other non-marketing
                  purposes.
                </p>
                <h4>
                  <strong>Account Information</strong>
                </h4>
                <h4>
                  <strong
                    >If you would at any time like to review or change the information in your
                    account or terminate your account, you can:</strong>
                </h4>
                <ul className="ml-4">
                  <li className="list-disc"><p>Log in to your account settings and update your user account.</p></li>
                </ul>
                <p>
                  Upon your request to terminate your account, we will deactivate or delete your
                  account and information from our active databases. However, we may retain some
                  information in our files to prevent fraud, troubleshoot problems, assist with
                  any investigations, enforce our legal terms and/or comply with applicable
                  legal requirements.
                </p>
                <p>
                  <strong><u>Cookies and similar technologies:</u></strong> Most Web browsers
                  are set to accept cookies by default. If you prefer, you can usually choose to
                  set your browser to remove cookies and to reject cookies. If you choose to
                  remove cookies or reject cookies, this could affect certain features or
                  services of our Services. To opt out of interest-based advertising by
                  advertisers on our Services visit <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="http://www.aboutads.info/choices/"
                    >http://www.aboutads.info/choices/</a>.
                </p>
                <p>
                  If you have questions or comments about your privacy rights, you may email us
                  at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:support@nuovar.com"
                    >support@nuovar.com</a>.
                </p>
                <h2 className="text-2xl font-light" id="controls-for-do-not-track-features">
                  <strong>Controls for do-not-track features</strong>
                </h2>
                <p>
                  Most web browsers and some mobile operating systems and mobile applications
                  include a Do-Not-Track ("DNT") feature or setting you can activate to signal
                  your privacy preference not to have data about your online browsing activities
                  monitored and collected. At this stage no uniform technology standard for
                  recognizing and implementing DNT signals has been finalized. As such, we do
                  not currently respond to DNT browser signals or any other mechanism that
                  automatically communicates your choice not to be tracked online. If a standard
                  for online tracking is adopted that we must follow in the future, we will
                  inform you about that practice in a revised version of this privacy notice.
                </p>
                <h2 className="text-2xl font-light" id="do-united-states-residents-have-specific-privacy-rights">
                  <strong>Do United States residents have specific privacy rights?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    If you are a resident of California, Colorado, Connecticut, Delaware,
                    Florida, Indiana, Iowa, Kentucky, Minnesota, Montana, Nebraska, New
                    Hampshire, New Jersey, Oregon, Tennessee, Texas, Utah, or Virginia, you may
                    have the right to request access to and receive details about the personal
                    information we maintain about you and how we have processed it, correct
                    inaccuracies, get a copy of, or delete your personal information. You may
                    also have the right to withdraw your consent to our processing of your
                    personal information. These rights may be limited in some circumstances by
                    applicable law. More information is provided below.</em>
                </p>
                <p>
                  <strong>Categories of Personal Information We Collect</strong>
                </p>
                <p>
                  We have collected the following categories of personal information in the past
                  twelve (12) months:
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p><strong>Category</strong></p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p><strong>Examples</strong></p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p><strong>Collected</strong></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>A. Identifiers</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Contact details, such as real name, alias, postal address, telephone
                          or mobile contact number, unique personal identifier, online
                          identifier, Internet Protocol address, email address, and account name
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>YES</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          B. Personal information as defined in the California Customer Records
                          statute
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Name, contact information, education, employment, employment history,
                          and financial information
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          C. Protected classification characteristics under state or federal law
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Gender, age, date of birth, race and ethnicity, national origin,
                          marital status, and other demographic data
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>D. Commercial information</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Transaction information, purchase history, financial details, and
                          payment information
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>YES</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>E. Biometric information</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>Fingerprints and voiceprints</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>F. Internet or other similar network activity</p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Browsing history, search history, online behavior, interest data, and
                          interactions with our and other websites, applications, systems, and
                          advertisements
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>YES</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>G. Geolocation data</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>Device location</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>H. Audio, electronic, sensory, or similar information</p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Images and audio, video or call recordings created in connection with
                          our business activities
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>I. Professional or employment-related information</p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Business contact details in order to provide you our Services at a
                          business level or job title, work history, and professional
                          qualifications if you apply for a job with us
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>J. Education Information</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>Student records and directory information</p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>K. Inferences drawn from collected personal information</p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p>
                          Inferences drawn from any of the collected personal information listed
                          above to create a profile or summary about, for example, an
                          individual's preferences and characteristics
                        </p>
                      </td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p>L. Sensitive personal Information</p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2"><p></p></td>
                      <td colSpan={1} rowSpan={1} className="border border-white/20 p-2">
                        <p></p>
                        <p>NO</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  We may also collect other personal information outside of these categories
                  through instances where you interact with us in person, online, or by phone or
                  mail in the context of:
                </p>
                <ul className="ml-4">
                  <li className="list-disc"><p>Receiving help through our customer support channels;</p></li>
                  <li className="list-disc"><p>Participation in customer surveys or contests; and</p></li>
                  <li className="list-disc">
                    <p>
                      Facilitation in the delivery of our Services and to respond to your
                      inquiries.
                    </p>
                  </li>
                </ul>
                <p>
                  We will use and retain the collected personal information as needed to provide
                  the Services or for:
                </p>
                <ul className="ml-4">
                  <li className="list-disc"><p>Category A - As long as the user has an account with us</p></li>
                  <li className="list-disc"><p>Category D - As long as the user has an account with us</p></li>
                  <li className="list-disc"><p>Category F - 2 months</p></li>
                </ul>
                <p>
                  <strong>Sources of Personal Information</strong>
                </p>
                <p>
                  Learn more about the sources of personal information we collect in "What information do we collect?"
                </p>
                <p>
                  <strong>How We Use and Share Personal Information</strong>
                </p>
                <p>
                  Learn more about how we use your personal information in the section, "How do
                  we process your information?"
                </p>
                <p>
                  <strong>Will your information be shared with anyone else?</strong>
                </p>
                <p>
                  We may disclose your personal information with our service providers pursuant
                  to a written contract between us and each service provider. Learn more about
                  how we disclose personal information to in the section, "When and with whom do
                  we share your personal information?"
                </p>
                <p>
                  We may use your personal information for our own business purposes, such as
                  for undertaking internal research for technological development and
                  demonstration. This is not considered to be "selling" of your personal
                  information.
                </p>
                <p>
                  We have not disclosed, sold, or shared any personal information to third
                  parties for a business or commercial purpose in the preceding twelve (12)
                  months. We will not sell or share personal information in the future belonging
                  to website visitors, users, and other consumers.
                </p>
                <p><strong>Your Rights</strong></p>
                <p>
                  You have rights under certain US state data protection laws. However, these
                  rights are not absolute, and in certain cases, we may decline your request as
                  permitted by law. These rights include:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      <strong>Right to know</strong> whether or not we are processing your
                      personal data
                    </p>
                  </li>
                  <li className="list-disc">
                    <p><strong>Right to access </strong>your personal data</p>
                  </li>
                  <li className="list-disc">
                    <p><strong>Right to correct </strong>inaccuracies in your personal data</p>
                  </li>
                  <li className="list-disc">
                    <p><strong>Right to request</strong> the deletion of your personal data</p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Right to obtain a copy </strong>of the personal data you
                      previously shared with us
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Right to non-discrimination</strong> for exercising your rights
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      <strong>Right to opt out</strong> of the processing of your personal data
                      if it is used for targeted advertising (or sharing as defined under
                      California's privacy law), the sale of personal data, or profiling in
                      furtherance of decisions that produce legal or similarly significant
                      effects ("profiling")
                    </p>
                  </li>
                </ul>
                <p>
                  Depending upon the state where you live, you may also have the following
                  rights:
                </p>
                <ul className="ml-4">
                  <li className="list-disc">
                    <p>
                      Right to access the categories of personal data being processed (as
                      permitted by applicable law, including Minnesota's privacy law)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Right to obtain a list of the categories of third parties to which we have
                      disclosed personal data (as permitted by applicable law, including
                      California's and Delaware's privacy law)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Right to obtain a list of specific third parties to which we have
                      disclosed personal data (as permitted by applicable law, including
                      Minnesota's and Oregon's privacy law)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Right to review, understand, question, and correct how personal data has
                      been profiled (as permitted by applicable law, including Minnesota's
                      privacy law)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Right to limit use and disclosure of sensitive personal data (as permitted
                      by applicable law, including California's privacy law)
                    </p>
                  </li>
                  <li className="list-disc">
                    <p>
                      Right to opt out of the collection of sensitive data and personal data
                      collected through the operation of a voice or facial recognition feature
                      (as permitted by applicable law, including Florida's privacy law)
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>How to Exercise Your Rights</strong>
                </p>
                <p>
                  To exercise these rights, you can contact us by emailing us at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:support@nuovar.com">support@nuovar.com</a>, or by referring to the contact details at the bottom of this document.
                </p>
                <p>
                  We will honor your opt-out preferences if you enact the <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="https://globalprivacycontrol.org/"
                    >Global Privacy Control</a> (GPC) opt-out signal on your browser.
                </p>
                <p>
                  Under certain US state data protection laws, you can designate an authorized
                  agent to make a request on your behalf. We may deny a request from an
                  authorized agent that does not submit proof that they have been validly
                  authorized to act on your behalf in accordance with applicable laws.
                </p>
                <p>
                  <strong>Request Verification</strong>
                </p>
                <p>
                  Upon receiving your request, we will need to verify your identity to determine
                  you are the same person about whom we have the information in our system. We
                  will only use personal information provided in your request to verify your
                  identity or authority to make the request. However, if we cannot verify your
                  identity from the information already maintained by us, we may request that
                  you provide additional information for the purposes of verifying your identity
                  and for security or fraud-prevention purposes.
                </p>
                <p>
                  If you submit the request through an authorized agent, we may need to collect
                  additional information to verify your identity before processing your request
                  and the agent will need to provide a written and signed permission from you to
                  submit such request on your behalf.
                </p>
                <p><strong>Appeals</strong></p>
                <p>
                  Under certain US state data protection laws, if we decline to take action
                  regarding your request, you may appeal our decision by emailing us at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:support@nuovar.com"
                    >support@nuovar.com</a>. We will inform you in writing of any action taken or not taken in response
                  to the appeal, including a written explanation of the reasons for the
                  decisions. If your appeal is denied, you may submit a complaint to your state
                  attorney general.
                </p>
                <p>
                  <strong>California "Shine The Light" Law</strong>
                </p>
                <p>
                  California Civil Code Section 1798.83, also known as the "Shine The Light"
                  law, permits our users who are California residents to request and obtain from
                  us, once a year and free of charge, information about categories of personal
                  information (if any) we disclosed to third parties for direct marketing
                  purposes and the names and addresses of all third parties with which we shared
                  personal information in the immediately preceding calendar year. If you are a
                  California resident and would like to make such a request, please submit your
                  request in writing to us by using the contact details provided in the section
                  "How can you contact us about this notice?"
                </p>
                <h2 className="text-2xl font-light" id="do-we-make-updates-to-this-notice">
                  <strong>Do we make updates to this notice?</strong>
                </h2>
                <p>
                  <strong><em>In Short:</em></strong> <em>
                    Yes, we will update this notice as necessary to stay compliant with relevant
                    laws.</em>
                </p>
                <p>
                  We may update this privacy notice from time to time. The updated version will
                  be indicated by an updated "Revised" date and the updated version will be
                  effective as soon as it is accessible. If we make material changes to this
                  privacy notice, we may notify you either by prominently posting a notice of
                  such changes or by directly sending you a notification. We encourage you to
                  review this privacy notice frequently to be informed of how we are protecting
                  your information.
                </p>
                <h2 className="text-2xl font-light" id="how-can-you-contact-us-about-this-notice">
                  <strong>How can you contact us about this notice?</strong>
                </h2>
                <p>
                  If you have questions or comments about this notice, you may contact us by email at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:privacy@nuovar.com"
                    >privacy@nuovar.com</a>, or by post to:
                </p>
                <p>
                  Nuovar LLC<br />5441 S Macadam Ave Ste N<br />Portland, OR 97239<br />United
                  States
                </p>
                <h2 className="text-2xl font-light" id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
                  <strong>How can you review, update, or delete the data we collect from you?</strong>
                </h2>
                <p>
                  Based on the applicable laws of your country or state of residence in the US,
                  you may have the right to request access to the personal information we
                  collect from you, details about how we have processed it, correct
                  inaccuracies, or delete your personal information. You may also have the right
                  to withdraw your consent to our processing of your personal information. These
                  rights may be limited in some circumstances by applicable law. To request to
                  review, update, or delete your personal information, please email us at <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-white underline decoration-dotted underline-offset-4 hover:text-white/80"
                    href="mailto:support@nuovar.com"
                    >support@nuovar.com</a>.
                </p>
              </div>
            </div>

            <div className="w-64 shrink-0 hidden lg:block">
              <TableOfContents />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
