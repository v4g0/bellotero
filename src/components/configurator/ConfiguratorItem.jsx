import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Slider from '@material-ui/lab/Slider';
import Fade from 'react-reveal/Fade';
import './Configurator.scss';
import $ from "jquery"

export default function ConfiguratorItem(props) {

  $("[type='number']").keypress(function (evt) {
    evt.preventDefault();
  });

  return (

    <Fade bottom>
      <div className="row w-100 justify-content-between my-4 my-lg-auto">
        <div className="col-md-12 col-lg-5  d-flex flex-column px-">
          <span className="bg-dark-blue text-white h1 p-2 text-left"> <b>{props.content.title}</b></span>
          <span className="text-left">{props.content.description}</span>
        </div>
        <div className="col-md-12 col-lg-6 mt-4 mt-lg-0">
          <div className="form-group row justify-content-between">
            <label className="col-5 col-md-4 text-left" htmlFor="customRange1"><b>Monthly ingredient spending</b></label>
            <TextField
              name="monthly"
              className="col-7 amount"
              variant="outlined"
              value={props.monthly}
              inputProps={{ step: 10, min: 10, max: 100 }}
              type="number"
              step="10"
              onChange={props.handleTextChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><AttachMoney /></InputAdornment>,
              }}
            />
            <Slider
              value={props.monthly}
              name="mtSlider"
              aria-labelledby="slider-icon"
              className="custom-range col-12 mt-5"
              min={10}
              max={100}
              step={10}
              onChange={props.handleMtSliderChange}
            />
          </div>
          <div className="form-group row justify-content-between">
            <label className="col-7 col-md-4 text-left" htmlFor="customRange1"><b>Full-time employees that process invoices</b></label>
            <TextField
              name="fullTime"
              className="col-3 amount"
              variant="outlined"
              value={props.fullTime}
              inputProps={{ min: 1, max: 10 }}
              type="number"
              onChange={props.handleTextChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <Slider
              value={props.fullTime}
              min={1}
              max={10}
              step={1}
              name="ft-slider"
              aria-labelledby="slider-icon"
              className="custom-range col-12 mt-5"
              onChange={props.handleFtSliderChange}
            />
            <div className="col-12 d-flex justify-content-between my-3">
              <div className="row w-100">
                <div className="col-12 col-md-6 d-flex flex-column">
                  <span className="text-dark-blue">
                    <span className="h2"><b>$</b></span>
                    <span className="display-4"><b>{props.eCostFoodSvng.toFixed(2)}</b></span>
                  </span>
                  <span>Estimated food cost savings</span>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column">
                  <span className="text-dark-blue">
                    <span className="h2"><b>$</b></span>
                    <span className="display-4"><b>{props.eYearSvng.toFixed(2)}</b></span>
                  </span>
                  <span>You estimated anual savings</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Fade>

  )
}
