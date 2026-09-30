const MovieCard = ({ show, onDetails }) => {
    const image = show.image?.medium || show.image?.original;
    const year = show.premiered?.slice(0, 4) || "—";
    const rating = show.rating?.average || "N/A";

    return (
        <article className="group flex min-w-0 flex-col border border-[#292a25] bg-[#171714]">
            <div className="relative aspect-[2/3] overflow-hidden bg-[#24241f]">
                {image ? (
                    <img
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={image}
                        alt={`${show.name} poster`}
                        loading="lazy"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center p-5 text-center font-serif text-xl text-[#77746d]">No poster available</div>
                )}
                <span className="absolute left-3 top-3 bg-[#11110f]/85 px-2 py-1 font-mono text-[10px] text-[#d8a96f]">{show.type || "Show"}</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="line-clamp-2 min-h-12 text-lg font-semibold leading-tight tracking-[-0.04em] text-[#f5f0e8]">{show.name}</h2>
                <div className="mt-3 flex items-center gap-3 font-mono text-[10px] text-[#aaa79e]">
                    <span className="text-[#d8a96f]">★ {rating}</span>
                    <span className="h-1 w-1 rounded-full bg-[#77746d]" />
                    <span>{year}</span>
                </div>
                <button className="mt-5 border border-[#55544d] px-3 py-2 text-left text-[11px] font-bold text-[#e7e0d2] transition hover:border-[#d8a96f] hover:text-[#d8a96f]" type="button" onClick={() => onDetails(show)}>
                    See details <span className="float-right text-[#d8a96f]" aria-hidden="true">↗</span>
                </button>
            </div>
        </article>
    );
};

export default MovieCard;
