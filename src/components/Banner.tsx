interface BannerProps {
  title: string;
  subtitle: string;
}

const Banner = ({ title, subtitle }: BannerProps) => {
  return (
    <div className="bg-b-blue pt-8 pb-[64px]">
      <div className="container">
        <h1 className="text-[48px] font-[700] text-white">{title}</h1>
        <h4 className="text-[24px] font-[400] text-white">{subtitle}</h4>
      </div>
    </div>
  );
};

export default Banner;
