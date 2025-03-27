"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;
	return (
		<header className="w-full bg-[#014A7F] p-4 shadow-md text-white fixed top-0 left-0 z-50">
			<div className="container mx-auto px-10 flex justify-between items-center">
				<Link
					href="/"
					className="text-xl font-bold text-white hover:text-gray-300 hover:opacity-75"
				>
					COMPASSION AI
				</Link>
				<nav className="hidden md:flex space-x-6 flex-grow justify-end">
					{navLinks.map((item) => (
						<Link
							key={item.id}
							href={item.id}
							className="text-white hover:text-gray-400 font-medium transition duration-300"
						>
							{item.title}
						</Link>
					))}
				</nav>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon"
								className="text-white hover:text-blue-600"
							>
								<Menu className="w-6 h-6" />
							</Button>
						</SheetTrigger>
						<SheetContent
							side="left"
							className="bg-white p-6 w-64 shadow-lg"
						>
							<div className="flex flex-col space-y-4 mt-6">
								{navLinks.map((item) => (
									<Link
										key={item.id}
										href={item.id}
										className="text-lg text-gray-700 hover:text-blue-600 font-medium transition duration-300"
										onClick={() => setIsOpen(false)}
									>
										{item.title}
									</Link>
								))}
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
