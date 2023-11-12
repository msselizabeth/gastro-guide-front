import './globals.scss';
import { notFound } from "next/navigation";
import { Montserrat, Days_One, Montserrat_Alternates } from "next/font/google";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContactsSection } from '@/components/ContactsSection';
import { NextIntlClientProvider, useMessages } from 'next-intl';



export const mons = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-primary",
});
export const monsA = Montserrat_Alternates({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-titles",
});

export const daysOne = Days_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const locales = ["en", "ua"];

export const metadata = {
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      type: "image/svg",
      sizes: "16x16",
      url: "/favicon.svg",
    },
  ],
};


export default function RootLayout({ children, params}) {
  
  const isValidLocale = locales.some((cur) => cur === params.locale);
  if (!isValidLocale) notFound();

  const messages = useMessages();
  
  return (
    <html
      lang={params.locale}
      className={`${mons.variable} ${daysOne.variable} ${monsA.variable}`}
    >
      <body>
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            <Header></Header>
            <main>
              {children}
              <ContactsSection />
            </main>
            <Footer></Footer>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
