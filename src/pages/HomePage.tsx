import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionTitle } from '@/components/syptech/SectionTitle';
import { ServiceCard } from '@/components/syptech/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dataScienceServices, blockchainServices, trainingServices } from '@/config/syptechData';
import { ArrowDown } from 'lucide-react';
const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
    <div className="absolute inset-0 bg-background/50"></div>
    <div className="relative z-10 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="block text-primary">SYP TECH</span>
        <span className="block text-accent">Innovation Landscape</span>
      </motion.h1>
      <motion.p
        className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Pioneering solutions through AI-driven data science and secure blockchain development.
      </motion.p>
      <motion.div
        className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#services">Explore Our Expertise</a>
        </Button>
      </motion.div>
    </div>
    <motion.div
      className="absolute bottom-10"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <a href="#services" aria-label="Scroll down">
        <ArrowDown className="h-8 w-8 text-muted-foreground" />
      </a>
    </motion.div>
  </section>
);
const ServicesSection: React.FC = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title="Core Research & Development Areas"
        subtitle="Our expertise is structured into two complementary domains, driving innovation independently and in synergy."
      />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">{dataScienceServices.title}</h3>
          <p className="text-muted-foreground mb-8">{dataScienceServices.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {dataScienceServices.services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">{blockchainServices.title}</h3>
          <p className="text-muted-foreground mb-8">{blockchainServices.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blockchainServices.services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
const TrainingSection: React.FC = () => (
  <section id="training" className="py-16 md:py-24 bg-secondary/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle
        title={trainingServices.title}
        subtitle={trainingServices.description}
      />
      <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {trainingServices.programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-background/50 border-border">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <program.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export const HomePage: React.FC = () => {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrainingSection />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};