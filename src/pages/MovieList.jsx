import { Link } from "react-router";

 

 
function MovieList() {
  return (
     <main className="min-h-180 bg-[#11110f] px-[10vw] pb-32 pt-56 text-[#f5f0e8]">
     
      <h1 className="max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] sm:text-7xl">Movie discovery starts here.</h1>
      <p className="my-7 text-[#aaa79e]">Search, browse, and inspect your next favorite show in the next section.</p>
      <Link className="inline-flex items-center gap-5 bg-[#e7e0d2] px-5 py-4 text-xs font-extrabold text-[#171714]" to="/">Back to home</Link>
    </main>
  );
}

export default MovieList;