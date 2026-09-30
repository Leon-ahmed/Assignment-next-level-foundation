import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetailsModal from "../components/MovieDetailsModal";

const API_URL = "https://api.tvmaze.com";

const MovieListing = () => {
    const [shows, setShows] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        const getShows = async () => {
            setLoading(true);
            setError("");

            const endpoint = query.trim()
            ? `${API_URL}/search/shows?q=${encodeURIComponent(query.trim())}`
            : `${API_URL}/shows`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setShows(query.trim() ? data.map((result) => result.show) : data);
            } catch {
                setError("We could not reach the show library. Please try again.");
            }
            setLoading(false);
        };

        getShows();
    }, [query]);

    return (
        <main className="min-h-screen bg-[#11110f] px-[6vw] pb-24 pt-36 text-[#f5f0e8] sm:px-[8vw] sm:pt-44">
            <section className="mx-auto max-w-[1320px]">
                <div className="mb-12 flex flex-col justify-between gap-7 border-b border-[#292a25] pb-10 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#d8a96f]">The Watchly library</p>
                        <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-7xl">Find your<br /><em className="font-serif font-medium tracking-[-0.06em] text-[#d8a96f]">next story.</em></h1>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-[#aaa79e]">Browse the latest collection or search by title when you know what you are looking for.</p>
                </div>

                <label className="mb-12 flex items-center gap-4 border-b border-[#77746d] pb-4 focus-within:border-[#d8a96f]" htmlFor="show-search">
                    <span className="text-xl text-[#d8a96f]" aria-hidden="true">⌕</span>
                    <input className="w-full bg-transparent text-base text-[#f5f0e8] outline-none placeholder:text-[#77746d]" id="show-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search for a show..." />
                    {query && <button className="font-mono text-[10px] uppercase tracking-widest text-[#aaa79e] hover:text-[#f5f0e8]" type="button" onClick={() => setQuery("")}>Clear</button>}
                </label>

                <div className="mb-6 flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#77746d]">{query ? `Results for “${query}”` : "All shows"}</p>
                    {!loading && <p className="font-mono text-[10px] text-[#77746d]">{shows.length} titles</p>}
                </div>

                {loading && <p className="py-24 text-center font-serif text-2xl text-[#aaa79e]">Finding something good...</p>}
                {!loading && error && <p className="border border-[#743f32] bg-[#2b1d19] p-5 text-sm text-[#e6a68d]">{error}</p>}
                {!loading && !error && shows.length === 0 && <p className="py-24 text-center font-serif text-2xl text-[#aaa79e]">No shows matched that search.</p>}
                {!loading && !error && shows.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
                        {shows.map((show) => <MovieCard key={show.id} show={show} onDetails={setSelectedShow} />)}
                    </div>
                )}

                {selectedShow && (
                    <MovieDetailsModal
                        show={selectedShow}
                        onClose={() => setSelectedShow(null)}
                    />
                )}
            </section>
        </main>
    );
};

export default MovieListing;
