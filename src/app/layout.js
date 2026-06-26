import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1C1C1C" },
  ],
};

export const metadata = {
  metadataBase: new URL("https://adithyasenthilkumar57-tech.github.io"),
  title: "Adithya | Creative Developer & UI Engineer | Portfolio",
  description: "Crafting modern web experiences, interactive interfaces, and premium digital products with pixel-perfect design and high-end performance.",
  keywords: [
    "Adithya",
    "Adithya Senthilkumar",
    "Creative Developer",
    "UI Engineer",
    "Web Developer",
    "AI Student Portfolio",
    "Machine Learning Developer",
    "Portfolio Website",
    "Tiruppur Web Developer",
    "Sakthi Vigneshwara Kalvi Nilayam"
  ],
  authors: [{ name: "Adithya" }],
  creator: "Adithya",
  alternates: {
    canonical: "https://adithyasenthilkumar57-tech.github.io/portfolio2/",
  },
  openGraph: {
    title: "Adithya | Creative Developer & UI Engineer | Portfolio",
    description: "Crafting modern web experiences, interactive interfaces, and premium digital products with pixel-perfect design and high-end performance.",
    url: "https://adithyasenthilkumar57-tech.github.io/portfolio2/",
    siteName: "Adithya Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio2/portrait.webp",
        width: 768,
        height: 1024,
        alt: "Adithya - Creative Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya | Creative Developer & UI Engineer | Portfolio",
    description: "Crafting modern web experiences, interactive interfaces, and premium digital products with pixel-perfect design and high-end performance.",
    images: ["/portfolio2/portrait.webp"],
  },
  verification: {
    google: "U_yMdFzcIJVM5fLUBd21ZawzqZIAklRhXnbYST3bKsc",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Adithya",
  "givenName": "Adithya",
  "familyName": "Senthilkumar",
  "url": "https://adithyasenthilkumar57-tech.github.io/portfolio2/",
  "image": "https://adithyasenthilkumar57-tech.github.io/portfolio2/portrait.webp",
  "jobTitle": "AI & Machine Learning Student & Web Developer",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Sakthi Vigneshwara Kalvi Nilayam"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "HTML & CSS",
    "Git & GitHub"
  ],
  "homeLocation": {
    "@type": "Place",
    "name": "Tiruppur, Tamil Nadu, India"
  },
  "sameAs": [
    "https://github.com/adithyasenthilkumar57-tech",
    "https://linkedin.com",
    "https://instagram.com"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  if (theme === 'dark' || (!theme && darkQuery.matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

