import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			{/* Hero Section */}
			<section className="py-16 px-16 bg-[#FEF9F8] text-center relative">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-3xl md:text-4xl font-bold text-black leading-tight">
							Transforming lives and enhancing well-being through
							the synergy of artificial and human intelligence in
							healthcare, agriculture, education and non-profit.
						</h1>
					</div>
				</div>
			</section>

			{/* Who are we? Section */}
			<section id="about" className="py-12 border-b border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2">
							<Image
								src="/1.svg?height=300&width=300"
								alt="Puzzle pieces illustration"
								width={300}
								height={300}
								className="mx-auto"
							/>
						</div>
						<div className="md:w-1/2">
							<h2 className="text-2xl font-bold text-gray-700 mb-4">
								Who are we?
							</h2>
							<p className="text-gray-600">
								Compassion AI is dedicated to crafting AI-driven
								consumer applications across the healthcare,
								education, non-profit, and other people-oriented
								sectors. Currently, we are excited about
								developing an NLP-based mental health app for
								smartphones to assist psychotherapists in their
								work.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What is our Mission? Section */}
			<section id="mission" className="py-12 border-b border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2 order-1 md:order-none">
							<Image
								src="/2.svg?height=300&width=300"
								alt="People shaking hands illustration"
								width={300}
								height={300}
								className="mx-auto"
							/>
						</div>
						<div className="md:w-1/2">
							<h2 className="text-2xl font-bold text-gray-700 mb-4">
								What is our Mission?
							</h2>
							<p className="text-gray-600">
								Our mission is to make the world a better place
								for everyone—biological and artificial—through
								the collaborative power of AI. We treat AI as a
								partner in our quest because we believe AI can
								be a force for good.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What does our App do? Section */}
			<section id="app" className="py-12 border-b border-gray-200">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/2">
							<Image
								src="/3.svg?height=300&width=300"
								alt="Therapy session illustration"
								width={300}
								height={300}
								className="mx-auto"
							/>
						</div>
						<div className="md:w-1/2">
							<h2 className="text-2xl font-bold text-gray-700 mb-4">
								What does our App do?
							</h2>
							<p className="text-gray-600">
								Psychotherapists have a demanding job requiring
								focus and attention to detail, which are
								essential for client care. Our mental health
								assistant supports therapists in enhancing and
								standardizing the care they provide.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Us Section */}
			<section id="contact" className="py-12">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">
						Contact Us
					</h2>

					<div className="flex flex-col md:flex-row gap-8">
						<div className="md:w-1/3">
							<div className="flex items-start mb-6">
								<div className="bg-[#014A7F] p-3 text-white mr-4">
									<MapPin size={24} />
								</div>
								<div>
									<h3 className="font-bold mb-1">Address</h3>
									<p className="text-gray-600">
										P.O box 8066
										<br />
										Northfield, IL 60093
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="bg-[#014A7F] p-3 text-white mr-4">
									<Mail size={24} />
								</div>
								<div>
									<h3 className="font-bold mb-1">Email</h3>
									<p className="text-gray-600">
										info@compassionai.com
									</p>
								</div>
							</div>
						</div>

						<div className="md:w-2/3">
							<form className="space-y-4">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<input
										type="text"
										placeholder="Name"
										className="border border-gray-300 p-2 w-full"
									/>
									<input
										type="email"
										placeholder="Email"
										className="border border-gray-300 p-2 w-full"
									/>
								</div>
								<input
									type="text"
									placeholder="Subject"
									className="border border-gray-300 p-2 w-full"
								/>
								<textarea
									rows={4}
									className="border border-gray-300 p-2 w-full"
								></textarea>
								<div className="text-right">
									<button
										type="submit"
										className="bg-[#014A7F] text-white px-6 py-2"
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#014A7F] text-white mt-auto">
				<div className="container mx-auto px-4 py-8">
					<div className="text-center mb-4">
						<div className="text-xl font-bold mb-4">
							COMPASSION AI
						</div>
						<nav className="flex justify-center space-x-6">
							<Link href="#about" className="hover:text-gray-200">
								About Us
							</Link>
							<Link
								href="#mission"
								className="hover:text-gray-200"
							>
								Our Mission
							</Link>
							<Link href="#app" className="hover:text-gray-200">
								Our App
							</Link>
							<Link
								href="#contact"
								className="hover:text-gray-200"
							>
								Contact Us
							</Link>
						</nav>
					</div>
					<div className="text-center text-sm">
						© Copyright All Rights Reserved
					</div>
				</div>
			</footer>
		</div>
	);
}
