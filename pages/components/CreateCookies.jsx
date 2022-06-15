import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class CreateCookie extends Form {
  state = {
    data: { location: "", minCostumer: "", maxCostumer: "", avgCookie: "" },
    errors: {},
  };

  schema = {
    location: Joi.string().required().label("Location"),
    minCostumer: Joi.number()
      .integer()
      .min(0)
      .required()
      .label("Min. Costumers"),
    maxCostumer: Joi.number()
      .integer()
      .min(0)
      .required()
      .label("Max. Costumers"),
    avgCookie: Joi.number().min(0).required().label("Avg. cookies"),
  };

  render() {
    return (
      <div className="w-2/6 mt-8 bg-green-700 rounded-xl font-display">
        <form onSubmit={this.props.handleForm}>
          <legend className="w-full p-4 text-2xl font-thin text-orange-300 bg-green-900 rounded-t-xl">
            Create cookie stand
          </legend>
          <fieldset className="flex flex-col p-4">
            {this.renderInput(
              "location",
              "Location",
              "text",
              "Enter Location",
              style.input
            )}
            {this.renderInput(
              "minCostumer",
              "Min. costumers per hour",
              "number",
              "Enter min customers/hour",
              style.input
            )}
            {this.renderInput(
              "maxCostumer",
              "Max. costumers per hour",
              "number",
              "Enter max customers/hour",
              style.input
            )}
            {this.renderInput(
              "avgCookie",
              "Avg. cookies",
              "number",
              "Enter avg. cookies",
              style.input
            )}
            {this.renderButton("Create", style.button)}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CreateCookie;

const style = {
  input: {
    _input: "p-1 border-none rounded-md ",
    _label: "pt-4 text-slate-200",
    _container: "flex flex-col",
  },
  button: "w-2/6 p-1 m-auto mt-4 bg-green-900 rounded text-slate-200",
};
