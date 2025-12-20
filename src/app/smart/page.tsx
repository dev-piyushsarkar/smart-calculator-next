import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import SmartCalculator from "@/components/SmartCalculator";

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Smart Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<SmartCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
