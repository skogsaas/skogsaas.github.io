import { w as writable } from "./singletons.8357046b.js";
import { g as getDefaultExportFromCjs, r as requireHomeyAPI } from "./AthomCloudAPI.7aecdafb.js";
function createApiKey() {
  const { subscribe, set } = writable(localStorage.apikey);
  return {
    subscribe,
    set: (apikey) => {
      localStorage.apikey = apikey;
      set(apikey);
    }
  };
}
const apiKey = createApiKey();
var HomeyAPIExports = requireHomeyAPI();
const HomeyAPI = /* @__PURE__ */ getDefaultExportFromCjs(HomeyAPIExports);
export {
  HomeyAPI as H,
  apiKey as a
};
