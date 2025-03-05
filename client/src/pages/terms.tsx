import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Terms() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
            
            <p className="text-center mb-6">
              Our terms of service outline the rules and guidelines for using Gnosis.
              You can download the full terms of service document below.
            </p>
            
            <Button asChild>
              <a href="/assets/terms_of_use.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Terms of Service
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 