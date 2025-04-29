import React from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Edit = () => {
    const [params] = useSearchParams();
    console.log(params.get("url"))
    return (
      <div>
        <div>
          <img src={params.get("url")} width="250px" />
        </div>
        <Button >Add Text</Button>
      </div>
    );
};

export default Edit;