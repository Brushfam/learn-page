import React from 'react';
import "./TutorialSection.css"
import {tutorialsData} from "../../../data/tutorials";
import Link from "@docusaurus/Link";

export const TutorialSection = () => {
    return(
        <div className={"tutorialContainer"}>
            <div className={"sectionTitle"}>
                <img src={'/img/tutorials.svg'} style={{marginRight: 14}}/>
                <p>TUTORIALS</p>
            </div>
            <div className={"tutorialBlockContainer"}>
                {
                    tutorialsData &&
                    tutorialsData.map((item, i) => {
                        return(
                                <Link key={i} href={item.to}>
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