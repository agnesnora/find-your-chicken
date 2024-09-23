"use client";
import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      {error.toString()}
    </div>
  );
};

export default ErrorPage;
