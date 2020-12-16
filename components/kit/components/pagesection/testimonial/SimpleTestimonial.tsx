import React from "react";
import Avatar from "../../elements/avatars/Avatar";

interface Props {
  backgroundColor: string;
  textColor: string;
  nameColor: string;
  descColor?: string;
  withShadow?: boolean;
}

const SimpleTestimonial = (props: Props) => {
  return (
    <div
      className={`${props.backgroundColor} w-72 ${
        props.withShadow ? "withShadow" : ""
      } mx-auto rounded-xl p-4`}
    >
      <p className={`${props.textColor} text-justify`}>
        <span className="font-bold text-indigo-500 text-lg">“</span>To get
        social media testimonials like these, keep your customers engaged with
        your social media accounts by posting regularly yourself
        <span className="font-bold text-indigo-500 text-lg">”</span>
      </p>
      <div className="flex items-center mt-4">
        <Avatar size="small" />
        <div className="flex flex-col ml-2 justify-between">
          <span className={`font-semibold ${props.nameColor} text-sm`}>
            Jean Miguel
          </span>
          <span className={`${props.descColor} text-xs flex items-center`}>
            User of FastUI{" "}
            <img src="/icons/rocket.svg" className="ml-2 h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SimpleTestimonial;