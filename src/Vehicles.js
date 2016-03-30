class car{
  drive()
  {
    console.log('Car is Driving');
  }
}

class buss extends car{
  drive(){
    super.drive();
  }
}