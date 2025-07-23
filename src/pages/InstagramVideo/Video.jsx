import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Video = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Videos - ToyBoy India</title>
        <meta
          name="description"
          content="Watch exciting and engaging videos from ToyBoy India. Explore entertainment, behind-the-scenes, and highlights from our platform."
        />
        <meta property="og:title" content="Videos - ToyBoy India" />
        <meta
          property="og:description"
          content="Watch exciting and engaging videos from ToyBoy India. Explore entertainment, behind-the-scenes, and highlights from our platform."
        />
        <meta
          property="og:image"
          content="https://toyboyindia.in/images/cover-video.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toyboyindia.in/videos" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <section id="videos" className="container py-5">
        <h2 className="food_drink_heading mb-4 text-center text-white">𝕺𝖚𝖗 𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝕽𝖊𝖊𝖑𝖘</h2>

        {/* Elfsight Instagram Feed */}
        <div
          className="elfsight-app-333ebeff-fe02-494e-814a-5bfa1fec042f"
          data-elfsight-app-lazy
        ></div>
      </section>
    </>
  );
};

export default Video;
