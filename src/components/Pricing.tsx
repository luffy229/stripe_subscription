import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import PaymentLink from "./PaymentLink";

enum PopularPlanType {
	NO = 0,
	YES = 1,
}

interface PricingProps {
	title: string;
	popular: PopularPlanType;
	price: number;
	description: string;
	buttonText: string;
	benefitList: string[];
	href: string;
	billing: string;
	paymentLink?: string;
}

const pricingList: PricingProps[] = [
	{
		title: "Free",
		popular: PopularPlanType.NO,
		price: 0,
		description: "Perfect for individuals getting started.",
		buttonText: "Get Started",
		benefitList: [
			"1 Team member",
			"2 GB Storage",
			"Upto 4 pages",
			"Community support",
			"Basic analytics",
		],
		href: "/api/auth/login",
		billing: "/month",
	},
	{
		title: "Premium",
		popular: PopularPlanType.YES,
		price: 10,
		description: "Ideal for small teams and businesses.",
		buttonText: "Buy Now",
		benefitList: [
			"4 Team members",
			"10 GB Storage",
			"Upto 10 pages",
			"Priority support",
			"Advanced analytics",
		],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_MONTHLY_PLAN_LINK,
		billing: "/month",
	},
	{
		title: "Enterprise",
		popular: PopularPlanType.NO,
		price: 99,
		description: "Best for large-scale businesses and enterprises.",
		buttonText: "Contact Sales",
		benefitList: [
			"Unlimited team members",
			"1 TB Storage",
			"Unlimited pages",
			"Dedicated account manager",
			"Premium analytics",
		],
		href: "/api/auth/login",
		paymentLink: process.env.STRIPE_YEARLY_PLAN_LINK,
		billing: "/year",
	},
];

export const Pricing = () => {
	return (
		<section id='pricing' className='container py-24 sm:py-32'>
			<h2 className='text-4xl md:text-5xl font-bold text-center'>
				Choose Your <span className='bg-gradient-to-b from-[#667EEA] to-[#764BA2] uppercase text-transparent bg-clip-text'>Plan</span>
			</h2>
			<p className='text-lg text-center text-muted-foreground pt-4 pb-8'>
				Find the perfect plan for your needs.
			</p>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{pricingList.map((pricing: PricingProps) => (
					<Card
						key={pricing.title}
						className={`relative p-6 rounded-xl shadow-lg border transition-transform hover:scale-105 
							${pricing.popular === PopularPlanType.YES ? "border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900" : "bg-white dark:bg-gray-950"}`}
					>
						{pricing.popular === PopularPlanType.YES && (
							<Badge variant='secondary' className='absolute top-4 right-4 text-sm text-primary bg-purple-500 text-white px-3 py-1 rounded-full'>
								Most Popular
							</Badge>
						)}
						<CardHeader>
							<CardTitle className='text-xl font-semibold text-center'>{pricing.title}</CardTitle>
							<div className='text-center'>
								<span className='text-4xl font-bold text-purple-600 dark:text-purple-400'>${pricing.price}</span>
								<span className='text-muted-foreground text-lg'> {pricing.billing}</span>
							</div>
							<CardDescription className='text-center'>{pricing.description}</CardDescription>
						</CardHeader>
						<CardContent className='flex justify-center'>
							<PaymentLink
								href={pricing.href}
								text={pricing.buttonText}
								paymentLink={pricing.paymentLink}
							/>
						</CardContent>
						<hr className='w-4/5 m-auto my-4 border-gray-300 dark:border-gray-700' />
						<CardFooter>
							<div className='space-y-4 w-full'>
								{pricing.benefitList.map((benefit: string) => (
									<div key={benefit} className='flex items-center gap-2'>
										<Check className='text-green-500' />
										<span>{benefit}</span>
									</div>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
