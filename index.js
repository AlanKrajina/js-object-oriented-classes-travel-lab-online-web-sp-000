class Driver {
  constructor(name, day) {
    this.name = name;
    this.day = day;
  }

  startDate() {
    let d = new Date();
    return d.getDate();
  }
}
