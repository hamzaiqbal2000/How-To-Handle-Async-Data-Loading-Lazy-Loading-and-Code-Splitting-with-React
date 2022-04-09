import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getRiverInformation } from "../../services/rivers";

const RiverInformation = ({ name }) => {
  const [riverInformation, setRiverInformation] = useState();

  useEffect(() => {
    getRiverInformation(name).then((data) => {
      setRiverInformation(data);
    });
  }, [name]);

  return (
    <div>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  );
};

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RiverInformation;
