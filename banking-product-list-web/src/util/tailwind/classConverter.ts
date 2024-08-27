const cache = new Map();

export function convertToTailwindClass(obj:any):string {
    const key = JSON.stringify(obj);
    if (cache.has(key)) {
        return cache.get(key);
    }
    const result = Object.values(obj).join(' ');
    cache.set(key, result);
    return result;
}

export function convertObjectArrayToTailwindClass(objectArray:any[]): string {
    return objectArray.reduce((accumulator:any, currentValue:any) => {
        return accumulator + " " + convertObjectArrayToTailwindClass(currentValue)
    }
        
    )
}