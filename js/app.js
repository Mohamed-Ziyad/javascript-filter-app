//filter

(function() {
	//select all button
	const filterBtn = document.querySelectorAll('.filter-btn');
	//console.log(filterBtn);

	filterBtn.forEach(function(btn) {
		btn.addEventListener('click', function(event) {
			//prevent defaul action
			event.preventDefault();

			//dataset for data attribute
			const value = event.target.dataset.filter;
			//console.log(value);

			//select all item
			const items = document.querySelectorAll('.store-item');
			//console.log(items);

			//run a loop for each item
			items.forEach(function(item) {
				//display all
				if (value == 'all') {
					item.style.display = 'block';
				} else {
					if (item.classList.contains(value)) {
						//display item by relevent class
						item.style.display = 'block';
					} else {
						item.style.display = 'none';
					}
				}
			});
		});
	});
})();

//search
(function() {
	//target search box

	const search = document.getElementById('search-item');

	search.addEventListener('keyup', function() {
		let value = search.value.toLowerCase().trim();
		//console.log(value);

		const items = document.querySelectorAll('.store-item');
		items.forEach(function(item) {
			let type = item.dataset.item;
			//console.log(type);
			//console.log(typeof type);

			//includes method check the item avalable which is typed
			//if (type.includes(value)) {
			//	item.style.display = 'block';
			//} else {
			//	item.style.display = 'none';
			//}

			let length = value.length;
			//console.log(length);

			//console.log(value);
			//console.log(match);

			//to select exact item
			let match = type.slice(0, length);
			if (value === match) {
				item.style.display = 'block';
			} else {
				item.style.display = 'none';
			}
		});
	});
})();

//lightbox
(function() {
	//all the imges
	let imageList = [];
	let counter = 0;

	//variable
	const images = document.querySelectorAll('.store-img');
	const container = document.querySelector('.lightbox-container');
	const item = document.querySelector('.lightbox-item');
	const closeIcon = document.querySelector('.lightbox-close');
	const btnLeft = document.querySelector('.btnLeft');
	const btnRight = document.querySelector('.btnRight');

	//add all images to the array with links
	images.forEach(function(img) {
		imageList.push(img.src);
	});
	//console.log(imageList);

	//show model
	images.forEach(function(img) {
		img.addEventListener('click', function(event) {
			//display model
			container.classList.add('show');

			//get source
			let src = event.target.src;
			//console.log(src);

			//get the inder of img
			counter = imageList.indexOf(src);
			//console.log(counter);

			//change the image
			//show model with exact img
			item.style.backgroundImage = `url(${src})`;
		});
	});

	//close model
	closeIcon.addEventListener('click', function() {
		container.classList.remove('show');
	});

	//left button
	btnLeft.addEventListener('click', function() {
		counter--;
		//preventing negative number
		if (counter < 0) {
			counter = imageList.length - 1;
		}
		//getting the image from array
		item.style.backgroundImage = `url(${imageList[counter]})`;
		console.log(counter);
	});

	//right button
	btnRight.addEventListener('click', function() {
		counter++;
		//stop exceeding from array length
		if (counter > imageList.length - 1) {
			counter = 0;
		}
		//getting the image from array
		item.style.backgroundImage = `url(${imageList[counter]})`;
		console.log(counter);
	});
})();
