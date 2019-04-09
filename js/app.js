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
