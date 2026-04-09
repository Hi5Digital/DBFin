import { MessageCircle, Heart, Users, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";
import capeTown from "@/assets/cape-town.jpg";

const values = [
  {
    icon: Users,
    title: "Relationships Over Transactions",
    description: "We've built our business around relationships rather than transactions—taking the time to listen, explain, and guide without overcomplicating things.",
  },
  {
    icon: Heart,
    title: "Hands-On & Connected",
    description: "Being a small business allows us to stay hands-on and connected, so our clients always know who they're dealing with.",
  },
  {
    icon: Lightbulb,
    title: "Confident Decision-Making",
    description: "For us, it's not just about policies and plans—it's about helping you feel confident in the decisions you make.",
  },
  {
    icon: Star,
    title: "Real Lives, Not Just Numbers",
    description: "We care about getting things right, because we know these decisions affect real lives, not just numbers.",
  },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="gradient-primary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          About Us
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          At DB Financial Planning, we believe that good advice starts with understanding people.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — image */}
          <FadeInSection>
            <img
              src={capeTown}
              alt="Cape Town — home of DB Financial Planning"
              className="w-full rounded-3xl shadow-xl object-cover"
              loading="lazy"
            />
          </FadeInSection>

          {/* Right — copy */}
          <FadeInSection delay={200}>
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Built Around People
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We've built our business around relationships rather than transactions—taking the time to listen, explain, and guide without overcomplicating things.
                </p>
                <p>
                  Being a small business allows us to stay hands-on and connected, so our clients always know who they're dealing with.
                </p>
                <p>
                  For us, it's not just about policies and plans—it's about helping you feel confident in the decisions you make.
                </p>
                <p>
                  We care about getting things right, because we know these decisions affect real lives, not just numbers.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="bg-muted/80 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What Guides Us</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="group flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-lg">
                  <value.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
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
            Let's Have a Conversation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            If you'd like to get to know us better or explore how we can help, we're always happy to chat.
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

export default About;
