
let facts = [
	{
        "funfact": "France covers more time zones than any country on the planet."
    },
    {
        "funfact": "Canada has over three million lakes. That’s 60% of the world’s total."
    },
    {
        "funfact": "New York City is actually further south than Rome is."
    },
    {
        "funfact": "Russia is bigger than Pluto."
    },
    {
        "funfact": "Papua New Guinea has over 820 languages listed as being spoken in its country."
    },
    {
        "funfact": "99% of Libya is covered in desert."
    },
    {
        "funfact": "Finland has almost 180,000 islands. More than any country on earth."
    },
    {
        "funfact": "San Marino has more cars in its country than people."
    },
    {
        "funfact": "Only 4% of all the world’s languages are spoken by 96% of its population."
    },
    {
        "funfact": "In the 60 odd seconds you’ve been reading this article, 56 pieces of luggage have been lost, over 2174 people have arrived in a foreign country, and a quarter of a million dollars has been spent by Americans abroad."
    },
    {
        "funfact": "The Isle of Sark, in between England and France, doesn't have street lamps, cars, or outdoor lighting."
    },
    {
        "funfact": "There is a town in Norway just called A."
    },
    {
        "funfact": "There is actually no land on the North Pole, only ice on top of the sea."
    },
    {
        "funfact": "Every penny thrown into Rome’s Trevi Fountain is collected every day and donated to a number of charities."
    },
    {
        "funfact": "Iran is home to the second oldest tree on earth, it is 4000-years-old."
    },
    {
        "funfact": "The city of Monaco is smaller in size than Central Park in New York City."
    },
    ];

	function newFact () {
	let randomQuote = Math.floor((Math.random() * facts.length));

    document.getElementById("travelQuotes").innerHTML = facts[randomQuote].funfact;
	}

	document.getElementById("getfacts").addEventListener("click", newFact);
