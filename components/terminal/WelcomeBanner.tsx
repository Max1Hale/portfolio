export default function WelcomeBanner() {
  return (
    <div className="animate-slide-up">
      <pre
        className="mb-4 text-blue-400"
        style={{
          fontFamily: "inherit",
          letterSpacing: "0",
          lineHeight: "1.2",
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
        }}
      >{`██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗
██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝`}</pre>

      <div className="text-gray-300 mb-4 leading-relaxed">
        I am an Engineering Co‑Founder and full‑stack developer who loves
        building things that work and solving tough problems through code.
      </div>

      <div className="text-gray-400 text-sm">
        Type <span className="text-blue-400 font-semibold">'help'</span> for
        available commands.
      </div>
    </div>
  );
}
