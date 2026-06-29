"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageSquare,
  Send,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
import { GradientText } from "@/components/ui/gradient-text";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mayitolalito@hotmail.com",
      href: "mailto:mayitolalito@hotmail.com",
      description: t("contact.method.email.desc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: t("contact.method.phone.label"),
      value: "44-38-40-91-87",
      href: "tel:44-38-40-91-87",
      description: t("contact.method.phone.desc"),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Morelia, Michoacán, México",
      href: "#",
      description: t("contact.method.location.desc"),
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mario-S-M",
      href: "https://github.com/Mario-S-M",
      description: t("contact.method.github.desc"),
      color: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mario Eduardo Sánchez Mejía",
      href: "https://www.linkedin.com/in/mario-eduardo-sánchez-mejía-137548184/",
      description: t("contact.method.linkedin.desc"),
      color: "from-blue-600 to-blue-800",
    },
  ];

  const quickMessages = [
    t("contact.quickmsg.1"),
    t("contact.quickmsg.2"),
    t("contact.quickmsg.3"),
    t("contact.quickmsg.4"),
  ];

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = "4438409187"; // Sin guiones para WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <GradientText variant="elegant">{t("contact.title")}</GradientText>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-sm mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <BlurFade delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">
                <GradientText variant="primary">
                  {t("contact.methods.title")}
                </GradientText>
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            method.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center space-x-4 w-full"
                        >
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-r ${method.color} flex-shrink-0`}
                          >
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {method.label}
                            </h4>
                            <p className="text-sm text-primary font-medium">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Quick Contact */}
          <BlurFade delay={0.6}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">
                <GradientText variant="secondary">{t("contact.quick.title")}</GradientText>
              </h3>

              {/* WhatsApp Quick Messages */}
              <Card className="border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-3">
                      <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold">WhatsApp</h4>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {t("contact.whatsapp.desc")}
                  </p>

                  <div className="space-y-2">
                    {quickMessages.map((message, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left justify-start h-auto p-3 group"
                        onClick={() => sendWhatsAppMessage(message)}
                      >
                        <Send className="w-4 h-4 mr-2 text-green-600 group-hover:rotate-12 transition-transform" />
                        <span className="text-sm">{message}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Email Direct */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">{t("contact.email.card.title")}</h4>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {t("contact.email.card.desc")}
                  </p>

                  <Button asChild className="w-full">
                    <a href="mailto:mayitolalito@hotmail.com?subject=¡Hola Mario!&body=Hola Mario,%0A%0AMe gustaría hablar contigo sobre...">
                      <Mail className="w-4 h-4 mr-2" />
                      {t("contact.email.send")}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h4 className="font-bold text-lg mb-2">
                    <GradientText>{t("contact.cta.title")}</GradientText>
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("contact.cta.desc")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={() =>
                        sendWhatsAppMessage(
                          "¡Hola Mario! Me gustaría hablar sobre una oportunidad laboral."
                        )
                      }
                      className="flex-1"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button asChild variant="outline" className="flex-1">
                      <a href="mailto:mayitolalito@hotmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        </div>

        {/* Footer */}
        <BlurFade delay={0.8}>
          <div className="mt-16 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
            <p className="text-muted-foreground">
              {t("contact.footer.built")}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t("contact.footer.rights")}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
