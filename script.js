const btn = document.querySelector("#btn_start");
const videoElement = document.querySelector("#video");

// Prompt to select media stream, pass to video element, then play

const selectMediaStream = async function () {
  try {
    // Screen Capture API
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.error(`error here: ${error.message}`);
  }
};

// On load
btn.addEventListener("click", async () => {
  btn.disabled = true;
  await videoElement.requestPictureInPicture();
  btn.disabled = false;
});

selectMediaStream();
