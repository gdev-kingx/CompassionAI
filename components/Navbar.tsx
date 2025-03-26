"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { styles } from "@/constants/styles";
import { navLinks } from "@/constants";
import { close, menu } from "@/constants/assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-[#014A7F]`}
		>
			<div>
				<Link
					href="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<p className="text-white text-[22px] font-bold cursor-pointer flex">
						COMPASSION AI
					</p>
				</Link>

				<ul className="list-none hidden sm:flex flex-row gap-5">
					{navLinks.map((nav) => (
						<li
							key={nav.id}
							className={`${
								active === nav.title
									? "text-white"
									: "text-[#aaa6c3]"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title
											? "text-white"
											: "text-[#aaa6c3]"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
