import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "Mi a HTML szerepe a webfejlesztésben?",
    options: ["Stílusok hozzáadása", "Weboldal struktúrája", "Interaktivitás kezelése", "Adatbázis-kezelés"],
    correctIndex: 1,
  },
  {
    question: "Melyik a helyes HTML tag egy link létrehozására?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctIndex: 1,
  },
  {
    question: "Melyik JavaScript metódus ír ki szöveget a konzolra?",
    options: ["console.log()", "alert()", "document.write()", "print()"],
    correctIndex: 0,
  },
];

export default function App2() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const question = questions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedIndex(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedIndex(null);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 Webprogramozás mini kvíz</h2>
      {currentQuestion < questions.length ? (
        <div>
          <p><strong>Kérdés {currentQuestion + 1}:</strong> {question.question}</p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {question.options.map((option, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <button
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                  style={{
                    backgroundColor:
                      answered && index === question.correctIndex
                        ? "lightgreen"
                        : answered && index === selectedIndex
                        ? "salmon"
                        : "white",
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {answered && (
            <button onClick={nextQuestion} style={{ marginTop: "12px" }}>
              Következő kérdés →
            </button>
          )}
        </div>
      ) : (
        <div>
          <h3>🎉 Végeredmény</h3>
          <p>Helyes válaszok száma: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
// 5. reszallapot teszt