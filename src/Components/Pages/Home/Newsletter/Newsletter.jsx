
const Newsletter = () => {
  return (
    <div className="pt-20 pb-20 justify-center">
        <h2 className=" text-center	text-4xl pb-8">Join Our Newslatter</h2>
      <div className="flex justify-center">
        <div className="join">
          <input className="input input-bordered join-item" placeholder="Email"/>
          <button className="btn join-item rounded-r-full">Subscribe</button>
        </div>
    
      </div>
    </div>
  );
};

export default Newsletter;