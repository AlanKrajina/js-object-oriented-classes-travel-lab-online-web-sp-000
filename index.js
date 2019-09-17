class Driver {
  constructor(name, day) {
    this.name = name;
    this.day = day;
  }

  startDate() {
    var d = new Date();
    return d.getDate();
  }
}
