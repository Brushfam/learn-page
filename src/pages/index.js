import React from 'react';
import Layout from '@theme/Layout';
import './index.css';
import {MediumBlog} from "../components/MediumBlog/MediumBlog";
import {ToolsSection} from "../components/ToolsSection/ToolsSection";
import {TutorialSection} from "../components/TutorialSection/TutorialSection";
import Link from "@docusaurus/Link";


export default function Home() {
    return (
        <div className={"learnMainWrapper"}>
            <Layout
                title={`Brushfam docs`}
                description="Description will go into a meta tag in <head />">

                <main className={"learnMainContainer"}>
                    <div className={"learnHeaderContainer"}>
                        <div className={"learnHeaderText"}>
                            <p className={"learnHeaderTitle"}>Learn page</p>
                            <p className={"learnHeaderDescription"}>
                                Here you can find the documentation for <a href={"https://brushfam.io/"}>Brushfam's</a> infrastructure products and other trusted and everyday-used tools from the <a href={"https://use.ink/"}>ink!</a> ecosystem.
                                This page also contains useful materials and articles that will accelerate your building with ink!
                            </p>
                        </div>
                    </div>
                    <ToolsSection/>
                    <TutorialSection/>
                    <MediumBlog />
                </main>
            </Layout>
        </div>
    );
}