
const Newsletter = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap flex-row h-[400px] justify-center ">
        <img className='w-2/5' src="//ps-beautyshop.myshopify.com/cdn/shop/files/eyes_image_1.png?v=1613681484" alt="" />
        <div className="my-auto ">
          <p className="text-2xl text-center text-red-400 italic">Sale Up To 20% Off For</p>
        <h2 className="	text-3xl font-bold py-6">JOIN OUR NEWSLETTER</h2>
        <div className="flex ">
          <div className="join">
            <input className="input input-bordered join-item" placeholder="Email"/>
            <button className="btn join-item text-white bg-pink-400 px-5">Subscribe</button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Newsletter;