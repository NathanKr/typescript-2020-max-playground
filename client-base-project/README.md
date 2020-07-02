<h2>setup</h2>
<ul>
<li>this is more advanced setup</li>
<li>use : tsc --init to create tsconfig.json file</li>
<li>compile all -> simply run :  tsc </li>
<li>compile all and watch code change -> simply run :  tsc -w</li>
<li>lite-server is installed so simply rum : npm start which invoke server on localhost:3000 and render index.html which uses app.js (it is not a must to use lite-server)
<li>uncomment and change "sourceMap": true to debug typescript file</li> 
<li>uncomment and change "outDir": "./dist" so all compiled js files will be stored in dist directory. and change index.html to point to this"</li>
<li>uncomment and change "rootDir": "./src" and put all ts file here so the compiler will only look here</li>
<li>uncomment and change "noEmitOnError" : true so no js files will be created on compile error</li>
</ul>
