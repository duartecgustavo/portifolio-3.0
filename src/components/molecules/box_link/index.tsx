import React from "react";

interface IBoxLink {
  icon: any;
  path: string;
}

const BoxLink = ({ icon, path }: IBoxLink) => {
  return (
    <>
      <a
        href={path}
        target="_blank"
        rel="noreferrer"
        className="bg-transparent"
        style={{ border: "none", cursor: "pointer" }}
      >
        {icon}
      </a>
    </>
  );
};

export default BoxLink;
