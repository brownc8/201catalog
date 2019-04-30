Thank you for purchasing our product
Game Source v1
Developer and User Documentation
Game Source is Property of © Oakmont Technologies 2019

Developer Documentation
Welcome to Game Source v1 created by Oakmont Technologies. This documentation serves to familiarize the concept and tools used to create v1.

								Credits
		Pioneers:
		@Michael Galgoczy
		@Cristion Brown
		@Jake Trapp
		@Keith Meyer
		@Noah Black
		
		Contributors:
		@Mike Stahr
		
		© Oakmont Technologies 2019 

								Tech Stack
---Software and Programs
Microsoft Visual Studio 2017+
ASP.NET

---Languages
[Backend] C#, .NET, mySQL
[Frontend] Bootstrap, CSS, Javascript, HTML

								Software Development Method
Game Source v1 was created using an iterative development process which has taken about two months to complete.

								Key Components
Games are stored inside a database called GameSource which is composed of multiple tables, views and procedures;
 
			Tables:
				Games
				Reviews
				Users
				
			Views:
				vwReviews
				vwGames
				
			Procedures:
				getGames
				getGameByName
				getGameByID
				getUserByID
				getAverageRating
				getReviewsByGame

								Implementation
1. Download project folder
2. Download Gamesource.sql (Database file)
3. Open Oakmont Industries.sln in Microsoft Visual Studio
4. Switch to solution explorer view (view > Solution Explorer)
5. To view project, right click on index.html and select "view in browser"
6. To edit project choose desired file and make changes


User Documenation
Welcome to Game Source v1 created by Oakmont Technologies. This documentation serves to familiarize the concept and tools used to create v1. Please use the user documentation to your advantage and explore the functionality of our system.

								Platform
Desktop Application accessuble on any computer. 

								Requirements:
Computer device capable of accessing an internet network.

								Key Pages
Home
Game Catalog
Login
About
User Page
Administration Page
							
								Authorization Levels
User
Administrator
								
								Key Functionalities
[User]
Search Game on Game Catalog Page
Add Review on Game Page
Purchase Game on Game Page

[Administrator]
Add Review on Game Page
Add Game on Administration Page
Remove Game on Administration Page
Remove Review on Game Page
Remove User on Administration Page
