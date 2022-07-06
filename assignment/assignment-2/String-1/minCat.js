function minCat(a, b){
    lena=a.length
    lenb=b.length
    lenc=Math.min(lena,lenb)
    return a.slice(lena-lenc,lena)+b.slice(lenb-lenc,lenb)
}

console.log(minCat('Hello', 'Hi'));
console.log(minCat('Hello', 'java'));
console.log(minCat('java', 'Hello'));