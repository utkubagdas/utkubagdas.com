import { notFound } from "next/navigation";
import { getDictionary, locales, type Locale } from "@/lib/i18n/dictionaries";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Currently from "@/components/Currently";
import Services from "@/components/Services";
import Process from "@/components/Process";
import PullQuote from "@/components/PullQuote";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import GitHubActivity from "@/components/GitHubActivity";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollUI from "@/components/ScrollUI";
import CustomCursor from "@/components/CustomCursor";
import StructuredData from "@/components/StructuredData";
import SplashScreen from "@/components/SplashScreen";
import Achievements from "@/components/Achievements";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = getDictionary(locale as Locale);
  const l = locale as Locale;

  const sections = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "process", label: t.nav.process },
    { id: "projects", label: t.nav.projects },
    { id: "faq", label: t.nav.faq },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <SplashScreen />
      <StructuredData locale={l} t={t} />
      <CustomCursor />
      <Achievements locale={l} />
      <ScrollReveal />
      <ScrollUI sections={sections} />
      <a href="#main" className="skip-link">
        {l === "tr" ? "İçeriğe atla" : "Skip to content"}
      </a>
      <Header locale={l} t={t} />
      <main id="main">
        <Hero locale={l} t={t} />
        <Stats t={t} />
        <About locale={l} t={t} />
        <Currently t={t} />
        <Services t={t} locale={l} />
        <Process t={t} />
        <PullQuote t={t} />
        <Projects locale={l} t={t} />
        <Journey t={t} />
        <GitHubActivity t={t} locale={l} />
        <Testimonials t={t} />
        <FAQ t={t} />
        <CTA t={t} />
        <Contact t={t} />
      </main>
      <Footer locale={l} t={t} />
    </>
  );
}
