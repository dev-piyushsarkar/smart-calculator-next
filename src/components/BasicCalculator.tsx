import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	return (
		<section className="grid grid-cols-4 gap-3">
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 1"
			/>
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 2"
			/>
			<Input
				disabled
				className="col-span-4"
				placeholder="Total"
			/>
			<Button className="cursor-pointer">Add</Button>
			<Button className="cursor-pointer">Subtract</Button>
			<Button className="cursor-pointer">Multiply</Button>
			<Button className="cursor-pointer">Divide</Button>
			<Button className="col-span-4 cursor-pointer bg-red-500 text-white hover:bg-green-400">
				Reset
			</Button>
		</section>
	);
};

export default BasicCalculator;
