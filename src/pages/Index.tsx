import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, Shield, Heart, TrendingUp, Stethoscope, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

import heroFamily from "@/assets/hero-family.jpg";
import advisorMeeting from "@/assets/advisor-meeting.jpg";
import handshake from "@/assets/handshake.jpg";

const services = [
  { icon: Stethoscope, title: "Medical Aid", description: "Find the right medical aid plan for you and your family with unbiased, expert comparisons across all major providers.", link: "/services" },
  { icon: Shield, title: "Short-Term Insurance", description: "Short-term insurance is there to protect the things you rely on every day—your home, your car, and your belongings.", link: "/services" },
  { icon: Heart, title: "Life & Risk Cover", description: "Risk cover isn’t just for death and estate planning, it’s also about protecting your life as it is now.", link: "/services" },
  { icon: TrendingUp, title: "Investments", description: "Investing is about more than just growing your money—it’s about creating options for your future.", link: "/services" },
];

const trustPoints = [
  "Fully independent — we work for you, not the insurers",
  "Access to all major South African providers",
  "Personalised plans based on your unique needs",
  "Ongoing support and annual reviews",
  "Over a decade of trusted financial guidance",
  "FSP 45874 — fully licensed and compliant",
];
const approach = [
  "Insurance can feel complicated, and it’s not always clear what you’re covered for or whether it still fits your needs.",
  "We help you understand it simply - to ensure it works for you.",
  "From reviewing your current cover to recommending practical adjustments, our focus is on giving you clarity, confidence, and solutions that make sense for your everyday life.",
];


const clienttestimonials = [
  { icon: Stethoscope, title: "Henry Kasner", description: "Donovan Brand is die ou wat jy wil sien. Not only a broker but a financial planner as well. 076 990 9908. Excellent service. I was in a accident recently and he helped me sort out all the paperwork and took all the hassle. From the medical to the disability claims etc.", link: "/services" },
  { icon: Heart, title: "Gerhard Gibbs", description: "As you know I like to smash bad service, but here's the opposite. Broke into my bakkie and stole radio and speakers. I recently joined Discovery Insure, via DB Financial Planning - and in under 24 hrs my claim was approved, bakkie booked in to be fixed, and all without having to fill in or type one letter on any piece of paper, with zero added payments. Well done both - amaizing service! BTW: my monthly installments when I joined dropped significantly after 15 years at previous insurer.", link: "/services" },
  { icon: TrendingUp, title: "Louis Awerbuck", description: "I can honestly say that DBFin provides the most efficient and fair service I have ever seen in this industry. Amazing care and customer-oriented, always going the extra mile. Thank you guys.— with Donovan Brand and Tammy Brand.", link: "/services" },
  { icon: Shield, title: "Graham Brown", description: "Knowledgable friendly service. Eager to assist! Will recommend them at any time to everyone.", link: "/services" },
];

const providers = ["Discovery", "Momentum", "Old Mutual", "Sanlam", "Liberty", "Hollard", "FNB Life", "Bonitas"];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden gradient-primary bottom-0">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6 text-white">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Financial Planning That Protects What Matters Most
            </h1>
            <p className="text-lg leading-relaxed text-white/85 md:text-xl">
              Personalised insurance for medical aid, short term, disability, severe illness, life cover, investments for individual and businesses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white/40 text-white hover:bg-white/10 bg-transparent">
                <Link to="/services">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              {/* Top-right decoration */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-primary/20" />
              <img
              src={heroFamily}
              alt="Happy South African family protected by DB Financial Planning"
              className="relative rounded-2xl shadow-2xl"
              width={1920}
              height={1080}
            />
            </div>
            
          </div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0" style={{ bottom: "-2px" }}>
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto">
            <path d="M0 60V20C240 45 480 5 720 20C960 35 1200 0 1440 20V60H0Z" fill="hsl(0,0%,100%)" />
          </svg>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left — copy */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl leading-tight">
                Trusted Financial Planning<br></br> in{" "}
                <span className="text-gradient">Cape Town</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With over 15 years of experience, DB Financial Planning provides independent, personalised financial advice to individuals, families, and businesses across South Africa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that financial planning should be simple, transparent, and focused on what truly matters to you. Whether you're looking for the right medical aid, comprehensive insurance cover, or a sound investment strategy — we're here to guide you every step of the way.
              </p>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right — image with corner decorations */}
            <div className="relative">
              {/* Top-right decoration */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-3xl bg-primary/20" />
              {/* Bottom-left decoration */}
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-primary/20" />
              <img
                src={advisorMeeting}
                alt="Financial advisor meeting with clients"
                className="relative rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>

    {/* Services Overview */}
    <section className="bg-muted/80 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">How We Can Help</h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your life stage and goals.
            </p>
          </div>
        </FadeInSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 100}>
              <Link
                to={service.link}
                className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative">
              {/* Top-right decoration */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-primary/20" />
              {/* Bottom-left decoration */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-3xl bg-primary/20" />
              <img
              src={handshake}
              alt="Professional partnership and trust"
              className="relative rounded-2xl shadow-lg"
              loading="lazy"
              width={1024}
              height={1024}
            />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Why Clients Choose DB Financial Planning
              </h2>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Our Approach
              </h2>
              <ul className="space-y-3">
                {approach.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>

    {/* Client Testimonials */}
    <section className="bg-muted/80 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Client Testimonials</h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              Truthfull feedback from some of our clients.
            </p>
          </div>
        </FadeInSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clienttestimonials.map((service, i) => (
            <FadeInSection key={service.title} delay={i * 100}>
              <Link
                to={service.link}
                className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="gradient-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{service.title}</h3>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>

    {/* Provider Logos */}
    <section className="border-y bg-muted/80 py-10">
      <div className="container mx-auto px-4">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted Providers We Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {providers.map((provider) => (
            <div
              key={provider}
              className="rounded-lg border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-sm"
            >
              {provider}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let's Put the Right Plan in Place
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get in touch for a free, no-obligation consultation. We'll help you find the coverage and investments that fit your life.
          </p>
          <Button asChild size="lg" className="mt-8 gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </FadeInSection>
      </div>
    </section>
  </Layout>
);

export default Index;
