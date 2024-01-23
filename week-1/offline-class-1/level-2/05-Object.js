// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);

  // console.log(obj);
  // let newObj2 = obj;
  // // newObj2 = { ...newObj2, deepu: "deepanshu" }
  // newObj2.deepu = "deepanshu";
  // console.log(newObj2);
  // console.log(obj);

  // let arr1 = [2, 2, 3];
  // let arr2 = arr1;
  // arr2.push(7);
  // console.log(arr1);
  // // console.log(arr1);
  // console.log(arr2);
  // arr1.push(18)
  // console.log(arr1);
  // // console.log(arr1);
  // console.log(arr2);

}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
