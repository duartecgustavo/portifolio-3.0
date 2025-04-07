import { BoxProject } from "./styles";

interface ICarProject {
  bpg?: any;
  height: string;
  isDefault?: boolean;
  name?: string;
  icon?: any;
  background?: string;
}

const CardProject = ({
  bpg,
  height,
  isDefault = true,
  name,
  icon,
  background,
}: ICarProject) => {
  return (
    <>
      {isDefault ? (
        <BoxProject height={height} id="container">
          <div className="item-zoom">
            <div className="item-efeito" />
            <img src={bpg} />
          </div>
        </BoxProject>
      ) : (
        <BoxProject
          height={height}
          id="container"
          style={{ backgroundColor: background }}
        >
          <div className="item-zoom">
            <div className="item-efeito" />
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                alignItems: "flex-start",
                overflow: "hidden",
                paddingInline: 30,
              }}
            >
              <img
                src={icon}
                style={{ height: 100, width: 100, objectFit: "contain" }}
              />
              <h1 style={{ fontWeight: 700, fontSize: "4rem" }}>{name}</h1>
            </div>
          </div>
        </BoxProject>
      )}
    </>
  );
};

export default CardProject;
