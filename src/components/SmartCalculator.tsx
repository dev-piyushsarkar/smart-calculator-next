import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const SmartCalculator = () => {
	return (
		<section className="grid grid-cols-3 gap-5">
			<Input placeholder="Number 1" />
			<Input placeholder="Number 2" />
			<Input />
			<Input
				disabled
				placeholder="Total"
				className="col-span-2"
			/>
			<Button className="cursor-pointer">Calculate</Button>
			<Button className="col-span-3 cursor-pointer bg-red-500 text-white hover:bg-green-400">
				Reset
			</Button>
		</section>
	);
};

export default SmartCalculator;
