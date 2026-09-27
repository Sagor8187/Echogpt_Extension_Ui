"use client";

import { useState } from "react";
import { FiClock, FiChevronDown, FiRepeat } from "react-icons/fi";
import { motion } from "framer-motion";

const languages = ["Automatic", "English", "Bengali", "Spanish", "French", "German", "Arabic", "Chinese"];

const aiModels = [
  { name: "EchoGPT", type: "Free", badgeBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300" },
  { name: "DeepSeek V4 Pro", type: "Advanced", badgeBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300" },
  { name: "Nemotron 3 Ultra", type: "Free", badgeBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300" },
  { name: "GLM-5.2", type: "Advanced", badgeBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300" },
  { name: "DeepSeek V4 Flash", type: "Advanced", badgeBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300" },
];

export default function TranslateTab() {
  const [sourceLang, setSourceLang] = useState("Automatic");
  const [targetLang, setTargetLang] = useState("English");
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isTargetOpen, setIsTargetOpen] = useState(false);
  
  const [selectedModel, setSelectedModel] = useState("EchoGPT");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  const handleSwap = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
  };

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
        <h2 className="text-2xl font-bold">Translate</h2>
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
          
          {/* Section Title */}
          <h3 className="text-xl font-bold">Translate</h3>

          {/* Language Selection Header (Side-by-side with Swap Icon in between) */}
          <div className="flex flex-col md:flex-row items-center gap-3 relative">
            
            {/* Source Language Dropdown */}
            <div className="relative w-full">
              <button
                onClick={() => { setIsSourceOpen(!isSourceOpen); setIsTargetOpen(false); }}
                className="w-full flex items-center justify-between bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium cursor-pointer"
              >
                <span>{sourceLang}</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isSourceOpen ? "rotate-180" : ""}`} />
              </button>

              {isSourceOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-20 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setSourceLang(lang); setIsSourceOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Swap Button (Inline Clean Icon) */}
            <button 
              onClick={handleSwap}
              className="p-2 text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer flex items-center justify-center"
              title="Swap Languages"
            >
              <FiRepeat className="w-4 h-4" />
            </button>

            {/* Target Language Dropdown */}
            <div className="relative w-full">
              <button
                onClick={() => { setIsTargetOpen(!isTargetOpen); setIsSourceOpen(false); }}
                className="w-full flex items-center justify-between bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium cursor-pointer"
              >
                <span>{targetLang}</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isTargetOpen ? "rotate-180" : ""}`} />
              </button>

              {isTargetOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-20 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setTargetLang(lang); setIsTargetOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Translation Text Area */}
          <div>
            <textarea 
              placeholder="Paste or enter your text to translate" 
              className="w-full h-48 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
            ></textarea>
          </div>

        </div>
      </div>

      {/* Footer / Translate Button Area */}
      <div className="p-4 border-t border-gray-100 dark:border-white/10 bg-white dark:bg-[#151a23] relative">
        
        {/* Model Selection Modal Popup */}
        {isModelDropdownOpen && (
          <div className="absolute bottom-20 left-6 w-72 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 z-50 flex flex-col gap-1 backdrop-blur-md">
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 border-b border-gray-100 dark:border-white/5">
              Select AI Model
            </div>
            {aiModels.map((model, idx) => (
              <button 
                key={idx}
                onClick={() => { setSelectedModel(model.name); setIsModelDropdownOpen(false); }}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#10a37f]/20 dark:bg-[#CEF144]/20 text-[#10a37f] dark:text-[#CEF144] flex items-center justify-center font-bold text-xs">
                    {model.name[0]}
                  </div>
                  <span className="text-sm font-medium">{model.name}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${model.badgeBg}`}>
                  {model.type}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="max-w-3xl mx-auto flex items-center gap-4">
          
          {/* Model Selector Badge Button */}
          <button 
            onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
            className="flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-[#10a37f] dark:bg-[#CEF144]"></div>
            {selectedModel}
            <FiChevronDown className={`w-3 h-3 transition-transform ${isModelDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Translate Button */}
          <button className="flex-1 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-sm">
            Translate
          </button>

        </div>
      </div>

    </motion.div>
  );
}