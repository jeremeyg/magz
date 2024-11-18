import augustamain from '../assets/images/augustamain.jpg';
import crowfish from '../assets/images/crawfish.jpg';
import remycoffee from '../assets/images/remycoffee.jpg';

const Augusta = () => {
	return (
		<div className='container p-20 h-auto mx-auto max-w-screen'>
			<div className='bg-black text-white w-36 h-20 font-medium flex flex-col items-center justify-center'>
				TRAVEL GEORGIA
			</div>
			<div className='grid grid-cols-4 h-screen'>
				<div className='col-span-3 bg-zinc-200' id='left-page'>
					<div className=' pt-20 px-auto h-auto text-center' id='card'>
						<p className='text-purple-400 font-extrabold '>
							CITY SPOTLIGT
						</p>
						<h1 className='font-bold text-5xl py-2'>AUGUST</h1>
						<p>By Lia Picard</p>

						<p className='p-5 '>
							Augusta is most famouse for the Masters and its renowned
							gold club, Agusuta Nationa, but there &amp;s much more to
							explore in the Garden City, including beatiful
							neighborhoods, charming restaurants, and eclectic shops.
							It takes less than three hours to get there, too, making
							it an easy destination for an overnight getaway
						</p>
					</div>
					<div
						className='grid grid-cols-2 grid-row-2 m-w-full m-10'
						id='card-phto'>
						<img className='col-span-2' src={augustamain} alt='' />
						<img className='col-span-1' src={crowfish} alt='' />
						<img className='col-span-1' src={remycoffee} alt='' />
					</div>
				</div>
				<div className='col-span-1 bg-gray-950 h-auto' id='right-page'></div>
			</div>
		</div>
	);
};

export default Augusta;
