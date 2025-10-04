import axios from 'axios';
import {useState} from 'react';
import {Card} from '@/components/ui/card';
import {useToast} from '@/hooks/use-toast';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';

const ContactSection = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		message: '',
		inquiry: 'B2B Ingredient Supply',
	});
	const {toast} = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();

			// Basic form validation
			if (
				!formData.name ||
				!formData.email ||
				!formData.company ||
				!formData.inquiry ||
				!formData.message
			) {
				toast({
					title: 'Please fill in all required fields',
					variant: 'destructive',
				});
				return;
			}

			setIsLoading(true);

			console.log(`FORM :: ${formData}`);

			const response = await axios.post(
				'https://venille-api.livestocx.xyz/v1/account/support/girlified-bio-contact-us',
				{
					name: formData.name,
					email: formData.email,
					message: formData.message,
					inquiryType: formData.inquiry,
					companyOrganization: formData.company,
				}
			);

			// console.log(response);
			if (response.status === 201) {
				toast({
					title: 'Thank you for your inquiry!',
					description: "We'll get back to you within 24 hours.",
				});

				// Reset form
				setFormData({
					name: '',
					email: '',
					company: '',
					message: '',
					inquiry: 'B2B Ingredient Supply',
				});

				setIsLoading(false);
			}

			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
      
			console.log(`[SUBMIT-CONTACT-US-FORM-ERROR] :: ${error}`);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section id='contact' className='section-padding'>
			<div className='container-max'>
				<div className='text-center mb-16'>
					<div className='inline-block bg-accent px-4 py-2 rounded-full text-accent-foreground font-medium mb-4'>
						Contact & Partnership
					</div>
					<h2 className='text-4xl lg:text-5xl font-bold mb-6'>
						Ready to Transform
						<span className='gradient-text'> Beauty Together?</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Join the sustainable beauty revolution. Whether you're a
						multinational corporation or an eco-conscious consumer,
						we have solutions for you.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Form */}
					<Card className='card-eco'>
						<h3 className='text-2xl font-bold mb-6'>
							Get in Touch
						</h3>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								<div>
									<label
										htmlFor='name'
										className='block text-sm font-medium mb-2'
									>
										Full Name *
									</label>
									<Input
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full'
									/>
								</div>
								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium mb-2'
									>
										Email Address *
									</label>
									<Input
										id='email'
										name='email'
										type='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full'
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='company'
									className='block text-sm font-medium mb-2'
								>
									Company/Organization
								</label>
								<Input
									id='company'
									name='company'
									value={formData.company}
									onChange={handleChange}
									className='w-full'
									required={true}
								/>
							</div>

							<div>
								<label
									htmlFor='inquiry'
									className='block text-sm font-medium mb-2'
								>
									Inquiry Type
								</label>
								<select
									id='inquiry'
									name='inquiry'
									value={formData.inquiry}
									required
									onChange={handleChange}
									className='w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring'
								>
									<option value='B2B Ingredient Supply'>
										B2B Ingredient Supply
									</option>
									<option value='Formulation Licensing'>
										Formulation Licensing
									</option>
									<option value='D2C Product Information'>
										D2C Product Information
									</option>
									<option value='Strategic Partnership'>
										Strategic Partnership
									</option>
									<option value='Investment Opportunity'>
										Investment Opportunity
									</option>
									<option value='Other'>Other</option>
								</select>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium mb-2'
								>
									Message *
								</label>
								<Textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									className='w-full'
									placeholder='Tell us about your specific needs, timeline, and how we can help you achieve your sustainability goals...'
								/>
							</div>

							<Button
								type='submit'
								className='btn-hero w-full'
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Sending...
									</>
								) : (
									'Send Inquiry'
								)}
							</Button>
						</form>
					</Card>

					{/* Contact Information */}
					<div className='space-y-8'>
						<Card className='card-eco'>
							<h3 className='text-xl font-bold mb-4 text-primary'>
								Direct Contact
							</h3>
							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
										<svg
											className='w-5 h-5 text-accent-foreground'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
									</div>
									<div>
										<div className='font-medium'>Email</div>
										<div className='text-muted-foreground'>
											info@girlified.com.ng
										</div>
									</div>
								</div>

								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
										<svg
											className='w-5 h-5 text-accent-foreground'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6'
											/>
										</svg>
									</div>
									<div>
										<div className='font-medium'>
											LinkedIn
										</div>
										<div className='text-muted-foreground'>
											www.linkedin.com/company/girlified
										</div>
									</div>
								</div>
							</div>
						</Card>

						<Card className='card-eco'>
							<h3 className='text-xl font-bold mb-4 text-primary'>
								Response Timeline
							</h3>
							<div className='space-y-3'>
								<div className='flex justify-between'>
									<span>B2B Inquiries</span>
									<span className='font-medium text-success'>
										24 hours
									</span>
								</div>
								<div className='flex justify-between'>
									<span>Partnership Requests</span>
									<span className='font-medium text-success'>
										48 hours
									</span>
								</div>
								<div className='flex justify-between'>
									<span>Investment Inquiries</span>
									<span className='font-medium text-success'>
										72 hours
									</span>
								</div>
								<div className='flex justify-between'>
									<span>D2C Product Info</span>
									<span className='font-medium text-success'>
										24 hours
									</span>
								</div>
							</div>
						</Card>

						<Card className='card-eco'>
							<h3 className='text-xl font-bold mb-4 text-primary'>
								Ready for Samples?
							</h3>
							<p className='text-muted-foreground mb-4'>
								Request product samples or technical
								specifications for your formulation needs.
							</p>
							<Button className='btn-b2b w-full'>
								Request Sample Kit
							</Button>
						</Card>
					</div>
				</div>

				{/* Partnership Benefits */}
				<div className='mt-16 bg-gradient-earth p-8 rounded-2xl'>
					<h3 className='text-2xl font-bold mb-6 text-center'>
						Partnership Benefits
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								ESG
							</div>
							<div className='text-sm text-muted-foreground'>
								Compliance & Reporting Support
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								R&D
							</div>
							<div className='text-sm text-muted-foreground'>
								Collaborative Innovation
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								Scale
							</div>
							<div className='text-sm text-muted-foreground'>
								Global Supply Chain
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								Future
							</div>
							<div className='text-sm text-muted-foreground'>
								Long-term Sustainability
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
