"use client"
import Sidebar from "@/component/extension/Sidebar";
import ChatTab from "@/component/extension/tabs/ChatTab";
import CompareTab from "@/component/extension/tabs/CompareTab";
import ConnectorsTab from "@/component/extension/tabs/ConnectorsTab";
import ImageTab from "@/component/extension/tabs/ImageTab";
import ReadTab from "@/component/extension/tabs/ReadTab";
import TranslateTab from "@/component/extension/tabs/TranslateTab";
import VideoTab from "@/component/extension/tabs/VideoTab";
import WriteTab from "@/component/extension/tabs/WriteTab";
import { useState } from "react";


export default function ExtensionConcept() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="flex w-full h-[700px]">
      
      {/* Dynamic Content Body (Left Side) */}
      <div className="flex-1 overflow-y-auto">
      {activeTab === "chat" && <ChatTab setActiveTab={setActiveTab} />}
      {activeTab === "write" && <WriteTab></WriteTab>}
      {activeTab === "read" && <ReadTab></ReadTab>}
      {activeTab === "translate" && <TranslateTab></TranslateTab>}
      {activeTab === "image" && <ImageTab></ImageTab>}
      {activeTab === "video" && <VideoTab></VideoTab>}
      {activeTab === "compare" && <CompareTab></CompareTab>}
      {activeTab === "mcp" && <ConnectorsTab></ConnectorsTab>}
      </div>

      {/* Right Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
    </div>
  );
}