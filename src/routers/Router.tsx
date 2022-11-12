import { Likes } from "pages/likes";
import { Medias } from "pages/medias";
import { Tweets } from "pages/tweets";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const Router: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/tweets" element={<Tweets />} />
      <Route path="/media" element={<Medias />} />
      <Route path="/likes" element={<Likes />} />
      <Route path="*" element={<Navigate to="/tweets" replace />} />
    </Routes>
  );
};
