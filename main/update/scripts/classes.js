
	export class AssetLoader{
	constructor(baseUrl, gl){
	this._baseUrl = baseUrl || "";
  this._loadingProgress = 0;
  this._loadingTotal = 0;
  this._loadingDone = 0;
  this._isLoading = false;
  this._loadingFail = false;
  this._sources;
  this._assets = [];
  this._gl = gl;
	}
	async loadLoadingScreen(){
    try{
	var url = this._baseUrl + "/assets/loadingScreen.json"
  var loadingScreenObject = JSON.parse(await fetch(url).text());
  var globalProperties = {};
  await loadingScreenObject.init(this._gl);
 loadingScreenObject.load(this._gl);

    }catch(e){
      console.error(e);
     return false;
    }
return true;
}
  

	
	async loadAssetList(){
    
	this._sources = JSON.parse(await fetch(this._baseUrl + "/src/src.json").text());
    this._loadingTotal = this._sources.assets.length;
    
	}
  async loadAssets(){
    this._isloading = true;
    try{
await this.loadAssetList();
for(let i = 0;i<this._loadingTotal;i++){
  this._assets[i] = await sources.loadAsset(sources.assets[i]);
}
    }catch(e){

    }
  }
 async finishLoading(){
return new Promise((resolve, reject) => {


function checkCondition() {
if (this._loadingProgress = 1) {
resolve(); // Condition is true, resolve the Promise
} else if (this._loadingFail) {
reject(new Error('Timeout waiting for condition')); // Timeout reached
} else {
// Not true yet and no timeout, re-check after an interval
setTimeout(checkCondition, 100);
}
}

checkCondition(); // Initial check
})
 }
waitUntilLoading() {
return new Promise((resolve, reject) => {
const startTime = Date.now();

function checkCondition() {
if (this._isLoading) {
resolve(); // Condition is true, resolve the Promise
} else if (this._loadingFail) {
reject(new Error('Timeout waiting for condition')); // Timeout reached
} else {
// Not true yet and no timeout, re-check after an interval
setTimeout(checkCondition, 75);
}
}

checkCondition(); // Initial check
})
}
	}
