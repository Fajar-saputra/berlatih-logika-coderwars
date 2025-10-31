// function anArgument(...args) {
//     const count = args.length;

//     if (count === 0) {
//         return "You didn't give me any arguments.";
//     }

//     const verb = count === 1 ? "it is" : "they are";
//     const noun = count === 1 ? "argument" : "arguments";

//     const quotedArgs = args.map((arg) => `"${arg}"`);

//     let argsString;
//     if (count === 1) {
//         argsString = quotedArgs[0];
//     } else {
//         const initialArgs = quotedArgs.slice(0, -1).join(", ");
//         const lastArg = quotedArgs[quotedArgs.length - 1];
//         argsString = `${initialArgs} and ${lastArg}`;
//     }

//     return `You gave me ${count} ${noun} and ${verb} ${argsString}.`;
// }


function anArgument(...args) {
  const n = args.length;
  if( !n ) return 'You didn\'t give me any arguments.';
  if( n === 1 ) return `You gave me 1 argument and it is "${args[0]}".`;
  return `You gave me ${n} arguments and they are "${args.slice(0, n - 1).join('", "')}" and "${args[n - 1]}".`;
}
