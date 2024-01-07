import React, { useEffect, useRef, useState } from "react";

const VideoBanner = () => {
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player("240632615", {
        events: {
          onReady: (event) => {
            // Set the player reference
            playerRef.current = event.target;

            // Set playerReady to true
            setPlayerReady(true);
          },
          onStateChange: (event) => {
            // If the video ends and player is ready, rewind to the beginning and disable suggestions
            if (event.data === window.YT.PlayerState.ENDED && playerReady) {
              event.target.seekTo(0);
              event.target.setOption("rel", 0); // Disable related videos
            }
          },
        },
        playerVars: {
          controls: 0,
          showinfo: 0,
          rel: 0,
          autoplay: 1,
          loop: 1,
          playlist: "E3Bx-l1DOws",
        },
      });

      // Set the player reference after initialization
      playerRef.current = player;
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      document.head.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, [playerReady]);

  useEffect(() => {
    // Use the second useEffect to play the video once the player is ready
    if (playerReady) {
      playerRef.current.playVideo();
    }
  }, [playerReady]);

  return (
    <div>
      <div className="pb-12">
        <div className="relative w-full">
          <div className="absolute w-[80vw] bg-gradient-to-r dark:from-gray-900 from-gray-200 dark:via-gray-500 via-gray-600 dark:to-gray-900 to-gray-100 blur-lg filter opacity-30 h-full inset-0 bg-gray-50"></div>
          <div className="relative mx-auto">
            <div className="lg:max-w-5xl py-5 mx-6 lg:py-10 lg:mx-2">
              <div
                className="embed-responsive my-3 embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                style={{ paddingTop: "56.25%" }}
              >
                <iframe
                  className="embed-responsive-item absolute top-0 bottom-0 w-full h-full"
                  title="youtube"
                  src="https://www.youtube.com/embed/E3Bx-l1DOws?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com&controls=0&showinfo=0"
                  allowFullScreen={false}
                  data-gtm-yt-inspected-2340190_699="true"
                  id="240632615"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
