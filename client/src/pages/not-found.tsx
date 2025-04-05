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
              <div className="relative">
                <div 
                  className="absolute inset-0 bg-[#1DA1F2] opacity-10 rounded-lg"
                  style={{ animation: "pulse-border 3s infinite ease-in-out" }}
                ></div>
                <a 
                  href="https://twitter.com/rishiicreates" 
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[#1DA1F2] relative z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-[#1DA1F2] p-1.5 rounded-full shadow-sm">
                    <TwitterIcon />
                  </div>
                  <span 
                    className="coca-cola-font font-bold text-xl text-[#E61D2B]"
                    style={{ 
                      textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                      letterSpacing: "0.5px" 
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
