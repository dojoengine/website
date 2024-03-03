interface BaseSectionProps {
  icon?: React.ReactNode;
  title: string;
  subTitle: string;
  children?: React.ReactNode;
  color: string;
  textColor: string;
}

export const BaseSection = ({
  title,
  subTitle,
  children,
  color,
  textColor,
}: BaseSectionProps) => {
  return (
    <div
      className={`${color} h-full ${textColor} p-8 rounded-xl border-black border-2 flex justify-center cursor-pointer hover:${color}/20 transition-colors duration-300`}
    >
      <div className="text-center self-center">
        <div className="text-xl uppercase">{subTitle}</div>
        <h2>{title}</h2>

        {children}
      </div>
    </div>
  );
};
