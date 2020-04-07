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
  "duration": 7303752779,
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
  "duration": 1317890654,
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
  "duration": 11230639085,
  "status": "passed"
});
formatter.after({
  "duration": 286435694,
  "status": "passed"
});
formatter.before({
  "duration": 4143446828,
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
  "duration": 997047917,
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
  "duration": 2582017932,
  "status": "passed"
});
formatter.after({
  "duration": 312540257,
  "status": "passed"
});
});