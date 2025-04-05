import { ReactNode } from 'react';

interface PaperTextureProps {
  children: ReactNode;
  className?: string;
  darker?: boolean;
}

export default function PaperTexture({ 
  children, 
  className = '',
  darker = false,
}: PaperTextureProps) {
  return (
    <div className={`${darker ? 'paper-texture-dark' : 'paper-texture'} ${className}`}>
      {children}
    </div>
  );
}