module.exports = {
    "extends": "airbnb",
    "plugins": [
	"react"
	 ],
	 "rules": { 
		 "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		 "no-console":0,
		 "react/no-unescaped-entities": [2, { "forbid": [">", "}"] }],
	 },
	 "globals": {
		"document": false
	  }
}

