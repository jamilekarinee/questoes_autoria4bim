function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
      return obj;
  }
  
  if (Array.isArray(obj)) {
      return obj.map(deepCopy);
  }
  
  const copiedObject = {};
  for (const key in obj) {
      const value = obj[key];
      copiedObject[key] = deepCopy(value);
  }
  return copiedObject;
}

const originalObject = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [1, 2, 3]
};

// Create a deep copy of the object
const newObject = deepCopy(originalObject);

// Log the original and the copied object to show they are separate
console.log('Original:', originalObject);
console.log('Copy:', newObject);