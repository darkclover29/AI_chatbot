# Chatbot with OpenAI and Gemini API

This project is a React-based chatbot application that allows users to choose between OpenAI's ChatGPT and Google's Gemini API for conversational AI. The home page also displays the latest news using the NewsAPI.org service. 

## Features
- Switch between ChatGPT and Gemini for responses.
- Display latest news headlines on the home page.
- Real-time chat interface with typing indicators.
- Responsive design for seamless user experience.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)
- A GitHub account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Set up API keys:**

   You need to replace the placeholders in the code with your actual API keys.

   - **NewsAPI Key:**
     Replace `YOUR NEWS API KEY` in `Chatgpt.jsx` and `Gemini.jsx`:
     ```javascript
     const response = await axios.get(
       "https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_NEWS_API_KEY"
     );
     ```

   - **OpenAI API Key:**
     Replace `OPENAI_API_KEY` in `Context_chatgpt.jsx`:
     ```javascript
     const API_KEY = "OPENAI_API_KEY";
     ```

   - **Gemini API Key:**
     Replace `GEMINI_API_KEY` in `gemini.js`:
     ```javascript
     const API_KEY = "GEMINI_API_KEY";
     ```

### Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the application:**
   Open your web browser and navigate to `http://localhost:5173/`.

## Usage

- **Select ChatGPT or Gemini:** Use the navigation bar to switch between the ChatGPT and Gemini chat interfaces.
- **Send a message:** Type your message in the input box and press Enter or click the send icon.
- **View news articles:** The home page displays the top three news headlines. Click on a headline to open the full article.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.


## Acknowledgements

- [OpenAI](https://openai.com/)
- [Google Gemini](https://ai.google/)
- [NewsAPI](https://newsapi.org/)

---

Please ensure to keep your API keys secure and do not share them publicly. If you encounter any issues or have questions, feel free to open an issue on GitHub.

