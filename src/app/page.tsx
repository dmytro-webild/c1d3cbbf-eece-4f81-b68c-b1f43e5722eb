"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Chef Artisan"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Elevate Your Dining Experience"
      description="Crafting bespoke culinary journeys in the comfort of your own home. Let Chef Artisan transform your next evening into a masterpiece."
      imageSrc="http://img.b2bpic.net/free-photo/side-view-woman-eating-fried-fish-with-mashed-potatoes-vegetables-plate_141793-12535.jpg"
      imageAlt="Chef plating gourmet dish"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="From My Kitchen to Your Table"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Farm-to-Table",
          description: "Fresh, locally-sourced ingredients selected daily.",
          buttonIcon: "ChefHat",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-vegetables-with-copy-space_23-2148253285.jpg",
        },
        {
          title: "Luxury Dining",
          description: "Fine dining restaurant quality at home.",
          buttonIcon: "Utensils",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-squashes-designed-meal-inside-plate-grey-surface_140725-89989.jpg",
        },
        {
          title: "Unique Recipes",
          description: "Custom dishes designed for your palate.",
          buttonIcon: "Sparkles",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-squashes-designed-meal-inside-plate-grey-surface_140725-89993.jpg",
        },
        {
          title: "Event Planning",
          description: "Seamless execution for special events.",
          buttonIcon: "CalendarDays",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-banquet-cloth-setting-napkin_1203-5651.jpg",
        },
      ]}
      title="Tailored Culinary Services"
      description="Personalized dining solutions for any occasion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Exceptional Quality",
          quote: "The best meal we've ever had at home.",
          name: "Alice M.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-womens-toasting_23-2148451600.jpg",
        },
        {
          id: "2",
          title: "Perfect Evening",
          quote: "Chef made our anniversary truly special.",
          name: "John D.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/lovely-couple-enjoying-new-year-party_23-2149173295.jpg",
        },
        {
          id: "3",
          title: "Unmatched Taste",
          quote: "Every dish was a piece of art.",
          name: "Sarah P.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-apartment-party-paying-attention-interesting-story-shared-by-friend-while-eating_482257-85712.jpg",
        },
        {
          id: "4",
          title: "Wonderful Experience",
          quote: "Professional, clean, and delicious.",
          name: "Mike R.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-set-with-fork-spoon-knife_140725-1835.jpg",
        },
        {
          id: "5",
          title: "Top Tier Chef",
          quote: "An unforgettable dining experience.",
          name: "Lisa G.",
          role: "Client",
          imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517411.jpg",
        },
      ]}
      title="What My Clients Say"
      description="Exquisite memories created with every plate."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          title: "Intimate Dinner",
          price: "$300",
          period: "per event",
          features: [
            "3-course meal",
            "Custom menu",
            "Service included",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/waiter-holding-plate-fried-aubergine-wraps-with-walnuts_140725-5250.jpg",
          imageAlt: "Waiter holding a plate of fried aubergine wraps with walnuts",
        },
        {
          id: "p2",
          title: "Gourmet Party",
          price: "$750",
          period: "per event",
          features: [
            "5-course meal",
            "Wine pairing",
            "Full cleanup",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-eating-fried-fish-with-mashed-potatoes-vegetables-plate_141793-12535.jpg",
          imageAlt: "Waiter holding a plate of fried aubergine wraps with walnuts",
        },
        {
          id: "p3",
          title: "Event Full-Day",
          price: "$1500",
          period: "per day",
          features: [
            "All-day service",
            "Full meal plan",
            "Concierge planning",
          ],
          button: {
            text: "Book Now",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149727989.jpg",
          imageAlt: "Waiter holding a plate of fried aubergine wraps with walnuts",
        },
      ]}
      title="Curated Experiences"
      description="Choose your perfect culinary journey."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Dietary Restrictions?",
          content: "Absolutely, all menus are personalized to your needs.",
        },
        {
          id: "f2",
          title: "Service Area?",
          content: "Serving a 50-mile radius around the city center.",
        },
        {
          id: "f3",
          title: "Booking Policy?",
          content: "A 50% deposit secures your date.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about the service."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Culinary Insights"
      description="Tips, trends, and chef stories."
      blogs={[
        {
          id: "b1",
          category: "Tips",
          title: "Perfect Seasoning",
          excerpt: "The secrets behind every great meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/recipe-book-hourglass-kitchen_23-2148114225.jpg",
          authorName: "Chef",
          authorAvatar: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149727989.jpg",
          date: "Oct 2024",
        },
        {
          id: "b2",
          category: "Pairing",
          title: "Wine Secrets",
          excerpt: "Elevate your dinner with the right drink.",
          imageSrc: "http://img.b2bpic.net/free-photo/dish-hands-holding-menu_23-2147680626.jpg",
          authorName: "Chef",
          authorAvatar: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149728027.jpg",
          date: "Oct 2024",
        },
        {
          id: "b3",
          category: "Trends",
          title: "Modern Cooking",
          excerpt: "New techniques in the kitchen.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-cooking-pizza_23-2150405878.jpg",
          authorName: "Chef",
          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-male-chef-standing-kitchen-shrugging_23-2147863654.jpg",
          date: "Oct 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in touch"
      title="Ready to book your private chef?"
      description="Contact me today to discuss your next meal."
      buttons={[
        {
          text: "Contact Chef",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Chef Artisan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
