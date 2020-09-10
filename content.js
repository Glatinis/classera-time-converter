window.onload = (function (request) {
	dates = document.getElementsByClassName("gdate")
	goodDates = []

	times = []
	realDates = []

	for (var date = 0; date < dates.length; date++) {
		if (dates[date].parentElement.nodeName == "TD"){
			times.push(dates[date].innerHTML.split(" ")[1])
			realDates.push(dates[date].innerHTML.split(" ")[0])
			goodDates.push(date)
		}
	}

	for (var time = 0; time < times.length; time++) {
		let hours = parseInt(times[time].split(":")[0])
		let mins = parseInt(times[time].split(":")[1])
		let secs = parseInt(times[time].split(":")[2])

		let amOrPm = hours >= 12 ? 'PM' : 'AM';
		hours = (hours % 12) || 12;

		times[time] = `${hours}:${mins}${amOrPm}`
		// console.log(times[time])
	}
	for (var date = 0; date < goodDates.length; date++) {
		dates[date+1].innerHTML = `${realDates[date]} ${times[date]}`
	}
	// console.log(realDates)
	// console.log(times)
})