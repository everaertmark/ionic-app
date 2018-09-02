import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { MarkService } from '../pages/mark/mark.service';

platformBrowserDynamic().bootstrapModule(AppModule);
