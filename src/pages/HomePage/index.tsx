import ExploreSlider from "./ExploreSlider";
import Section from "@components/Section";
import PropertySlider from "./PropertySlider";

function HomePage() {
  return (
    <div className="container">
      <Section
        title="Trending destinations"
        desc="Most popular choices for travelers from Indonesia"
      >
        <div className="grid grid-cols-6 gap-3">
          <div className="col-span-3 relative">
            <img
              src="https://dummyjson.com/image/200"
              className="w-full max-h-64 rounded-lg"
              alt=""
            />
            <div className="absolute top-0 p-4 w-full">
              <h1 className="text-2xl font-[700] text-white">Ubud</h1>
            </div>
          </div>
          <div className="col-span-3 relative">
            <img
              src="https://dummyjson.com/image/200"
              className="w-full max-h-64 rounded-lg"
              alt=""
            />
            <div className="absolute top-0 p-4 w-full">
              <h1 className="text-2xl font-[700] text-white">Ubud</h1>
            </div>
          </div>
          <div className="col-span-2 relative">
            <img
              src="https://dummyjson.com/image/200"
              className="w-full max-h-64 rounded-lg"
              alt=""
            />
            <div className="absolute top-0 p-4 w-full">
              <h1 className="text-2xl font-[700] text-white">Ubud</h1>
            </div>
          </div>
          <div className="col-span-2 relative">
            <img
              src="https://dummyjson.com/image/200"
              className="w-full max-h-64 rounded-lg"
              alt=""
            />
            <div className="absolute top-0 p-4 w-full">
              <h1 className="text-2xl font-[700] text-white">Ubud</h1>
            </div>
          </div>
          <div className="col-span-2 relative">
            <img
              src="https://dummyjson.com/image/200"
              className="w-full max-h-64 rounded-lg"
              alt=""
            />
            <div className="absolute top-0 p-4 w-full">
              <h1 className="text-2xl font-[700] text-white">Ubud</h1>
            </div>
          </div>
        </div>
      </Section>
      <Section
        title="Explore Indonesia"
        desc="These popular destinations have a lot to offer"
      >
        <ExploreSlider />
      </Section>
      <Section title="Browse by property type in Jakarta">
        <PropertySlider />
      </Section>
    </div>
  );
}

export default HomePage;
