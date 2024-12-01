let mediaRecorder;
let audioChunks = [];
let fileCounter = 1;  // Counter to track file name (Test 1, Test 2, ...)

document.getElementById('startRecording').addEventListener('click', async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    document.getElementById('startRecording').disabled = true;
    document.getElementById('stopRecording').disabled = false;
    document.getElementById('status').textContent = "Recording...";

    mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
    };
});

document.getElementById('stopRecording').addEventListener('click', () => {
    mediaRecorder.stop();

    document.getElementById('startRecording').disabled = false;
    document.getElementById('stopRecording').disabled = true;
    document.getElementById('status').textContent = "Saving audio...";

    mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        audioChunks = []; // Reset for next recording
        saveAudioFile(audioBlob);
    };
});

function saveAudioFile(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Test ${fileCounter}.wav`;  // Save as "Test 1", "Test 2", etc.

    // Trigger the download and clean up after the download is triggered
    a.addEventListener('click', () => {
        setTimeout(() => {
            URL.revokeObjectURL(url);  // Clean up the object URL after download
        }, 0);
    });

    a.click();  // Trigger the download immediately
    fileCounter++;  // Increment the file counter
}

