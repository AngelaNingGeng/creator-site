import { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { DouyinQR } from "@/components/contact/DouyinQR";

export const metadata: Metadata = {
  title: "联系我",
  description: "有什么想法或合作意向？欢迎联系我",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <GradientText>联系我</GradientText>
          </h1>
          <p className="text-white/40 text-lg">
            有什么想法或合作意向？欢迎联系我
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact form */}
          <AnimatedSection className="md:col-span-2">
            <GlassCard variant="strong" className="p-8">
              <h2 className="text-xl font-bold mb-6 gradient-text">发送消息</h2>
              <ContactForm />
            </GlassCard>
          </AnimatedSection>

          {/* Sidebar */}
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <DouyinQR />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <GlassCard className="p-6">
                <h3 className="text-sm font-medium text-white/60 mb-4">关注我</h3>
                <SocialLinks />
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
