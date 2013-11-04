
// 'use strict';
// // BLOCKING REQUEST
// var load_json = function(url) {
// 	var request = new XMLHttpRequest();
// 	request.open('GET', url, false);
// 	request.send(null);
 
// 	if (request.status === 200) {
// 		// console.log(request.responseText);
// 		return request.responseText;
// 	}
// };

// var render_dogs = function(dogs_json) {
// 	var json_length,
// 			dog,
// 			dog_list,
// 			i = 0;
// 	json_length = dogs_json.length;
// 	dog_list = document.getElementById('dog-list');
// 	for(;i < json_length;) {
// 		dog = dogs_json[i];
// 		dog_list.innerHTML += ('<li>' + dog.name + '</li>');
// 		i = i + 1;
// 	}
// };

// var async_load_json = function(url) {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onload = function(e) {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         var parsed_json = JSON.parse(xhr.responseText);
//         render_dogs(parsed_json);
//       } else {
//       	console.error(xhr.statusText);
//       }
//     }
//   };
//   xhr.send(null);
// };
 
// async_load_json('/dogs.json');
