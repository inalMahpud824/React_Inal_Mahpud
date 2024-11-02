// const apiKey = import.meta.env.VITE_APP_API_KEY
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
function App() {
  const [history, setHistory] = useState([
    {
      role: "user",
      parts: [{ text: "Hello my name is inal kloir" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you inal." }],
    },
  ]);
  const [prompt, setPrompt] = useState("");
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const chat = model.startChat({
    history: history,
  });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", parts: [{ text: prompt }] },
    ]);

    const result = await chat.sendMessage(prompt);

    const newResponse = {
      role: "model",
      parts: [{ text: await result.response.text() }],
    };
    setHistory((prevHistory) => {
      // Cek duplikasi
      const isDuplicate = prevHistory.some(
        (item) =>
          item.role === newResponse.role &&
          item.parts[0].text === newResponse.parts[0].text
      );

      if (!isDuplicate) {
        return [...prevHistory, newResponse];
      }
      return prevHistory;
    });
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="w-full min-h-screen bg-gray-800 p-4 text-white flex flex-col justify-between">
      <div className="flex flex-col space-y-3 overflow-y-auto max-h-[80vh] p-4">
        {history.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              item.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                item.role === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-700 text-white"
              }`}
            >
              <p>{item.parts[0].text}</p>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-4 p-4 bg-gray-700 rounded-md"
      >
        <input
          type="text"
          name="prompt"
          className="input bg-gray-400 w-full p-2 rounded-md text-black"
          placeholder="Ketik pesan..."
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button type="submit" className="btn btn-error p-2 rounded-md">
          Kirim
        </button>
      </form>
    </div>
  );
}

export default App;
