import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Delete user account endpoint
  app.delete("/api/user/delete", async (req, res) => {
    try {
      // In a real application, you would get the user ID from the session
      // and validate the user's authentication status
      const userId = req.session?.userId;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

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