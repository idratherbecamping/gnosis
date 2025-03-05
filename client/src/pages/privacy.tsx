import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Privacy() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
            
            <p className="text-center mb-6">
              Our privacy policy outlines how we collect, use, and protect your personal information.
              You can download the full privacy policy document below.
            </p>
            
            <Button asChild>
              <a href="/assets/privacy-policy.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Privacy Policy
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}