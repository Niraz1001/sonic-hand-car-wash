
import { Faq, NavItem, Services, SubscriptionPlans, Testimonials } from "@/src/types";

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
        img: "/img/services1.webp",
        title: "Basic Hand Wash",
        description: "Thorough exterior wash using premium products and hand-drying for a pristine finish.",
        price: "$29.99"
    },
    {
        img: "/img/services2.webp",
        title: "Deluxe Wash & Wax",
        description: "Complete exterior treatment including premium wax for long-lasting protection and shine.",
        price: "$59.99"
    },
    {
        img: "/img/services3.webp",
        title: "Interior Cleaning",
        description: "Deep cleaning of all interior surfaces, including vacuum, steaming, and leather conditioning.",
        price: "$79.99"
    },
    {
        img: "/img/services4.webp",
        title: "",
        description: "",
        price: ""
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

  export const FaqData: Faq[]= [
    {
        title: "Do I need an appointment for a car wash?",
        des: "No, walk-ins are welcome! However, booking in advance ensures quicker service."
    },
    {
        title: "What payment methods do you accept?",
        des: "We accept cash, credit/debit cards, and digital wallets."
    },
    {
        title: "How long does a car wash take?",
        des: "A basic hand wash takes approximately 20-30 minutes."
    },
  ]