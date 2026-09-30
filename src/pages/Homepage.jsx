import { Link } from "react-router";

 

const Homepage = () => {
    return (
        <div>
          
			<section className="relative flex min-h-180 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center px-[8vw] pb-20 pt-44 sm:px-[10vw] sm:pb-28 sm:pt-48">
				<div className="absolute inset-0 bg-linear-to-r from-[#11110f] via-[#11110f]/85 to-[#11110f]/10" />
				<div className="absolute inset-0 bg-linear-to-t from-[#11110f] via-transparent to-transparent" />
				<div className="relative z-1 max-w-160">
					<p className="mb-7 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d8a96f]">Your next great watch is closer</p>
					<h1 className="text-[clamp(52px,7vw,102px)] font-medium leading-[0.95] tracking-[-0.07em]">Stories worth<br /><em className="font-serif font-medium tracking-[-0.06em] text-[#d8a96f]">staying up for.</em></h1>
					<p className="my-8 max-w-92 text-[15px] leading-[1.7] text-[#bbb8af]">
						Find something brilliant to watch tonight. Browse a living collection of shows, cult favorites, and hidden gems.
					</p>
					<Link className="inline-flex items-center gap-5 bg-[#e7e0d2] px-5 py-4 text-xs font-extrabold text-[#171714]" to="/movies">Start exploring <span className="text-base text-[#a96d38]" aria-hidden="true">↗</span></Link>
				</div>
				<div >
					
				</div>




			</section>
			<section className="mx-auto grid max-w-330 gap-x-[8vw] px-[8vw] py-20 sm:grid-cols-[1fr_1.5fr_1fr] sm:px-[5vw] sm:py-28" id="discover">
				 
				<h2 className="text-5xl font-medium    ">Less scrolling.<br /><em className="font-serif font-medium   text-[#d8a96f]">More finding.</em></h2>
				<p className="mt-7 max-w-62 text-[13px]   text-[#aaa79e] sm:mt-3">Watchly brings the details that matter into focus, so choosing your next story feels as good as watching it.</p>
			</section>
	 
        </div>
    );
};

export default Homepage;