type Product = {
  id: string
  name: string
  subtitle: string
  image: string
  longDescription: string
  techStack: string[]
  features: string[]
  screenshots: string[]
  productUrl?: string
  demoUrl?: string
  githubUrl?: string
  tags: string[]
}

export const techStackLinks = {
  "Vue.js": "https://vuejs.org/",
  "Firebase": "https://firebase.google.com/",
  "Cloudflare": "https://workers.cloudflare.com/",
  "Next.js": "https://nextjs.org/",
  "Convex": "https://www.convex.dev/",
  "Clerk": "https://clerk.com/",
  "Drizzle": "https://orm.drizzle.team/",
  "Nuxt": "https://nuxt.com/",
  "Better Auth": "https://www.better-auth.com/",
  "Hono": "https://hono.dev/",
}

export const products: Product[] = [
  {
    id: "rackmanage",
    name: "Rack Manage",
    subtitle: "Datacenter rack design, layout, and inventory management made simple",
    image: "/rackmanage/2.png",
    longDescription:
      "Rack Manage makes it easy to design, visualize, and manage your datacenter racks and rooms. With an intuitive drag-and-drop editor, interactive room layouts, and inventory management, it helps teams stay organized, reduce mistakes, and maintain an accurate view of their physical infrastructure.",
    techStack: ["Vue.js", "Firebase", "Cloudflare"],
    features: [
      "Intuitive drag-and-drop rack editor",
      "Server and equipment inventory management",
      "Interactive room layouts and rack mapping",
      "REST API + webhooks for automation and integrations",
      "Export to PDF, PNG, CSV, and JSON",
      "Team collaboration, access controls, and permissions",
    ],
    screenshots: [
      "/rackmanage/0.png",
      "/rackmanage/1.png",
      "/rackmanage/2.png",
      "/rackmanage/3.png",
    ],
    productUrl: "https://rackmanage.io",
    tags: [],
  },
  {
    id: "observe",
    name: "Observe Domains",
    subtitle: "Domain registration and SSL certificate monitoring",
    image: "/observe/4.png",
    longDescription:
      "Observe Domains gives you deep visibility into domain registrations, ownership changes, and SSL certificate status. Track expirations, detect updates, and receive real-time alerts—so nothing slips through the cracks. Automatically import domains from registrars or DNS providers and keep everything in sync without manual work.",
    techStack: ["Next.js", "Convex", "Clerk", "Cloudflare"],
    features: [
      "Track domain registration, ownership details, and expiration dates",
      "Monitor SSL certificate issuance, renewal, and expiration",
      "Automatic domain import and syncing from registrar and DNS providers",
      "Email + webhook notifications for important events",
      "RDAP domain intelligence and metadata insights",
      "Fast, powerful search, filters, and organization tools",
    ],
    screenshots: [
      "/observe/1.png",
      "/observe/2.png",
      "/observe/4.png",
      "/observe/3.png",
    ],
    productUrl: "https://observe.domains",
    tags: [],
  },
  {
    id: "velocitymail",
    name: "Velocity Mail",
    subtitle: "Email automation and delivery testing",
    image: "/velocitymail/0.png",
    longDescription:
      "Velocity Mail is an email delivery testing platform allowing teams and automations alike to test and validate email delivery without the hassle of setting up your own infrastructure and risk of emailing your users. Test delivery, validate authentication, analyze headers, spam scores, and more. Get a free @velocitymail.io email address, connect your own domain, or use our fake SMTP server to capture emails.",
    techStack: ["Next.js", "Cloudflare"],
    features: [
      "Emphemeral and persistent inboxes",
      "Free @velocitymail.io addresses or connect your own domain",
      "Fake SMTP server to capture email from any app supporting SMTP",
      "Analyze authentication, spam scores, antivirus results, headers, and more",
      "DNS record generation and validation for SPF, DKIM, DMARC, MTA-STS, and BIMI",
      "Multi-user organization with RBAC, SSO, and SCIM support",
    ],
    screenshots: ["/velocitymail/0.png", "/velocitymail/1.png", "/velocitymail/2.png", "/velocitymail/3.png"],
    productUrl: "https://velocitymail.io",
    tags: [],
  },
  {
    id: "amplehelp",
    name: "AmpleHelp",
    subtitle: "AI-powered knowledge bases and help centers for modern teams",
    image: "/amplehelp/3.png",
    longDescription:
      "AmpleHelp lets you build beautiful, structured knowledge bases and help centers that customers and teams enjoy using. AmpleHelp AI allows users to ask questions, learn from your documentation, and continuously improve as your content grows, reducing support load while making information easier to find.",
    techStack: ["Nuxt", "Firebase", "Cloudflare"],
    features: [
      "AI-assisted search and chat with your knowledge base",
      "Customizable themes and branding",
      "Rich content editor with media, code, embeds, and more",
      "Built-in feedback, insights, and usage analytics",
      "Custom domains and hosted subdomains",
      "Integrated contact forms and support routing",
    ],
    screenshots: ["/amplehelp/0.png", "/amplehelp/1.png", "/amplehelp/2.png", "/amplehelp/3.png"],
    productUrl: "https://amplehelp.com",
    tags: ['Closed Beta'],
  },
  {
    id: "hookhq",
    name: "HookHQ",
    subtitle: "Open-source, simple, scalable outbound webhooks",
    image: "/hookhq/4.png",
    longDescription:
      "HookHQ is an open-source outbound webhook platform built entirely on the Cloudflare Developer Platform. It provides a lightweight management dashboard, developer-friendly API, and embeddable customer portal, making it easy to deliver reliable webhook events from your applications without building the infrastructure yourself.",
    techStack: ["Next.js", "Hono", "Cloudflare"],
    features: [
      "One-click deployment to Cloudflare Workers",
      "Real-time delivery metrics, analytics, and logging",
      "Support for multiple environments and applications",
      "Organized endpoint grouping and structured event types",
      "Embeddable user portal for customer-managed endpoints",
      "Static IP proxying for restricted destinations",
    ],
    screenshots: ["/hookhq/0.png", "/hookhq/1.png", "/hookhq/4.png", "/hookhq/3.png"],
    productUrl: "https://github.com/NuovarDev/HookHQ",
    tags: [],
  },
]

export const company = {
  name: "Nuovar",
  email: "hello@nuovar.com",
  tagline: "Practical tools for modern developers and teams",
  description: "We build developer tools and SaaS products that help teams work smarter, move faster, and operate with confidence. Our software is designed to be simple, powerful, and ready for real-world use.",
  github: "https://github.com/NuovarDev",
  about: `Welcome to Nuovar, where we build developer tools and infrastructure solutions that teams depend on. We're an indie development studio focused on shipping practical, thoughtfully designed software for developers and businesses.
  
  Our mission is to build tools that solve real infrastructure and operational challenges. We specialize in developer tools and SaaS products that integrate seamlessly into modern workflows.
  
  From open-source projects to cloud-native applications, we leverage cutting-edge technologies to deliver reliable, performant solutions that scale.`,
  bulletPoints: [
    "Ship modern web applications using proven, forward-looking technologies",
    "Develop tools that streamline workflows, reduce operational overhead, and improve reliability",
    "Build with a strong emphasis on performance, accessibility, usability, and clear developer experience",
  ]
}
