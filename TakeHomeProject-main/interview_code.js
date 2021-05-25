/**
 * jQuery and underscore are already included for you if you want to use them for the project.
 * 
 * Also included are three JSON files that define three constants: routes, stops, and routeStops.
 * Those consts have all the data you'll need for this project. You can find the source files in the data directory.
 */

$(function(){
	/**
	 * If you haven't used jQuery before, the code in here runs when the page first loads.
	 *
	 * As a test, let's add some HTML to the document. We'll make a simple dropdown list.
	 * Just call the `InsertText` function with the id of the element you want to insert HTML inside of and the content to add.
	 */
	InsertText("mainContent", "Pick a route: <select id='route'><option></option><option> 4 - Natural Bridge</option><option>8 - Bates-Morganford</option><option>10 - Gravois-Lindell</option><option>11 - Chippewa</option><option>19 - St Louis Ave</option><option>20 - South Broadway</option><option>30 - Arsenal</option><option>31 - Chouteau</option><option>32 - ML King</option><option>40 - North Broadway</option><option>41 - Lee</option><option>73 - Carondelet</option><option>74 - Florissant</option><option>78 - Larimore</option><option>80 - Park-Shaw</option><option>94 - Page</option><option>96 - Market Street Shuttle</option><option>97 - Delmar</option><option>99 - Downtown Trolley</option><option>40X - I-55 Express</option><option>58X - Twin Oaks Express</option><option>174X - North Express</option><option>410X - Eureka Express</option>");


    
	/**
	 * Also, as a test, let's take a look at some of the data from the JSON files. This will log it to your browser's
	 * Javascript console. You can see the output by opening up the dev tools in your browser.
	 */
	console.log({ routes });
    
    let button = document.getElementById("route");
    
    button.onchange = function () {  
         if(this.value == ""){
            InsertText("secondContent", "<p></p>");
        }
        if(this.value == "4 - Natural Bridge"){
            InsertText("secondContent", "<p>stop 1: NORTH HANLEY TRANSIT CENTER</p><p>stop 2: 4123 NORTH HANLEY SB</p><p>stop 3: NORTH HANLEY @ NATURAL BRIDGE SB</p><p>stop 4: 8324 NATURAL BRIDGE EB</p><p>stop 5: NATURAL BRIDGE @ CLEARVIEW EB</p><p>stop 6: NATURAL BRIDGE @ UNIVERSITY EB</p><p>stop 7: NEAR SIDE NATURAL BRIDGE @ NORMANDY MIDDLE SCHOOL EB</p><p>stop 8: UMSL SOUTH TRANSIT CENTER</p><p>stop 9:NATURAL BRIDGE @ MARIETTA EB</p><p>stop 10: NATURAL BRIDGE @ ST. ANNS EB</p><p>stop 11: NATURAL BRIDGE @ ST. MARYS EB</p><p>stop 12:7272 NATURAL BRIDGE EB</p><p>stop 13: NATURAL BRIDGE @ LUCAS-HUNT EB</p><p>stop 14: 7060 NATURAL BRIDGE EB </p><p>stop 15: NATURAL BRIDGE @ COLONIAL EB</p><p>stop 16: NATURAL BRIDGE @ MAYWOOD EB</p><p>stop 17: NATURAL BRIDGE @ LAWLER EB</p><p>stop 18:NATURAL BRIDGE @ RIDGEDALE EB </p><p>stop 19: NATURAL BRIDGE @ PINE GROVE EB</p><p>stop 20: NATURAL BRIDGE @ KIENLEN EB</p><p>stop 21: NATURAL BRIDGE @ DARBY EB</p><p>stop 22: NATURAL BRIDGE @ GOODFELLOW EB</p><p>stop 23: NATURAL BRIDGE @ CLARA EB</p><p>stop 24: NATURAL BRIDGE @ BELT EB</p><p>stop 25:NATURAL BRIDGE @ ABNER PLACE EB</p><p>stop 26: NATURAL BRIDGE @ UNION EB</p><p>stop 27: NATURAL BRIDGE @ GERALDINE EB </p><p>stop 28: NATURAL BRIDGE @ KINGSHIGHWAY EB </p><p>stop 29: NATURAL BRIDGE @ KINGSHIGHWAY EB </p><p>stop 30:  NATURAL BRIDGE @ EUCLID EB </p><p>stop 31: NATURAL BRIDGE @ SHREVE EB </p><p>stop 32: NATURAL BRIDGE @ MARCUS EB </p><p>stop 33: FAR SIDE NATURAL BRIDGE @ CORA EB </p><p>stop 34: NATURAL BRIDGE @ TAYLOR EB </p><p>stop 35: NATURAL BRIDGE @ NEWSTEAD EB</p><p>stop 36: NATURAL BRIDGE @ CLARENCE EB</p><p>stop 37: NATURAL BRIDGE @ LAMBDIN EB</p><p>stop 38: NATURAL BRIDGE @ FAIR EB</p><p>stop 39: NATURAL BRIDGE @ CLAY EB</p><p>stop 40: NATURAL BRIDGE @ WARNE EB</p><p>stop 41: NATURAL BRIDGE @ VANDEVENTER EB</p><p>stop 42: NATURAL BRIDGE @ PRAIRIE EB</p><p>stop 43: NATURAL BRIDGE @ SPRING EB</p><p>stop 44: NATURAL BRIDGE @ GRAND EB</p><p>stop 45: NATURAL BRIDGE @ GARRISON EB</p><p>stop 46: NATURAL BRIDGE @ FARRAR EB</p><p>stop 47: NATURAL BRIDGE @ PARNELL EB</p><p>stop 48: PARNELL @ HEBERT SB</p><p>stop 49: PARNELL @ ST. LOUIS SB</p><p>stop 50:PARNELL @ WARREN SB</p><p>stop 51: PARNELL @ NORTH MARKET SB</p><p>stop 52:JEFFERSON @ HOWARD SB</p><p>stop 53: JEFFERSON @ CASS SB</p><p>stop 54: JEFFERSON @ DAYTON SB</p><p>stop 55: JEFFERSON @ STODDARD SB</p><p>stop 56: JEFFERSON @ DR ML KING SB</p><p>stop 57: JEFFERSON @ DELMAR EB</p><p>stop 58:JEFFERSON @ WASHINGTON SB</p><p>stop 59: JEFFERSON @ PINE SB</p><p>stop 60: MARKET @ 23RD STREET EB</p><p>stop 61: MARKET @ 22ND STREET EB</p><p>stop 62:MARKET @ 20TH STREET EB</p><p>stop 63: MARKET @ 18TH STREET EB</p><p>stop 64: MARKET @ 16TH STREET EB</p><p>stop 65: NEAR SIDE BROADWAY @ OLIVE SB</p>");
            }
        
            if(this.value == "8 - Bates-Morganford"){
              
            InsertText("secondContent", "<p>stop 1:CIVIC CENTER TRANSIT CENTER</p><p>stop 2: CHOUTEAU @ 14TH STREET EB</p><p>stop 3:CHOUTEAU @ TUCKER EB</p><p>stop 4: TUCKER @ HICKORY SB</p><p>stop 5: TUCKER @ PARK SB</p>");
            }
        
            if(this.value == "10 - Gravois-Lindell"){
              
            InsertText("secondContent", "<p>stop 1:HAMPTON-GRAVOIS TRANSIT CENTER</p><p>stop 2:7220 GRAVOIS EB</p><p>stop 3:GRAVOIS @ NAGEL EB</p><p>stop 4: GRAVOIS @ LOUGHBROUGH EB</p><p>stop 5: GRAVOIS @ KINGSHIGHWAY EB</p>");
            }
        
            if(this.value == "11 - Chippewa"){
              
            InsertText("secondContent", "<p>stop 1: SHREWSBURY-LANSDOWNE I-44 TRANSIT CENTER</p><p>stop 2: LANSDOWNE @ WABASH EB</p><p>stop 3: LANSDOWNE @ MCCAUSLAND EB</p><p>stop 4: LANSDOWNE @ JAMIESON EB</p><p>stop 5: LANSDOWNE @ CHIPPEWA EB</p>");
            }
        
            if(this.value == "19 - St Louis Ave"){
              
            InsertText("secondContent", "<p>stop 1: ROCK ROAD TRANSIT CENTER</p><p>stop 2: ST. CHARLES ROCK ROAD @ LULU EB</p><p>stop 3: LUCAS-HUNT @ ROCK ROAD NB</p><p>stop 4: LUCAS-HUNT @ NORMANDY HIGH SCHOOL NB</p><p>stop 5: LUCAS-HUNT @ NORTH MARKET NB</p>");
            }
        
            if(this.value == "20 - South Broadway"){
              
            InsertText("secondContent", "<p>stop 1: SOUTH COUNTY CENTER WAY @ DILLARDS WB</p><p>stop 2: FORDER @ LEMAY FERRY SB</p><p>stop 3: FORDER @ FORDER PLACE SB</p><p>stop 4: FORDER @ KINGBOLT SB</p><p>stop 5: FORDER @ NAZARETH HILLS SB</p>");
            }
        
            if(this.value == "30 - Arsenal"){
              
            InsertText("secondContent", "<p>stop 1: SHREWSBURY-LANSDOWNE I-44 TRANSIT CENTER</p><p>stop 2: CHIPPEWA @ MCCAUSLAND EB</p><p>stop 3: CHIPPEWA @ JAMIESON EB</p>");
            }
        
        
           
            if(this.value == "31 - Chouteau"){
              
            InsertText("secondContent", "<p>stop 1: MAPLEWOOD-MANCHESTER TRANSIT CENTER</p><p>stop 2: NEAR SIDE MANCHESTER @ HANLEY WB</p><p>stop 3: MANCHESTER @ PORTER WB</p>");
            }
        
            if(this.value == "32 - ML King"){
              
            InsertText("secondContent", "<p>stop 1: CIVIC CENTER TRANSIT CENTER</p><p>stop 2: 14TH STREET @ CLARK NB</p><p>stop 3: TUCKER @ PINE NB</p>");
            }
        
            if(this.value == "40 - North Broadway"){
              
            InsertText("secondContent", "<p>stop 1: CIVIC CENTER TRANSIT CENTER</p><p>stop 2: 14TH STREET @ CLARK NB</p><p>stop 3: MARKET @ TUCKER EB</p>");
            }
        
            if(this.value == "41 - Lee"){
              
            InsertText("secondContent", "<p>stop 1: RIVERVIEW-HALL TRANSIT CENTER</p><p>stop 2: 8937 RIVERVIEW WB</p><p>stop 3: RIVERVIEW @ BROADWAY WB</p>");
            }
        
            if(this.value == "73 - Carondelet"){
              
            InsertText("secondContent", "<p>stop 1: CIVIC CENTER TRANSIT CENTER</p><p>stop 2:CHOUTEAU @ 14TH STREET WB </p><p>stop 3: TRUMAN PARKWAY @ CHOUTEAU SB</p>");
            }
        
        
            if(this.value == "74 - Florissant"){
              
            InsertText("secondContent", "<p>stop 1: NORTH COUNTY TRANSIT CENTER</p><p>stop 2:PERSHALL @ WEST FLORISSANT WB</p><p>stop 3: WEST FLORISSANT @ SOMERSET TERRACE SB</p>");
            }
        
            if(this.value == "78 - Larimore"){
              
            InsertText("secondContent", "<p>stop 1: NORTH COUNTY TRANSIT CENTER</p><p>stop 2: PERSHALL @ TRASK EB</p><p>stop 3: PERSHALL @ CENTENE CALL CENTER EB</p>");
            }
        
            if(this.value == "80 - Park-Shaw"){
              
            InsertText("secondContent", "<p>stop 1: CENTRAL WEST END TRANSIT CENTER</p><p>stop 2: DR ML KING @ HODIAMONT EB</p><p>stop 3: CHOUTEAU @ TAYLOR EB</p>");
            }
        
            if(this.value == "94 - Page"){
              
            InsertText("secondContent", "<p>stop 1: LACKLAND @ ALTOM COURT EB</p><p>stop 2: 2021 CONGRESSIONAL SB</p><p>stop 3: 11923 BORMAN WB</p>");
            }
        
            if(this.value == "96 - Market Street Shuttle"){
              
            InsertText("secondContent", "<p>stop 1: CIVIC CENTER TRANSIT CENTER</p><p>stop 2: 14TH STREET @ CLARK NB</p><p>stop 3: MARKET @ 14TH STREET WB</p>");
            }
        
            if(this.value == "97 - Delmar"){
              
            InsertText("secondContent", "<p>stop 1: CLAYTON TRANSIT CENTER</p><p>stop 2: CENTRAL @ CARONDELET NB</p><p>stop 3: MARYLAND @ FORSYTH WB</p>");
            }
        
            if(this.value == "99 - Downtown Trolley"){
              
            InsertText("secondContent", "<p>stop 1: CIVIC CENTER TRANSIT CENTER</p><p>stop 2: SPRUCE @ 14TH STREET EB</p><p>stop 3: SPRUCE @ 13TH STREET EB</p>");
            }
            
            if(this.value == "40X - I-55 Express"){
              
            InsertText("secondContent", "<p>stop 1: MERAMEC BOTTOM @ HEIMOS INDUSTRIAL PARK EB</p><p>stop 2: MERAMEC BOTTOM @ STLCC SOUTH COUNTY EB</p><p>stop 3: LEMAY FERRY @ PARK RIDE LOT NB</p>");
            }
        
            if(this.value == "58X - Twin Oaks Express"){
              
            InsertText("secondContent", "<p>stop 1:8TH STREET @ LOCUST SB </p><p>stop 2: 8TH STREET @ PINE METROLINK SB</p><p>stop 3: TUCKER @ SPRUCE SB</p>");
            }
            
            if(this.value == "174X - North Express"){
              
            InsertText("secondContent", "<p>stop 1: NORTH COUNTY TRANSIT CENTER </p><p>stop 2: PERSHALL @ TRASK EB</p><p>stop 3: PERSHALL @ CENTENE CALL CENTER EB</p>");
            }
        
        
            if(this.value == "410X - Eureka Express"){
              
            InsertText("secondContent", "<p>stop 1: MODOT LOT LOOP @ 4TH STREET EB</p><p>stop 2: VALLEY PARK PARK RIDE LOT</p><p>stop 3: PGRAND @ MCREE NB</p>");
            }
       
    };
});

 



//This is a helper function we're giving you to insert any HTML you want inside an element with the specified id
function InsertText(Id, Text){
	var Element = document.getElementById(Id);
	Element.innerHTML = Text;
};