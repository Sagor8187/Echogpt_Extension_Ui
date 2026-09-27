"use client";

import { useState } from "react";
import { FiClock, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const aspectRatios = ["16:9", "9:16", "1:1"];

const videoModels = [
  "Veo 3.1 fast",
  "Veo 3.1",
  "Veo 3.1 lite",
  "Grok Imagine Video",
  "Grok Imagine Video 1.5 Preview",
];

export default function VideoTab() {
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [selectedModel, setSelectedModel] = useState("Veo 3.1 fast");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

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
        <h2 className="text-2xl font-bold">Video Studio</h2>
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
          
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold">Video Studio</h3>
            <p className="text-xs text-gray-400 mt-0.5">Just type what you imagine, and the video makes itself.</p>
          </div>

          {/* Prompt Section */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Prompt</label>
            <textarea 
              placeholder="Describe your video..." 
              className="w-full h-32 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
            ></textarea>
          </div>

          {/* Aspect Ratio */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Aspect Ratio</label>
            <div className="flex flex-wrap gap-2">
              {aspectRatios.map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    aspectRatio === ratio 
                      ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm"
                      : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          {/* Model Selection & Generate Layout (Side-by-side) */}
          <div className="pt-4 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              
              {/* Custom Dropdown */}
              <div className="relative w-full sm:w-1/2">
                <button
                  onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                  className="w-full flex items-center justify-between bg-white dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium cursor-pointer"
                >
                  <span className="text-gray-700 dark:text-gray-200">{selectedModel}</span>
                  <FiChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isModelDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isModelDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-xl shadow-xl z-50 overflow-hidden"
                    >
                      {videoModels.map((model) => (
                        <button
                          key={model}
                          onClick={() => { setSelectedModel(model); setIsModelDropdownOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors cursor-pointer ${
                            selectedModel === model 
                              ? "bg-[#10a37f]/10 dark:bg-[#CEF144]/10 text-[#10a37f] dark:text-[#CEF144] font-semibold" 
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10"
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Generate Button */}
              <button className="w-full sm:flex-1 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center cursor-pointer text-sm">
                Generate
              </button>

            </div>
            
            <p className="text-[11px] text-gray-400 pl-1 mt-3">
              Each video uses one message from your plan and takes a few minutes to render.
            </p>
          </div>

          {/* Your Creations Section */}
          <div className="pt-6 space-y-4">
            <h4 className="font-bold text-sm">Your creations</h4>
            <div className="flex flex-col items-center justify-center h-32 text-center p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">No creations yet. Generate your first video!</p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}