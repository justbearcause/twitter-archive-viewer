import { Likes } from "components/Likes";
import { Tweets } from "components/Tweets";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/tweets" element={<Tweets />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="*" element={<Navigate to="/tweets" replace />} />
    </Routes>
  );
};
