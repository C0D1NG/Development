import { v4 as uuid } from "uuid";

export default function recordAudio() {
  return new Promise((resolve) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      function start() {
        mediaRecorder.start();
      }

      function stop() {
        return new Promise((resolve) => {
          mediaRecorder.addEventListener("stop", () => {
            const audioName = uuid();
            const audioFile = new File(audioChunks, audioName, {
              type: "audio/mpeg",
            });
            const audioUrl = URL.createObjectURL(audioFile);
            const audio = new Audio(audioUrl);
            function play() {
              audio.play();
            }

            resolve({ audioFile, audioUrl, play, audioName });
          });

          mediaRecorder.stop();
        });
      }

      resolve({ start, stop });
    });
  });
}
