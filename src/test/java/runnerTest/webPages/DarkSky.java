package runnerTest.webPages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.*;

public class DarkSky extends ElementUtil{

    private By searchBox = By.xpath("//input[@type='text']");
    private By searchButton = By.xpath("//a[@class='searchButton']");
    private By timeline = By.xpath("//div[@id='timeline']//span[@class='hour']");
    private By lowTop = By.xpath("//span[@class='low-temp-text']");
    private By highTop = By.xpath("//span[@class='high-temp-text']");
    private By lowToday = By.xpath("//a[@data-day='0']//span[@class='minTemp']");
    private By highToday = By.xpath("//a[@data-day='0']//span[@class='maxTemp']");

    public void setCity(String value) {
        clear(searchBox);
        sendValue(searchBox,value);
        clickOn(searchButton);
    }

    public boolean verifyLowTemp(){
        try{
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String temp1= getTextFromElement(lowTop);
        String temp2= getTextFromElement(lowToday);
        return temp1.equals(temp2);
    }
    public boolean verifyHighTemp(){
        String temp1= getTextFromElement(highTop);
        String temp2= getTextFromElement(highToday);
        return temp1.equals(temp2);
    }

    public int currentHour(){
        TimeZone timeZone = TimeZone.getTimeZone("America/Detroit");
        Calendar calendar = new GregorianCalendar();
        calendar.setTimeZone(timeZone);
        return calendar.get(Calendar.HOUR_OF_DAY);
    }

    public ArrayList<Integer> getTimeline(){
        ArrayList<Integer> hourList = new ArrayList<>();//This list is for storing new hour list
        hourList.add(currentHour()%12);//I added %12 because Calendar.HOUR_OF_DAY is returning 24h format
        List<WebElement> darkHours = getElements(timeline);
        for (WebElement timeList : darkHours) {
            String hour = timeList.getText().replaceAll("[^0-9]", "");
            if(hour.equals("")){continue;}//this line is here because first element of hour list is Now and it turned => "" at line 53
            hourList.add(Integer.parseInt(hour));
        }
        return hourList;
    }

    public boolean verifyTimeDifference(int hour){
        try{
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        for(int i=1;i<getTimeline().size();i++){
            boolean timeVerify = (getTimeline().get(i - 1)+hour)%12==(getTimeline().get(i)); //This line verifies -hour- difference
            if (!timeVerify){ return false;}
        }
        return true;
    }














//  try{
//        String temp1= getTextFromElement(lowTop);
//        String temp2= getTextFromElement(lowToday);
//        return temp1.equals(temp2);
//    }
//     catch (StaleElementReferenceException ignored){ }
//       return false;
}