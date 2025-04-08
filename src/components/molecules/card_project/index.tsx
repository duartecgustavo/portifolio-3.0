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
          <div className="item-zoom" style={{ backgroundColor: "#ffffff"}}>
            <div className="item-efeito">
              <h1
                style={{ fontWeight: 700, fontSize: "4rem", color: "#ffffff" }}
              >
                ABRIR
              </h1>
            </div>
            <div style={{ width: "100%", height: "100%" }}>
              <img
                src={icon}
                style={{
                  backgroundImage: `url(${icon})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </BoxProject>
      )}
    </>
  );
};

export default CardProject;
