import { Link } from "react-router";

const Navber = () => {
    return (
        <header className="absolute z-10 flex w-full items-center justify-between px-[6vw] py-6 sm:mx-auto sm:max-w-330 sm:px-[5vw] sm:py-8">
            <Link className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-[-0.04em]" to="/" aria-label="Watchly home">
                <span className="flex h-7 w-7 rotate-[-8deg] items-center justify-center bg-[#e7e0d2] font-serif text-lg text-[#151513]">W</span>
                <span>Watchly</span>
            </Link>
            <nav className="flex items-center gap-7" aria-label="Main navigation">
                <Link className="hidden text-xs font-bold text-[#aaa79e] sm:block" to="/">Home</Link>
                <Link className="border-b border-[#e7e0d2] pb-1.5 text-xs font-bold" to="/movies">Explore movies <span className="ml-1.5 text-[#d8a96f]" aria-hidden="true">↗</span></Link>
            </nav>
        </header>
    );
};

export default Navber;