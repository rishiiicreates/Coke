import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import PaperTexture from "@/components/ui/PaperTexture";
import FloatingAnimation from "@/components/ui/FloatingAnimation";
import BubbleAnimation from "@/components/ui/BubbleAnimation";

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
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-[#E61D2B]" />
              <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600 mb-6">
              Sorry, the page you're looking for doesn't exist.
            </p>
            
            <Link href="/">
              <a className="inline-block bg-[#E61D2B] text-white font-semibold py-2 px-4 rounded hover:bg-[#B5121B] transition-colors">
                Return Home
              </a>
            </Link>
            
            <div className="mt-4 text-xs text-gray-400 text-right">
              made by @rishiicreates
            </div>
          </CardContent>
        </Card>
      </FloatingAnimation>
    </PaperTexture>
  );
}
