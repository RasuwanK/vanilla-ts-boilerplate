
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value';
  if(element.length === 1) {
    description = 'Got 1 element'; 
  }else if(element.length > 0) {
    description = 'Got ' + element.length;
  }
  
  return [element, description];

}

//console.log(countAndDescribe("Hello world"));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}


