export const ReasonSubscribe = ({src, info1, info2}) => {
  return (
    <div className="gap-3 flex flex-col justify-center items-center">
      <img src={src} />
      <div>
        <p>{info1} </p>
        <p className="text-center">{info2}</p>
      </div>
    </div>
  );
};
