class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    debugger
  }


  yearsExperienceFromBeginningOf(endDate) {
      let date = this.startDate.getFullYear();
      return endDate - date;
  }


}
