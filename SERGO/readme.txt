I have implemented the Wikipedia Search http://www-scf.usc.edu/~nidhiprj/Sphere/SphereAssessment.html using the API and bootstrap CSS.

The API fetches 10 titles at 1 time. I have allowed the user to view 2 or 5 titles per page. Also I have implemented the paging feature for navigating between the result pages.

The search can be retrieved on both, hitting the search button or pressing enter. When the number of titles per page is changed, the page will reload.

If the user selects 2 titles per page and then changes the search keyord, the number of titles per page remains 2. This enables the user to not having to change the titles per page each time a new search keyword is entered.

Incase the number if titles fetched from the API increases, my code works well for that too. We can easily change the number of titles per page by just adding a new option in the select tag in the html file. It will not reqiure any changes in the javascript file.

I have added few extra CSS styling just to position the elements properly. It should work well with any screen size.
