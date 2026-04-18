"use client";

import React, { useRef, useEffect } from 'react';

// Log attribution for educational use
const logAttribution = () => {
  console.log(
    "%c Crafted by Prathamesh Naidu %c https://github.com/prathameshnaidu ",
    "color: white; background: #000; padding: 5px 10px; border-radius: 4px; font-weight: bold;",
    "color: #888; background: transparent; padding: 5px;"
  );
};
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { 
  AppWindow, 
  Terminal, 
  MessageSquare, 
  Music, 
  Settings, 
  Folder, 
  Github, 
  Twitter,
  LucideIcon 
} from 'lucide-react';

interface DockItemData {
  icon: LucideIcon;
  label: string;
  href: string;
  external?: boolean;
}

interface SeparatorItem {
  type: "separator";
}

type DockItem = DockItemData | SeparatorItem;

// Generic Demo Items
const DOCK_ITEMS: DockItem[] = [
  { icon: AppWindow, label: "Finder", href: "#" },
  { icon: MessageSquare, label: "Messages", href: "#" },
  { icon: Music, label: "Music", href: "#" },
  { icon: Terminal, label: "Terminal", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { type: "separator" },
  { icon: Folder, label: "Downloads", href: "#" },
  { icon: Github, label: "GitHub", href: "https://github.com", external: true },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", external: true },
];

interface DockIconProps {
  mouseX: MotionValue<number>;
  item: DockItemData;
}

const DockIcon: React.FC<DockIconProps> = ({ mouseX, item }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Map distance to width: Icon grows when cursor is close
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 85, 40]);
  
  // Add spring physics for fluid motion
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noreferrer" : undefined}
      style={{ width, height: width }}
      className="group relative flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
    >
      <motion.div className="flex items-center justify-center w-full h-full">
         <Icon className="h-1/2 w-1/2" />
      </motion.div>
      
      {/* Tooltip */}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900/90 border border-white/10 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 backdrop-blur-sm shadow-xl">
        {item.label}
      </span>
      
      {/* Active Indicator Dot (Visual Polish) */}
      <div className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.a>
  );
};

export const Dock: React.FC = () => {
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    logAttribution();
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        <span className="text-[10px] text-neutral-600 font-bold tracking-[0.4em] pointer-events-none uppercase bg-white/5 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm shadow-lg">
          Crafted by Prathamesh Naidu
        </span>
        <motion.div
          onMouseMove={(e: React.MouseEvent) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="pointer-events-auto flex items-end gap-3 rounded-2xl border border-white/10 bg-neutral-900/40 px-3 pb-3 pt-2 backdrop-blur-2xl shadow-2xl shadow-black/50"
          style={{ height: 'auto' }}
        >
          {DOCK_ITEMS.map((item, idx) => {
            if ('type' in item && item.type === "separator") {
              return <div key={idx} className="h-10 w-[1px] bg-white/10 mx-1 mb-0.5 self-center"></div>;
            }
            
            return <DockIcon key={idx} mouseX={mouseX} item={item as DockItemData} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};