# EmptyStack

Contributors: Rahul Gannerlla, Alain Licona

The main scope of this project is to get hands on experience learning Angular2. In the span of 48 hours, We focussed on few of the very important aspects of Angular2:

* Use of Directives.
* Use of Components and Classes.
* Use of RestAPI to fetch data from external sources.
* Use of Material Design lite and CSS card styles.
* Lazy-loading.
* Routing.
* Handling larger amounts of data while parsing JSON.
* Observables and Subscribers.


**Emptystack project includes two modules.**

###  1) Search Product

First module directions:

* Enter the keyword you would like to search.

* We aggregate the results from Walmart and eBay using RestAPI.

* You can compare the results with in different entities and choose the item you like.

* We pipe JSON data from Walmart and eBay to data layer in the application.

* The data layer preprocesses the JSON file and pipes to Items directive.

**Coolest part: Items directive can be used any number of items for any number of external sources.**

![Product Search](/src/app//images/1.png)

###  2) Find out the most frequent word used in Google search linked to your Google account.

Second module Directions:

* This module of the application provides information of the most frequent words used in Google search linked to your Google account.

* Enter www.google.com.

* Click Settings > History on the bottom right of the Google.com home page.

* Click on Settings (icon with 3 periods vertically) in the Google Web & App Activity page on the top right.

* Download searches and Unzip the folder.

* Click on upload files below.

* Upload SearchXXXX ---> Searches ----> Searches ----> Upload JSON files.

* Requires an optimized way to handle data if the JSON file size is greater than 5MB.

![Keyword Frequency](/src/app//images/2.png)

###  Credits [ Referenced websites, copied CSS, RestAPI ]

* (https://github.com/IanLunn/Hover) (for tile bounce in effect).
* Sorting JS code from stackoverflow (Copyrights: Nosredna).
* Material Design Lite.
* Walmart and eBay Rest API.
* Google search history.
* Stopwords in keyword frequency from https://www.jasondavies.com/.
* CSS grid tiles - http://alijafarian.com/responsive-image-grids-using-css/.
* https://angular.io/docs/ts/latest/quickstart.html.





