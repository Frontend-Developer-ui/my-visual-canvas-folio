
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const companies = [
  "Domino's", 
  "BlackCab", 
  "BookYourStory", 
  "B&W", 
  "CodingBears", 
  "Qingwood",
  "Domino's", // Duplicated to create a continuous effect
  "BlackCab", 
  "BookYourStory", 
  "B&W",
];

const CompanyCarousel: React.FC = () => {
  return (
    <div className="w-full py-12 bg-secondary/50 overflow-hidden">
      <div className="container">
        <h3 className="text-xl font-semibold mb-8 text-center font-manrope">Trusted By</h3>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="animate-carousel">
              {companies.map((company, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-6">
                  <div className="bg-secondary/70 h-24 rounded-lg flex items-center justify-center p-6 border border-primary/10">
                    <span className="text-lg font-medium text-foreground/80 font-manrope">
                      {company}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
