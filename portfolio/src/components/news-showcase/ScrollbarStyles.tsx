"use client"

export function ScrollbarStyles() {
  return (
    <style jsx>{`
      .custom-scrollbar::-webkit-scrollbar {
        height: 6px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: #cbd5e1;
        border-radius: 3px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: #94a3b8;
      }
      .scrollbar-hidden::-webkit-scrollbar {
        height: 0px;
        background: transparent;
      }
      .scrollbar-hidden::-webkit-scrollbar-thumb {
        background: transparent;
      }
      .scrollbar-hidden::-webkit-scrollbar-track {
        background: transparent;
      }
    `}</style>
  )
}
