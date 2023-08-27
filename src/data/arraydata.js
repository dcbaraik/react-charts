import { Jsondata } from "../data/jdata";

const originalintensityArray = Jsondata.map(item => item.intensity);
const filteredintensityArray = originalintensityArray.filter(item => item !== "");
const intensityArray = [...new Set(filteredintensityArray)];
intensityArray.sort();
export {intensityArray};

const originalArrayend_year = Jsondata.map(item => item.end_year);
const filteredArrayend_year = originalArrayend_year.filter(item => item !== "");
const end_yearArray = [...new Set(filteredArrayend_year)];
end_yearArray.sort();
export {end_yearArray};

const sectororiginalArray = Jsondata.map(item => item.sector);
const sectorfilteredArray = sectororiginalArray.filter(item => item !== "");
const sectorArray = [...new Set(sectorfilteredArray)];
sectorArray.sort();
export {sectorArray};

const topicoriginalArray = Jsondata.map(item => item.topic);
const topicfilteredArray = topicoriginalArray.filter(item => item !== "");
const topicArray = [...new Set(topicfilteredArray)];
topicArray.sort();
export {topicArray};

const insightoriginalArray = Jsondata.map(item => item.insight);
const insightfilteredArray = insightoriginalArray.filter(item => item !== "");
const insightArray = [...new Set(insightfilteredArray)];
insightArray.sort();
export {insightArray};

const regionoriginalArray = Jsondata.map(item => item.region);
const regionfilteredArray = regionoriginalArray.filter(item => item !== "");
const regionArray = [...new Set(regionfilteredArray)];
regionArray.sort();
export {regionArray};

const start_yearoriginalArray = Jsondata.map(item => item.start_year);
const start_yearfilteredArray = start_yearoriginalArray.filter(item => item !== "");
const start_yearArray = [...new Set(start_yearfilteredArray)];
start_yearArray.sort();
export {start_yearArray};

const impactoriginalArray = Jsondata.map(item => item.impact);
const impactfilteredArray = impactoriginalArray.filter(item => item !== "");
const impactArray = [...new Set(impactfilteredArray)];
impactArray.sort();
export {impactArray};

const countryoriginalArray = Jsondata.map(item => item.country);
const countryfilteredArray = countryoriginalArray.filter(item => item !== "");
const countryArray = [...new Set(countryfilteredArray)];
countryArray.sort();
export {countryArray};

const relevanceoriginalArray = Jsondata.map(item => item.relevance);
const relevancefilteredArray = relevanceoriginalArray.filter(item => item !== "");
const relevanceArray = [...new Set(relevancefilteredArray)];
relevanceArray.sort();
export {relevanceArray};

const pestleoriginalArray = Jsondata.map(item => item.pestle);
const pestlefilteredArray = pestleoriginalArray.filter(item => item !== "");
const pestleArray = [...new Set(pestlefilteredArray)];
pestleArray.sort();
export {pestleArray};

const sourceoriginalArray = Jsondata.map(item => item.source);
const sourcefilteredArray = sourceoriginalArray.filter(item => item !== "");
const sourceArray = [...new Set(sourcefilteredArray)];
sourceArray.sort();
export {sourceArray};

const likelihoodoriginalArray = Jsondata.map(item => item.likelihood);
const likelihoodfilteredArray = likelihoodoriginalArray.filter(item => item !== "");
const likelihoodArray = [...new Set(likelihoodfilteredArray)];
likelihoodArray.sort();
export {likelihoodArray};

