import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden bg-black/40">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="./Wallpaper/wallpaperx.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
