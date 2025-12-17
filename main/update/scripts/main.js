import AssetLoader from "/scripts/classes.js";
import Renderer from "/scripts/classes.js";
async function main(){
try{
var gl = document.getElementById("default-canvas").getContext("webgl2");
var assetLoader = new AssetLoader(null, gl);
await assetLoader.loadLoadingScreen();
await assetLoader.loadAssets();

}catch(e){
  console.error(e);
}
}

     
main();
