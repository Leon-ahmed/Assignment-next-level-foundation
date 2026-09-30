const MovieDetailsModal = ({ show, onClose }) => {
    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/75 p-4" role="presentation">
            <section className="relative w-full max-w-2xl bg-[#171714] p-5 text-[#f5f0e8] sm:p-8" role="dialog" aria-modal="true" aria-labelledby="show-details-title">
                <button className="absolute right-3 top-3 text-2xl text-[#aaa79e] hover:text-[#d8a96f]" type="button" onClick={onClose} aria-label="Close details">×</button>
                <div className="grid gap-6 sm:grid-cols-[180px_1fr]">
                    <img className="aspect-2/3 w-full object-cover" src={show.image?.medium} alt={`${show.name} poster`} />
                    <div>
                        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-[#d8a96f]">Show details</p>
                        <h2 className="pr-8 text-3xl font-medium tracking-tight" id="show-details-title">{show.name}</h2>
                        <p className="mt-4 font-mono text-xs text-[#aaa79e]">★ {show.rating?.average || "N/A"} &nbsp; • &nbsp; {show.premiered || "Release date unknown"}</p>
                        <p className="mt-6 text-sm leading-6 text-[#bbb8af]">{show.summary || "No summary available."}</p>
                        <button className="mt-6 border border-[#e7e0d2] px-4 py-2 text-xs font-bold hover:bg-[#e7e0d2] hover:text-[#171714]" type="button" onClick={onClose}>Close</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieDetailsModal;
