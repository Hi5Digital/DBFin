import { MessageCircle, MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";
import friendlyAdvisor from "@/assets/friendly-advisor.jpg";

const contactDetails = [
  { icon: MapPin, label: "Location", value: "Cape Town, South Africa" },
  { icon: MessageCircle, label: "WhatsApp", value: "+27 00 000 0000", href: WHATSAPP_URL },
  { icon: Mail, label: "Email", value: "info@dbfinancial.co.za", href: "mailto:info@dbfinancial.co.za" },
  { icon: Phone, label: "Phone", value: "+27 00 000 0000", href: "tel:+27000000000" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 08:00 – 17:00" },
];

const Contact = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          We're here to help with all your financial planning needs. Let's start a conversation.
        </p>
      </div>
    </section>

    {/* Contact Details */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <FadeInSection>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Let's Talk About Your Future</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Whether you need medical aid advice, insurance quotes, or investment guidance — we'd love to hear from you. Reach out via WhatsApp for the fastest response.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA Block */}
              <div className="gradient-primary rounded-2xl p-8 text-center">
                <MessageCircle className="mx-auto mb-3 h-10 w-10 text-white/80" />
                <h3 className="text-xl font-bold text-white">Prefer WhatsApp?</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-white/80">
                  Most of our clients prefer chatting on WhatsApp. It's quick, easy, and you'll get a personal response.
                </p>
                <Button asChild size="lg" className="mt-6 gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="space-y-6">
              <img
                src={friendlyAdvisor}
                alt="Friendly DB Financial Planning advisor"
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="rounded-xl bg-muted/60 p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  DB Financial Planning (Pty) Ltd — Licensed Financial Services Provider
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">FSP Number: 45874</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Your Financial Future Starts Here
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Book a free, no-obligation consultation today. Let's find the right plan for you.
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

export default Contact;
