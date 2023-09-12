import React, { useState } from "react";
import { SearchIcon, TV, Poster } from "assets";

const HeroSection = () => {
	const [searchTerm, setSearchTerm] = useState("");
	return (
		<div className="relative">
			<div className="w-full flex justify-center">
				<div className="flex flex-row absolute justify-between w-80 top-5">
					<div className="flex flex-row items-center">
						<TV className="hidden"/>
						<p className="text-white text:lg md:text-2xl font-semibold">MovieBox</p>
					</div>
					<div className="flex flex-row border-2 rounded-lg border-white w-35 md:w-50 justify-between px-2 py-0.5">
						<input
							placeholder="What are you watching?"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="text-white bg-transparent text-xs"
						/>
						<SearchIcon className="w-4" />
					</div>
					<div>
						<p className="text-white">Sign In</p>
					</div>
				</div>
			</div>
			<div className="absolute flex flex-col top-1/4 text-white w-35 ml-10 hidden md:block">
				<h1 className="text-lg md:text-4xl font-semibold">
					John Wick 3 : Parabellum
				</h1>
				<p className="text-xs lg:text-lg">
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</p>
			</div>
			<img src={Poster} alt="" />
		</div>
	);
};

export { HeroSection };
