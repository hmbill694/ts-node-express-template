import { Express, Request, Response } from "express";
import healthCheckRoute from "./healthCheck.route";
function routes(app: Express) {
  healthCheckRoute(app)
}

export default routes;
