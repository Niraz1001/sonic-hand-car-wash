
import { NavItem, Services, SubscriptionPlans, Testimonials } from "@/src/types";

export const NavItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Subscription", href: "/subscriptions" },
    { name: "Enquiry", href: "/enquiry" },
];

export const CustomerSupport: NavItem[] = [
    { name: "FAQ", href: "/" },
    { name: "Terms & Conditions", href: "/" },
    { name: "Privacy Policy", href: "/" },
];


export const ServicesCard: Services[] = [
    {
        img: "/img/car1.png",
        title: "Basic Hand Wash",
        description: "Thorough exterior wash using premium products and hand-drying for a pristine finish.",
        price: "$29.99"
    },
    {
        img: "/img/car2.png",
        title: "Deluxe Wash & Wax",
        description: "Complete exterior treatment including premium wax for long-lasting protection and shine.",
        price: "$59.99"
    },
    {
        img: "/img/car3.png",
        title: "Interior Cleaning",
        description: "Deep cleaning of all interior surfaces, including vacuum, steaming, and leather conditioning.",
        price: "$79.99"
    },
]

export const TestimonialData: Testimonials[] = [
    {
        img: "/img/testimonial-4.jpg.png",
        name: "Ram Maharjan",
        title: " Top-notch repair service!",
        description: "They revived my old bik beautifully Friendly team and great turnaround time. Absolutely satisfied!",
    },
    {
        img: "/img/testimonial-4.jpg.png",
        name: "Hari Shrestha",
        title: "  Exceptional service! My car",
        description: "shines like new. Friendly staff and quick turnaround. Highly recommend this car wash!",
    },
    {
        img: "/img/testimonial-2.jpg.png",
        name: "Cita Dangol",
        title: " Fantastic service! They",
        description: "fixed my bike quickly and professionally. Friendly staff and great prices. Highly recommend for repairs!",
    },

]


export const SubscriptionPlanData: SubscriptionPlans[] = [
    {
      title: "Basic Plan",
      price: "29.99",
      features: ["4 washes per month", "Priority service", "Basic exterior wash"],
      isPopular: false,
    },
    {
      title: "Standard Plan",
      price: "49.99",
      features: ["6 washes per month", "Priority service", "Interior cleaning", "Wheel cleaning"],
      isPopular: true, // Highlight this card
      button: "Most Popular"
    },
    {
      title: "Premium Plan",
      price: "79.99",
      features: ["10 washes per month", "Premium detailing", "Exclusive discounts", "Full service package"],
      isPopular: false,
    },
  ];