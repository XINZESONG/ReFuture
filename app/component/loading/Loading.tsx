import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center  w-full min-h-[512px] md:my-20">
      <div
        className={`${styles.loader} ease-linear rounded-full border-8 border-t-8 border-gray-200 h-36 w-36`}
      ></div>
    </div>
  );
};

export default Loading;
