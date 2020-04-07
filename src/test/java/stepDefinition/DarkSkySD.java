package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;
import runnerTest.webPages.DarkSky;

public class DarkSkySD {

    private DarkSky darkSky=new DarkSky();

            @Given("^I am on DarkSky (.+) page$")
            public void setup(String city){
                darkSky.setCity(city);
            }

            @Then("^I verify highest and lowest temperature matches$")
            public void verifyTemperature(){
                Assert.assertTrue(darkSky.verifyLowTemp());
                Assert.assertTrue(darkSky.verifyHighTemp());
            }
            @Then("^I verify hours ere displayed with (.+) hour increment$")
            public void verifyTimeLine(int i){

                Assert.assertTrue(darkSky.verifyTimeDifference(i));
            }
}
