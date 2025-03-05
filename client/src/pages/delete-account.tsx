import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DeleteAccount() {
  const [isPending, setIsPending] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: ""
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Show confirmation step
    setShowConfirmation(true);
  };

  const handleDelete = async () => {
    try {
      setIsPending(true);
      
      // Create email body with account deletion request
      const emailSubject = `Account Deletion Request - ${formData.name}`;
      const emailBody = `Hello Gnosis Team,

I would like to request the deletion of my account.

Name: ${formData.name}
Email: ${formData.email}
${formData.reason ? `Reason for cancellation: ${formData.reason}` : ''}

Please process this request at your earliest convenience.

Thank you,
${formData.name}`;

      // Open email client with pre-filled email
      window.location.href = `mailto:support@gnosispod.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      toast({
        title: "Email Client Opening",
        description: "We're opening your email client to send the account deletion request.",
      });
      
      // Redirect after a short delay to allow the toast to be seen
      setTimeout(() => {
        setLocation("/");
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please email us directly at support@gnosispod.com",
        variant: "destructive",
      });
    } finally {
      setIsPending(false);
    }
  };

  if (showConfirmation) {
    return (
      <div className="container mx-auto py-12">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Confirm Account Deletion Request</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              We'll open your email client to send an account deletion request to our support team. They will process your request within 48 hours.
            </p>
            <div className="flex gap-4">
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={isPending}
              >
                {isPending ? "Opening Email..." : "Send Deletion Request"}
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowConfirmation(false)}
                disabled={isPending}
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Request Account Deletion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Please provide the following information to request account deletion:
          </p>
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Used to Signup *</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Cancellation (Optional)</Label>
              <Textarea 
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button
                type="submit"
                variant="destructive"
                disabled={isPending}
              >
                Continue
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setLocation("/")}
                disabled={isPending}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
