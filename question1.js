
// Input: s = "()" Output: true

// Input: s = "[]({})" Output: true

// Input: s = "{]}" Output: false

function brackets(s){
   
    const stack = [];
    for(let i =0; i<s.length; i++){
    if (s[i] === "(" ||s[i] === "{" ||s[i] === "[") {
        stack.push(s[i])
    }
    else {
        if (stack.length > 0 &&
            ((stack[stack.length - 1] === "(" && s[i] === ")") ||
            (stack[stack.length - 1] === "{" && s[i] === "}") ||
            (stack[stack.length - 1] === "[" && s[i] === "]"))) {
                stack.pop();
            } else {
                return false;
            }
        }   
    }
    return stack.length === 0;
}

// const s = "[]({})"
// const s = "()"
const s = "{]}"
console.log(brackets(s) ? "true" : "false");