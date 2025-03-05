import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function DeleteAccount() {
  const [isPending, setIsPending] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      setIsPending(true);
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to delete account");

      toast({
        title: "Account Deleted",
        description: "Your account has been successfully deleted.",
      });
      
      setLocation("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Delete Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Are you sure you want to delete your account? This action cannot be undone.
          </p>
          <div className="flex gap-4">
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isPending}
            >
              {isPending ? "Deleting..." : "Delete Account"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              disabled={isPending}
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
