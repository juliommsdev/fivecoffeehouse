import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfigServer } from './app/app.config.server';

/**
 * Bootstrap SSR com contexto
 */
export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, appConfigServer, context);
}
