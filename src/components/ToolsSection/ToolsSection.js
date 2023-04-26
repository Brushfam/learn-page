import React from 'react';
import "./ToolsSection.css"
import {toolsData} from "../../../data/tools";
import Link from "@docusaurus/Link";

export const ToolsSection = () => {
    return(
        <div className={"toolsContainer"}>
            <p className={"sectionTitle"}>
                TOOLS
            </p>
            <div className={"toolsBlockContainer"}>
                {
                    toolsData &&
                    toolsData.map((item, i) => {
                        return(
                            <div className={"toolBlockWrapper"} key={i.toString()}>
                                <Link href={item.to}>
                                    <div className={"toolBlock"}>
                                        {item.title}
                                        <p className={"blockDescription"}>
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}