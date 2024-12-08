// @ts-ignore
import { Request, Response, Router } from "@swizzyweb/express";
//import {ejs } from 'ejs';
import path from "path";
import ejs from "ejs";
export const router = Router();

const props: any = { logger: console };

export function setProp(key: string, val: any) {
  props[key] = val;
}

// middleware that is specific to this router
const requestLog = (req: Request, res: Response, next: () => void) => {
  const logger = props.logger;
  logger.info(`${req.ip} ${req.method} ${req.originalUrl}`);
  next();
};

router.use(requestLog);

// define the home page route
router.get("/", async (req: Request, res: Response) => {
  const logger = props.logger;
  const filePath = path.join(__dirname, "/../../views/index.ejs");
  res.send(await ejs.renderFile(filePath));
});

// define the about route
router.get("/toolkit.js", (req: Request, res: Response) => {
  res.sendFile(
    path.join(
      path.dirname(require.resolve("@swizzyweb/browser-toolkit")),
      "./main.js",
    ),
  );
});
router.get("/main.js", (req: Request, res: Response) => {
  res.sendFile(
    path.join(
      path.dirname(require.resolve("@swizzyweb/swizzy-dyn-serve-tool")),
      "./main.js",
    ),
  );
});
