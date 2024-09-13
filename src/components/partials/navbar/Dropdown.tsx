import Link from "next/link";
import React from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";

import { Accordion } from "@/components/accordion";

interface Props {
  item: { title: string; date?: string; description?: string; path: string }[];
  children?: React.ReactNode;
}

export default function Dropdown(props: Props) {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    if (visible) {
      setVisible(false);
      return;
    }
    setVisible(true);
  };
  return (
    <>
      <button
        onClick={toggleVisible}
        className={`cursor-pointer items-center gap-2 md:flex hidden`}
      >
        <p>Acara</p>
        <FaChevronDown
          className={`transition duration-200 ${visible ? "rotate-180" : ""}`}
          size={10}
        />
      </button>
      <div
        className={`dropdown md:block hidden ${visible ? "dropdown__active" : ""}`}
      >
        {props.item.map((item, index) => (
          <React.Fragment key={index}>
            <div className="dropdown__item flex items-start justify-between">
              <div key={index}>
                <h6 className="dropdown__title">{item.title}</h6>
                <p className="dropdown__description font-normal text-sm">
                  {item.description || item.date}
                </p>
              </div>
              <Link
                className="mt-1"
                href={item.path}
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowRight size={13} />
              </Link>
            </div>
            {index !== props.item.length - 1 && (
              <div className="dropdown__separator"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mobile md:hidden block">
        <Accordion title="Acara">
          {props.item.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-start justify-between mb-3">
                <div key={index}>
                  <h6>{item.title}</h6>
                  <p className="font-normal text-sm">
                    {item.description || item.date}
                  </p>
                </div>
                <Link
                  className="mt-1"
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaArrowRight size={13} />
                </Link>
              </div>
              {index !== props.item.length - 1 && (
                <div className="dropdown__separator"></div>
              )}
            </React.Fragment>
          ))}
        </Accordion>
      </div>
      {visible && (
        <button onClick={toggleVisible} className="backdrop"></button>
      )}
    </>
  );
}
