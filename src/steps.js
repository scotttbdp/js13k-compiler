'use strict';

const stepMap = {
    'loadFiles': require('./steps/load-files'),
    'parallel': require('./steps/parallel'),
    'sequence': require('./steps/sequence'),
    'log': require('./steps/log'),
    'output': require('./steps/output'),
    'macros': require('./steps/macros'),
    'concat': require('./steps/concat'),
    'mangle': require('./steps/mangle'),
    'es6ify': require('./steps/es6ify'),
    'uglify': require('./steps/uglify'),
    'pack': require('./steps/pack'),
    'zip': require('./steps/zip')
};

function builderFunction(functionName){
    const cls = stepMap[functionName];
    return function(arg){
        return new cls(arg);
    };
}

for(let functionName in stepMap){
    module.exports[functionName] = builderFunction(functionName);
}