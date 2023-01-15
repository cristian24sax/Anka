import { useState } from "react";
import { CardsAbout } from "../../interfaces/home";

export interface OurAccordionProps {
  cards: CardsAbout[];
}

export const OurAccordion = ({ cards }: OurAccordionProps) => {
  const [active, setActive] = useState<number | null>(null);
  const handleCLick = (i: number) => {
    if (i === active) setActive(null);
    else {
      setActive(i);
    }
  };
  return (
    <div className="Accordion">
      <div className="Accordion-header">
        {cards.map(({ section, title, content }, index) => (
          <div key={index}>
            <div
              className={`Accordion-title cursor-pointer ${
                active==index ? "isActive" : ""
              }`}
              onClick={() => handleCLick(index)}
            >
              {section}
            </div>
            <div
              className={`Accordion-content ${
                active === index ? "isActive" : "noActive"
              }`}
            >
              <div className="Accordion-info">
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </div>
            {/* <div>
              <div
                className={`Accordion-title cursor-pointer ${
                  active == index ? "isActive" : ""
                }`}
                onClick={() => handleCLick(index)}
              >
                {section}

                <div
                  className={`Accordion-content ${
                    active === index ? "isActive" : "noActive"
                  }`}
                >
                  <div className="Accordion-info">
                    <h4>{title}</h4>
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
