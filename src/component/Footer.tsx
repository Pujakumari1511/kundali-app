export const Footer = () => {
  return (
  <footer className="bg-white-800 text-#43557B px-12 py-4">
    <div className="grid grid-cols-3 gap-8">
      <img className="size-55" src="/assets/fefdd7aaf551a3a03f9a2cf595d1fda42a39f963.png" alt="Vedic Jyotishe Logo" />  
      <div className="flex items-center gap-4 m-auto">
        <img className="size-15" src="/assets/phone.svg" alt="phone"/>
        <div>
          <p className="text-sm text-orange-400">Phone</p>
          <p>000 - 123456789</p>
        </div>
      </div>
      <div className="flex items-center gap-4 m-auto">
        <img className="size-15" src="/assets/email.svg" alt="phone"/>
        <div>
          <p className="text-sm text-orange-400">Email Id</p>
          <p>info@example.com</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-12">
      <div className="mx-10">
        <p className="text-sm text-gray-600 mt-2">
            Contact us for an in-depth analysis for your kundali chart, tailored
            to your specific areas of concern. We ensure complete client confidentiality at all the times.
        </p>
        <div className="flex items-center gap-4 mt-8">
          <img className="size-10" src="/assets/twitter_icon.svg" alt="twitter"/>
          <img className="size-10" src="/assets/fb_icon.svg" alt="facebook"/>
          <img className="size-10" src="/assets/insta_icon.svg" alt="instagram"/>
        </div>
      </div>
      <div className="text-left mx-auto">
        <div className="grid grid-cols-1 gap-4">
            <h3 className="text-orange-400">Useful Links</h3>
            <a>Home</a>
            <a>Service</a>
            <a>About Us</a>
            <a>Contact Us</a>
          </div>
      </div>
      <div className="text-left mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <h3 className="text-orange-400">Subscribe</h3>
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded p-3"
          />
          <button className="bg-orange-400 text-white px-4 py-1 rounded">
            Send Message
          </button>
        </div>
      </div>
    </div>  
      <div>
        <hr className="border-t border-black-300 mt-20 mx-4" />
        <p className="text-xs pl-4">All Right Reserved &copy; 2025 Vedic Jyotishe</p>
      </div>
  </footer>
  );
};