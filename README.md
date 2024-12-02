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
3. **Office Add-in** project requirements (e.g., Office.js).
4. **MongoDB** (or MongoDB Atlas) for storing audio data (if required for your project).

## Getting Started

Follow the steps below to pull the code and run the Yeoman generator.

### Step 1: Clone the Repository

Start by cloning the repository to your local machine.

```bash
git clone https://github.com/your-username/yeoman-word-add-in.git
cd yeoman-word-add-in
