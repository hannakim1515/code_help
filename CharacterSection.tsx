import { motion } from "motion/react";
import { useEffect, useState } from "react";

const greetings = [
  "어서와요 요한.",
  "아~ 해보세요!",
  "준비 됐어요?",
];

export function CharacterSection() {
  const [showSpeechBubble, setShowSpeechBubble] =
    useState(false);
  const [greeting, setGreeting] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // 로딩 완료 후 말풍선 표시
    const timer = setTimeout(() => {
      const selectedGreeting =
        greetings[Math.floor(Math.random() * greetings.length)];
      setGreeting(selectedGreeting);
      setShowSpeechBubble(true);
      setIsTyping(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // 타이핑 효과
  useEffect(() => {
    if (isTyping && greeting) {
      let index = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        if (index < greeting.length) {
          setDisplayedText(greeting.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }
  }, [isTyping, greeting]);

  return (
    <div className="absolute inset-0 flex items-center justify-center md:justify-start md:pl-32 md:left-[10%] md:top-[-20%]">
      {/* 말풍선 */}
      {showSpeechBubble && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="absolute top-32 md:top-100 left-1/2 -translate-x-1/2 md:left-144 md:translate-x-0 z-50"
        >
          <div className="relative bg-gradient-to-br from-white via-white to-emerald-50/30 backdrop-blur-xl px-6 md:px-8 py-4 md:py-5 rounded-[24px] md:rounded-[28px] shadow-2xl shadow-emerald-500/10 border border-white/60">
            {/* 내부 그라데이션 오버레이 */}
            <div className="absolute inset-0 rounded-[24px] md:rounded-[28px] bg-gradient-to-br from-emerald-50/20 to-transparent pointer-events-none"></div>

            <p className="text-sm md:text-base font-medium text-gray-800 min-w-[180px] md:min-w-[200px] relative z-10">
              {displayedText}
              {isTyping && (
                <span className="inline-block ml-0.5 w-0.5 h-4 md:h-5 bg-emerald-500 animate-pulse align-middle"></span>
              )}
            </p>

            {/* 말풍선 꼬리 */}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 md:left-14 md:translate-x-0 w-6 h-6 md:w-8 md:h-8">
              <div className="w-full h-full bg-gradient-to-br from-white via-white to-emerald-50/30 backdrop-blur-xl border-b border-r border-white/60 rotate-45 shadow-lg shadow-emerald-500/5"></div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 캐릭터 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 ml-0"
      >
        <motion.img
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="https://i.imgur.com/MUMewZS.png"
          alt="Character"
          className="h-[500px] md:h-[800px] lg:h-[1000px] w-auto object-contain drop-shadow-2xl"
        />
      </motion.div>

      {/* 장식 요소 */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 md:bottom-32 left-1/2 -translate-x-1/2 md:left-32 md:translate-x-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl"
      ></motion.div>
    </div>
  );
}
