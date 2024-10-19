// @ts-ignore
import {Request, Response, Router } from '@swizzyweb/express';
//import {ejs } from 'ejs';
import path from 'path';
export const router = Router();

// middleware that is specific to this router
const timeLog = (req: Request, res: Response, next: ()=>void) => {
  console.log('Time: ', Date.now())
  next()
}

router.use(timeLog);
//router.set('view engine', 'ejs');

// define the home page route
router.get('/', (req: Request, res:Response) => {
  	console.log("Get browserToolkit");
	req.app.set('view engine', 'ejs');
	req.app.set('views', path.join(require.resolve('@swizzyweb/swizzy-dyn-serve-frontend-web-service'),'/../../views'));
	res.render('index');
});

// define the about route
router.get('/toolkit.js', (req: Request, res: Response) => {
	console.log("Get main.js");
  res.sendFile(path.join(path.dirname(require.resolve('@swizzyweb/browser-toolkit')), './main.js'));
});
router.get('/main.js', (req: Request, res: Response) => {
	res.sendFile(path.join(path.dirname(require.resolve('@swizzyweb/swizzy-dyn-serve-tool')), './main.js'))
});
