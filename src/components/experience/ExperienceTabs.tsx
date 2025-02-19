import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import type { experience } from "./Experience";
import { isMobile } from "../utils/utils";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`description-panel-${index}`}
      aria-labelledby={`description-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `description-${index}`,
    "aria-controls": `description-panel-${index}`,
  };
}

const ExperienceTabs = (props: { experience: experience }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const experience = props.experience;

  return (
    <section>
      <Tabs value={value} onChange={handleChange} centered>
        {experience.descriptions.map((description, index) => (
          <Tab
            key={"description-tab-" + index}
            label={description.label}
            {...a11yProps(index)}
            // style={{ margin: "0 50px" }}
            wrapped
          />
        ))}
      </Tabs>
      {experience.descriptions.map((description, index) => (
        <CustomTabPanel
          value={value}
          index={index}
          key={"description-panel-" + index}
        >
          <h4>{description.title}</h4>
          {(isMobile() ? [description.texts[0]] : description.texts).map(
            (text, index) => (
              <p
                key={"description-panel-text-" + index}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )
          )}
        </CustomTabPanel>
      ))}
    </section>
  );
};

export default ExperienceTabs;
