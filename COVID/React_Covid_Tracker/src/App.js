import "./App.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useEffect } from "react";
import Infobox from "./Infobox";
import Map from "./Map";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Table from "./Table";
import { sortData } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";
import { prettyPrintStat } from "./util";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    const getInfo = async () => {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setCountryInfo(data);
        });
    };
    getInfo();
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          // let sortedData = sortData(data);
          const sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const onChangeCountry = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
        console.log(mapCenter);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>DEL's COVID-19 TRACKER APP</h1>
          {/* <FontAwesomeIcon icon="fa-solid fa-virus-covid" /> */}
          <FormControl className="app__dropdown">
            <Select
              varient="outlined"
              value={country}
              onChange={onChangeCountry}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* Looping through country names */}
              {countries.map((country) => (
                <MenuItem value={country.value} key={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox
            active={casesType === "cases"}
            onClick={e => setCasesType('cases')}
            title="Covid-19 Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
          />
          <Infobox
          active={casesType === "recovered"}
          onClick={e => setCasesType('recovered')}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
          />
          <Infobox
          active={casesType === "deaths"}
          onClick={e => setCasesType('deaths')}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
          />
        </div>

        {/* Map */}
        {/* <Map casesType={casesType} countries={mapCountries} center={mapCenter} zoom={mapZoom} /> */}
        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className="app__right">
        <CardContent>
          <h3>Country wise cases</h3>
          {/* Table */}
          <Table countries={tableData} />
                <br />
          <h3>Stats</h3>
          {/* Graph */}
          <LineGraph />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
