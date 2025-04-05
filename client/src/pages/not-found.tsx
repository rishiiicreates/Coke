import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import PaperTexture from "@/components/ui/PaperTexture";
import FloatingAnimation from "@/components/ui/FloatingAnimation";
import BubbleAnimation from "@/components/ui/BubbleAnimation";
import TwitterIcon from "@/components/icons/TwitterIcon";

export default function NotFound() {
  return (
    <PaperTexture className="min-h-screen w-full flex items-center justify-center bg-[#F9F9F9] relative overflow-hidden">
      <BubbleAnimation />
      <FloatingAnimation 
        yOffset={10} 
        rotationOffset={2} 
        duration={4}
      >
        <Card className="w-full max-w-md mx-4 shadow-lg border-none">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2 items-center">
              <AlertCircle className="h-8 w-8 text-[#E61D2B]" />
              <h1 
                className="text-2xl font-bold text-gray-900"
                style={{ 
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)", 
                  letterSpacing: "0.5px" 
                }}
              >
                404 Page Not Found
              </h1>
            </div>

            <p 
              className="mt-4 text-sm text-gray-800 font-medium mb-6"
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.05)" }}
            >
              Sorry, the page you're looking for doesn't exist.
            </p>
            
            <Link href="/">
              <a 
                className="inline-block bg-[#E61D2B] text-white font-semibold py-2 px-6 rounded hover:bg-[#B5121B] transition-colors shadow-lg"
                style={{ 
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)", 
                  letterSpacing: "0.5px",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                Return Home
              </a>
            </Link>
            
            <div className="mt-8 flex justify-end">
              <div 
                className="bg-[#1DA1F2] px-5 py-3 rounded-lg shadow-lg relative overflow-hidden border-2 border-white"
                style={{
                  animation: "pulse-border 2s infinite ease-in-out",
                }}
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
                    animation: "wave 2.5s infinite linear",
                    pointerEvents: "none",
                  }}
                ></div>
                <a 
                  href="https://twitter.com/rishiicreates" 
                  className="flex items-center space-x-3 hover:opacity-95 transition-opacity relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <TwitterIcon />
                  </div>
                  <span 
                    className="coca-cola-font font-bold text-2xl text-white"
                    style={{ 
                      textShadow: "1px 1px 3px rgba(0,0,0,0.3), 0 0 8px rgba(0,0,0,0.2)",
                      letterSpacing: "0.5px",
                      WebkitTextStroke: "0.5px rgba(0,0,0,0.1)"
                    }}
                  >
                    @rishiicreates
                  </span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </FloatingAnimation>
    </PaperTexture>
  );
}
