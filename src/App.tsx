"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні!",
      "Точно точно?",
      "Подумай ще раз",
      "Останній шанс",
      "А якщо я гарно попрошу?",
      "Будь ласка",
      "а якщо шоколадку куплю?",
      "навіть желейки не поможуть?",
      "Ще трохи і я почну ображатись",
      "БУДЬ ЛАСКА ЗАЙЧИКУ",
      "Але(((",
      "Всьо я помру",
      "Я помер",
      "тепер ти спілкуєшся з привидом Дениса",
      "буляска",
      ":((((",
      "Май бога в серці!",
      "Це твоя фінальна відповідь?",
      "плак плак((",
      "нє :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">Ураааа, люблю тебе ❤️❤️❤️  ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Анюта, будеш моєю Валентинкою?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Так
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Ні" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
