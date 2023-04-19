const {override} = require("customize-cra");
const {aliasDangerous, configPaths} = require( "react-app-rewire-alias/lib/aliasDangerous");


module.export = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
}