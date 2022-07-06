function deFront(str){
    if(str.length==2 && str[0]=='a' && str[1]=='b'){
      return 'ab';
    }
    else if(str[0]=='a' && str[1]=='b'){
      return str;
    }
    else if(str[0]=='a'){
      return str[0]+str.slice(2);
    }
    else if(str[1]=='b'){
      return str[1]+str.slice(2);
    }
    else{
      return str.slice(2);
    }
}

console.log(deFront('Hello'));
console.log(deFront('java'));
console.log(deFront('away'));