import Banner from "@components/Banner";
import SearchInput from "./SearchInput";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Banner
        title="Find your next stay"
        subtitle="Search deals on hotels, homes, and much more..."
      />
      <SearchInput />
    </div>
  );
};

export default HomeBanner;
