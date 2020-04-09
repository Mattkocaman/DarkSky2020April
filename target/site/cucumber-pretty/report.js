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
  "duration": 8563079772,
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
  "duration": 1254668293,
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
  "duration": 8555447899,
  "status": "passed"
});
formatter.after({
  "duration": 269367431,
  "status": "passed"
});
formatter.before({
  "duration": 4186291393,
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
  "duration": 942598173,
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
  "duration": 1828660734,
  "status": "passed"
});
formatter.after({
  "duration": 220017060,
  "status": "passed"
});
});