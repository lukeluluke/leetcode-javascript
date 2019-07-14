const generateParenthesis = function(n) {
    let res = [] ;
    let temRes = '';
    let left = 0;
    let right = 0;
    let level = n;
    helper(temRes, left, right, level, res);
    return res
};

function helper(temRes, left, right, level, res) {
    if (left > level || right > left)
        return;
    if (left === right && level * 2 === temRes.length) {
        console.log(temRes + ' | left ' + left + ' | ' + right);
        res.push( temRes );
        return;
    }

    helper(temRes + '(', left + 1, right, level, res);
    helper(temRes + ')', left, right + 1, level, res);
}

console.log(generateParenthesis(3));
