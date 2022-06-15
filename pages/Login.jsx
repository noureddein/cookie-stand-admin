import Form from "./components/common/Form";
import Joi from "joi-browser";
import auth from "./components/services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data;
      await auth.login(username, password);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className="grid w-full h-[calc(100vh-8rem)] grid-flow-col grid-cols-4 grid-rows-4 px-8">
          <h1 className="self-end col-start-2 mb-4 text-3xl font-semibold font-display ">
            Login
          </h1>
          <form
            onSubmit={this.handleForm}
            className="col-start-2 col-end-4 row-start-2 row-end-4 p-8 bg-green-300 rounded-md shadow-md"
          >
            {this.renderInput(
              "username",
              "Username",
              "",
              "Enter you username",
              {
                _container: " flex flex-col m-4",
                _input: "p-2 rounded",
                _label: "mb-2",
              }
            )}
            {this.renderInput(
              "password",
              "Password",
              "password",
              "Enter your password",
              {
                _container: " flex flex-col m-4",
                _input: "p-2 rounded",
                _label: "mb-2",
              }
            )}
            <div className="flex flex-row justify-center m-4 ">
              {this.renderButton("Login", "bg-green-400 px-6 p-2 rounded")}
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default LoginForm;
