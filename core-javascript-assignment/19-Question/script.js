//19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

'use strict';
import  {countries} from './countries.js';
import { webStacks } from './web_stacks.js';
console.log(`The countries are ${countries}`);
console.log(`The webStacks are ${webStacks}`);