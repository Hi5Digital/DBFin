import { MessageCircle, ShieldCheck, Home, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

const riskFaqs = [
  {
    q: "What is risk cover?",
    a: "Risk cover protects you and your loved ones if something unexpected happens—like loss of income, illness, injury, or death.",
  },
  {
    q: "What's the difference between life cover and income protection?",
    a: "Life cover pays your loved ones if you die. Income protection keeps money coming in if you can't work.",
  },
  {
    q: "Do I really need income protection insurance?",
    a: "If you rely on your salary, yes. It replaces your income if illness or injury stops you from earning.",
  },
  {
    q: "What is critical illness cover?",
    a: "Pays a lump sum if you're diagnosed with a serious illness, helping cover medical costs or living expenses.",
  },
  {
    q: "How much life cover do I need?",
    a: "Enough to cover debts, support your family, and keep life steady. We can help calculate the right amount.",
  },
];

const shortTermFaqs = [
  {
    q: "What does short-term insurance cover?",
    a: "Things you rely on every day—your home, car, and belongings.",
  },
  {
    q: "What is the difference between comprehensive and third-party car insurance?",
    a: "Comprehensive covers your car and others' cars. Third-party only covers damage you cause to someone else's car.",
  },
  {
    q: "How do I know if my home is insured for the right value?",
    a: "We review your property and contents to make sure you're not over- or under-insured.",
  },
  {
    q: "What affects my insurance premium?",
    a: "Your property and car location, claims history, and level of cover all play a part.",
  },
  {
    q: "How do I make a claim?",
    a: "Contact your insurer or us—we'll guide you through the process quickly and without surprises.",
  },
];

const generalFaqs = [
  {
    q: "Can you review my current policies?",
    a: "Absolutely. We'll check for gaps, overlaps, and make sure your cover matches your life.",
  },
  {
    q: "Am I overpaying for insurance?",
    a: "Many people are. A quick review often finds savings without losing cover.",
  },
  {
    q: "How often should I review my cover?",
    a: "At least once a year—or whenever life changes, like a new home, job, or family.",
  },
  {
    q: "Is there any obligation when I ask for advice or a quote?",
    a: "Not at all. You get clarity first, then decide.",
  },
];

interface FaqSectionProps {
  icon: React.ElementType;
  label: string;
  title: string;
  faqs: { q: string; a: string }[];
  accordionId: string;
  delay?: number;
}

const FaqSection = ({ icon: Icon, label, title, faqs, accordionId, delay = 0 }: FaqSectionProps) => (
  <FadeInSection delay={delay}>
    <div className="rounded-2xl border bg-card shadow-sm p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="gradient-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{label}</p>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`${accordionId}-${i}`}>
            <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </FadeInSection>
);

const FAQs = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Clear answers to common questions about insurance and financial planning.
        </p>
      </div>
    </section>

    {/* FAQ Sections */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          <FaqSection
            icon={ShieldCheck}
            label="Risk Cover"
            title="Protecting Your Income & Family"
            faqs={riskFaqs}
            accordionId="risk"
            delay={0}
          />
          <FaqSection
            icon={Home}
            label="Short-Term Insurance"
            title="Protecting Your Home & Possessions"
            faqs={shortTermFaqs}
            accordionId="short"
            delay={100}
          />
          <FaqSection
            icon={HelpCircle}
            label="General Questions"
            title="Making Sense of Your Policies"
            faqs={generalFaqs}
            accordionId="general"
            delay={200}
          />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            We're happy to help. Reach out and we'll give you a straight answer.
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

export default FAQs;
