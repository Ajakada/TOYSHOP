
function firstItem(){
	var cost = 0, pcost = 0, quantity, property;
	property = document.getElementsByName('radio1');        
      for(i = 0; i < property.length; i++) {
          if(property[i].checked)
          pcost = parseInt(property[i].value);
      }  
  	quantity = parseInt(document.getElementById("quantity1").value);
  	cost = (pcost) * quantity
  	document.getElementById("gross_total1").innerHTML = '$' + cost;
}

function secondItem(){
  var cost = 0, pcost = 0, quantity, property;
  property = document.getElementsByName('radio2');        
      for(i = 0; i < property.length; i++) {
          if(property[i].checked)
          pcost = parseInt(property[i].value);
      }  
    quantity = parseInt(document.getElementById("quantity2").value);
    cost = (pcost) * quantity
    document.getElementById("gross_total2").innerHTML = '$' + cost;
}

function thirdItem(){
  var cost = 0, pcost = 0, quantity, property;
  property = document.getElementsByName('radio3');        
      for(i = 0; i < property.length; i++) {
          if(property[i].checked)
          pcost = parseInt(property[i].value);
      }  
    quantity = parseInt(document.getElementById("quantity3").value);
    cost = (pcost) * quantity
    document.getElementById("gross_total3").innerHTML = '$' + cost;
}

function fourthItem(){
  var cost = 0, pcost = 0, quantity, property;
  property = document.getElementsByName('radio4');        
      for(i = 0; i < property.length; i++) {
          if(property[i].checked)
          pcost = parseInt(property[i].value);
      }  
    quantity = parseInt(document.getElementById("quantity4").value);
    cost = (pcost) * quantity
    document.getElementById("gross_total4").innerHTML = '$' + cost;
}


function getGrandTotal(){
	var total = 0;
  
	var sub_total1 = parseInt(document.getElementById("gross_total1").innerHTML.replace(/\$|,/g, ''));
	var sub_total2 = parseInt(document.getElementById("gross_total2").innerHTML.replace(/\$|,/g, ''));
	var sub_total3 = parseInt(document.getElementById("gross_total3").innerHTML.replace(/\$|,/g, ''));
	var sub_total4 = parseInt(document.getElementById("gross_total4").innerHTML.replace(/\$|,/g, ''));
	total = (sub_total1 + sub_total2 + sub_total3 + sub_total4);
  if (total > 1000){
    total = total - (total * 0.15); 
  }

	document.getElementById("total").innerHTML = '$' + total;

	 if (window.confirm("Your order will cost $" + total + ". Proceed with order?")){
    alert("Thank you. Your order has been received")
  }
  else{
    alert("Order has been cancelled")
  } 

}


