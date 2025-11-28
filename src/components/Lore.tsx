import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const Lore = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          The Lore
        </h2>
        
        <Card className="bg-card/50 backdrop-blur border-primary/20 shadow-glow mb-8">
          <CardContent className="p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Dive deeper into the story behind the mission. Explore the full narrative, the theories, and the questions that drive us.
            </p>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-strong transition-all text-lg"
              asChild
            >
              <a 
                href="https://grok.com/share/c2hhcmQtMg_c4b5a523-cb9a-4ff5-8cde-e1682ea0ded9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read the Lore
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

