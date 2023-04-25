import React from 'react';
import "./TutorialSection.css"
import {tutorialsData} from "../../../data/tutorials";
import Link from "@docusaurus/Link";

export const TutorialSection = () => {
    return(
        <div className={"tutorialContainer"}>
            <p className={"sectionTitle"}>
                TUTORIALS
            </p>
            <div className={"tutorialBlockContainer"}>
                {
                    tutorialsData &&
                    tutorialsData.map((item, i) => {
                        return(
                                <Link href={item.to}>
                                    <div className={"tutorialBlock"}>
                                        <p className={"tutorialTitle"}>
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}