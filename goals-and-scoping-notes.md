#Scoping Goal Iteration
###Features:
- essential to users. Requires the following:
	- Core:
		- User accounts. Requires auth. Google?
		- DB to store users.
		- DB to store grade, result, test variables.
		- DB to store results of tests/grades/results associated with users. Must also link to connect with grade, result, test variables to JOIN successfullly.
		- Link between above DBs.
		- Letter Select Page (start with trouble words)
		- Word List Page
		- Basic word mouth formation/guidance on making letters
		- Word on click --> Provides definition, phoentic spelling, and audio of word being said.


###Dev Process:
- TDD/BDD
- determine feature scope
- build DB structure
- basic layout/balsamiq preview
- flow chart/swim lanes of various routes needed.


####Basic Card Layout & Structure
- modal holding content called upon click. Click function needed.
	- Lists Word (angular pulls from page click)
	- Lists phoentic spelling (angular displays from API call results)
	- lists definition (angular displays from API call results)
	- shows playing option (pulls from API)
	- shows picture (pulls from imgur API) -> Risky clicks
	
	
	
####Constructor Idea
Words all have: trouble letter, trouble letter location, starting letter, syllables