import React from 'react';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';
export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center space-x-2 mb-8">
          <Code2 className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold font-display text-primary">SYP TECH</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl font-display">
          Ready to Innovate?
        </h2>
        <p className="mt-4 text-lg leading-6 text-muted-foreground">
          Let's discuss how our expertise can drive your business forward.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="mailto:contact@syp.tech">Contact Us</a>
          </Button>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} SYP TECH. All rights reserved.
          </p>
           <p className="text-sm text-muted-foreground/50 mt-2">
            Built with ❤️ at Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
};