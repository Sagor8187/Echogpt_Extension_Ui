"use client";

import { 
  FiMessageSquare, FiEdit3, FiBookOpen, FiType, FiImage, 
  FiVideo, FiColumns, FiServer, FiSettings 
} from "react-icons/fi";

// navlink 
const navItems = [
  { id: "chat", label: "Chat", icon: FiMessageSquare },
  { id: "write", label: "Write", icon: FiEdit3 },
  { id: "read", label: "Read", icon: FiBookOpen },
  { id: "translate", label: "Translate", icon: FiType },
  { id: "image", label: "Image", icon: FiImage },
  { id: "video", label: "Video", icon: FiVideo },
  { id: "compare", label: "Compare", icon: FiColumns },
  { id: "mcp", label: "MCP", icon: FiServer },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-[85px] bg-gray-50 dark:bg-[#0B0F15] border-l border-gray-200 dark:border-white/5 flex flex-col items-center py-4 relative z-10 transition-colors duration-300 shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
      
  
      <div className="flex flex-col gap-2 w-full px-2 flex-1 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
         
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all duration-300 ${
                isActive 
                 
                  ? "bg-[#10a37f]/15 dark:bg-[#CEF144]/15 text-[#10a37f] dark:text-[#CEF144]" 
                  : "text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <item.icon className={`w-5 h-5 mb-1.5 ${isActive ? "drop-shadow-sm" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
      
      {/*setting and profile  */}
      <div className="mt-auto flex flex-col gap-2 w-full px-2 border-t border-gray-200 dark:border-white/10 pt-4">
        <button className="flex flex-col items-center justify-center py-2 text-gray-500 hover:text-[#10a37f] dark:hover:text-[#CEF144] transition-colors">
          <FiSettings className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium">Settings</span>
        </button>
        
        {/* profile and icon */}
        <div className="mt-2 w-10 h-10 rounded-full bg-[#10a37f] dark:bg-[#CEF144] text-white dark:text-[#0B0F15] flex items-center justify-center font-bold text-sm mx-auto shadow-md cursor-pointer hover:scale-105 transition-transform">
          S
        </div>
      </div>

    </div>
  );
}