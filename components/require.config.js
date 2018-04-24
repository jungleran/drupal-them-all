var components = {
    "packages": [
        {
            "name": "jquery",
            "main": "jquery-built.js"
        },
        {
            "name": "jplayer",
            "main": "jplayer-built.js"
        },
        {
            "name": "select2",
            "main": "select2-built.js"
        },
        {
            "name": "jstree",
            "main": "jstree-built.js"
        }
    ],
    "shim": {
        "jplayer": {
            "deps": [
                "jquery"
            ]
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}