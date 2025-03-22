"use client"; // Use this in Next.js 13+ with App Router
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function ServicesAndAnnouncements() {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <FaArrowLeft className="text-blue-500 text-2xl cursor-pointer" />,
    nextArrow: <FaArrowRight className="text-blue-500 text-2xl cursor-pointer" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* Services Section */}
      <div className="text-center">
        <h2 className="text-blue-700 text-2xl font-bold">OUR SERVICES</h2>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-white shadow-md px-6 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
            📜 Good Moral Certificate Request
          </button>
          <button className="bg-white shadow-md px-6 py-2 border border-gray-300 rounded-lg flex items-center gap-2">
            💬 Share your Feedback
          </button>
        </div>
      </div>

      {/* Announcements Section */}
      <div className="mt-10">
        <h2 className="text-blue-700 text-2xl font-bold text-center">ANNOUNCEMENTS</h2>
        <div className="max-w-5xl mx-auto mt-6">
          <Slider {...settings}>
            {/* Announcement Card - Repeat as needed */}
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="p-4">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center border">
                  <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md">
                    🖼 Image Placeholder
                  </div>
                  <h3 className="font-semibold text-lg mt-4">TITLE</h3>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-gray-600 text-sm mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod...
                  </p>
                  <button className="mt-4 px-4 py-2 text-blue-600 border border-blue-500 rounded-lg text-sm flex items-center gap-1 mx-auto">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* See All Button */}
        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}
