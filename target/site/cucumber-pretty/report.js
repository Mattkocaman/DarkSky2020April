$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darkSky.feature");
formatter.feature({
  "line": 3,
  "name": "Verify DarkSky",
  "description": "",
  "id": "verify-darksky",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 7453262115,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Detroit page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Detroit",
      "offset": 16
    }
  ],
  "location": "DarkSkySD.setup(String)"
});
formatter.result({
  "duration": 1166388338,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify timeline is correct",
  "description": "",
  "id": "verify-darksky;verify-timeline-is-correct",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@timeline"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I verify hours ere displayed with 2 hour increment",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 34
    }
  ],
  "location": "DarkSkySD.verifyTimeLine(int)"
});
formatter.result({
  "duration": 8967342739,
  "status": "passed"
});
formatter.after({
  "duration": 305333027,
  "status": "passed"
});
formatter.before({
  "duration": 3578237591,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky Detroit page",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "Detroit",
      "offset": 16
    }
  ],
  "location": "DarkSkySD.setup(String)"
});
formatter.result({
  "duration": 925800391,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify temperature is correct",
  "description": "",
  "id": "verify-darksky;verify-temperature-is-correct",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@temperature"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I verify highest and lowest temperature matches",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.verifyTemperature()"
});
formatter.result({
  "duration": 1556344516,
  "status": "passed"
});
formatter.after({
  "duration": 203780202,
  "status": "passed"
});
});