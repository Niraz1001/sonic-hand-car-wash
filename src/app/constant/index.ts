
import { Faq, NavItem, Services, SubscriptionPlans, Testimonials } from "@/src/types";

export const NavItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Subscription", href: "/subscriptions" },
    { name: "Enquiry", href: "/enquiry" },
];

export const CustomerSupport: NavItem[] = [
    { name: "FAQ", href: "/enquiry#faq" },
    { name: "Terms & Conditions", href: "/termsconditions" },
    { name: "Privacy Policy", href: "/privacypolicy" },
];


export const ServicesCard: Services[] = [
    {
        img: "/img/services5.webp",
        title: "Basic Hand Wash",
        description: "Thorough exterior wash using premium products and hand-drying for a pristine finish.",
        price: "$29.99"
    },
    {
        img: "/img/services6.webp",
        title: "Deluxe Wash & Wax",
        description: "Complete exterior treatment including premium wax for long-lasting protection and shine.",
        price: "$59.99"
    },
    {
        img: "/img/services7.webp",
        title: "Interior Cleaning",
        description: "Deep cleaning of all interior surfaces, including vacuum, steaming, and leather conditioning.",
        price: "$79.99"
    },
    {
        img: "/img/services8.webp",
        title: "",
        description: "",
        price: ""
    },
]

export const TestimonialData: Testimonials[] = [
    {
        img: "/img/testimonial-2.webp",
        name: "Sandra Scott",
        title: "Exceptional service!!",
        description: "My car shines like a new one. Highly recommend it. ",
    },
    {
        img: "/img/testimonial-3.webp",
        name: "Carl James",
        title: "Fantastic service! ",
        description: "They cleaned my car spotlessly and quickly. Friendly staff and affordable prices. I recommend it.",
    },
    {
        img: "/img/testimonial-4.webp",
        name: "Ram Maharjan",
        title: "Great service!",
        description: "They made my car look like a new one. Staff were polite and careful when handling my car",
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

export const FaqData: Faq[] = [
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