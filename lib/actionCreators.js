export default function createActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((argName, idx) => {
      action[argName] = args[idx];
    });

    return action;
  };
}
