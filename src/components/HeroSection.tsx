import {Button} from '@/components/ui/button';
import heroVideo from '@/assets/video/hero.mp4';

const HeroSection = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({behavior: 'smooth'});
		}
	};

	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Video Background */}
			<div className='absolute inset-0 z-0'>
				<video
					autoPlay
					muted
					loop
					playsInline
					className='w-full h-full object-cover'
				>
					<source src={heroVideo} type='video/mp4' />
					
					Your browser does not support the video tag.
				</video>
				<div className='absolute inset-0 video-overlay'></div>
			</div>

			{/* Hero Content */}
			<div className='relative z-10 container-max text-center text-white'>
				<div className='max-w-4xl mx-auto animate-fade-in'>
					<h1 className='text-5xl lg:text-7xl font-bold mt-20 leading-tight'>
						Revolutionizing Beauty with
						<span className='block bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent'>
							Sustainable Ingredients
						</span>
					</h1>

					{/* <p className='text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto'>
						Next-generation bio-based surfactants and glycolic acid
						with 50-70% lower carbon footprint, enabling a
						sustainable future for the $530B beauty industry.
					</p> */}

					{/* Key Stats */}
					{/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto'>
						<div className='text-center'>
							<div className='text-4xl lg:text-5xl font-bold text-green-300 mb-2'>
								50-70%
							</div>
							<div className='text-white/80'>
								Lower Carbon Footprint
							</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl lg:text-5xl font-bold text-green-300 mb-2'>
								$14B
							</div>
							<div className='text-white/80'>
								Surfactant Market
							</div>
						</div>
						<div className='text-center'>
							<div className='text-4xl lg:text-5xl font-bold text-green-300 mb-2'>
								60%
							</div>
							<div className='text-white/80'>
								Consumer Eco-Demand
							</div>
						</div>
					</div> */}

					{/* CTA Buttons */}
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-20'>
						<Button
							onClick={() => scrollToSection('contact')}
							className='btn-hero text-lg px-8 py-4'
						>
							Partner with Us
						</Button>
						<Button
							onClick={() => scrollToSection('solutions')}
							variant='outline'
							className='text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary'
						>
							Explore Our Solutions
						</Button>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			{/* <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
				<div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
					<div className='w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce'></div>
				</div>
			</div> */}
		</section>
	);
};

export default HeroSection;
