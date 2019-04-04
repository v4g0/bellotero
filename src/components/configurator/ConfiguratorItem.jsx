import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Slider from '@material-ui/lab/Slider';
import Fade from 'react-reveal/Fade';
import './Configurator.scss';

export default function ConfiguratorItem(props) {
  return (
    <Fade top>
      <div className="row align-items-center justify-content-between">
        <div className="col-5 d-flex flex-column">
          <span className="bg-dark-blue text-white h1 p-2 text-left"> <b>{props.content.title}</b></span>
          <span className="text-left">{props.content.description}</span>
        </div>
        <div className="col-7 col-lg-6">
          <div className="form-group row justify-content-between">
            <label className="col-4 text-left" htmlFor="customRange1"><b>Monthly ingredient spending</b></label>
            <TextField
              name="mtText"
              className="col-6 amount"
              variant="outlined"
              value={props.mtText}
              onChange={props.handleTextChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"><AttachMoney /></InputAdornment>,
              }}
            />
            <Slider
              value={props.mtSlider}
              name="mtSlider"
              aria-labelledby="slider-icon"
              className="custom-range col-12 mt-5"
              onChange={props.handleMtSliderChange}
            />
          </div>
          <div class="form-group row justify-content-between">
            <label className="col-4 text-left" htmlFor="customRange1"><b>Full-time employees that process invoices</b></label>
            <TextField
              name="ftText"
              className="col-3 amount"
              variant="outlined"
              value={props.ftText}
              onChange={props.handleTextChange}
              InputProps={{
                startAdornment: <InputAdornment position="start"></InputAdornment>,
              }}
            />
            <Slider
              value={props.ftSlider}
              name="ft-slider"
              aria-labelledby="slider-icon"
              className="custom-range col-12 mt-5"
              onChange={props.handleFtSliderChange}
            />
            <div className="col-12 d-flex justify-content-between mt-3">
              <span className="text-dark-blue">
                <span className="display-4"><b>$</b></span>
                <span className="display-3"><b>{props.eCostFoodSvng.toFixed(3)}</b></span>
              </span>
              <span className="text-dark-blue">
                <span className="display-4"><b>$</b></span>
                <span className="display-3"><b>{props.eYearSvng.toFixed(3)}</b></span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </Fade>
  )
}
