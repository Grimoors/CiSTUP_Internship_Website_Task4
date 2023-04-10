

function HomePage() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>

      {/* Logic for page design:
        This page should include two questions with radio button options. The questions and options to 
        be shown are listed below:
        Q1: What is your most frequently used means of travel from your home to work location?
        Options for Q1 (to be shown as radio button): 
        • Bus
        • Metro
        • Own Two-wheeler
        • Own Car
        • Walk / Bicycle
        • Auto
        • App based ride hailing cab services including Ola / Uber
        Q2: What is the total distance between your home and workplace?
        Options for Q2 (to be shown as radio button): 
        • < 5 km
        • 5 - 10 km 
        • 10- 15 km 
        • 15- 20 km 
        • 20- 25 km
        • > 25 km */}

      {/* Page Title  - Respondent Travel Profile  */}
      <div className="pageTitle">
        <h1>Respondent Travel Profile</h1> 
      </div >
      {/* Q1: What is your most frequently used means of travel from your home to work location? */}
          
          <div className="question Container">
            
            <p>Q1: What is your most frequently used means of travel from your home to work location?</p>

            <div className="jumbotron option row">
                <div className="col-sm-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="bus" name="meansOfTravel" value="bus" />
                    <label className="form-check-label" htmlFor="bus">Bus</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="metro" name="meansOfTravel" value="metro" />
                    <label className="form-check-label" htmlFor="metro">Metro</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="ownTwoWheeler" name="meansOfTravel" value="ownTwoWheeler" />
                    <label className="form-check-label" htmlFor="ownTwoWheeler">Own Two-wheeler</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="ownCar" name="meansOfTravel" value="ownCar" />
                    <label className="form-check-label" htmlFor="ownCar">Own Car</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="walkBicycle" name="meansOfTravel" value="walkBicycle" />
                    <label className="form-check-label" htmlFor="walkBicycle">Walk / Bicycle</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="auto" name="meansOfTravel" value="auto" />
                    <label className="form-check-label" htmlFor="auto">Auto</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="appBasedCabService" name="meansOfTravel" value="appBasedCabService" />
                    <label className="form-check-label" htmlFor="appBasedCabService">App based ride hailing cab services including Ola / Uber</label>
                  </div>
                  
                </div>
              </div>

          </div> 

      {/* Q2: What is the total distance between your home and workplace? */}
      <div className="question Container">
            <p>Q2: What is the total distance between your home and workplace?</p>

            <div className="jumbotron options row">
              <div className="option col-sm-6">
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="lessThan5Km" name="distanceBetweenHomeAndWorkplace" value="lessThan5Km" />
                  <label className="form-check-label" htmlFor="lessThan5Km"> &lt; 5 km</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="5To10Km" name="distanceBetweenHomeAndWorkplace" value="5To10Km" />
                  <label className="form-check-label" htmlFor="5To10Km"> 5 - 10 km</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="10To15Km" name="distanceBetweenHomeAndWorkplace" value="10To15Km" />
                  <label className="form-check-label" htmlFor="10To15Km">10- 15 km</label>
                </div>
              </div>
              <div className="option col-sm-6">
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="15To20Km" name="distanceBetweenHomeAndWorkplace" value="15To20Km" />
                  <label className="form-check-label" htmlFor="15To20Km">15- 20 km</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="20To25Km" name="distanceBetweenHomeAndWorkplace" value="20To25Km" />
                  <label className="form-check-label" htmlFor="20To25Km">20- 25 km</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" id="moreThan25Km" name="distanceBetweenHomeAndWorkplace" value="moreThan25Km" />
                  <label className="form-check-label" htmlFor="moreThan25Km"> &gt; 25 km</label>
                </div>
              </div>
            </div>

          </div>

      {/* Submit button */}
      <div className=" submitButton">
          <button type="button" class="btn btn-primary btn-block">Submit</button>
      </div>
        
    </div>
  );
}

export default HomePage;
