"use client";

import { useState } from "react";
import { FiClock, FiPlus, FiCheck, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const allModels = [
  "EchoGPT", "DeepSeek V4 Pro", "Nemotron 3 Ultra", "GLM-5.2", 
  "DeepSeek V4 Flash", "Tencent Hy3", "MiMo V2.5 Pro", "Qwen 3.7 Plus",
  "GPT-5.6 Sol", "Kimi K2.7 Code", "LongCat 2.0", "GLM-5.3 Flash",
  "Qwen 3.8 27B", "Qwen 3.7 Max", "Owan 2.6 Blue", "Gemini 2.0 Flash"
];

export default function CompareTab() {
  const [selectedModels, setSelectedModels] = useState<string[]>(["EchoGPT", "DeepSeek V4 Pro", "Nemotron 3 Ultra"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  const toggleModelSelection = (model: string) => {
    if (selectedModels.includes(model)) {
      setSelectedModels(selectedModels.filter(m => m !== model));
    } else {
      if (selectedModels.length < 20) {
        setSelectedModels([...selectedModels, model]);
      }
    }
  };

  // Badge Text logic ("EchoGPT +2 more")
  const getBadgeText = () => {
    if (selectedModels.length === 0) return "Select Models";
    if (selectedModels.length === 1) return selectedModels[0];
    return `${selectedModels[0]} +${selectedModels.length - 1} more`;
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
        <h2 className="text-2xl font-bold">Compare</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer">
            <FiPlus className="w-4 h-4" /> New Chat
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <FiClock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area (Now width is controlled like other tabs) */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden relative">
        <div className="max-w-3xl mx-auto w-full h-full flex flex-col">
          
          {/* Top Button */}
          <div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer">
              <FiPlus className="w-3.5 h-3.5" /> New comparison
            </button>
          </div>

          {/* Empty State Text */}
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-sm text-center">
              Ask one question and see how multiple models answer it.
            </p>
          </div>

          {/* Bottom Input Area */}
          <div className="mt-auto space-y-3">
            
            <div className="flex gap-3">
              <input 
                type="text" 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`Message ${selectedModels.length} models...`}
                className="flex-1 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] placeholder-gray-400 transition-all"
              />
              <button className="bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold px-6 py-3.5 rounded-2xl transition-all shadow-sm cursor-pointer text-sm">
                Compare
              </button>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full text-xs font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
            >
              {getBadgeText()}
            </button>

          </div>
        </div>
      </div>

      {/* Model Selection Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4 sm:p-0"
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="w-full sm:w-[600px] h-[85vh] sm:h-[650px] bg-white dark:bg-[#151a23] rounded-3xl shadow-2xl flex flex-col border border-gray-200 dark:border-white/10 overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-100 dark:border-white/10 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Choose models</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Every model answers the same prompt, side by side.</p>
                  <p className="text-xs font-semibold text-gray-400 mt-2">{selectedModels.length}/20 models selected</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Grid Body */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {allModels.map((model) => {
                    const isSelected = selectedModels.includes(model);
                    return (
                      <button
                        key={model}
                        onClick={() => toggleModelSelection(model)}
                        className={`flex items-center justify-between p-4 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                          isSelected 
                            ? "bg-[#10a37f]/10 dark:bg-[#CEF144]/10 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144]" 
                            : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 text-gray-700 dark:text-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                            isSelected ? "bg-[#10a37f] dark:bg-[#CEF144] text-white dark:text-black" : "bg-gray-100 dark:bg-white/10 text-gray-500"
                          }`}>
                            {model[0]}
                          </div>
                          {model}
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#10a37f] dark:bg-[#CEF144] text-white dark:text-black flex items-center justify-center">
                            <FiCheck className="w-3 h-3" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-100 dark:border-white/10 flex justify-end">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold px-8 py-3 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
                >
                  Apply for this chat
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}