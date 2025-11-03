export default function WelcomeBanner() {
  return (
    <div className="animate-slide-up">
      <pre
        className="mb-4 text-blue-400"
        style={{
          fontFamily: "inherit",
          letterSpacing: "0",
          lineHeight: "1.2",
          fontSize: "clamp(6px, 1.5vw, 14px)",
        }}
      >{`███╗   ███╗ █████╗ ██╗  ██╗    ██╗  ██╗ █████╗ ██╗     ███████╗
████╗ ████║██╔══██╗╚██╗██╔╝    ██║  ██║██╔══██╗██║     ██╔════╝
██╔████╔██║███████║ ╚███╔╝     ███████║███████║██║     █████╗
██║╚██╔╝██║██╔══██║ ██╔██╗     ██╔══██║██╔══██║██║     ██╔══╝
██║ ╚═╝ ██║██║  ██║██╔╝ ██╗    ██║  ██║██║  ██║███████╗███████╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝`}</pre>

      <pre
        className="mb-4 text-slate-300"
        style={{
          fontFamily: "inherit",
          letterSpacing: "0",
          lineHeight: "1.2",
          fontSize: "clamp(6px, 1.5vw, 14px)",
        }}
      >{`██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝`}</pre>

      <div className="text-gray-300 mb-4 leading-relaxed text-xs sm:text-sm">
        I am an Engineering Co‑Founder and full‑stack developer who loves
        building things that work and solving tough problems through code.
      </div>

      <div className="text-gray-400 text-xs sm:text-sm">
        Type{" "}
        <span className="text-blue-400 font-semibold">&apos;help&apos;</span>{" "}
        for available commands.
      </div>
    </div>
  );
}
