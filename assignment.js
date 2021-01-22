// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

// budgetCalculator
function budgetCalculator(watches, mobile, laptop) {
    var totalBudget = ((50*watches) + (100*mobile) + (500*laptop));
    return totalBudget;
}

//hotelCost
function hotelCost(day) {
    var totalCost;
    if (day > 20){
        var greater20 = day -20;
        totalCost = (greater20*50)+ (100*10)+ (80*10);
    }
    else if(day > 10){
        var greater10 = day - 10;
        totalCost = (greater10*80) + (100*10);
    }
    else if(day<=10){
        totalCost =(day*100);
    }
    return totalCost;   
}
//megaFriend
function megaFriend(name){
	var max="";
	for (var i=0;i<name.length;i++) {
		var container=name[i];
		if (max.length < container.length) {
			max=container;
		}
	}
	return max;
}





