"use client";

import { useState } from "react";
import { 
  FiEdit3, FiType, FiBookOpen, FiImage, FiVideo, FiColumns, FiLink,
  FiPaperclip, FiBook, FiAtSign, FiUserPlus, FiSend, FiSearch, FiChevronDown, FiClock 
} from "react-icons/fi";
import { BsStars, BsScissors } from "react-icons/bs";

// AI Models list based on reference image
const aiModels = [
  { name: "Qwen 3.7 Plus", type: "Advanced", badgeBg: "bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300" },
  { name: "GPT-5.6 Sol", type: "Advanced", badgeBg: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300" },
  { name: "Kimi K2.7 Code", type: "Advanced", badgeBg: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300" },
  { name: "LongCat 2.0", type: "Free", badgeBg: "bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300" },
  { name: "GLM-5.3 Flash", type: "Advanced", badgeBg: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300" },
];

export default function ChatTab() {
  const [selectedModel, setSelectedModel] = useState("EchoGPT");
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#151a23] text-gray-900 dark:text-white relative">
      
      {/* Header Area */}
      <div className="flex justify-between items-center p-5 border-b border-gray-100 dark:border-white/10">
        <h2 className="text-2xl font-bold">Chat</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer">
            + New Chat
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <FiClock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Chat Body */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        <div className="max-w-3xl mx-auto">
          
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-gray-400 text-sm mb-1">Hi, good evening</p>
            <h3 className="text-3xl font-extrabold tracking-tight">How can I help you?</h3>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiEdit3 className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Write</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiType className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Translate</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiBookOpen className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Read page</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiImage className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Image</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiVideo className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Video</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group cursor-pointer">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiColumns className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">Compare</span>
            </button>
            <button className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/5 hover:border-[#10a37f] dark:hover:border-[#CEF144] hover:shadow-sm transition-all text-left group col-span-2 sm:col-span-1 cursor-pointer">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg group-hover:scale-105 transition-transform">
                <FiLink className="w-4 h-4" />
              </div>
              <span className="font-semibold text-sm">MCP</span>
            </button>
          </div>

          {/* Prompt Suggestions */}
          <div className="flex flex-col gap-2.5">
            {[
              "Tell me an interesting fun fact",
              "Explain quantum computing in simple terms",
              "Recommend 5 great sci-fi movies",
              "How can I improve my English speaking skills?"
            ].map((text, i) => (
              <button key={i} className="text-left px-5 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-sm text-gray-700 dark:text-gray-300 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10 cursor-pointer">
                {text}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Footer / Input Area */}
      <div className="p-4 border-t border-gray-100 dark:border-white/10 relative">
        
        {/* Model Selection Dropdown Popup */}
        {isModelDropdownOpen && (
          <div className="absolute bottom-24 left-6 w-72 bg-white dark:bg-[#1e2530] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl p-2 z-50 flex flex-col gap-1 backdrop-blur-md">
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

        <div className="max-w-3xl mx-auto">
          
          {/* Top Toolbar inside input container */}
          <div className="flex items-center gap-4 mb-3 px-2">
            <button 
              onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
              className="flex items-center gap-2 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-[#10a37f] dark:bg-[#CEF144]"></div> 
              {selectedModel}
              <FiChevronDown className={`w-3 h-3 transition-transform ${isModelDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className="flex items-center gap-3 text-gray-400">
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Format"><BsScissors className="w-4 h-4" /></button>
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Attach"><FiPaperclip className="w-4 h-4" /></button>
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Reference"><FiBook className="w-4 h-4" /></button>
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Mention"><FiAtSign className="w-4 h-4" /></button>
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Enhance"><BsStars className="w-4 h-4" /></button>
              <button className="hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer" title="Collaborate"><FiUserPlus className="w-4 h-4" /></button>
            </div>
          </div>

          {/* Main Input Field */}
          <div className="bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-2xl flex flex-col p-2">
            <textarea 
              placeholder="Ask a question..." 
              className="w-full bg-transparent resize-none h-12 py-2 px-3 text-sm focus:outline-none placeholder-gray-400"
            ></textarea>
            
            <div className="flex items-center justify-between px-3 pb-2 pt-1">
              <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors cursor-pointer">
                <FiSearch className="w-3.5 h-3.5" /> Search
              </button>
              <div className="text-[10px] text-gray-400 hidden sm:block">
                Enter to send · Shift+Enter new line
              </div>
              <button className="p-2 bg-[#10a37f] dark:bg-[#CEF144] text-white dark:text-black rounded-xl hover:opacity-90 transition-opacity shadow-sm cursor-pointer">
                <FiSend className="w-4 h-4" />
              </button>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}