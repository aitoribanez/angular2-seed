import { AppComponent } from './app.component';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { encode,decode } from '../node_modules/uuid-base64/index.js';

var id = encode('a14a9df2-8e0d-42ef-8075-5c38b0f93c03');
var dec = decode(id);

console.log(id)
console.log(dec)
console.log("a")


bootstrap(AppComponent);

