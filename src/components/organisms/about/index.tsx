import Drawer from "components/molecules/drawer/index";
import { TitleSection } from "components/molecules/title_section";

const About = () => {
  return (
    <>
      <Drawer titleHeader="SOBRE">
        <TitleSection
          title="Minhas Qualificações"
          marginTop="0px"
          padding="0px"
          fontSize="1.8rem"
        />
        <TitleSection
          title="Um pouco de minha jornada em T.I."
          marginTop="0px"
          padding="0px"
          fontSize="1.4rem"
        />
        <TitleSection
          title="Premiações"
          marginTop="30px"
          padding="0px"
          fontSize="1.4rem"
        />
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-danger">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button bg-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Realtask Tecnologia - 2021
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div
                className="accordion-body fw-light"
                style={{ textAlign: "justify" }}
              >
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classNamees that
                we use to style each element. These classNamees control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the .accordion-body, though
                the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                ACT Digital - 2021, 2022
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div
                className="accordion-body fw-light"
                style={{ textAlign: "justify" }}
              >
                This is the second item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                .accordion-body, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

        <TitleSection
          title="Educação"
          marginTop="30px"
          padding="0px"
          fontSize="1.4rem"
        />
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-danger">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button bg-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Realtask Tecnologia - 2021
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div
                className="accordion-body fw-light"
                style={{ textAlign: "justify" }}
              >
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classNamees that
                we use to style each element. These classNamees control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the .accordion-body, though
                the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                ACT Digital - 2021, 2022
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div
                className="accordion-body fw-light"
                style={{ textAlign: "justify" }}
              >
                This is the second item's accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                .accordion-body, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <TitleSection
          title="Premiações"
          marginTop="30px"
          padding="0px"
          fontSize="1.4rem"
        />
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item bg-danger">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button bg-danger"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFive"
              >
                Realtask Tecnologia - 2021
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div
                className="accordion-body fw-light"
                style={{ textAlign: "justify" }}
              >
                This is the first item's accordion body. It is shown by default,
                until the collapse plugin adds the appropriate classNamees that
                we use to style each element. These classNamees control the
                overall appearance, as well as the showing and hiding via CSS
                transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the .accordion-body, though
                the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default About;
