import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PaperTextureProps {
  children: ReactNode;
  className?: string;
  darker?: boolean;
}

export default function PaperTexture({ 
  children, 
  className, 
  darker = false 
}: PaperTextureProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        darker ? "paper-texture-dark" : "paper-texture",
        className
      )}
    >
      {children}
    </div>
  );
}