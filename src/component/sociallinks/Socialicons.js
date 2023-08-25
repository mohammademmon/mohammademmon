import Sociallinks from "@/data/Sociallinks";
import Link from "next/link";
import React from "react";

const Socialicons = () => {
  return (
    <div className="social_icons d-flex justify-content-end align-items-center gap-4">
      {Sociallinks?.map((data, i) => (
        <Link className="items" target="_blank" href={data.url}>
          {data.icons}
        </Link>
      ))}
    </div>
  );
};

export default Socialicons;
