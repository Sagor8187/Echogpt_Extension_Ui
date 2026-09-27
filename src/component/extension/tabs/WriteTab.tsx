"use client";

import { useState } from "react";
import { FiClock, FiChevronDown, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const composeFormats = ["Automatic", "Email", "Message", "Paragraph", "Idea", "Outline", "Blog Post", "Comment", "Article", "Twitter"];
const replyFormats = ["Automatic", "Email", "Message", "Comment", "Twitter"];
const tones = ["Automatic", "Formal", "Casual", "Friendly", "Professional", "Straightforward", "Confident", "Funny", "Enthusiastic"];
const lengths = ["Automatic", "Short", "Medium", "Long"];
const languages = ["Automatic", "English", "Bengali", "Spanish", "French", "German"];

export default function WriteTab() {
  const [subTab, setSubTab] = useState("Compose");
  const [format, setFormat] = useState("Automatic");
  const [tone, setTone] = useState("Automatic");
  const [length, setLength] = useState("Automatic");
  const [language, setLanguage] = useState("Automatic");
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full bg-white dark:bg-[#151a23] text-gray-900 dark:text-white relative"
    >
      
      {/* Header Area */}
      <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-white/10">
        <h2 className="text-2xl font-bold">Write</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer">
            + New Chat
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <FiClock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Section Title & Sub-Tabs */}
          <div>
            <h3 className="text-xl font-bold mb-3">Write</h3>
            <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-2xl">
              {["Compose", "Reply", "Grammar"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSubTab(item)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer relative ${
                    subTab === item 
                      ? "text-[#10a37f] dark:text-[#CEF144] font-semibold border-2 border-[#10a37f] dark:border-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                      : "text-gray-500 hover:text-gray-900 dark:hover:text-white border-2 border-transparent"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {/* --- COMPOSE TAB CONTENT --- */}
            {subTab === "Compose" && (
              <motion.div 
                key="compose"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Topic</label>
                  <textarea 
                    placeholder="The topic you want to write about..." 
                    className="w-full h-32 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Format</label>
                  <div className="flex flex-wrap gap-2">
                    {composeFormats.map((item) => (
                      <button
                        key={item}
                        onClick={() => setFormat(item)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          format === item 
                            ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                            : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- REPLY TAB CONTENT --- */}
            {subTab === "Reply" && (
              <motion.div 
                key="reply"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Original Text</label>
                  <textarea 
                    placeholder="The original text which you want to reply" 
                    className="w-full h-28 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">What to Reply</label>
                  <textarea 
                    placeholder="The general content of your reply to the above text" 
                    className="w-full h-28 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
                  ></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Format</label>
                  <div className="flex flex-wrap gap-2">
                    {replyFormats.map((item) => (
                      <button
                        key={item}
                        onClick={() => setFormat(item)}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          format === item 
                            ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                            : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- GRAMMAR TAB CONTENT --- */}
            {subTab === "Grammar" && (
              <motion.div 
                key="grammar"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <textarea 
                  placeholder="Paste or enter your text to check for grammar, spelling, punctuation, and other errors" 
                  className="w-full h-40 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
                ></textarea>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tone & Length (Only for Compose and Reply) */}
          {subTab !== "Grammar" && (
            <div className="space-y-6 pt-2">
              <div>
                <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Tone</label>
                <div className="flex flex-wrap gap-2">
                  {tones.map((item) => (
                    <button
                      key={item}
                      onClick={() => setTone(item)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        tone === item 
                          ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                          : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Length</label>
                <div className="flex flex-wrap gap-2">
                  {lengths.map((item) => (
                    <button
                      key={item}
                      onClick={() => setLength(item)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        length === item 
                          ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                          : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative pb-6">
                <label className="text-xs font-bold text-gray-400 mb-2 block uppercase tracking-wider">Output Language</label>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="w-full flex items-center justify-between bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium cursor-pointer"
                >
                  <span>{language}</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
                </button>

                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-20 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setIsLangOpen(false); }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Footer / Generate Button Area (Fixed and Compacted) */}
      <div className="p-4 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#151a23]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-3 py-2 rounded-xl text-xs font-semibold">
            <div className="w-2 h-2 rounded-full bg-[#10a37f] dark:bg-[#CEF144]"></div>
            EchoGPT
          </div>
          <button className="px-6 w-full bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-sm">
            <FiSend className="w-4 h-4" /> {subTab === "Grammar" ? "Grammar" : "Generate"}
          </button>
        </div>
      </div>

    </motion.div>
  );
}