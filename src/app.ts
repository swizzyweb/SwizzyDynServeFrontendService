import {
  IRunProps,
  IRunResult,
  IWebService,
  WebService,
} from "@swizzyweb/swizzy-web-service";
import { router, setProp } from "./routers/index-router";
import { getPackageJson } from "@swizzyweb/swizzy-common";
export class SwizzyDynServeFrontendWebService extends WebService {
  name = "SwizzyDynServeFrontentWebService";

  constructor(props: any) {
    super({ ...props, routers: [router] });
    setProp("logger", props.logger);
  }

  // install(props: IRunProps): Promise<IRunResult> {
  //     const { app } = props;

  //     // install middleware
  //     this.installMiddleware(app);
  //     this.installRouters(app);
  //     // install routers

  //     return Promise.resolve({

  //     });
  // }

  // private installMiddleware(app: Application) {

  // }

  // private installRouters(app: Application) {
  //     app.use(router);
  // }

  // uninstall(props: IRunProps): Promise<any> {
  //     const { app } = props;
  //     this.uninstallRouters(app)
  //     return Promise.resolve();
  // }

  // private uninstallRouters(app: Application) {

  // }
}

export function getWebservice(props: any): IWebService {
  const packageJson = getPackageJson(1);
  const packageName = packageJson.name;
  return new SwizzyDynServeFrontendWebService({
    ...props,
    ...props.serviceArgs,
    packageName,
  });
}

export const routers = [router];
