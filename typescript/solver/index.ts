#!/usr/bin/env node

import "./patch-bigint-buffer-warn.js";

import { chainMetadata } from "./config/chainMetadata.js";
import { log } from "./logger.js";
import { SolverManager } from "./solvers/SolverManager.js";
import { getMultiProvider } from "./solvers/utils.js";

import express, { Request, Response } from "express";

const app = express();
const port = 3000;

const main = async () => {
  const multiProvider = await getMultiProvider(chainMetadata).catch(
    (error) => (log.error(error.reason ?? error.message), process.exit(1)),
  );

  log.info("🙍 Intent Solver 📝");
  log.info("Starting...");

  const solverManager = new SolverManager(multiProvider, log);

  // Handle shutdown gracefully
  process.on("SIGINT", () => {
    log.debug("Received SIGINT signal");
    solverManager.shutdown();
    process.exit(0);
  });

  process.on("SIGTERM", () => {
    log.debug("Received SIGTERM signal");
    solverManager.shutdown();
    process.exit(0);
  });

  try {
    await solverManager.initializeSolvers();
    log.info("All solvers initialized successfully");
  } catch (error) {
    log.error("Failed to initialize solvers:", error);
    process.exit(1);
  }

  app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
      message: "API is running and healthy!",
    });
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};

await main();
