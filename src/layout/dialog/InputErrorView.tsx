import React from "react";
import { Card } from "@blueprintjs/core";

import './InputErrorView.scss';

interface Props {
  i18n?: string;
}

export const InputErrorView: React.FC<Props> = ({ i18n = 'app.UNKNOWN_ERROR' }) => (
  <Card className="formGroupError">{i18n}</Card>
);
