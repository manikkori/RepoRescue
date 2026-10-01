import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Terminal,
  Code2,
  Zap,
  ShieldCheck,
  FileText,
  ChevronRight,
} from "lucide-react";
import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

export function Docs() {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();
  const [activeTab, setActiveTab] = useState("quickstart");

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
        activeTab === id
          ? "bg-teal-500/10 text-teal-400 font-medium"
          : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.03]"
      }`}
    >
      {label}
      {activeTab === id && <ChevronRight className="w-3.5 h-3.5" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#11141d] font-sans selection:bg-teal-500/30 text-white flex flex-col relative overflow-x-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-white/[0.08] bg-[#11141d]/80 backdrop-blur-md relative z-30 px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => navigate("/")}
            className="p-2 hover:bg-white/[0.05] rounded-xl transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="h-6 w-px bg-white/10 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <img
              src="/image.png"
              alt="Logo"
              className="w-8 h-8 rounded shadow-sm object-contain bg-white/10 p-1"
            />
            <span className="font-semibold text-lg tracking-wide text-gray-200 hidden md:block">
              RepoRescue <span className="text-gray-500 font-normal">Docs</span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-medium">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500/20 transition-all text-sm font-medium mr-2"
            >
              Dashboard
            </button>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8 border border-white/10",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>

      <div className="flex-1 flex max-w-[1600px] mx-auto w-full relative z-10">
        {/* Sidebar */}
        <aside className="hidden md:block w-72 border-r border-white/[0.08] py-8 pr-6 pl-6 lg:pl-8 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search docs..."
                className="w-full bg-[#090b0f]/50 border border-white/[0.08] rounded-xl pl-9 pr-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Getting Started
              </h4>
              <div className="space-y-1">
                <NavItem id="introduction" label="Introduction" />
                <NavItem id="quickstart" label="Quick Start Guide" />
                <NavItem id="architecture" label="How it Works" />
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Core Features
              </h4>
              <div className="space-y-1">
                <NavItem id="github" label="GitHub Integration" />
                <NavItem id="agent" label="Autonomous Debugging" />
                <NavItem id="security" label="Privacy & Security" />
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                Resources
              </h4>
              <div className="space-y-1">
                <NavItem id="faq" label="FAQ" />
                <NavItem id="api" label="API Reference" />
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 py-8 md:py-12 px-6 md:px-12 lg:px-20 max-w-4xl w-full pb-32">
          {activeTab === "quickstart" && (
            <div className="animate-fade-in space-y-8">
              <div className="space-y-4 border-b border-white/[0.08] pb-8">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs text-teal-400 font-medium">
                  <Zap className="w-3.5 h-3.5" /> Getting Started
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Quick Start Guide
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Learn how to debug your first production crash in under 2
                  minutes using RepoRescue.
                </p>
              </div>

              <div className="space-y-12">
                <section className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-200 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono">
                      1
                    </span>
                    Access the Dashboard
                  </h2>
                  <p className="text-gray-400 leading-relaxed pl-9">
                    Navigate to the{" "}
                    <span className="text-white font-medium">Dashboard</span>{" "}
                    from the top navigation bar. You'll need to sign in with
                    your GitHub or Email account to access the agent workspace.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-200 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono">
                      2
                    </span>
                    Provide Repository URL
                  </h2>
                  <p className="text-gray-400 leading-relaxed pl-9">
                    Paste the public URL of the GitHub repository where the
                    error occurred. The AI agent needs this to understand your
                    codebase architecture.
                  </p>
                  <div className="pl-9 mt-4">
                    <div className="bg-[#090b0f] border border-white/[0.08] rounded-xl p-4 font-mono text-sm text-gray-300 shadow-inner">
                      https://github.com/yourusername/your-broken-app
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-200 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-mono">
                      3
                    </span>
                    Paste the Crash Log
                  </h2>
                  <p className="text-gray-400 leading-relaxed pl-9">
                    Copy the raw stack trace or error output from your hosting
                    provider (Vercel, AWS, terminal) and paste it into the error
                    log field.
                  </p>
                  <div className="pl-9 mt-4">
                    <div className="bg-[#090b0f] border border-white/[0.08] rounded-xl p-4 font-mono text-sm shadow-inner relative group">
                      <span className="text-red-400">ReferenceError:</span>{" "}
                      <span className="text-gray-300">
                        express is not defined
                      </span>
                      <br />
                      <span className="text-gray-500">
                        {" "}
                        at Object.&lt;anonymous&gt; (/app/src/index.js:5:14)
                      </span>
                      <br />
                      <span className="text-gray-500">
                        {" "}
                        at Module._compile
                        (node:internal/modules/cjs/loader:1254:14)
                      </span>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-medium text-gray-200 flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30 text-xs font-mono">
                      4
                    </span>
                    Execute the Agent
                  </h2>
                  <p className="text-gray-400 leading-relaxed pl-9">
                    Click{" "}
                    <strong className="text-teal-400 font-medium">
                      Start Investigation
                    </strong>
                    . The RepoRescue agent will automatically clone your repo,
                    trace the files mentioned in the log, identify the root
                    cause, and output the exact code fix required.
                  </p>
                </section>
              </div>
            </div>
          )}

          {activeTab === "introduction" && (
            <div className="animate-fade-in space-y-6">
              <div className="space-y-4 border-b border-white/[0.08] pb-8">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  Introduction to RepoRescue
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                  The world's fastest autonomous debugging platform for modern
                  engineering teams.
                </p>
              </div>
              <div className="pt-4 space-y-6 text-gray-400">
                <p className="leading-relaxed text-lg">
                  Software crashes are inevitable, but spending hours reading
                  stack traces and digging through files to find the missing
                  variable shouldn't be.
                  <strong className="text-white font-medium">
                    {" "}
                    RepoRescue
                  </strong>{" "}
                  was built to automate the most tedious part of a developer's
                  workflow: Root Cause Analysis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                  <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl">
                    <Code2 className="w-6 h-6 text-teal-400 mb-4" />
                    <h3 className="text-white font-medium mb-2">
                      Reads Code Context
                    </h3>
                    <p className="text-sm">
                      Unlike ChatGPT, RepoRescue reads your actual repository
                      files to understand the context of the error before
                      suggesting a fix.
                    </p>
                  </div>
                  <div className="bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl">
                    <Terminal className="w-6 h-6 text-blue-400 mb-4" />
                    <h3 className="text-white font-medium mb-2">
                      Zero Configuration
                    </h3>
                    <p className="text-sm">
                      No SDKs to install. No agents to run locally. Just paste
                      your repository URL and your crash log into the web UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== "quickstart" && activeTab !== "introduction" && (
            <div className="animate-fade-in flex flex-col items-center justify-center py-20 text-center space-y-4 border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
              <FileText className="w-12 h-12 text-gray-600 mb-2" />
              <h2 className="text-xl font-medium text-gray-300">
                Documentation in Progress
              </h2>
              <p className="text-gray-500 max-w-md">
                We are currently writing the documentation for the{" "}
                <strong className="text-gray-300">{activeTab}</strong> section.
                Check back soon for updates!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
