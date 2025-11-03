import Terminal from "@/components/terminal/Terminal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden relative bg-slate-950">
      {/* Background PCB image with blur */}
      <div className="absolute inset-0">
        <Image
          src="/pcb.jpg"
          alt="PCB Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 backdrop-blur-md bg-slate-950/60"></div>
      </div>

      {/* Terminal container */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-2 sm:p-4 md:p-8">
        <Terminal />
      </div>
    </div>
  );
}
