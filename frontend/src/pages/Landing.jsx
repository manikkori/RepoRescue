import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  Zap,
  Code2,
  Terminal,
  Menu,
  FileText,
  CheckCircle,
  Users
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#6c747f] p-4 md:p-8 lg:p-12 font-sans selection:bg-teal-500/30 flex items-center justify-center">
      {/* Main Container */}
      <div className="w-full max-w-[1400px] min-h-[calc(100vh-6rem)] bg-[#11141d] rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col relative shadow-2xl text-white">
        
        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-teal-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

        {/* Top Navigation */}
        <nav className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/[0.08] relative z-20 bg-[#11141d]/50 backdrop-blur-md">
          {/* Logo */}
          <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex items-center px-6 lg:px-8 py-5 gap-3">
            <img
              src="/image.png"
              alt="RepoRescue Logo"
              className="w-8 h-8 rounded object-contain bg-white/10 p-1"
            />
            <span className="font-semibold text-lg tracking-wide text-gray-200">RepoRescue</span>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex items-center px-6 lg:px-8 py-4 lg:py-5 gap-8 lg:gap-12 text-sm text-gray-400">
            <a href="https://github.com/manikkori" className="flex items-center gap-2 hover:text-white transition-colors">
              <Menu className="w-4 h-4" /> Menu
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <FileText className="w-4 h-4" /> Docs
            </a>
          </div>

          {/* Actions */}
          <div className="lg:col-span-3 flex items-center justify-start lg:justify-end px-6 lg:px-8 py-4 lg:py-5">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-6 py-2.5 rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium shadow-lg">
                  Try Now
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigate("/dashboard")}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium shadow-lg"
                >
                  Dashboard
                </button>
                <UserButton appearance={{ elements: { userButtonAvatarBox: "w-8 h-8" } }} />
              </div>
            </SignedIn>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 relative flex flex-col justify-between p-6 md:p-12 lg:p-16 z-10">
           
           {/* Top Right Floating Card */}
           <div className="self-end w-full max-w-sm p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl mb-12 lg:mb-0 mt-4 lg:mt-0">
              <h3 className="text-lg md:text-xl leading-relaxed text-gray-200 mb-8 font-medium">
                Automated debugging & <br className="hidden md:block" /> fixing across React, <br className="hidden md:block" /> Node, Python & more
              </h3>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1e2330] flex items-center justify-center border-2 border-[#11141d] z-30">
                    <Code2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300" />
                  </div>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1e2330] flex items-center justify-center -ml-3 border-2 border-[#11141d] z-20">
                    <Terminal className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300" />
                  </div>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#1e2330] flex items-center justify-center -ml-3 border-2 border-[#11141d] z-10">
                    <Activity className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300" />
                  </div>
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center -ml-3 border-2 border-[#11141d] z-0">
                    <span className="text-[10px] text-gray-300 font-medium">+</span>
                  </div>
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-500 max-w-[120px] leading-tight text-right">
                  Ultra-fast execution with advanced AI models
                </p>
              </div>
           </div>

           {/* Bottom Content Area */}
           <div className="mt-auto flex flex-col lg:flex-row items-end justify-between gap-12 w-full pt-12 md:pt-24 lg:pt-32">
              
              {/* Left Side: Headline */}
              <div className="max-w-3xl w-full">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] text-gray-400 mb-6 uppercase tracking-wider font-medium">
                   <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-teal-500" />
                   RepoRescue — speed advantage!
                 </div>
                 <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-white mb-6 lg:mb-0">
                   Leading AI-powered <br />
                   debugging and <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-700/60 drop-shadow-sm">
                     error resolution
                   </span>
                 </h1>
              </div>

              {/* Right Side: Description and CTA */}
              <div className="max-w-sm space-y-6 lg:pb-4 w-full">
                 <p className="text-sm text-gray-400 leading-relaxed">
                   Elevate your shipping speed! Debug <strong className="text-white font-medium">fast</strong> and <strong className="text-white font-medium">confidently</strong> with AI-driven root cause analysis. Your ultimate <strong className="text-white font-medium">debugging</strong> companion awaits.
                 </p>
                 <button 
                   onClick={() => navigate("/dashboard")}
                   className="px-6 py-3 rounded-xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] transition-all text-sm font-medium w-full sm:w-auto shadow-lg backdrop-blur-md"
                 >
                   Try the Dashboard
                 </button>
              </div>
           </div>

        </main>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08] bg-[#090b0f] relative z-20">
          
          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between min-h-[160px] group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Activity className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-snug w-24">Lines of code analyzed</p>
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-8 text-gray-100">10M+</div>
          </div>

          <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between min-h-[160px] group hover:bg-white/[0.02] transition-colors">
             <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-snug w-24">Speed of resolution</p>
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-8 text-gray-100">&lt;5 sec</div>
          </div>

          <div className="p-8 md:p-10 border-b sm:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between min-h-[160px] group hover:bg-white/[0.02] transition-colors">
             <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-snug w-24">Users trust RepoRescue</p>
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-8 text-gray-100">10,000+</div>
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-between min-h-[160px] group hover:bg-white/[0.02] transition-colors">
             <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-snug w-24">Successful fixes with AI</p>
            </div>
            <div className="text-2xl md:text-3xl font-medium mt-8 text-gray-100">98%</div>
          </div>

        </div>

      </div>
    </div>
  );
}
