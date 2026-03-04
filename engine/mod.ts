/**
 * Tentacular Engine — Public API
 *
 * This is the module that workflow nodes import from:
 *   import type { Context } from "tentacular";
 */

// Core types for node authors
export type { Context, Logger, NodeFunction, NodeModule } from "./types.ts";

// Execution types (for advanced users)
export type {
  CompiledDAG,
  Edge,
  ExecutionResult,
  NodeSpec,
  Stage,
  Trigger,
  WorkflowSpec,
} from "./types.ts";

// Executor interface (for extending)
export type { NodeRunner, WorkflowExecutor } from "./executor/types.ts";
