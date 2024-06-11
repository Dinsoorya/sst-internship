let courses=["html","css","javascript","react","node.js","csharp"];
console.log("original array:"+courses);

//let lastelement=courses.pop();
//console.log("after removed the last elements:"+courses);

//let firstelement=courses.shift();
//console.log("after removed the first element:"+courses);

courses.splice(1,4);
console.log("after removed 2 elements starting from index 1:"+courses);