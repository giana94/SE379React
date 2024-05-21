// export const Thumbnail = ({ description, image, width = 50 }) => {
//   return (
//     <div className="thumbnail">
//       <img alt={description} src={image} height={width} />
//     </div>
//   );
// };

// import React from "react";

interface Props {
  description: string;
  image: string;
  width: number;
}

export const Thumbnail = ({ description, image, width = 50 }: Props) => {
  return (
    <div className="thumbnail">
      <img alt={description} src={image} height={width} />
    </div>
  );
};