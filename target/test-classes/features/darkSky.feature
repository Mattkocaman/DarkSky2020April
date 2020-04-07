@web

    Feature: Verify DarkSky

      Background:
        Given I am on DarkSky Detroit page


        @timeline
        Scenario: Verify timeline is correct
          Then I verify hours ere displayed with 2 hour increment

       @temperature
        Scenario: Verify temperature is correct
         Then I verify highest and lowest temperature matches