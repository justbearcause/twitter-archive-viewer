import classNames from "classnames";
import { Checkbox } from "components/Checkbox";
import React from "react";
import styles from "./SettingsPanel.module.css";
import { Settings } from "./types";

type FilterPanelProps = {
  className?: string;
  onChange: (settings: Settings) => void;
  value: Settings;
};

export const SettingsPanel = ({
  className,
  value,
  onChange,
}: FilterPanelProps) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Checkbox
        onChange={(v) => onChange({ ...value, onlyWithMedia: v })}
        value={value.onlyWithMedia}
        label="Show only tweets with media"
      />
      <Checkbox
        onChange={(v) => onChange({ ...value, reverseOrder: v })}
        value={value.reverseOrder}
        label="Reverse feed order"
      />
    </div>
  );
};
