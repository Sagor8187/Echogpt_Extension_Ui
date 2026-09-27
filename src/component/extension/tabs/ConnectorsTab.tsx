"use client";

import { useState } from "react";
import { FiClock, FiPlus, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ConnectorsTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connectorName, setConnectorName] = useState("");
  const [connectorUrl, setConnectorUrl] = useState("");
  const [authHeader, setAuthHeader] = useState("");

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
        <h2 className="text-2xl font-bold">Connectors</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black px-4 py-2 rounded-xl text-sm font-medium transition-colors shadow-sm cursor-pointer">
            <FiPlus className="w-4 h-4" /> New Chat
          </button>
          <button className="p-2 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <FiClock className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-6 overflow-hidden relative">
        <div className="max-w-3xl mx-auto w-full h-full flex flex-col">
          
          {/* Top Title & Description */}
          <div className="space-y-1 mb-6">
            <h3 className="text-xl font-bold">Connectors</h3>
            <p className="text-xs text-gray-400">Connect an MCP server and its tools become available while you chat.</p>
          </div>

          {/* Add Connector Button & Connected Count */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-semibold text-gray-400">0 connected</span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
            >
              Add connector
            </button>
          </div>

          {/* Empty State */}
          <div className="flex-1 flex items-center justify-center border border-dashed border-gray-200 dark:border-white/10 rounded-2xl bg-gray-50/50 dark:bg-[#0B0F15]/30 p-6">
            <p className="text-xs text-gray-400 text-center">
              No connectors yet. Add your first MCP server!
            </p>
          </div>

        </div>
      </div>

      {/* Add Custom Connector Modal (Reference Image 2)[cite: 27] */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-lg bg-white dark:bg-[#151a23] rounded-3xl shadow-2xl flex flex-col border border-gray-200 dark:border-white/10 overflow-hidden p-6 space-y-5"
            >
              
              {/* Modal Title */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">Add custom connector</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                
                {/* Name Field */}
                <div className="space-y-1.5">
                  <input 
                    type="text" 
                    value={connectorName}
                    onChange={(e) => setConnectorName(e.target.value)}
                    placeholder="Name — shown in the connectors list"
                    className="w-full bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] placeholder-gray-400 transition-all"
                  />
                </div>

                {/* URL Field */}
                <div className="space-y-1.5">
                  <input 
                    type="text" 
                    value={connectorUrl}
                    onChange={(e) => setConnectorUrl(e.target.value)}
                    placeholder="https://mcp.example.com/mcp"
                    className="w-full bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] placeholder-gray-400 transition-all"
                  />
                  <p className="text-[11px] text-gray-400 pl-1">
                    The HTTPS address where the server accepts MCP requests.
                  </p>
                </div>

                {/* Authorization Header Field */}
                <div className="space-y-1.5">
                  <input 
                    type="text" 
                    value={authHeader}
                    onChange={(e) => setAuthHeader(e.target.value)}
                    placeholder="Authorization header (optional), e.g. Bearer abc123"
                    className="w-full bg-gray-50 dark:bg-[#0B0F15] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#10a37f] dark:focus:ring-[#CEF144] placeholder-gray-400 transition-all"
                  />
                  <p className="text-[11px] text-gray-400 pl-1">
                    Only connect servers you trust — their tools can act on your behalf.
                  </p>
                </div>

              </div>

              {/* Modal Buttons (Cancel & Continue) */}
              <div className="flex items-center gap-3 pt-2">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all cursor-pointer text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-[#10a37f] dark:bg-[#CEF144] hover:opacity-90 text-white dark:text-black font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
                >
                  Continue
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}