import localFont from "next/font/local";
import "./globals.css";
import "./Css/Main.css";
import 'animate.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SEAM Services - E-Rickshaw Repair & Maintenance",
  description: "SEAM Services provides expert e-rickshaw repair, battery replacement, and maintenance solutions. Reliable and affordable services to keep your e-rickshaw running smoothly.",
  keywords: ["e-rickshaw service", "e-rickshaw repair", "e-rickshaw battery replacement", "electric vehicle service", "SEAM Services"],
  openGraph: {
    title: "SEAM Services - E-Rickshaw Repair & Maintenance",
    description: "Reliable e-rickshaw repair and maintenance services to keep your vehicle in top condition.",
    url: "https://seam-services.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://seam-services.netlify.app/your-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEAM Services E-Rickshaw Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEAM Services - E-Rickshaw Repair & Maintenance",
    description: "Expert e-rickshaw repair and battery replacement services.",
    images: ["https://seam-services.netlify.app/your-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="SEAM Services provides expert e-rickshaw repair, battery replacement, and maintenance solutions." />
        <meta name="keywords" content="e-rickshaw service, e-rickshaw repair, e-rickshaw battery replacement, electric vehicle service, SEAM Services" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SEAM Services - E-Rickshaw Repair & Maintenance" />
        <meta property="og:description" content="Reliable e-rickshaw repair and maintenance services to keep your vehicle in top condition." />
        <meta property="og:image" content="https://seam-services.netlify.app/your-image.jpg" />
        <meta property="og:url" content="https://seam-services.netlify.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEAM Services - E-Rickshaw Repair & Maintenance" />
        <meta name="twitter:description" content="Expert e-rickshaw repair and battery replacement services." />
        <meta name="twitter:image" content="https://seam-services.netlify.app/your-image.jpg" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

