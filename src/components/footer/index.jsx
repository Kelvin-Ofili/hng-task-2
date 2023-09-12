import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "assets";
import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col items-center my-20">
			<div className="w-20 flex flex-row items-center justify-between">
				<FacebookIcon />
				<InstagramIcon />
				<TwitterIcon />
				<YoutubeIcon />
			</div>
			<div className="flex flex-row font-bold my-7 w-35 justify-between">
				<p>Conditions of Use</p>
				<p>Privacy & Policy</p>
				<p>Press Room</p>
			</div>
			<p className="text-custom-6B7280 font-semibold text-lg">
				© 2021 MovieBox by Adriana Eka Prayudha
			</p>
		</div>
	);
};

export { Footer };
