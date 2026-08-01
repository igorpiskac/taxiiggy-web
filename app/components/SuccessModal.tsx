import { motion } from "framer-motion";
type ModalStatus = "sending" | "opening" | "ready";

type Props = {
  open: boolean;
  status: ModalStatus;
};

export default function SuccessModal({ open, status }: Props) {
  if (!open) return null;

  return (
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
  className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl"
>

  <motion.div
    initial={{ opacity: 0, scale: 0.92, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{
      duration: 0.45,
      ease: "easeOut"
    }}
    className="mx-6 w-full max-w-md rounded-3xl border border-yellow-400/20 bg-slate-900/95 p-10 text-center shadow-2xl shadow-black/50"
  >

        <motion.div
  initial={{ scale: 0, rotate: -20 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{
    delay: 0.25,
    type: "spring",
    stiffness: 260,
    damping: 14,
  }}
  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-5xl font-bold text-slate-900 shadow-xl shadow-yellow-500/40"
>
  ✓
</motion.div>

        <h2 className="mt-8 text-3xl font-bold text-white">
          Zahtjev uspješno zaprimljen
        </h2>

        <p className="mt-5 leading-8 text-slate-300">
  {status === "sending" &&
    "📧 Rezervacija je uspješno zaprimljena."}

  {status === "opening" &&
    "📱 Otvaramo WhatsApp..."}

  {status === "ready" &&
    "✅ WhatsApp je spreman."}
</p>

        <div className="mt-8">

         <div className="h-2 overflow-hidden rounded-full bg-slate-700">

          <div className="h-full w-full origin-left animate-progress rounded-full bg-yellow-400" />

         </div>

         <p className="mt-3 text-sm text-slate-400">
           Otvaramo WhatsApp...
         </p>

       </div>

        <p className="mt-6 text-sm text-slate-500">
          Hvala što ste odabrali TAXI IGGY.
        </p>

      </motion.div>

    </motion.div>
  );
}