import Marquee from 'react-fast-marquee';
const UpdateNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary btn-sm">Latest</button>
      <Marquee pauseOnHover={true}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default UpdateNews;
