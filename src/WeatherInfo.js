import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>
              Humidity: {props.data.humidity}%, Wind: {props.data.wind}mph
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container">
            <WeatherIcon code={props.data.icon} size={72} />
          </div>

          <div className="float-right">
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
