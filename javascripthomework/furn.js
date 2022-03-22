function deliveryFun(g){
	var e = document.getElementById(g);
	e.style.display = 'block';
}

function pickUpFun(g){
	var e = document.getElementById(g);
	e.style.display = 'none'; 
}

function totalPrice(){
		var total = 0.00;
		var shipping = 0.00;
		var itemCost = parseInt(item.value);
		var zipcode = parseInt(zip.value);
		shipping = Math.abs(zipcode-90255) * .1;
		shipping = shipping.toFixed(2); 
		shipping = parseFloat(shipping);
		document.getElementById("itemPrice").innerHTML = "$" + (itemCost);
		document.getElementById("shippingCost").innerHTML = "$" + (shipping);
		total = itemCost + shipping;
		document.getElementById("total").innerHTML = "$" + (total);
}

function showSpecials(){
	var view = document.getElementById("specials");
	if(view.style.display == 'block'){
		view.style.display = 'none';
	}
	else{
		view.style.display = 'block';
	}
}
