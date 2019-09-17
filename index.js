let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
      let date = this.startDate.getFullYear();
      return endDate - date;
  }
}

class Route {
  constructor(beginningLocation , endingLocation) {
    this.beginningLocation  = beginningLocation ;
    this.endingLocation = endingLocation;
  }

  blocksTravelled (endDate) {
      let date = this.startDate.getFullYear();
      return endDate - date;
  }
}
