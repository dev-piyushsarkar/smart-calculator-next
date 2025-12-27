import { Divide, MinusIcon, PlusIcon, X } from "lucide-react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const SmartCalculator = () => {
	return (
		<section className="grid grid-cols-3 gap-5">
			<Input placeholder="Number 1" />
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operators"></SelectValue>
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="plus">
						<PlusIcon />
					</SelectItem>
					<SelectItem value="minus">
						<MinusIcon />
					</SelectItem>
					<SelectItem value="multiply">
						<X />
					</SelectItem>
					<SelectItem value="divide">
						<Divide />
					</SelectItem>
				</SelectContent>
			</Select>
			<Input placeholder="Number 2" />
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
