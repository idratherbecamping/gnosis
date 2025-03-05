import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Add a declaration for the session property
declare module "express-serve-static-core" {
  interface Request {
    session?: {
      userId?: number;
      destroy: (callback: () => void) => void;
    };
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Delete user account endpoint
  app.delete("/api/user/delete", async (req: Request, res: Response) => {
    try {
      // In a real application, you would get the user ID from the session
      // and validate the user's authentication status
      const userId = req.session?.userId;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // You can now access the form data from the request body
      const { name, email, reason } = req.body;
      
      // In a real app, you might want to validate that the provided email
      // matches the one associated with the user's account
      
      // Optionally log the reason for cancellation or store it for analytics
      console.log(`User ${userId} deletion reason: ${reason || "Not provided"}`);

      await storage.deleteUser(userId);
      req.session?.destroy(() => {});

      res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete account" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}