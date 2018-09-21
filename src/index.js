class Sorter {
  constructor() {
   this.arr=[];
   this.Comparator=this.numeric;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return (this.arr[index]);
  }

  get length() {
    return(this.arr.length);
  }

  toArray() {
    return(this.arr)
  }


  sort(indices) {
	var arr1=[];
	var arr2=[];
	var arr3=[];
	arr3=this.arr;
	arr1=indices;
	arr1.forEach(function(item,i,arr1){
		arr2.push(arr3[item]);
	});
 	arr1.sort(this.numeric);
	arr2.sort(this.Comparator);
	arr1.forEach(function(item,i,arr1){
		arr3[item]=arr2[i];
	});
	this.arr=arr3;
  }

  setComparator(compareFunction) {
    this.Comparator=compareFunction;
  }

  numeric(a,b) {
  return a-b;
  }
}

module.exports = Sorter;