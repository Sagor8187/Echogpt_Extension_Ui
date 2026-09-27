"use client";

import { useState } from "react";
import { FiClock, FiUploadCloud, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ReadTab() {
  const [linkInput, setLinkInput] = useState("");

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
        <h2 className="text-2xl font-bold">Read</h2>
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
          <h3 className="text-xl font-bold">Read</h3>

          {/* Read a Link Section */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Read a Link</label>
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                placeholder="Enter a web page link" 
                className="flex-1 bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] placeholder-gray-400 transition-all"
              />
              <button className="bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold px-6 py-3 rounded-xl transition-all shadow-sm cursor-pointer text-sm">
                Read
              </button>
            </div>
          </div>

          {/* Read a File Section */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Read a File</label>
            <label className="flex flex-col items-center justify-center w-full h-44 border-2 border-dashed border-gray-200 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-[#0B0F15]/50 hover:border-[#10a37f] dark:hover:border-[#CEF144] transition-all cursor-pointer group">
              <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:text-[#10a37f] dark:group-hover:text-[#CEF144] transition-colors mb-3">
                  <FiUploadCloud className="w-6 h-6" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Click or drag files here to upload
                </p>
              </div>
              <input type="file" className="hidden" />
            </label>
          </div>

        </div>
      </div>

    </motion.div>
  );
}