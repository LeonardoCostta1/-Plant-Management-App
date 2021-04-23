import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppRoutes from "./stack.routes";

const Routes = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default Routes