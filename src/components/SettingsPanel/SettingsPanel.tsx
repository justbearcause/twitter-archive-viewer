import classNames from "classnames";
import { Toggle } from "components/Toggle";
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
      <Toggle
        className={classNames(styles.toggle, styles.settingContainer)}
        onChange={(v) => onChange({ ...value, onlyWithMedia: v })}
        value={value.onlyWithMedia}
        label="Show only tweets with media"
      />
      <Toggle
        className={classNames(styles.toggle, styles.settingContainer)}
        onChange={(v) => onChange({ ...value, hideRetweets: v })}
        value={value.hideRetweets}
        label="Hide Retweets"
      />
      <Toggle
        className={classNames(styles.toggle, styles.settingContainer)}
        onChange={(v) => onChange({ ...value, reverseOrder: v })}
        value={value.reverseOrder}
        label="Reverse feed order"
      />
    </div>
  );
};
