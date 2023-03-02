import { use, useEffect, useState } from "react";
import { Img } from "../../interfaces";
import { CardsAbout } from "../../interfaces/home";

export interface OurTabsProps {
  cards: CardsAbout[];
}

export const OurTabs = ({ cards }: OurTabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="Tab">
      <div className="Tab-container">
        {cards.map(({ section }, index) => (
          <div
            className={`Tab-header ${activeTab===index&&'active'}`}
            key={index}
            // onClick={() => setActiveTab(index)}
          >
            <h3 className="Tab-title ">{section}</h3>
            <span className="Tab-span"> </span>
          </div>
        ))}
      </div>
      <div className="Tab-content">
        <h2>{cards[activeTab].title}</h2>
        <p>{cards[activeTab].content}</p>
      </div>
    </div>
  );
};
