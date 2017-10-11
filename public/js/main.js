function showOrHideRemoveButtoon(x){

	var productOnMouse = x.children[3].innerHTML

	var numOfProductN = cart[productOnMouse];
	console.log("number is "+numOfProductN);
	if(numOfProductN == 0){
		x.children[2].setAttribute("style", "display: none;");
	}
	else{
		x.children[2].removeAttribute("style", "display: none;");
	}
}
cart = {
	'Cocktail1' : 0,
	'Cocktail2' : 0,
	'Cocktail3' : 0,
	'Cocktail4' : 0,
	'Cocktail5' : 0,
	'Cocktail6' : 0,
};
function addToCart(productName) {
console.log("!!!");
	// clearInterval(interval);
	// inactiveTime = 3000000;
	// t0 = performance.now();
	// interval = setInterval(function(){ intervalHandler() }, inactiveTime);
	
	if(cart[productName] == undefined){
		cart[productName] = 1;
		console.log( "heheheheh");
	}else{
		cart[productName] = cart[productName] + 1;
	}
	// products[productName]['quantity'] = products[productName]['quantity']  - 1;
console.log(productName+" added!");

	// total = total + products[productName]['price'];
	// document.getElementById('topButton').textContent = "Cart($" + total + ")";
	
	// var table = document.getElementById("modalTable");
	// var rowAlreadyExist = false;
	// for (var c = 0, m = table.rows.length; c < m; c++) {
	// 	if(table.rows[c].cells[0].innerHTML == productName){
	// 		table.rows[c].cells[1].innerHTML = cart[productName];
	// 		table.rows[c].cells[2].innerHTML = cart[productName] * products[productName]['price'];
	// 		rowAlreadyExist = true;
	// 	}
	// }
	
	// if(!rowAlreadyExist){
	// 		var row = table.insertRow(1);
	// 		var cellProduct    = row.insertCell(0);
	// 		var cellQuantity   = row.insertCell(1);
	// 		var cellTotalPrice = row.insertCell(2);
	// 		var cellAddButton  = row.insertCell(3);
	// 		var cellRemvButton = row.insertCell(4);
	// 		cellProduct.innerHTML    = productName;
	// 		cellQuantity.innerHTML   = 1;
	// 		cellTotalPrice.innerHTML = products[productName]['price'];
	// 		var style = 'style=\x27font-size:100px\x27';
	// 		cellAddButton.innerHTML  = '<input type = \x22button\x22 ' + style + ' value = \x22+\x22 onClick = \x22addToCart(\x27' + productName + '\x27)\x22>';
	// 		cellRemvButton.innerHTML = '<input type = \x22button\x22 ' + style + ' value = \x22-\x22 onClick = \x22removeFromCart(\x27' + productName + '\x27)\x22>';
	// }

}