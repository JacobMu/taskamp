import React from "react";
import { shallow } from "enzyme";
import { AppRouter } from "../AppRouter";
import { HashRouter } from "react-router-dom";
import { INITIAL_APP_ROUTES } from "../AppService";

describe("<AppRouter />", () => {
  it("renders HashRouter", () => {
    const router = shallow(<AppRouter />);

    expect(router.find(HashRouter)).toHaveLength(1);
    expect(router.find(HashRouter).props()).toHaveProperty(
      "hashType",
      "noslash"
    );
    expect(router.find(HashRouter).props()).toHaveProperty("basename", "/");
  });

  it("redirects to login route", () => {
    const router = shallow(<AppRouter />);

    expect(router.find("Redirect").prop("to")).toEqual({ pathname: "/login" });
  });

  it("handles login route", () => {
    const router = shallow(<AppRouter />);

    const route = router.findWhere(
      (element) => element.prop("path") === INITIAL_APP_ROUTES.LOGIN
    );

    expect(route).toHaveLength(1);
    expect(route.find("LoginPageContainer")).toHaveLength(1);
  });

  it("handles overview route", () => {
    const router = shallow(<AppRouter />);

    const route = router.findWhere(
      (element) => element.prop("path") === INITIAL_APP_ROUTES.OVERVIEW
    );

    expect(route).toHaveLength(1);
    expect(route.find("DashboardContainer")).toHaveLength(1);
  });
});
