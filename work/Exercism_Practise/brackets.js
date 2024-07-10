const isPaired = (input) => {
    let onlyBracketedInput = input.replace(/[^\[\](){}]/g, '');// negated character set matches any character that is not listed inside the brackets ie: [](){}
    
    let sanitizedInput = /\{\}|\[\]|\(\)/g;// is [or], {or}, (or)
    
    while (sanitizedInput.test(onlyBracketedInput)) 
    {
        onlyBracketedInput = onlyBracketedInput.replace(sanitizedInput, '');
    }
    return onlyBracketedInput.length === 0;
  };
console.log(isPaired('{{123}}'));