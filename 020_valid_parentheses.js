let brackets = {};
brackets[')'] = '(';
brackets[']'] = '[';
brackets['}'] = '{';

const isValidParentheses = function (str) {
    let stack = [];
    for (const char of str ) {
        const open = brackets[char];
        if (open) {
             if (stack.pop() !== open) {
                 /**
                  * The last element of stack must be open and match closed type
                  */
                 return false;
             }
        } else {
            /**
             * If open bracket, add to stack
             */
            stack.push(char);
        }
    }

    return stack.length <= 0;

};

const str = '{[]}';

const result = isValidParentheses(str);

console.log(result.toString());
