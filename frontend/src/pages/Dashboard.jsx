import React, { useState } from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Terminal,
  GitBranch,
  ArrowLeft,
  Zap,
  Cpu
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { investigateBug } from "../services/api";
import { useUser, RedirectToSignIn, UserButton } from "@clerk/clerk-react";

export function Dashboard() {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded } = useUser();

  const [repoUrl, setRepoUrl] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn />;

  const handleInvestigate = async () => {
    if (!repoUrl || !errorLog) {
      setError("Please provide both Repository URL and Error Log.");
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const data = await investigateBug(repoUrl, errorLog);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#11141d] font-sans selection:bg-teal-500/30 flex flex-col text-white relative overflow-x-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <header className="border-b border-white/[0.08] bg-[#11141d]/50 backdrop-blur-md relative z-20 px-6 lg:px-8 py-4 flex items-center justify-between">
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
              RepoRescue
            </span>
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[10px] text-teal-400 uppercase tracking-wider font-medium ml-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
              </span>
              Agent Workspace
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-8 h-8 border border-white/10" } }} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1600px] mx-auto w-full p-4 md:p-6 lg:p-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 h-full">
          
          {/* Config Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex-1">
              <h2 className="text-lg font-medium mb-6 text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-teal-400" /> Target Configuration
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2.5 text-gray-400 flex items-center gap-2">
                    <GitBranch className="w-4 h-4" /> GitHub Repository URL
                  </label>
                  <input
                    type="text"
                    placeholder="https://github.com/username/repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    className="w-full bg-[#090b0f]/50 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all shadow-inner"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2.5 text-gray-400 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> Stack Trace / Crash Log
                  </label>
                  <textarea
                    placeholder="Paste your production error logs here..."
                    value={errorLog}
                    onChange={(e) => setErrorLog(e.target.value)}
                    rows={10}
                    className="w-full bg-[#090b0f]/50 border border-white/[0.08] rounded-xl px-4 py-3.5 text-sm text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all shadow-inner resize-none font-mono"
                  />
                </div>

                <button
                  onClick={handleInvestigate}
                  disabled={loading}
                  className="w-full px-6 py-4 rounded-xl bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 text-teal-400 font-medium transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(20,184,166,0.1)] hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
                >
                  {loading ? (
                    <>
                      <Zap className="w-4 h-4 animate-pulse" /> Initializing Agent...
                    </>
                  ) : (
                    <>
                      <Cpu className="w-4 h-4" /> Start Investigation
                    </>
                  )}
                </button>

                {error && (
                  <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-start gap-3 animate-fade-in">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{error}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="bg-[#090b0f] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex-1 flex flex-col relative overflow-hidden min-h-[600px]">
              
              {/* Subtle grid background for the terminal area */}
              <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dntjnq39e/image/upload/v1703144869/grid_ptq1m1.svg')] bg-center opacity-5 pointer-events-none"></div>

              <h2 className="text-lg font-medium mb-6 text-white flex items-center gap-2.5 relative z-10">
                <Activity className="w-5 h-5 text-blue-400" /> Agent Output
              </h2>

              {!result && !loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-500 space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center mb-2">
                    <Terminal className="w-8 h-8 opacity-40" />
                  </div>
                  <p className="text-sm font-medium">Awaiting investigation parameters...</p>
                  <p className="text-xs opacity-60">Paste your logs and hit start.</p>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 relative z-10">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-white/[0.05] rounded-full"></div>
                    <div className="absolute inset-0 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                    <Cpu className="w-6 h-6 text-teal-500 animate-pulse" />
                  </div>
                  <div className="text-center space-y-3">
                    <p className="text-teal-400 font-medium animate-pulse tracking-wide">
                      Cloning repository & analyzing architecture...
                    </p>
                    <p className="text-xs text-gray-500 font-mono bg-white/[0.03] px-3 py-1.5 rounded-full inline-block border border-white/[0.05]">
                      Tracing node modules and import chains...
                    </p>
                  </div>
                </div>
              )}

              {result && (
                <div className="space-y-8 animate-fade-in flex-1 relative z-10 flex flex-col">
                  {/* Stats Bar */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-mono text-gray-400 bg-white/[0.02] p-4 rounded-xl border border-white/[0.05]">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />{" "}
                      <span className="text-gray-200">{(result.investigationTimeMs / 1000).toFixed(2)}s</span> execution
                    </span>
                    <span className="opacity-20 hidden md:block">|</span>
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-200">{result.filesExamined.length}</span> files read
                    </span>
                    <span className="opacity-20 hidden md:block">|</span>
                    <span className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-200">{result.iterations}</span> loop iterations
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium flex items-center gap-2 text-red-400 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" /> Root Cause Identified
                    </h3>
                    <div className="p-5 bg-red-500/[0.05] border border-red-500/10 rounded-xl">
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {result.rootCause}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium flex items-center gap-2 text-blue-400 uppercase tracking-wider">
                      <Activity className="w-4 h-4" /> Technical Explanation
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed px-1">
                      {result.explanation}
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 mt-auto">
                    <h3 className="text-sm font-medium flex items-center gap-2 text-teal-400 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4" /> Suggested Resolution
                    </h3>
                    <div className="p-5 bg-[#0b0e14] border border-white/[0.05] rounded-xl shadow-inner overflow-x-auto relative group">
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] text-gray-500 font-mono bg-white/[0.05] px-2 py-1 rounded">diff</span>
                      </div>
                      <code className="text-sm text-teal-300 font-mono whitespace-pre-wrap leading-relaxed">
                        {result.suggestedFix}
                      </code>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
