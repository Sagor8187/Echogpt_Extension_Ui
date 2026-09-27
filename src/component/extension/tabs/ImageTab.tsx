"use client";

import { useState } from "react";
import { FiClock, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const aspectRatios = ["1:1", "3:2", "2:3", "auto"];
const counts = [1, 2, 3, 4];

const aiImageModels = [
  { name: "Nano Banana 2 Lite", type: "Fast", badgeBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300" },
  { name: "Midjourney v6.0", type: "Advanced", badgeBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300" },
  { name: "DALL-E 3 Pro", type: "Pro", badgeBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300" },
  { name: "Stable Diffusion XL", type: "Advanced", badgeBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300" },
];

export default function ImageTab() {
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [count, setCount] = useState(1);
  const [selectedModel, setSelectedModel] = useState("Nano Banana 2 Lite");
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
        <h2 className="text-2xl font-bold">Image Studio</h2>
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
            <h3 className="text-xl font-bold">Image Studio</h3>
            <p className="text-xs text-gray-400 mt-0.5">Create images that stop the scroll.</p>
          </div>

          {/* Prompt Section */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Prompt</label>
            <textarea 
              placeholder="Describe the image you want to create..." 
              className="w-full h-32 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] resize-none placeholder-gray-400 transition-all"
            ></textarea>
          </div>

          {/* Aspect Ratio & Count Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Aspect Ratio */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Aspect Ratio</label>
              <div className="flex flex-wrap gap-2">
                {aspectRatios.map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
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

            {/* Count */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Count</label>
              <div className="flex flex-wrap gap-2">
                {counts.map((num) => (
                  <button
                    key={num}
                    onClick={() => setCount(num)}
                    className={`w-10 h-9 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center ${
                      count === num 
                        ? "border-2 border-[#10a37f] dark:border-[#CEF144] text-[#10a37f] dark:text-[#CEF144] bg-white dark:bg-[#151a23] shadow-sm" 
                        : "bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 border-2 border-transparent"
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Model Selection & Generate Button (Side-by-side) */}
          <div className="pt-2 relative z-10">
            
            {/* Model Dropdown Popup */}
            {isModelDropdownOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-72 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 z-50 flex flex-col gap-1 backdrop-blur-md">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 border-b border-gray-100 dark:border-white/5">
                  Select AI Tool / Model
                </div>
                {aiImageModels.map((model, idx) => (
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

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Dropdown Button */}
              <button
                onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                className="w-full sm:w-1/2 flex items-center justify-between bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm font-medium cursor-pointer"
              >
                <span>{selectedModel}</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${isModelDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Generate Button */}
              <button className="w-full sm:flex-1 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer text-sm">
                Generate
              </button>
            </div>
            
            <p className="text-[11px] text-gray-400 pl-1 mt-2">
              Each image uses one message from your plan. Generation takes up to a minute.
            </p>
          </div>

          {/* Your Creations Section */}
          <div className="pt-6 border-t border-gray-100 dark:border-white/10 space-y-4">
            <h4 className="font-bold text-sm">Your creations</h4>
            <div className="flex flex-col items-center justify-center h-40 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-[#0B0F15]/30 text-center p-4">
              <p className="text-xs text-gray-400">No creations yet. Generate your first image!</p>
            </div>
          </div>

        </div>
      </div>

    </motion.div>
  );
}