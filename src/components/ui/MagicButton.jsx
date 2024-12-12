import React from 'react'

export default function MagicButton({title}) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg w-52 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-semibold text-white backdrop-blur-3xl">
          {title}
        </span>
    </button>
  )
}