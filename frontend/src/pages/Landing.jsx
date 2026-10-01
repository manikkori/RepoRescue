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
  Users,
  ShieldCheck,
  ArrowRight
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
    <div className="min-h-screen bg-[#11141d] font-sans selection:bg-teal-500/30 flex flex-col text-white relative overflow-x-hidden">
      
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
            className="w-8 h-8 rounded shadow-sm object-contain bg-white/10 p-1"
          />
          <span className="font-semibold text-lg tracking-wide text-gray-200">RepoRescue</span>
        </div>

        {/* Links */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex items-center px-6 lg:px-8 py-4 lg:py-5 gap-8 lg:gap-12 text-sm text-gray-400">
          <a href="https://github.com/manikkori" className="flex items-center gap-2 hover:text-white transition-colors">
            <Menu className="w-4 h-4" /> Source Code
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
            <FileText className="w-4 h-4" /> Documentation
          </a>
        </div>

        {/* Actions */}
        <div className="lg:col-span-3 flex items-center justify-start lg:justify-end px-6 lg:px-8 py-4 lg:py-5">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-6 py-2.5 rounded-lg bg-gradient-to-b from-white/10 to-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium shadow-lg">
                Sign In
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
      <main className="flex-1 relative flex flex-col justify-between p-6 md:p-12 lg:p-16 z-10 max-w-[1600px] mx-auto w-full">
          
          {/* Top Right Floating Card */}
          <div className="self-end w-full max-w-sm p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-2xl mb-12 lg:mb-0 mt-4 lg:mt-0">
            <h3 className="text-lg md:text-xl leading-relaxed text-gray-200 mb-8 font-medium">
              Connect your GitHub & <br className="hidden md:block" /> paste your crash logs. <br className="hidden md:block" /> We'll handle the rest.
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
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-400" />
                </div>
              </div>
              <p className="text-[9px] md:text-[10px] text-gray-500 max-w-[120px] leading-tight text-right">
                Autonomous agent scans architecture instantly
              </p>
            </div>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-auto flex flex-col lg:flex-row items-end justify-between gap-12 w-full pt-12 md:pt-20 lg:pt-24 pb-8 md:pb-16 lg:pb-20">
            
            {/* Left Side: Headline */}
            <div className="max-w-4xl w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] text-gray-400 mb-6 uppercase tracking-wider font-medium">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
                  </span>
                  RepoRescue Agent is Online
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-medium leading-[1.1] tracking-tight text-white mb-6 lg:mb-0">
                  Ship faster. We'll handle <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-700/60 drop-shadow-sm">
                    the crash logs.
                  </span>
                </h1>
            </div>

            {/* Right Side: Description and CTA */}
            <div className="max-w-sm space-y-6 lg:pb-4 w-full">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Paste your production error logs and GitHub repo. Our AI autonomously <strong className="text-white font-medium">clones, reads, and debugs</strong> your codebase in seconds.
                </p>
                <button 
                  onClick={() => navigate("/dashboard")}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] transition-all text-sm font-medium w-full sm:w-auto shadow-lg backdrop-blur-md flex items-center justify-center gap-2"
                >
                  Start Debugging <ArrowRight className="w-4 h-4" />
                </button>
            </div>
          </div>

      </main>

      {/* Features Section (Replaces Stats) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/[0.08] bg-[#090b0f] relative z-20 mt-auto">
        
        <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col min-h-[200px] group hover:bg-white/[0.02] transition-colors">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </div>
            <h3 className="text-sm md:text-base text-gray-200 font-medium">Lightning Fast Fixes</h3>
          </div>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Our AI reads your error logs the second you paste them. No waiting around—get the exact solution you need instantly.
          </p>
        </div>

        <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col min-h-[200px] group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Code2 className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </div>
            <h3 className="text-sm md:text-base text-gray-200 font-medium">Reads Actual Code</h3>
          </div>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            It doesn't just guess blindly. The AI connects to your GitHub, looks at your specific files, and finds out exactly where the mistake is.
          </p>
        </div>

        <div className="p-8 md:p-10 border-b sm:border-b-0 lg:border-r border-white/[0.08] flex flex-col min-h-[200px] group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </div>
            <h3 className="text-sm md:text-base text-gray-200 font-medium">Paste Any Error</h3>
          </div>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Whether your app crashed on Vercel, Render, AWS, or your computer, just copy the raw text and paste it here. We'll handle the rest.
          </p>
        </div>

        <div className="p-8 md:p-10 flex flex-col min-h-[200px] group hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4 mb-6">
            <div className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Terminal className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-teal-400 transition-colors" />
            </div>
            <h3 className="text-sm md:text-base text-gray-200 font-medium">Autonomous Agent</h3>
          </div>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
            Experience the future of debugging. The agent scans your architecture, identifies root causes, and generates the exact fix.
          </p>
        </div>

      </div>

    </div>
  );
}
