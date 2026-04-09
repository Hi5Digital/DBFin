import { MessageCircle, Stethoscope, Shield, Heart, TrendingUp, Users, Building2, ShieldCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";
import capeTown from "@/assets/cape-town.jpg";
import heroFamily from "@/assets/hero-family2.jpg";
import advisorMeeting from "@/assets/advisor-meeting3.jpg";

const individualServices = [
  {
    icon: Stethoscope,
    title: "Medical Aid Planning",
    description: "We compare plans across Discovery, Momentum, Bestmed and more, to find the right medical aid and GAP option for your family's health needs and budget. From hospital plans to comprehensive cover, we'll guide you every step.",
  },
  {
    icon: Shield,
    title: "Short-Term Insurance",
    description: "It’s not just about having cover in place, but about knowing that if something unexpected happens, you’re not left carrying the financial burden on your own. We take the time to understand what matters to you, making sure your cover is practical, appropriate, and keeps pace with changes in your life. Because when things go wrong, the right cover should make life easier—not more complicated.",
  },
  {
    icon: Heart,
    title: "Life & Risk Cover",
    description: "Benefits like income protection, disability, and critical illness cover are becoming increasingly important, with many claims happening while people are still living and working. We often worry about the “what ifs” down the line, but what if something changes sooner—like an illness or injury that affects your ability to earn an income? Having the right cover in place can make all the difference in keeping life steady during uncertain times. With 1 in 4 South Africans being diagnosed with cancer before age 75, planning ahead is less about fear—and more about being prepared.",
  },
  {
    icon: TrendingUp,
    title: "Investment Planning",
    description: "Whether you’re planning for retirement, building wealth, or working towards specific goals, the right strategy should feel clear and aligned with your needs. We focus on practical, well-considered solutions that balance growth with your comfort around risk. The aim isn’t complexity—it’s steady, confident progress over time.",
  },
];

const businessServices = [
  {
    icon: Users,
    title: "Group Medical Aid",
    description: "Attract and retain talent with competitive group medical aid schemes. We handle the admin and ensure your team has the right cover.",
  },
  {
    icon: Building2,
    title: "Commercial Insurance",
    description: "Comprehensive business insurance including liability, assets, and business interruption cover tailored to your industry.",
  },
  {
    icon: ShieldCheck,
    title: "Group Risk Cover",
    description: "Group life, disability, and funeral cover for your employees. We design benefits packages that are cost-effective and competitive.",
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          Our Financial Planning Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Tailored solutions for individuals, families, and businesses across South Africa.
        </p>
      </div>
    </section>

    {/* Individuals */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — intro + stacked cards */}
          <FadeInSection>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">For Individuals & Families</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Protect Your Family's Future</h2>
                <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                  Life is unpredictable, but your financial plan doesn't have to be. We help you find the right cover and savings solutions so you can focus on what matters most.
                </p>
              </div>
              <div className="space-y-4">
                {individualServices.map((service, i) => (
                  <div key={service.title} className="group flex gap-4 rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Right — image */}
          <FadeInSection delay={200}>
            <img
              src={heroFamily}
              alt="Happy South African family protected by DB Financial Planning"
              className="w-full rounded-3xl shadow-xl object-cover"
              loading="lazy"
            />
          </FadeInSection>
        </div>
      </div>
    </section>

    {/* Businesses */}
    <section className="bg-muted/80 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — image */}
          <FadeInSection>
            <img
              src={advisorMeeting}
              alt="Business team meeting with DB Financial Planning advisor"
              className="w-full rounded-3xl shadow-xl object-cover"
              loading="lazy"
            />
          </FadeInSection>

          {/* Right — intro + stacked cards */}
          <FadeInSection delay={200}>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">For Businesses & Employees</p>
                <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Employee Benefits & Business Cover</h2>
                <p className="mt-3 text-muted-foreground text-lg leading-relaxed">
                  Attract and retain top talent with competitive employee benefits, while protecting your business assets with the right commercial insurance.
                </p>
              </div>
              <div className="space-y-4">
                {businessServices.map((service, i) => (
                  <div key={service.title} className="group flex gap-4 rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    {/* Our Approach */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Approach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
              Many people don't fully understand what their policies cover — or whether they're getting value for money. We change that.
            </p>
          </div>
          <div className="mx-auto max-w-2xl space-y-3">
            {[
              "We assess your current financial situation and future goals",
              "We review and compare options across multiple providers",
              "We recommend solutions tailored specifically to you",
              "We handle all administration and ongoing policy management",
              "We conduct regular reviews to keep your plans up to date",
            ].map((step) => (
              <div key={step} className="flex items-center gap-4 rounded-xl bg-muted/50 px-5 py-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Get Expert Advice Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Ready to review your cover or start planning? Reach out for a free consultation.
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

export default Services;
