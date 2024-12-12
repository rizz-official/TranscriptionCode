const startRecordingButton = document.querySelector(".button-container");
const finishButton = document.querySelector(".finish-button");
const recordingControls = document.querySelector(".recording-controls");
const audioControl = document.querySelector(".audio-control");
const captions = document.getElementById("transcript");
const generateButton = document.querySelector(".generate-button");

let microphone;
let socket;

async function getMicrophone() {
  const userMedia = await navigator.mediaDevices.getUserMedia({
    audio: true,
  });

  return new MediaRecorder(userMedia);
}

async function openMicrophone(microphone, socket) {
  microphone.start(500);

  microphone.onstart = () => {
    console.log("client: microphone opened");
    document.body.classList.add("recording");
  };

  microphone.onstop = () => {
    console.log("client: microphone closed");
    document.body.classList.remove("recording");
  };

  microphone.ondataavailable = (e) => {
    console.log("client: sent data to websocket");
    socket.emit("packet-sent", e.data);
  };
}

async function closeMicrophone(microphone) {
  microphone.stop();
}

function initializeSocket() {
  socket = io("https://o365-d597b0774515.herokuapp.com", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("client: connected to websocket");
  });

  socket.on("transcript", (transcript) => {
    if (transcript) {
      captions.value += transcript + "\n";
    }
  });
}

startRecordingButton.addEventListener("click", async () => {
  if (!socket) {
    initializeSocket();
  }
  if (!microphone) {
    microphone = await getMicrophone();
    await openMicrophone(microphone, socket);
    recordingControls.style.display = "flex";
    audioControl.style.display = "none";
  }
});

finishButton.addEventListener("click", async () => {
  if (microphone) {
    await closeMicrophone(microphone);
    microphone = undefined;
    recordingControls.style.display = "none";
    audioControl.style.display = "flex";
  }
  if (socket) {
    socket.disconnect();
    socket = undefined;
    console.log("client: disconnected from websocket");
  }
});

async function pasteToWord() {
  try {
    await Word.run(async (context) => {
      const documentBody = context.document.body;
      documentBody.insertText(captions.value, Word.InsertLocation.end);
      await context.sync();
      console.log("Text pasted to Word document.");
    });
  } catch (error) {
    console.error("Error pasting to Word:", error);
  }
}

generateButton.addEventListener("click", () => {
  pasteToWord();
});
