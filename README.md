# Yeoman Generator for Word Add-in

This project provides a Yeoman generator to create a Word Add-in with audio recording capabilities. The generator allows you to set up a Word Add-in that can record audio from the user's microphone and upload it to a server.

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (LTS version recommended) - [Download Node.js](https://nodejs.org/)
2. **Yeoman** - Yeoman is used to generate scaffolding for your Word Add-in.
   - Install Yeoman globally by running the following command:
     ```bash
     npm install -g yo
     ```
3. **MongoDB** (or MongoDB Atlas) for storing audio data (if required for your project).

## Getting Started

Follow the steps below to pull the code and run the Yeoman generator.

### Step 1: Clone the Repository

Start by cloning the repository to your local machine.


```bash
git clone https://github.com/Darab07/TransciptionApp
``` 
```
git clone https://github.com/88hours/O365-Backend-Server
```

### Step 2: Install Dependencies for Both Projects

Install the required dependencies for both the Word Add-in and the backend server:

For the Word Add-in:
• Navigate to the TransciptionApp directory.
• Install the dependencies:
```bash
npm install
```

For the Backend Server:
• Navigate to the O365-Backend-Server directory.
• Install the dependencies:
```bash
npm install
```

### Step 3: Run the Yeoman Generator

Now that everything is set up, you can use the Yeoman generator to scaffold your Word Add-in.

To open the Transcription App Code in Yeoman generator:

```bash
cd (Whatever you name the file you pulled from https://github.com/Darab07/TransciptionApp)
npm start
```
This command will start your server for word-addin, as well as launch word where you will be able to view to addin.

To start the server:
 ```bash
cd (Whatever you name the file you pulled from https://github.com/88hours/O365-Backend-Server)
npm start
```
This command will start your server for sending the audio files to it.

### Step 4: Start Recording Audio in the Word Add-in

Press the "Start Recording" button in the Word Add-in’s task pane.

After you finish recording, click the "Stop Recording" button, and the audio will be uploaded to the backend server for transcription.

### Step 5: Check the Backend Server

The backend server will process the audio file and send back a transcription (or an error message). A message would appear on the word document stating whether the uploading of the file was successful or not.


